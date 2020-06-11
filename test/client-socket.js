var fs = require('fs');
const io = require('socket.io-client');

describe('socket client', () => {
    it("socket emit", () => {
        var socket = io.connect('http://127.0.0.1:3000');
        socket.emit('message',"你好"); // emit an event to the socket
        socket.emit('broadcast'); // emit an event to all connected sockets
        socket.on('reply', () => { /* … */ }); // listen to the event

    })
});