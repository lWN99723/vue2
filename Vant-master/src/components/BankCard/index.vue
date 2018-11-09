<template>
    <div >
        <!-- <span>{{count}}</span> -->
        <van-panel title="建设银行" desc="储蓄卡" status="状态" icon="debit-pay" class="bank-card">
          <div class="card-information">
            <div class="card-left">

            </div>
            <div class="card-number">88888888888888888888</div>
            <div class="card-right">
              <van-icon name="edit" size='0.4em'   color="rgba(0, 0, 0, 0.36)" @click='show2 =true'/>
            </div>
          </div>

        </van-panel>

        <van-panel title="建设银行" desc="储蓄卡" status="状态" icon="debit-pay" class="bank-card">
          <div class="card-information">
            <div class="card-left">

            </div>
            <div class="card-number">88888888888888888888</div>
            <div class="card-right">
              <van-icon name="edit" size='0.4em'   color="rgba(0, 0, 0, 0.36)" @click='show2 =true'/>
            </div>
          </div>

        </van-panel>

        <van-panel title="建设银行" desc="储蓄卡" status="状态" icon="debit-pay" class="bank-card">
          <div class="card-information">
            <div class="card-left">

            </div>
            <div class="card-number">88888888888888888888</div>
            <div class="card-right">
              <van-icon name="edit" size='0.4em'   color="rgba(0, 0, 0, 0.36)" @click='show2 =true'/>
            </div>
          </div>

        </van-panel>

        <van-button size="large" @click='show=true'>添加银行卡</van-button>
        <van-popup v-model="show" position="bottom" >
          <van-cell-group >
            <van-cell-group class='inputbody'>
            <van-field
              class="title"
              label="持卡人"
              placeholder="请输入姓名"
              @click-icon="$toast('question')"
            />

            <van-field
              class="title"
              label="卡号"
              placeholder="请输入卡号"
            />
            </van-cell-group>
            <div class="save">
              <van-button size="large" @click='show=false' class='savebutton'>保存</van-button>

            </div>
          </van-cell-group>


        </van-popup>




        <van-popup v-model="show2" position="bottom" >
          <van-cell-group >
            <van-cell-group class='inputbody'>
            <van-field
              class="title"
              label="持卡人"
              placeholder="请修改"
              @click-icon="$toast('question')"
            />

            <van-field
              class="title"
              label="卡号"
              placeholder="请修改卡号"
            />
            </van-cell-group>
            <div class="save">
              <van-button size="large" @click='show=false' class='savebutton'>保存</van-button>

            </div>
          </van-cell-group>


        </van-popup>
    </div>
</template>

<script>
import store from '../../store/index.js';
import {Panel,Popup,Button,Field,CellGroup,Icon} from 'vant'



    export default {
      components: {

          [Panel.name]: Panel,
          [Popup.name]: Popup,
          [Button.name]:Button,
          [Field.name]:Field,
          [CellGroup.name]:CellGroup,
          [Icon.name]:Icon,
      },
      data() {
        return {
          show: false,
          show2:false
        }
      },
      methods:{

      }

 };
</script>

<style media="screen">
.bank-card{
  margin-top: 10px
}
.card-information{
  display: flex;
  flex-direction: row;
}
.card-left{
  width: 20%;
  background: #d2d2d27d;
}
/* .card-number{
  flex-grow: 2
} */
.card-right{
  width: 20%;
  background: #d2d2d27d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.van-cell:not(:last-child)::after {
  content: ' ';
  position: absolute;
  pointer-events: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* left: 15px; */
  right: 0;
  bottom: 0;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  border-bottom: none
}
.card-number{
  font-size: 16px;
  padding: 10px;
  background: #d2d2d27d;
  text-align: center;
  width: 60%;
  overflow: hidden;
	text-overflow: ellipsis;
}
.van-panel__header{
  background: #d2d2d27d;
}
.van-popup--bottom{
  width: 100%;
  height: 80%;
  font-size: 12px;
  display: flex;
  justify-content: center;


}
.van-field__control{
  border-bottom: 1px solid #d2d2d21a;
}
.van-hairline--top-bottom{
  flex-grow: 1
}
.inputbody{
  margin-top: 20px
}
.save{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px
}
.savebutton{
  width: 80%
}
.van-hairline--top-bottom::after {
    border-width: 0px 0;
}
.title{
  text-align: center;
}



</style>
