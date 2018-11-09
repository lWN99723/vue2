<template>
  <div class="wrap">
    <Header title="我的店铺"/>
    <div class="content">
      <Shop  />
    </div>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import Shop from '@/components/Shop/index.vue'
  export default {
    name: 'home',
    components: {
      Header,
      Shop,
      Footer
    }
  }
</script>

<style media="screen">
  .content{
    background: white
  }

</style>
