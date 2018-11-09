<template>
  <div class="wrap">
    <Header title="我的银行卡"/>
    <div class="content">
        <BankCard />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import BankCard from '@/components/BankCard/index.vue'
  export default {
    name: 'bankcard',
    components: {
      Header,
      BankCard,
    },
    data(){
      return {
      }
    }

  }
</script>
