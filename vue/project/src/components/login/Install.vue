<template>
    <div  class="container">
        <div class="header">
            <div class="top">
                <button @click="gopage()" class="mui-icon-extra mui-icon-extra-arrowleftcricle"></button>
                设置
                <button></button>
            </div>
        </div>
        <div class="mui-page-content">
            <div class="mui-scroll-wrapper">
                <div class="mui-scroll" style="margin-top: 50px;">
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell mui-media">
                            <a class="mui-navigate-right" href="#">
                                <img class="mui-media-object mui-pull-left head-img" id="head-img" :src="items.avatar">
                                <div class="mui-media-body">
                                    {{items.uname}}
                                    <p class='mui-ellipsis'>账号:{{items.phone}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron"  style="margin-top: 10px">
                        <li class="mui-table-view-cell">
                            <a href="#" class="mui-navigate-right">账号与安全</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view mui-table-view-chevron">
                        <li class="mui-table-view-cell">
                            <a href="#" class="mui-navigate-right">新消息通知</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#" class="mui-navigate-right">隐私</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a href="#" class="mui-navigate-right">通用</a>
                        </li>
                    </ul>
                    <ul class="mui-table-view"  style="margin-top: 10px">
                        <li class="mui-table-view-cell" style="text-align: center;">
                            <a>退出登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                items:{uname:null,avatar:null,phone:null}
            }
        },
        created(){
            this.getItems();
        },
        methods:{
            gopage(){
                this.$router.go(-1);
            },
            getItems(){
                this.items.uname=sessionStorage.getItem("uname");
                this.items.avatar=sessionStorage.getItem("avatar");
                this.items.phone=sessionStorage.getItem("phone")
            }
        }
    }
</script>
<style>

</style>
