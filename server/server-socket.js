var fs = require('fs');
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ 
    console.log("服务端，接收到数据：",data)
    });
  client.on('disconnect', () => { /* … */
    console.log("断开连接");
});
});
server.listen(4004,"127.0.0.1");
console.log('Server running at http://127.0.0.1:4004/');