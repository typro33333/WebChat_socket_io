const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

io.on('connect', (socket) => {
  console.log('connected')
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));