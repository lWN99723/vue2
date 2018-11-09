<template>
  <div class="home-header">
    <img :src="logo" />
    <van-search placeholder="请输入搜索关键词"  />
    <van-icon name="setting" class="home-icon" />
  </div>
</template>



<script>
  import {
    NavBar,
    Search,
    Icon
  } from 'vant';
  import logo from '@/assets/images/logo.png'
  export default {
    name: 'home-header',
    components: {
      [NavBar.name]: NavBar,
      [Search.name]: Search,
      [Icon.name]: Icon,
    },
    data() {
      return {
        logo,
      }
    },
    props: {
      title: String,
    },
    methods: {
      onClickLeft(){
        window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss">
  .home-header {
     display: flex;
     background: #f2f2f2;
     justify-content: space-between;
     height: 60px;
     /* align-content: center; */
     align-items: center;
     img {
       margin-left: 20px;
       width: 25px;
       height: 20px;
     }
     .van-search .van-cell {
       padding: 4px 40px;
     }
     .home-icon {
       font-size: 20px;
       margin-right: 20px;
       /* width: 20px;
       height: 20px; */
     }
  }
</style>