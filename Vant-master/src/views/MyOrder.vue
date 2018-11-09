<template>
  <div class="wrap">
    <Header title="我的订单"/>
    <div class="content">
        <Order :chuan='zsx'/>
    </div>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Order from '@/components/Order/index.vue'
  export default {
    name: 'myOrder',
    components: {
      Header,
      Order,
    },
    data(){
      return {
        zsx:'aaaa'
      }
    }

  }
</script>
