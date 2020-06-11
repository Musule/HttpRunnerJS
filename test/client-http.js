var axios = require('axios');// 客户端http请求库
var qs = require('Qs'); // axios解析formdata数据格式库
var chalk = require('chalk'); // 控制台输出字体颜色库
const low = require('lowdb'); // json文件读写库
const FileSync = require('lowdb/adapters/FileSync');// json文件读写库
const adapter = new FileSync('config.json');// 读取配置文件内容
const db = low(adapter); // 定义文件内容对象
var MockAdapter = require("axios-mock-adapter");//mock服务
var Mock = new MockAdapter(axios);// 定义mock对象

beforeEach(function () {
    // addContext(this, 'some context')
  });

before("所有脚本执行前执行", () => {
    it("获取token", () => {
        console.log(
            chalk.green.bold(
                "这边可以做登录请求获取token"
            )
        )
    })

})

describe("http/https application/json", () => {
    it("GET  The first format", () => {
        // Mocking a GET request
        Mock.onGet("/users", { params: { searchText: "Jack" } }).reply(200, {
            users: [{ id: 1, name: "Jack LEE" }],
        });
        // send a GET request
        axios
            .get("/users", { params: { searchText: "Jack" } })
            .then(function (response) {
                console.log(chalk.green.bold('response status'), chalk.blue.bold(response.status));// 状态码
                // console.log(chalk.green.bold('response header'), chalk.blue.bold(JSON.stringify(response.headers)));// 获取响应头
                console.log(chalk.green.bold('response body'), chalk.blue.bold(JSON.stringify(response.data)));// 获取响应体
            });
    })

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
            console.log(chalk.green.bold('response status'), chalk.blue.bold(response.status));// 状态码
            // console.log(chalk.green.bold('response header'), chalk.blue.bold(JSON.stringify(response.headers)));// 获取响应头
            console.log(chalk.green.bold('response body'), chalk.blue.bold(JSON.stringify(response.data)));// 获取响应体
        }).catch(err => {
            // console.error(err)
        })
    })


    it("POST", () => {
        // Mocking a POST request
        Mock.onPost('api/auth/login', { username: 'admin', password: '123456' }).reply(200, { status: 200, msg: "success" })
        /**
         * @description send a  POST request
         * @param url 请求地址
         * @param method 请求方法
         * @param headers 请求头
         * @param data 请求体
         * @method then 回调函数 处理返回结果
         * @method catch 回调函数 捕获异常
         */
        axios({
            "url": "api/auth/login",
            "method": "post",
            "headers": { "Content-Type": "application/json" },
            "data": { username: 'admin', password: '123456' }
        })
            .then(response => {
                console.log(chalk.green.bold('response status'), chalk.blue.bold(response.status));// 状态码
                // console.log(chalk.green.bold('response header'), chalk.blue.bold(JSON.stringify(response.headers)));// 获取响应头
                console.log(chalk.green.bold('response body'), chalk.blue.bold(JSON.stringify(response.data)));// 获取响应体
            }).catch(err => {
                // console.error(err)
            })

    })

})
describe("http/https multipart/form-data", () => {

    it.skip("POST", () => {
        // Mocking a POST request
        Mock.onPost('api/auth/login', { username: 'admin', password: '123456' }).reply(200, { status: 200, msg: "success" })
        /**
         * @description send a  POST request
         * @param url 请求地址
         * @param method 请求方法
         * @param headers 请求头
         * @param data 请求体
         * @method then 回调函数 处理返回结果
         * @method catch 回调函数 捕获异常
         */
        let data = new FormData();
        data.append('username', 'admin');
        data.append('password', '123456');
        axios.post('api/auth/login', data)
            .then(response => {
                console.log(chalk.green.bold('response status'), chalk.blue.bold(response.status));// 状态码
                // console.log(chalk.green.bold('response header'), chalk.blue.bold(JSON.stringify(response.headers)));// 获取响应头
                console.log(chalk.green.bold('response body'), chalk.blue.bold(JSON.stringify(response.data)));// 获取响应体
            })

    })

})


describe("http/https application/x-www-form-urlencoded", () => {
    it.skip("POST", () => {
        /**
         * @param url 请求地址
         * @param method 请求方法
         * @param headers 请求头
         * @method then 回调函数 处理返回结果
         * @method catch 回调函数 捕获异常
         */
        var url = db.get('url02').value() + db.get('path02').value();
        let headers = db.get('header02').value();
        let data = db.get('body02').value();
        axios({
            "url": url,
            "method": "post",
            "headers": headers,
            "data": qs.stringify({
                data
            })
        })
            .then(response => {
                console.log('response', response);
            })
    })


    it.skip("GET", () => {
        // 参数引用外部文件config.json
        var url = db.get('url01').value() + db.get('path01').value(); // 获取配置文件 config.json中 请求地址
        var headers = db.get('header01').value();// 获取配置文件 config.json中 请求头
        /**
         * @param url 请求地址
         * @param method 请求方法
         * @param headers 请求头
         * @method then 回调函数 处理返回结果
         * @method catch 回调函数 捕获异常
         */
        axios({
            "url": url,
            "method": "get",
            "headers": headers
        }).then(response => {
            console.log(chalk.green.bold('response status'), chalk.blue.bold(response.status));// 状态码
            console.log(chalk.green.bold('response header'), chalk.blue.bold(JSON.stringify(response.headers)));// 获取响应头
            console.log(chalk.green.bold('response body'), chalk.blue.bold(JSON.stringify(response.data)));// 获取响应体
        }).catch(err => {
            // console.error(err)
        })
    })
})








