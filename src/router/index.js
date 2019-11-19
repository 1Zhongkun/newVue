import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Car from '../views/Car.vue'
import Search from '../views/Search.vue'
import Member from '../views/Member.vue'
import NewList from '../news/NewList.vue'
import NewInfo from "../news/NewInfo.vue";
import Comment from "../news/Comment.vue";

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
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass:'mui-active'
})

export default router
