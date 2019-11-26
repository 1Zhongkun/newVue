import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Search from '../views/Search.vue'
import Member from '../views/Member.vue'
import NewList from '../news/NewList.vue'
import NewInfo from "../news/NewInfo.vue";
import PhotoList from "../photos/PhotoList.vue"
import PhotoInfo from "../photos/PhotoInfo.vue";
import ProductList from "../products/ProductList.vue";
import GoodsInfo from "../products/GoodsInfo.vue";
import goodscomment from '../goods/goodscomment.vue';
import goodsdesc from '../goods/goodsdesc.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/member",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Member
  },
  {
    path: "/car",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Car
  },
  {
    path: "/search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Search
  },
  {
    path: "/home/newList",
    component: NewList
  },
  {
    path: "/home/newsinfo/:id",
    component: NewInfo
  },
  {
    path: "/home/photolist",
    component: PhotoList
  },
  {
    path: "/home/photoinfo/:id",
    component: PhotoInfo
  },
  {
    path: "/home/goodslist",
    component: ProductList
  },
  {
    path: "/home/goodsinfo/:id",
    component: GoodsInfo
  },
  {
    path: "/home/goodscomment/:id",
    component: goodscomment,
    name:'goodscomment'
  }
  ,
  {
    path: "/home/goodsdesc/:id",
    component: goodsdesc,
    name:'goodsdesc'
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass:'mui-active'
})

export default router
