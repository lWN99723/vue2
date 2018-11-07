const express=require("express");
var router=express.Router();
const pool=require("../pool");
router.get("/list",(req,res)=>{
    var sql=`select id,img_url,title from imagelist`
    //判断查询结果是否出现错误,如果出现直接抛出
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        //console.log(result);//数组
        //将结果返回客户端
        //#返回数据   1正确 -1 -2...失败
        res.send({code:1,msg:result});
    })
})
module.exports=router;