import _ from "./global.js";
import Koa from "koa";
import Controller from "./controller.js";

const app = new Koa();
Controller.init(app);

export default app;
