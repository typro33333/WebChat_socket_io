const { addUser, removeUser, getUser, getUsersInkey } = require('./core/f')

const express = require('express');
const app = express();
const http = require('http');

/****** IMPORTANT *********/
const cors = require('cors');
app.use(cors({origin:'*'}));

const server = http.createServer(app);

/****** IMPORTANT *********/
// Config socket io //
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"],
  }
});

io.on('connection', (socket) => {

  socket.on('join',({name,key},callback)=>{
    console.log('User: '+name+' have join with key: '+key)
    const {error,user} = addUser({id:socket.id,name,key})
    if(error) return callback(error);
    socket.join(user.key);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to key ${user.key}.`});
    socket.broadcast.to(user.key).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.key).emit('keyData', { key: user.key, users: getUsersInkey(user.key) });

    callback();

  })
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInkey(user.room)});
    }
  })
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});