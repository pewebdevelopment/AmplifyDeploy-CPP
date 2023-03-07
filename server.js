const express = require("express");

const IO = require("socket.io"); // calling the var IO is a convention

const app = express();

app.use();

const server = app.listen(8000);

const io = IO(server);

// "connection" event is a built in event
io.on("connection", (socket) => {
  console.log("New client connected");

  // socket code goes here

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
