const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const server = app.listen(666);
const io = require('socket.io')(server); // creates the socket and assigns it to listen on port assigned to 'server'
var counter = 0;

io.on('connection', function (socket) { //2
    socket.emit('greeting', {msg: 'Greetings, -server' }); //3
    socket.on('thankyou', function (data){ //7
       console.log(data.msg); // 8 (note: this log will be on your server's terminal
    });
});