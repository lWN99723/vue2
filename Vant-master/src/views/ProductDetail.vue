<template>
  <div class="wrap">
    <Header title="详情"/>
    <div class="content">
      <Sku />
      <ProductDetail  />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import ProductDetail from '@/components/ProductDetail/index.vue'
  import Sku from '@/components/Sku/index.vue'
  export default {
    name: 'home',
    components: {
      Header,
      ProductDetail,
      Sku,
      Footer
    }
  }
</script>
