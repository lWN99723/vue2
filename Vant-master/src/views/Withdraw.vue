<template>
  <div class="wrap">
    <Header title="提现"/>
    <div class="content">
      <Withdraw />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Withdraw from '@/components/Withdraw/index.vue'
  export default {
    name: 'home',
    components: {
     Header,
     Withdraw,
    },
  }
</script>