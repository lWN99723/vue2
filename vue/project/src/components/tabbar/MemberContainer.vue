<template>
    <div>
        <div class="header">
            <div class="top">
                <button class="mui-icon mui-icon-location-filled"></button>
                个人中心
                <button class="mui-icon mui-icon-gear-filled" @click="goinstall()" v-if="items.uname&&items.avatar"></button>
                <button v-else></button>
            </div>
        </div>
        <div class="user">
            <div id="islogin" v-if="items.uname&&items.avatar">
                <img :src="items.avatar" @click="gopersonal()">
                <p>{{items.uname}}</p>
            </div>
            <div class="Login" id="login" v-else>
                <img src="../../img/avatar.png" @click="gologin()">
                <p @click="gologin()">登录</p>
            </div>
        </div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">我的订单</a>
            </li>
            <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">待付款</a>
            </li>
            <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">待配送</a>
            </li>
            <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">待收货</a>
            </li>
            <li class="mui-table-view-cell">
                <a href="#" class="mui-navigate-right">待评价</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                items:{uname:null,avatar:null}
            }
        },
        created(){
            this.getItems();
        },
        methods:{
            gologin(){
                this.$router.push({path:"/member/login"})
            },
            getItems(){
                this.items.uname=sessionStorage.getItem("uname");
                this.items.avatar=sessionStorage.getItem("avatar");
            },
            gopersonal(){
                this.$router.push({path:"/login/personsal"})
            },
            goinstall(){
                this.$router.push({path:"/install"})
            }
        }
    }
</script>
<style>
    .user{
        width: 100%;
        height:200px;
        background-color:#82DDD4;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .user img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
    .user p{
        padding:10px;
        color:#fff;
        font-weight:bold;
        font-size:18px;
        font-family: Arial, Helvetica, sans-serif;
    }
</style> 