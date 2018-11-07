<template>
  <div class="app-container">
       <!--2: 多个组件切换  router-view -->
       <router-view></router-view>
       <!--3: tabbar 固定在底端导航条-->
       <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/recom">
          <span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
          <span class="mui-tab-label">推荐</span>
        </router-link>
        <router-link class="mui-tab-item" to="/cart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact">
          </span>
          <span class="mui-tab-label">我的</span>
        </router-link>
      </nav>
  </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{

        }
    }
</script>
<style>
/* mt-header固定布局显示组件*/
    .app-container{
         /*padding-top:40px;*/
         padding-bottom:50px;
    }
    .header{
        width: 100%;
        height: 40px;
    }
    .top{
        width:100%;
        height:40px;
        background-color:#82DDD4;
        display:flex;
        justify-content: space-between;
        line-height: 40px;
        position:fixed;
        z-index: 99;
        color:#fff;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    .top button{
        border: none;
        background:#82DDD4;
        color:#fff;
    }
    .router-link-active span{
        color:#82DDD4;
    }
</style>
