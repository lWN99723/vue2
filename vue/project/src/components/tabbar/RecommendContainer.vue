<template>
   <div>
      <div class="header">
            <div class="top">
                <button class="mui-icon mui-icon-location-filled"></button>
                促销活动
                <button class="mui-icon mui-icon-gear-filled" v-if="uname" @click="goinstall()"></button>
                <button v-else></button>
            </div>
       </div>
       <div class="recom-list">
            <div @click="goDetail(item.id)" class="recom-item" v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url">
                <h1 class="title">{{item.title}}</h1>
                <div class="info">
                    <div class="price">
                    <span class="old">原价:¥{{item.price_old.toFixed(2)}}</span><br>
                    <span class="new">活动价:¥{{item.price_new.toFixed(2)}}</span>
                    </div>
                    <div class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock}}件</span>
                    </div>
                </div>
            </div>
            <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
      </div>
   </div>
</template>
<script>
    export default{
        data(){
            return{
                name:'',
                list:[],
                pno:1
            }
        },
        created(){
            this.getRecomList();
        },
        methods: {
            goDetail(id){
                this.$router.push({name:"recomdetail",params:{id}});
            },
            getMore(){
                //加载更多
                //1.当前页加1
                this.pno++;
                //2调用查询
                this.getRecomList();
            },
            getRecomList(){
                this.uname=sessionStorage.getItem("uname");
                this.$http.get(`recomlist/list?pno=`+this.pno).then(result=>{
                    if(result.body.code==1){   //返回成功数据
                        this.list=this.list.concat(result.body.msg);
                    }
                });
            },
            goinstall(){
                this.$router.push({path:"/install"})
            }
        },
        props:["id"]
    }
</script>
<style>
   /*商品列表最外层元素*/
   .recom-list{
      display:flex;
      flex-wrap: wrap;
      padding:7px;
      justify-content: space-between;
   }
   /*商品列表每个元素项*/
   .recom-list .recom-item{
      width:49%; /*每个商品项宽度*/
      border:1px solid #ccc;
      box-shadow: 0 0 8px #ccc; /*阴影*/
      margin:4px 0;
      padding:2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 230px;
   }
   .recom-list .recom-item img{
      width:100%;
      height:120px;
   }
   .recom-list .recom-item h1{
      font-size: 14px;
   }
   .recom-list .recom-item .info{
      background:#eee;
   }
   .recom-list .recom-item .info .old{
      text-decoration: line-through;
      font-size: 11px;
      margin-left: 10px;
   }
   .recom-list .recom-item .info .new{
      color: red;
      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
   }
   .recom-list .recom-item .info .sell{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
   }
</style>