# HttpRunnerJS

>基于nodejs 接口单元测试 框架

## 支持http、https、socket、websocket协议 restful接口

## 一、安装
```
npm install
```

### 客户端脚本示例

http.js

```JavaScript
it("GET The second format", () => {
        // Mocking a GET request
        Mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
            users: [{ id: 1, name: "John Smith" }],
        });
        // send a GET request
        axios({
            "url": "/users",
            "method": "get",
            "params": { searchText: "John" }
        }).then(response => {
            console.log(response.data);// 获取响应体
        }).catch(err => {
           console.error(err)
        })
    })
```


websocket.js

```JavaScript
```


socket.js
```JavaScript
```



## 二、运行脚本

### 生成测试报告

html、json
---
```
npm run mochawesome
```
![img](static/image/html.png)
xml
---
```
npm run junit
```
![img](static/image/junit.png)

allure
---
```
npm run allure
```
![img](static/image/allure.png)

progress
---
```
npm run progress
```
![img](static/image/progress.png)

## mocha 单元测试框架

>mocha是JavaScript 单元测试框架，相当于Java Junit、testNG

|参数名|功能|
|--|--|
|--recursive|执行除test直接目录下所有test文件|
|--reporter|输出报告类型，类型：mochawesome、dot、spec、tap、mocha-junit-reporter、|
|--watch|监控模式/常用于调试脚本|
|--timeout|超时设置毫秒 例如：--timeout 6000000|
|--bail|失败后中断|
|--growl|将测试结果在桌面显示|
|--grep|用于搜索测试用例的名称（即it块的第一个参数），然后只执行匹配的测试用例|

## 技术栈

>axios、mock、chalk、lowdb、socket.IO、websocket

