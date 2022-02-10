# About koa-usage-basic

koa 搭配一些中间件的基础使用记录

# 说明

> 如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^\_^

## 技术栈

koa + ES6/7
koa-static 提供静态文件服务
koa-router 路由，处理请求
koa-bodyparser 解析 request 的 body 数据；Node.js 提供的原始 request 对象和 koa 提供的 request 对象都没提供处理
koa2-cors 跨域相关
koa-server-http-proxy 代理

## 项目运行

```
git clone https://github.com/feiyefeihua/koa-usage-basic  

cd koa-usage-basic  

npm install 或 yarn(推荐)

npm start

访问: http://localhost:8081

```

# 功能列表

- [x] 访问静态页面 -- 完成
- [x] 跨域/代理 -- 完成

# License

[MIT](https://github.com/feiyefeihua/koa-usage-basic/blob/main/LICENSE)
