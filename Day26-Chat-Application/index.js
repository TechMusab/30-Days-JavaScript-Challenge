const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const server = http.createServer(app);
const port = 4000;
app.use(express.static(path.join(__dirname, 'public')));
const users={};

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const io= require('socket.io')(server);
io.on('connection', (socket) => {
console.log(socket.id);
socket.on("new-user-joined",(username)=>{
    users[socket.id] = username;
    socket.broadcast.emit('user-joined', username);
})
socket.on("disconnect",()=>{
    socket.broadcast.emit('left', user=users[socket.id]);
    delete users[socket.id];
})
socket.on("message", message =>{
    socket.broadcast.emit('message',message);
});
});
server.listen(port, () => {
    console.log("Server started on port " + port);
});
