const express=require("express");
var router=express.Router();
const pool=require("../pool");
//分页查询商品列表
router.get("/list",(req,res)=>{
	var pno=req.query.pno;
	var pageSize=req.query.pageSize;  //页大小
	//1.1为页码设置默认值
	if (!pno){
		pno=1;
	}
	if(!pageSize){
	    pageSize=6;
	}
    var sql="select id,title,price_old,price_new,lname,stock,img_url from recom limit ?,?";
	var offset=parseInt((pno-1)*pageSize);
	pageSize=parseInt(pageSize);
	pool.query(sql,[offset,pageSize],(err,result)=>{
	   if(err)throw err;
	   res.send({code:1,msg:result});
	})
})
//依据指定商品编号查询上平详细信息
router.get("/details",(req,res)=>{
	var id=req.query.id;
    var sql="select id,title,price_old,price_new,lname,stock,img_url from recom where id=?";
    pool.query(sql,[id],(err,result)=>{
	   if (err)throw err;
	   res.send({code:1,msg:result})
	})
})
module.exports=router;