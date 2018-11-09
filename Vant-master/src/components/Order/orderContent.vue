<template lang="html">
  <div class="oneorder">

    <div class="orderheader">
        <div class="headerleft common">
          店铺店名>
        </div>
        <div class="headerright common">
          交易完成
        </div>
    </div>

    <div class="ordercontent">
      <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="http://img5.imgtn.bdimg.com/it/u=4237276187,1352698924&fm=26&gp=0.jpg"
        />
    </div>

    <div class="orderfooter">
      <div class="">
        共计1件商品 合计:￥<span class="price">30</span>.00

      </div>
    </div>

    <OrderOperation/>
  </div>



</template>

<script>
import OrderOperation from '@/components/Order/orderOperation.vue'

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
      OrderOperation
  },
}
</script>

<style lang="css">
.oneorder{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px
}
.orderheader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background: white
}
.common{
  font-size: 12px;
  padding: 10px
}
.headerright{
  color: #f55427
}
.van-card__left{
  text-align: left;
}
.orderfooter{
  background: white;
  padding: 10px;
  display: flex;
  justify-content:flex-end;
  font-size: 12px;
  border-bottom: 1px solid #fafafa
}
.price{
  font-size: 15px;
  background: white;
}


</style>
