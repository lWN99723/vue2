const express=require("express");
var router=express.Router();
const pool=require("../pool");
router.get("/list",(req,res)=>{
	var uid=req.query.uid;
    var sql="select * from cart where uid=?";
	pool.query(sql,[uid],(err,result)=>{
	   if(err)throw err;
	   res.send({code:1,msg:result});
	})
})
module.exports=router;	  