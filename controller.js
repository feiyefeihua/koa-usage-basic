import staticFilesServe from "./services/staticFiles.js";
import router from "./routes/index.js";

export default class Controller {
  constructor() {}
  static app = null;
  static init(app) {
    this.app = app;
    this.app.use(router.routes());
    this.serveStaticFiles();
  }

  static serveStaticFiles() {
    this.app.use(staticFilesServe);
  }
}
