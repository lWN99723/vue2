//main.js  加载所有资源(组件;js/css/..)创建vue实例对象
import Vue from 'vue'
import App from './App.vue'
//1:加载路由模块
import router from './router'
//1.1:加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource'
//1.2:将VueResource 注册vue
Vue.use(VueResource);
//1.2.1设置请求根路径(服务器地址)
Vue.http.options.root="http://127.0.0.1:3000/";
//1.2.2创建全局过滤器
Vue.filter("datetimeFilter",function(val){
    var date=new Date(val);
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    m<10&&(m="0"+m);
    var d=date.getDate();
    d<10&&(d="0"+d);
    var h=date.getHours();
    h<10&&(h="0"+h);
    h<12?h=`上午${h}`: h=`下午${h}`
    var M=date.getMinutes();
    M<10&&(M="0"+M);
    return  `${y}-${m}-${d} ${h}:${M}`
})
//1.3:将Mintui加载项目
//1.4:按需引入组件Header 顶部固定导航栏
//import {Header} from "mint-ui"
//    按需引入组件Swipe,SwipeItem 图片轮播
import Mint from "mint-ui";
Vue.use(Mint);

//import {Header,Swipe,SwipeItem,Button,Lazyload} from "mint-ui"


// //1.5:注册组件
// Vue.component(Header.name,Header) //注册Header
// Vue.component(Swipe.name,Swipe)   //注册Swipe
// Vue.component(SwipeItem.name,SwipeItem)  //注册SwipeItem
// Vue.component(Button.name,Button);
// Vue.use(Lazyload);   //注册Lazyload


//1.6:引入mui css
import "./lib/mui/css/mui.css"
//购物车
import "./lib/mui/css/icons-extra.css"
//1.7引入mint-ui组件所需
//默认查找文件路径node_modules/mint-ui/lib/style.css
import "mint-ui/lib/style.css"
//1.8引入axios文件
import axios from 'axios';
import Qs from 'qs';
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


//2:是否是生产模式 false
Vue.config.productionTip = false

 // 2.1将vuex添加到项目中
   //1..导入vuex
   import Vuex from "vuex";
   //2..将vuex注册vue
   Vue.use(Vuex);
   //3..创建vuex实例[共享数据;提供操作数据方法;获取数据方法]
   //new Vuex.Store();得到一个数据仓储对象
   var store=new Vuex.Store({
         state:{//专门用来存储共享数据,想象成组件data
                //如果在组件中操作 this.$store.state.***  方法
                //购物车中数量共享数据
          count:0

         },
         mutations:{
           //注意   操作共享数据只能通过 mutations提供方法
           //如果组件想调用 mutations 只能使用this.$store.commit("increment");
           increment(state){state.count++},
           subtract(state){state.count--}
         },
         getters:{
           //getters只负责对外提供数据,不负责修改数据
           //在组件模板中{{$store.getters.optCount}}
           optCount:function(state){
             return state.count;
           }
         }

   });

   //4..将vuex实例对象添加vue对象  


//3:创建vue实现对象挂载 public/index.html#app
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
