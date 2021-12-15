var express = require('express')
const http = require("http");
var app = express();
const server = http.createServer(app);

const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
  });


socketIo.on("connection", (socket) => {
  console.log("New client connected" + socket.id); 

  socket.emit("getId", socket.id);

  socket.on("ClientSendData", function(data) {
    socketIo.sockets.emit("serverSendData", data);
  })

  socket.on("ClientSendDataRemove", function(data) {
    socketIo.sockets.emit("serverSendDataRemove", data);
  })

  socket.on("Timeout", function(data) {
    console.log('time out')
    console.log(data);
    socketIo.sockets.emit("ServerSendDataTimeOut", data);
  })

  socket.on("disconnect", () => {
    console.log(`Client disconnected`);
  });
});

server.listen(8000, () => {
    console.log('Server đang chay tren cong 8000');
});