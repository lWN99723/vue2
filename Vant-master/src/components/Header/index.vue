<template>
  <div class="header">
    <van-nav-bar 
    :title="title" 
    left-text="返回" 
    left-arrow 
    @click-left="onClickLeft"
    />
  </div>
</template>



<script>
  import {
    NavBar
  } from 'vant';
  export default {
    name: 'header',
    components: {
      [NavBar.name]: NavBar,
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
  .header {
    flex-shrink: 0;
  }
</style>