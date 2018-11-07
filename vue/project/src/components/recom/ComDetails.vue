<template>
    <div>
        <!--商品购买区域-->
        <div class="header">
            <div class="top">
                <button @click="goRecom()" class="mui-icon-extra mui-icon-extra-arrowleftcricle"></button>
                赛欧玉龙办公家具
                <button></button>
            </div>
        </div>
        <div class="com_details">
            <div class="mui-card">
                <img v-lazy="comDetails.img_url">
                <div class="mui-card-header">{{comDetails.lname}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>
                            市场价: <del>¥{{comDetails.price_old}}</del>
                            销售价: <span class="now_price">¥{{comDetails.price_new}}</span>
                        </p>
                        <p>购买数量:</p>
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input class="mui-input-numbox" type="number"  value="1"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                        <p style="margin-top:10px">
                            <mt-button type="primary">立即购买</mt-button>
                            <mt-button type="danger" @click="addCart">加入购物车</mt-button>
                        </p>
                    </div>
                </div>
            </div>
            <!--商品参数区域-->
            <div class="mui-card content">
                <p>-------------<span>   {{comDetails.title}}   </span>-------------</p>
                <img v-lazy="comDetails.img_url">
            </div>
            <div class="mui-card content">
                <p>-------------<span>   {{comDetails.lname}}   </span>-------------</p>
                <img v-lazy="comDetails.img_url">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){return {
            id:this.$route.params.id,
            comDetails:{},
        }
        },
        created(){
            this.getComDetails();
        },
        methods:{
            goRecom(){
                this.$router.push({path:"/recom"});
            },
            addCart(){
                //调用vuex实例对象操作共享数据方法
                this.$store.commit("increment");
                //查询购物车中共享数据值
                console.log(this.$store.state.count);
            },
            getComDetails(){
                var id=this.id;
                this.$http.get("recomlist/details?id="+id).then(result=>{
                    if (result.body.code==1){
                        this.comDetails=result.body.msg[0];
                    }
                })
            },
        }
    }
</script>
<style>
    .com_details{
        background-color: #eee;
        overflow: hidden;
    }
    .com_details img{
      width:100%;
      height:240px;
    }
    .com_details .now_price{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }
    .content{
        text-align: center;
    }
    .content p{
        margin:10px;
        color:#333;
        font-size:20px;
    }
    .content span{
        font-size: 18px;
        font-weight: bold;
    }
</style>