import express from "express";
import socketio from "socket.io";
import http from "http";

import router from "./routes";

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have a new connection");

  socket.on("messageFromClient", (msg) => {
    io.emit("messageFromServer", msg);
  });

  socket.on("disconnect", () => {
    socket.removeAllListeners();
  });
});

app.use(router);

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
