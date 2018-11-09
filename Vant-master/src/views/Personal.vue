<template>
  <div class="wrap">
    <Header title="个人中心"/>
    <div class="content">
      <Personal />
    </div>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import Personal from '@/components/Personal/index.vue'
  export default {
    name: 'home',
    components: {
      Header,
      Personal,
      Footer
    }
  }
</script>
