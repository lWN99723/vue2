<template>
    <div class="order">
        <van-tabs v-model="active" :swipeable="true">
            <van-tab  title="待付款">
              <OrderContent/>
            </van-tab>
            <van-tab  title="待收货">
              <OrderContent/>
            </van-tab>
            <van-tab  title="已完成">
              <OrderContent/>
            </van-tab>
            <van-tab  title="已取消">
              <OrderContent/>
            </van-tab>
        </van-tabs>
    </div>
</template>



<script>
    import {
        Tab,
        Tabs,
        Card,
        Button
    } from 'vant';
    import OrderContent from '@/components/Order/orderContent.vue'
    export default {
        name: 'order',
        components: {
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Card.name]: Card,
            [Button.name]: Button,
            OrderContent
        },
        props:{
          chuan:String,
          required: true
        }
    }
</script>

<style lang="scss" scoped>
    .order {
        margin-top: 12px;
    }

</style>
