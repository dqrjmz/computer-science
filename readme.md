#http: 
0.http请求：（head body）
1.主机名称+端口号：明确网络上唯一一台服务器中唯一的网络服务
2.服务端寻找匹配处理模块的过程称之为路由【根据请求资源路径】
3.路由

#创建http服务器
1.创建一个http服务：用来监听指定端口，接收客户端请求，进行解析后，寻找指定程序模块处理，再返回
2.后端开发分为两步：网络服务+http协议解析（复杂+模式固定，所以借用别人框架） 业务逻辑的开发
3.在后端的三个重要概念：路由，请求对象，响应对象

#路由分模块

#nodejs网络编程
使用nodejs创建web服务器
使用express创建web服务器
使用nodejs创建tcp服务器：创建客户端与tcp服务进行通信（网络编程）



# 使用mongoose模块
##介绍下mongoose模块
    1.model 和Schema
    2.nodejs中的对象与mongoDB中的存储单位文档进行对应
1.连接数据库
    >url

2.对数据进行操作

一个web应用的组成部分：
GUI:客户端（浏览器） http客户端
Server:服务器 接收请求 处理逻辑 链接数据库 返回响应
Database：数据库


express框架：
    express配置与路由



 客户端js与服务器端js
 共同点：都是使用js语法来作为编程的基础；
 不同点：由于目的不同，所以在编程过程中使用的api就会不同；
 客户端：因为需要有安全限制，不能让所打开的程序对机器的系统进行操作，所以需要对客户端的编程语言进行安全方面的限制；
 服务器端：因为它本身必须要操作系统级别的文件，服务等，所以必须有这个安全权限

 node.js
 1.采用的google的v8解析器来进行js代码的解析执行，快；
 2.采用的是事件驱动，异步I/O编程模型

基于nodejs的web开发工具：hexo , nodeppt

项目的最佳实践：就是使用某项技术所采用的某种项目目录搭建方式，以及使用方式


## javascipt
- ecmascript
- dom
- bom

## nodejs
- ecmascript
- http
- os
- file


### npm
```
Router

swig:模板引擎

mysql:连接mysql数据库的包

jugglingdb:数据库与实体的映射，orm框架

```


### 项目分模块
```
前端
后端
api

app.use('/admin',require('./router/admin'));
app.use('/api',require('./router/api'));
app.use('/',require('./router/main'));
```