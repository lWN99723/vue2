<template>
  <div class="wrap">
    <Header title="购物车"/>
    <div class="content">
      <Cart />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import Cart from '@/components/Cart/index.vue'
  export default {
    name: 'home',
    components: {
      Header,
      Cart,
      Footer
    }
  }
</script>
