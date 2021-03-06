import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Board.vue'
import read from '../views/post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/Board.vue')
  },
  {
    path: '/board/:board_id/:board_title',
    name: 'post',
    component: () => import('../views/post.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/write/:board_id/:board_title',
    name: 'write',
    component: () => import('../views/write.vue')
  },
  {
    path: '/posts/:board_id/:board_title/:post_id/',
    name: 'content',
    component: () => import('../views/content.vue')
  },
  {
    path: '/makeBoard/',
    name: 'makeBoard',
    component: () => import('../views/makeBoard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
