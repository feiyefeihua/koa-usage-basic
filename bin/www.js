import app from "../app.js";
import { createServer } from "http";

/**
 * Get port from environment and store in Koa.
 */
const portNum = "8081";
var port = normalizePort(process.env.PORT || portNum);

/**
 * Create HTTP server.
 */
var httpServer = createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port);
httpServer.on("error", onError);
httpServer.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port_ = parseInt(val, 10);

  if (isNaN(port_)) {
    // named pipe
    return val;
  }

  if (port_ >= 0) {
    // port number
    return port_;
  }

  return false;
}

/**
 * Event listener for HTTP httpServer "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP httpServer "listening" event.
 */

function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
