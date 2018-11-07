//user模块
const express = require('express');
var router = express.Router();
//引入连接池
var pool = require('../pool.js');

router.post('/login',(req,res)=>{
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    var sql = `select * from user where uname=? and upwd=?`;
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        err&&console.log(err);
        res.writeHeader(200,{"Access-Control-Allow-Origin":"*","Content-Type":"text/plain;charset=utf-8"});
        if(result.length>0){
            //req.session.uid=result[0].uid;
            res.write(JSON.stringify({
                code:1,uname:result[0].uname,avatar:result[0].avatar,
                email:result[0].email,phone:result[0].phone,
                user_name:result[0].user_name,gender:result[0].gender
            }));
        }else{
            res.write(JSON.stringify({code:0,mag:"用户名或密码错误!"}));
        }
        res.end();
    })
});


// router.get("/islogin",(req,res)=>{
//     console.log('islogin-uid',req.session.uid);
//     if(req.session.uid==null)
//         res.send({code:0});
//     else{
//         var sql="select * from user where uid=?";
//         pool.query(sql,[req.session.uid],(err,result)=>{
//             res.send({code:1,uname:result[0].uname,avatar:result[0].avatar});
//         })
//     }
// })
router.get("/signout",(req,res)=>{
    delete req.session.uid;
    res.send();
})



//导出
module.exports = router;





