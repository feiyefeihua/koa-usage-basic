import serve from "koa-static";
import path from "path";
const currentUrl = import.meta.url;
const __dirname = global.get__dirname(currentUrl);
const parentDirname = path.resolve(__dirname, "..");

export default serve(path.join(parentDirname, "/public"));
