//router.js加载所有组件并且指定访问路径
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

//1.1加载Home组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
//1.2加载MemberContainer.vue
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopContainer from "./components/tabbar/ShopContainer.vue";
import RecommendContainer from "./components/tabbar/RecommendContainer.vue";
import ComDetails from "./components/recom/ComDetails.vue";
import Login from "./components/login/Login.vue";
import Personsal from "./components/login/Personal.vue";
import Install from "./components/login/Install.vue";

Vue.use(Router)

export default new Router({
  routes: [
      {path:"/",redirect:"/home"},//重定向
      {
        path: "/home", //组件访问路径   //如何访问/home <router-link to="/home">
        component: HomeContainer //对应组件
      },
      {path:"/member",component:MemberContainer},
      {path:"/cart",component:ShopContainer},
      {path:"/recom",component:RecommendContainer},
      {path:"/home/recomdetail/:id",component: ComDetails,name:"recomdetail"},
      {path:"/member/login",component:Login},
      {path:"/login/personsal",component:Personsal},
      {path:"/install",component:Install}
  ]
})
