# 使用Whistle解决跨域问题
## SwitchOmega配置 不代理的地址列表
```js
    <-loopback>
```
## Whistle配置
```js
//当请求访问http://127.0.0.1:8083/user时，给它的返回头加上Access-Control-Allow-Origin:*，所以我们的客户端可以访问
http://127.0.0.1:8083/user resCors://*
```
## Enjoy😄