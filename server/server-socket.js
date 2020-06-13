var fs = require('fs');
var chalk = require('chalk');
const server = require('http').createServer();
const io = require('socket.io')(server);
const port = 4004;
const url = "127.0.0.1"
io.on('connection', client => {

  // 服务端绑定event事件
  client.on('Client2Server', data => {
    console.log(chalk.blue.bold(`【Server端】接收到数据内容：${data}`));
  });

  // 服务端绑定event事件
  client.on('disconnect', () => {
    console.log(chalk.blue.red(`已断开连接`));
  });

  // 连接发生错误时处理
  client.on('connect_error', (error) => {
    console.log(chalk.blue.bold(`【Server端】发生错误： ${error}`));
  });
  // 服务端触发客户端event事件
  client.emit('Server2Client', '我是服务端的数据，处理完数据我传给了客户端');
  // 广播时间
  client.broadcast('broadevent', ' 这是一条广播消息，除了发送者其他人都可以接收到');
});

// 服务端监听地址和端口
server.listen(port, url);

console.log(chalk.yellow.bold(`Server running at http://${url}:${port}`));