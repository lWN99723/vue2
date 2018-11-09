<template lang="html">
  <div class="commission">
    <div class="commission-wrap">
        <div class="commission-title">
            <div class="title-header">可提现佣金(元)</div>
            <div class="title-content">365.00</div>
            <div class="title-footer">满100可提现</div>
        </div>
        <div class="commission-footer">
            <div class="footer-content footer-left">
              <div class="">
                36
              </div>
              <div class="">
                成功邀请好友
              </div>
            </div>
            <div class="footer-content footer-middle">
              <div class="">
                20
              </div>
              <div class="">
                二级邀请好友
              </div>
            </div>
            <div class="footer-content footer-right">
              <div class="">
                365
              </div>
              <div class="">
                已为我赚取
              </div>
            </div>
        </div>
    </div>
    <div class="commission-record">
      <van-tabs v-model="active">
        <van-tab title="佣金">
          <div class="record-title">
            <div class="product-name">
              商品名称
            </div>


            <div class="time">
              时间
            </div>
            <div class="income">
              收入
            </div>
            <div class="user-name">
              购买者
            </div>
          </div>







          <div class="record-all">
            <div class="record-header">
              <!-- <div class="record-title"> -->
                <van-list
                  v-model="loading"
                  :finished="finished"
                  @load="onLoad"
                >
                  <van-cell
                    v-for="item in list"
                    class='flashbody'

                  >

                  <div class="product-name">
                    zhoushixiong
                  </div>


                  <div class="time">
                    2018-11-05
                  </div>
                  <div class="income">
                    20
                  </div>
                  <div class="user-name">
                    zhoushixiong
                  </div>

                </van-cell>
                </van-list>


              <!-- </div> -->

            </div>
            <div class="record-botton">
              <van-button size="large" @click='withdraw'>提现</van-button>
            </div>




          </div>




        </van-tab>
        <van-tab title="提现记录">内容 2</van-tab>

      </van-tabs>
    </div>




  </div>
</template>

<script>
import {Tab, Tabs,Button,List,Cell} from 'vant';
export default {
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Button.name]:Button,
    [List.name]:List,
    [Cell.name]:Cell


  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods:{
    withdraw(){
      this.$router.push('/personal')
    },
    onLoad() {
      // 异步更新数据
      // setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      // }, 500);
    }
  }

}
</script>

<style lang="css">
.commission-wrap{
  width: 100%;
  padding: 20px 0 0 0;
  background: linear-gradient(#ff4500a6,#ff7800a6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-header{
  text-align: center;
  font-size: 23px;
  color: white;
}
.title-content{
  text-align: center;
  font-size: 22px;
  color: white;
}
.title-footer{
  text-align: center;
  font-size: 14px;
  color: #f1eaead6;
}
.commission-footer{
  margin-top: 20px;
  width: 100%;
  height: 50px;
  opacity: 0.7;
  background: #fff3e857;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0
}
.footer-content{
  flex-grow: 1;
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-left{
  border-right: 1px solid #f1eaead6;
}
.footer-middle{
  border-right: 1px solid #f1eaead6
}
.commission-record{
  margin: 10px;
  /* height: 300px; */
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
}
.record-title{
  width: 100%;
  display: flex;
  flex-direction:row;
  font-size: 12px;
  border-bottom: 1px solid #f1eaead6
}
.product-name{
  padding: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  /* flex-grow: 1 */
  width: 20%;
}
.user-name{
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  width: 30%;
}
.income{
  text-align: center;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10%;
}
.time{
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  width: 40%;
}
.record-all{
  /* overflow: auto; */
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;

}
.record-header{
  width: 100%;
  flex: 6;
  overflow: auto;
}
.record-botton{
  width: 100%;
  /* height: 40px; */
  flex:1;
}
.flashbody{
  padding: 0px
}
.van-cell__value--alone{
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 12px
}
</style>
