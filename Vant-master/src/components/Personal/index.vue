<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-orders" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        待发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link to="/orders"/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="tosend" title="我的店铺" is-link to='/shop'/>
      <van-cell icon="points-mall" title="商品库房" is-link />
      <van-cell icon="idcard" title="我的银行卡" is-link to='/bankcard'/>
      <van-cell icon="location" title="地址管理" is-link to="/address"/>
      <van-cell icon="edit-data" title="我的设置" is-link />
    </van-cell-group>
    <!-- <van-button  type="danger" size="large">退出登录</van-button> -->
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Button } from 'vant';

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
  }
};
</script>

<style lang="scss" scoped>

  .user-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }

  .user-group {
    margin-bottom: .3rem;
  }

  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
  .van-cell__title {
      text-align: left;
      text-indent: 10px;
  }
</style>
