<template>
  <div class="wrap">
    <HomeHeader />
    <div class="content">
       <Swipe />
       <ProductList />
    </div>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from '@/components/Header/home-header.vue'
  import Footer from '@/components/Footer/index.vue'
  import Swipe from '@/components/Swipe/index.vue'
  import ProductList from '@/components/ProductList/index.vue'
  export default {
    name: 'home',
    components: {
      HomeHeader,
      Swipe,
      ProductList,
      Footer
    },
  }
</script>