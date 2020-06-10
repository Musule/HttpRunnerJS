# HttpRunnerJS

>基于nodejs 接口单元测试 框架

## 支持http、https、socket、websocket协议 restful接口

安装
```
npm install
```

单元测试脚本
>test/http.js

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

运行脚本
```
mocha
```


## 技术栈

>axios、mock、chalk、lowdb、socket.IO、websocket

