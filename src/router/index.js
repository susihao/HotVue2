import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Type from '../views/Type.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/type',
    name: 'Type',
    component: Type
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
