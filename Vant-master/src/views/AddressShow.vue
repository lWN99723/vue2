<template>
  <div class="wrap">
    <Header title="首页"/>
    <div class="content">
        <Address />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Address from '@/components/Address/index.vue'
  export default {
    name: 'address',
    components: {
      Header,
      Address,
    },
  }
</script>