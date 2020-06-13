var fs = require('fs');
var chalk = require('chalk')
describe('socket client', () => {
    it("socket emit", () => {
        var socket = require('socket.io-client')('http://127.0.0.1:4004/');
        // 发生连接时
        socket.on('connect', () => {
            console.log(chalk.blue.bold("【Client端3】Connect Sever Success"))
        });
        // 客户端触发服务端event事件
        socket.emit('Client2Server', '【Client端3】发送给服务端的数据：你好服务器11111', () => {// 触发事件
            console.log(chalk.blue.bold("【Client端3】客户端把数据发给服务端"));
        });
        // 客户端触发服务端event事件
        socket.emit('Client2Server', '【Client端3】发送给服务端的数据：你好服务器22222', () => {// 触发事件
            console.log(chalk.blue.bold("【Client端3】客户端把数据发给服务端"));
        });
        // 绑定event事件
        socket.on('Server2Client', (data) => {// 绑定事件
            console.log(chalk.blue.bold(`【Client端3】服务端把处理后的数据，传递给客户端，内容是：${data}`));
        });
        // 客户端触发广播事件（服务端boradcast）
        socket.emit('broadcast','【Client端3】触发了这个广播事件')
        // 发生断开连接时
        socket.on('disconnect', () => {
            console.log(chalk.blue.bold(`【Client端3】disconnect`));
        });
       
    
    })

});