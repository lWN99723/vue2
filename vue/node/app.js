const express=require("express");
const bodyParser=require('body-parser')
const session = require("express-session");

//引入路由模块
const routerImage=require("./router/imagelist");
const routerRecom=require("./router/recomlist");
const routerCart=require("./router/cartlist");
const routerUsers=require("./router/users");


var  app=express();

//加载跨域模块
const cors=require("cors");
//配置跨域模块,允许那个地址跨域访问
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080","http://192.168.1.104:8080"],
	credentials:true
}))
// app.all('*',function(req,res,next) {
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Content-Type","text/plain;charset=utf-8;")
//     res.header('Access-Control-Allow-Headers','X-Requested-With')
//     res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
//     res.header('X-Powered-By','4.16.3')
//     next()
// })
//绑定监听端口
app.listen(3000);
//使用中间件
app.use(bodyParser.urlencoded({extended:false}));
//指定静态目录
app.use(express.static(__dirname+'/public'));
app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false,
    saveUninitialized:true
}));//将服务器的session，放在req.session中
//将路由模块挂载入口文件
app.use("/imagelist",routerImage);
app.use("/recomlist",routerRecom);
app.use('/cartlist',routerCart);
app.use("/users",routerUsers);