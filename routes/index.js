import Router from "koa-router";
import send from "koa-send";

const router = new Router({
  prefix: "/",
  // routerPath: "/", // 会彻底覆盖掉 koa-static 提供的静态文件服务
});

// 此处监听的路由（http://localhost:8081），会和 koa-static 提供的静态文件服务（http://localhost:8081）冲突
// 可以用 koa-send 指定返回目录和默认"入口文件"。此处返回了一个不同的结果
router.get("/", async (ctx, next) => {
  const filePath = await send(ctx, "/public/hello", { root: global.processPath, index: "index.html" });
  console.log(filePath); // E:\workspace\github\koa-usage-basic\public\hello/index.html
});
// 所有访问跟路由的方法都重定向到 router.get("/"...;
router.all("/", async (ctx, next) => {
  ctx.redirect("/");
});

export default router;
