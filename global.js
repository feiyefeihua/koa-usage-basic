import url from "url";
import path from "path";
import { cwd } from "process";
// 当前文件绝对路径 import.meta.url
global = {
  ...global,
  // 调用文件内传入 import.meta.url , 获取调用文件的绝对路径
  get__filename: (_url) => {
    return url.fileURLToPath(_url);
  },
  get__dirname: (_url) => {
    return path.dirname(url.fileURLToPath(_url));
  },
  // Node.js 进程的当前工作目录
  processPath: cwd(),
};

export default global;
