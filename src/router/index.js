import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home/Home.vue')
  },
  {
    path: '/city/:cityname',
    name: 'City',
    props:true,
    component: ()=>import('../views/city/City.vue')
  },
  {
    path: '/citytrip/:from/:to',
    name: 'CityTrip',
    props:true,
    component: ()=>import('../views/cityTrip/CityTrip.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
