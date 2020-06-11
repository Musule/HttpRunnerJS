var fs = require('fs');
var chalk = require('chalk')
describe('socket client', () => {
    it("socket emit", () => {
        var socket = require('socket.io-client')('http://127.0.0.1:4004/');
        // 发生连接时
        socket.on('connect', () => {
            console.log(chalk.blue.bold("【Client端】Connect Sever Success"))
        });
        // 客户端触发服务端event事件
        socket.emit('Client2Server', '这是发送给服务端的数据111111', () => {// 触发事件
            console.log(chalk.blue.bold("【Client端】客户端把数据发给服务端"));
        });
        // 客户端触发服务端event事件
        socket.emit('Client2Server', '这是发送给服务端的数据222222', () => {// 触发事件
            console.log(chalk.blue.bold("【Client端】客户端把数据发给服务端"));
        });
        // 绑定event事件
        socket.on('Server2Client', (data) => {// 绑定事件
            console.log(chalk.blue.bold(`【Client端】服务端把处理后的数据，传递给客户端，内容是：${data}`));
        });
        // 发生断开连接时
        socket.on('disconnect', () => {
            console.log(chalk.blue.bold(`disconnect`));
        });
    })

});