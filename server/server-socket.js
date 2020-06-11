var fs = require('fs');
var chalk=require('chalk');
const server = require('http').createServer();
const io = require('socket.io')(server);
const port=4004;
const url = "127.0.0.1"
io.on('connection', client => {

  // 服务端绑定event事件
  client.on('Client2Server', data => { 
    console.log(chalk.green.bold(`【Server端】接收到数据内容：${data}`));
  });

  // 服务端绑定event事件
  client.on('disconnect', () => { 
    console.log(chalk.green.red(`已断开连接`));
  });

  // 连接发生错误时处理
  client.on('connect_error', (error) => {
    console.log(chalk.green.bold(`【Server端】发生错误： ${error}`));
  });
  // 服务端触发客户端event事件
  client.emit('Server2Client','我是服务端的数据，处理完数据我传给了客户端')
});

  // 服务端监听地址和端口
server.listen(port, url);

console.log(chalk.yellow.bold(`Server running at http://${url}:${port}`));