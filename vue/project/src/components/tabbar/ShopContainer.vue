<template>
   <div>
      <div class="header">
        <div class="top">
            <button class="mui-icon mui-icon-location-filled"></button>
            赛欧玉龙办公家具
            <button class="mui-icon mui-icon-gear-filled" v-if="uname" @click="goinstall()"></button>
            <button v-else></button>
        </div>
      </div>
      <div class="mui-card">
         <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <!--购物车列表-->
               <ul class="mui-table-view">

                  <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                     <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                           {{item.title}}
                           <p class='mui-ellipsis'>
                              <span class="price">{{item.price}}</span>
                              <span class="count">
                 <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
					<input class="mui-input-numbox" type="number" :value="item.count"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd(item.id)">+</button>
				</div>
       </span>
                           </p>
                        </div>
                     </a>
                  </li>
               </ul>

            </div>
         </div>
         <div class="mui-card-footer">
            总计:{{getsubtotal}}
         </div>
      </div>
   </div>
</template>
<script>
    export default {
        data(){
            return {
                uname:'',
                list:[]
            }
        },
        created(){
            this.getCartList();
        },
        methods:{
            //将指定id的购物项数量-1
            cartSub(id){
                for(var item of this.list){
                    if(item.id == id){
                        if(item.count<=1){
                            return;
                        }
                        item.count--;
                    }
                }
            },
            //将指定id的购物项数量+1
            cartAdd(id){
                //1:创建循环遍历数组内容
                for(var item of this.list){
                    //2:判断如果当前购物项id与参数id相同
                    if(item.id == id){
                        //3:当前购物项数量+1
                        item.count++;
                    }
                }
            },
            getCartList(){
                this.uname=sessionStorage.getItem("uname");
                var uid = 1;
                this.$http.get("cartlist/list?uid="+uid).then(result=>{
                    if(result.body.code == 1){
                        this.list = result.body.msg;
                    }
                });
            },
            goinstall(){
                this.$router.push({path:"/install"})
            }
        },
        computed:{
            //添加计算属性,计算购物中商品总价
            //该属性会监听list数据变化从而重新计算
            getsubtotal:function(){
                var sum = 0;
                for(var item of this.list){
                    sum += item.price * item.count;
                }
                return sum;
            }
        }
    }
</script>
<style>
</style>