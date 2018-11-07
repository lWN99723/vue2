<template>
    <div  class="container">
        <div class="header">
            <div class="top">
                <button @click="goLogin()" class="mui-icon-extra mui-icon-extra-arrowleftcricle"></button>
                个人资料
                <button class="mui-icon mui-icon-gear-filled" @click="goinstall()"></button>
            </div>
        </div>
        <img :src="items.avatar">
        <div class="banner">
            <img :src="items.avatar" alt="">
            <div class="personal">
                <p>
                    <span>真是姓名</span><u>{{items.user_name}}</u>
                </p>
                <p>
                    <span>电子邮箱</span><u>{{items.email}}</u>
                </p>
                <p>
                    <span>电话号码</span><u>{{items.phone}}</u>
                </p>
                <p>
                    <span>性别</span><u>{{items.gender}}</u>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                items: {user_name: null, avatar: null,email:null,phone:null,gender:null}
            }
        },
        created(){
            this.getItems();
        },
        methods:{
            goLogin(){
                this.$router.go(-1);
            },
            getItems(){
                this.items.user_name=sessionStorage.getItem("user_name");
                this.items.avatar=sessionStorage.getItem("avatar");
                this.items.email=sessionStorage.getItem("email");
                this.items.phone=sessionStorage.getItem("phone");
                if(sessionStorage.getItem("gender")==0){
                    this.items.gender="女"
                }else{
                    this.items.gender="男"
                }
            },
            goinstall(){
                this.$router.push({path:"/install"})
            }
        }
    }
</script>
<style>
    .container>img{
        width:100%;
        margin-top:-40%;
        opacity: 0.5;
    }
    .banner{
        background-color: #fff;
        width:100%;
        height:300px;
        margin-top:-5px;
        position: relative;
    }
    .banner img{
        border:2px solid #fff;
        width:100px;
        position: absolute;
        left:50%;
        top:-25%;
        margin-left:-50px;
    }
    .banner .personal{
        position:absolute;
        top:60px;
        left:30px;
    }
    .banner>.personal>p>span{
        font-size:10px;
    }
    .banner>.personal>p>u{
        font-size:10px;
        color:#000;
        font-weight: bold;
        text-decoration: none;
        padding-left:30px;
    }
</style>
