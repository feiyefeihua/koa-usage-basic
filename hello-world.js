// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// koa 把很多 async 函数组成一个处理链，每个 async 函数都可以做一些自己的事情，然后用 await next() 来调用下一个async函数
// 这些 async 函数通常被称为 middleware 中间件，所有 middleware 组合起来，既是拥有所有中间件功能的完整应用
// 调用 app.use() 的顺序决定了 middleware 的顺序

// 打印处理时间
const responseTime = async (ctx, next) => {
  const start = new Date().getTime(); // 记录访问开始时间
  console.log(`Request start at ${start}`);
  await next(); // 调用下一个 middleware requestLog
  // 处理链上的所有中间件执行完毕过后执行
  const end = new Date().getTime();
  console.log(`Request end at ${end}, total: ${end - start}ms \n`); // 总共 耗费时间
};
app.use(responseTime);

// 输出 访问日志
const requestLog = async (ctx, next) => {
  console.log(`request method: ${ctx.request.method},url: ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个 middleware helloKoa8080
};
app.use(requestLog);
// 返回 hello koa 的 async 函数（中间件）
const helloKoa8080 = async (ctx, next) => {
  console.log("helloKoa8080 middleware");
  // 等同于 ctx.request.*
  //   console.log(ctx.href); // http://localhost:8081/favicon.ico
  //   console.log(ctx.origin); // http://localhost:8081
  //   console.log(ctx.path); // favicon.ico
  //   console.log(ctx.url); // favicon.ico
  // 调用下一个 middleware helloKoa8081
  if (ctx.origin.endsWith(8081)) {
    await next();
    return;
  }
  // 结束。(如果一个 middleware 没有调用 await next() ,后续的 middleware 将不再执行)
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, this is port 8080</h1>";
};
// 返回 hello koa 的 async 函数（中间件）
const helloKoa8081 = async (ctx, next) => {
  console.log("helloKoa8081 middleware");
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, this is port 8081</h1>";
};

// 对于任何请求，app将调用该异步函数处理请求：
app.use(helloKoa8080);
app.use(helloKoa8081);

// 在端口 8080 监听:
app.listen(8080);
console.log("app started at port 8080...");

// 可以将同一个应用程序同时作为 HTTP 和 HTTPS 或多个地址
// app.listen 等同于 http.createServer(app.callback()).listen
const http = require("http");
// 在端口 8081 监听:
http.createServer(app.callback()).listen(8081);
console.log("app started at port 8081...");
