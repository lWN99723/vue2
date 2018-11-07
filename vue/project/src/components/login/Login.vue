<template>
    <div>
        <div class="header">
            <div class="top">
                <button @click="goMember()" class="mui-icon-extra mui-icon-extra-arrowleftcricle"></button>
                账户登录
                <button></button>
            </div>
        </div>
        <div class="mui-content">
            <form id='login-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label>账号</label>
                    <input v-model='uname' id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input v-model="upwd" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                </div>
            </form>
            <div class="mui-content-padded">
                <button id='login' class="mui-btn-primary" @click="getLogin">登录</button>
                <div class="link-area">
                    <a id='reg'>注册账号</a>
                    <span class="spliter">|</span>
                    <a id='forgetPassword'>忘记密码</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                uname:'',
                upwd:''
            }
        },
        methods: {
            goMember() {
                this.$router.push({path: "/member"})
            },
            getLogin() {
                var uname=this.uname
                var upwd=this.upwd

                // this.axios.get("http://127.0.0.1:3000/users/login",{params:{uname:uname,upwd:upwd}}).then(res=>{
                //     console.log(res)
                //     if(res.data.code==1){   //返回成功数据
                //                 this.$router.push({path: '/member'});
                //                 // console.log(this.list);
                //             }else{
                //                     Toast("用户名或密码错误");
                //                     // this.uname='';
                //                     // this.upwd='';
                //             }
                // })

                // this.axios.post("http://127.0.0.1:3000/users/login",this.qs.stringify({uname:uname,upwd:upwd}),{
                //     headers:{
                //         'content-Type':'application/x-www-form-urlencoded'
                //     }
                // })

                this.axios({
                    method:'post',
                    url:'http://127.0.0.1:3000/users/login',
                    data:this.qs.stringify({uname:uname,upwd:upwd})
                }).then(function (res) {
                    if(res.data.code==1){
                        sessionStorage.setItem("uname",res.data.uname);
                        sessionStorage.setItem("avatar",res.data.avatar);
                        sessionStorage.setItem("email",res.data.email);
                        sessionStorage.setItem("phone",res.data.phone);
                        sessionStorage.setItem("user_name",res.data.user_name);
                        sessionStorage.setItem("gender",res.data.gender);
                        this.$router.push({path:'/member'})
                    }else{
                        Toast("用户名或密码错误");
                    }
                }.bind(this))
            }
        }
    }
</script>
<style>
    .mui-content{
        margin-top:10px;
    }
    .mui-btn-primary{
        display: block;
        width:100%;
        padding:10px 0;
        font-size:18px;
        margin-top:20px;
    }
    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }
    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }
</style>

