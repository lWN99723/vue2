<template>
  <div class="footer">
    <van-tabbar v-model="active" @change="Jump">
      <van-tabbar-item icon="home" >首页</van-tabbar-item>
      <van-tabbar-item icon="cash-back-record" >佣金</van-tabbar-item>
      <van-tabbar-item icon="cart" >购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
  import {
    Tabbar,
    TabbarItem
  } from "vant";
  import { mapState } from "vuex"
  export default {
    name: "footer",
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    data() {
      return {
        goArr: [
          '/',
          '/about',
          '/cart',
          '/personal'
        ]
      };
    },
    computed: mapState({
      active: state => state.footer.active
    }),
    watch: {
      $route (to) {
        alert(123)
        console.log(123)
        console.log(to)
      }
    },
    methods: {
      Jump: function(index) {
         this.$store.commit('footer/changeActive',index)
         this.$router.push(this.goArr[index])
      }
    }
  };
</script>

<style lang="scss">
</style>