<template>
  <div class="about">
    <div class="wrap">
      <Header title="佣金" />
      <Commission />
    </div>
  </div>
</template>



<script>
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import Commission from '@/components/Commission/index.vue'
  import {
    Button
  } from 'vant';
  export default {
    name: 'about',
    components: {
      [Button.name]: Button,
      Header,
      Commission,
      Footer
    }
  }
</script>
