<template lang="html">
  <div class="orderother">
      <van-button round size="small">删除订单</van-button>&nbsp;&nbsp;
      <van-button round size="small">查看物流</van-button>
  </div>
</template>

<script>
import {
    Tab,
    Tabs,
    Card,Button
} from 'vant';
export default {
  components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Card.name]: Card,
      [Button.name]: Button,
  },
}
</script>

<style lang="css">
.orderother{
  background: white;
  font-size: 10px;
  display: flex;
  justify-content:flex-end;
  flex-direction: row;
  padding: 5px
}
</style>
