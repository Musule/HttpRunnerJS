var fs = require('fs');

describe('socket client', () => {
    it("socket emit", () => {
        var socket = require('socket.io-client')('http://127.0.0.1:4004/');
        // 发生连接时
        socket.on('connect', ()=>{
                console.log("connect sever success")
        });
        // 客户端触发服务端event事件
        socket.emit('Client2Server', '这是发送给服务端的数据',()=>{// 触发事件
           console.log("客户端把数据发给服务端");
        });
         // 绑定event事件
        socket.on('Server2Client', (data)=>{// 绑定事件
            console.log(`服务端把处理后的数据，传递给客户端，内容是：${data}`);
        });
        // 发生连接错误时
        socket.on('disconnect', ()=>{
            console.log(`disconnect`);
        });

    })
});