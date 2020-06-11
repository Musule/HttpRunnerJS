#!/usr/bin/env node
var WebSocketClient = require('websocket').client;
var chalk = require('chalk')
var client = new WebSocketClient();

describe('websocket client', () => {

    it("websocket connect", () => {
        client.on('connect', function (connection) {
            // websocket 客户端连接成功后
            console.log(chalk.blue.bold('WebSocket Client Connected'));
            // websocket 客户端发生错误时
            connection.on('error', function (error) {
                console.log(chalk.red.bold("Connection Error: " + error.toString()));
            });
            // websocket 客户端连接关闭后
            connection.on('close', function () {
                console.log(chalk.blue.bold('echo-protocol Connection Closed'));
            });
            // websocket 客户端连接关闭后
            connection.on('message', function (message) {
                if (message.type === 'utf8') {
                    console.log(chalk.blue.bold("Received: '" + message.utf8Data + "'"));
                }
            });

            function sendNumber() {
                if (connection.connected) {
                    var number = Math.round(Math.random() * 0xFFFFFF);
                    connection.sendUTF(number.toString());
                    setTimeout(sendNumber, 1000);
                }
            }
            sendNumber();
        });
        // 客户端发起websocket请求
        client.connect('ws://localhost:8080/', 'echo-protocol');
    })

    it('websocket connectFailed', () => {
        client.on('connectFailed', function (error) {
            console.log(chalk.red.bold('Connect Error: ' + error.toString()));
        });
    });
});