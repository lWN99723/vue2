<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="已上架">
        <div class="mm">
          <div class="aa">
          </div>
          <div class="bb">
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="http://img5.imgtn.bdimg.com/it/u=4237276187,1352698924&fm=26&gp=0.jpg" />
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="http://img5.imgtn.bdimg.com/it/u=4237276187,1352698924&fm=26&gp=0.jpg" />
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="http://img5.imgtn.bdimg.com/it/u=4237276187,1352698924&fm=26&gp=0.jpg" />
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="http://img5.imgtn.bdimg.com/it/u=4237276187,1352698924&fm=26&gp=0.jpg" />
          </div>
          <div class="cc">
          </div>
        </div>
      </van-tab>
      <van-tab title="已下架">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {
    Row,
    Col,
    Icon,
    Cell,
    CellGroup,
    Button,
    Card,
    Tab,
    Tabs
  } from 'vant';
  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Card.name]: Card,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
    }
  };
</script>

<style lang="scss">
  .mm {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 5px
  }
  .aa {
    flex-grow: 1
  }
  .bb {
    flex-grow: 4
  }
  .cc {
    flex-grow: 1
  }
</style>
