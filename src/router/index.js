import { createRouter, createWebHashHistory } from 'vue-router'
import MyByy from '../views/MyByy.vue'
import MySalary from '../views/MySalary.vue'
import Mystatistic from '../views/MyStatistics.vue'

const routes = [
  {
    path: '/buys',
    name: 'buys',
    component: MyByy
  },
  {
    path: '/salary',
    name: 'salary',
    component: MySalary
  },
  {
    path: '/',
    name: 'home',
    component: Mystatistic
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
