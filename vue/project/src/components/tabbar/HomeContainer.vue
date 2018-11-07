<template>
  <div  class="app">
        <div class="header">
            <div class="top">
                <button class="mui-icon mui-icon-location-filled"></button>
                赛欧玉龙办公家具
                <button class="mui-icon mui-icon-gear-filled" v-if="uname" @click="goinstall()"></button>
                <button v-else></button>
            </div>
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list"><img :src="item.img_url"></mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/news">
                    <img src="../../../public/img/youqi.png">
                    <div class="mui-media-body">油漆系列</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                <img src="../../../public/img/shfa.png">
                <div class="mui-media-body">沙发椅子</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                <img src="../../../public/img/canzhuo.png"/>
                <div class="mui-media-body">餐厅系列</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../../public/img/banshi.png">
                    <div class="mui-media-body">板式系列</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../../public/img/tiepi.png">
                    <div class="mui-media-body">铁皮系列</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="../../../public/img/jiaoxue.png"/>
                <div class="mui-media-body">教学系列</div>
            </a>
            </li>
        </ul>
  </div>
</template>
<script>
    //1.加载Toast组件
    import {Toast} from "mint-ui";
    //2.创建vue实例
    export default{       
        name:"HomeContainer",
       data(){return {
           list:[],
           uname:''
       }
       },
       created(){
           this.getImageList();
       },
       methods:{
           getImageList(){
                this.uname=sessionStorage.getItem("uname");
                this.$http.get("imagelist/list").then(result=>{
                    var obj=result.body;
                    if(obj.code==1){   //返回成功数据
                        this.list=obj.msg;
                    }else{   //返回失败数据
                         //测试 this.$toast("数据加载失败")
                         Toast("数据加载失败")
                    }
                })
           },
           goinstall(){
                this.$router.push({path:"/install"})
           }
       }
    }
</script>
<style>
    .app .mint-swipe{
        height:200px;
        background:#fff;
    }
    .app .mint-swipe img{
        width:100%;
        height:100%;
    }
    .app .mui-grid-view.mui-grid-9{
            background:#fff;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
         }
    .app .mui-grid-view.mui-grid-9 .mui-media-body{
             font-size:13px;
         }
    .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
             border: 0;
             width:33.33333%
         }
    .app .mui-grid-view.mui-grid-9 img{
             width:60px;
             height:60px;
             border-radius:50%;
    }
</style>
