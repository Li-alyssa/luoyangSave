import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ChartsPage from '../components/ChartsPage';
import RunTime from '../components/RunTime';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historyPage',
    name: 'historyPage',
    component: () => import('../pages/historyPage')
  },


  {
    path: '/Compared',
    name: 'Compared',
    component: () => import('../components/Compared')
  },
  {
    path: '/ChartsPage',
    name: 'ChartsPage',
    component: ChartsPage
  },
  {
    path: '/RunTime',
    name: 'RunTime',
    component: RunTime
  }
]

const router = new VueRouter({
  routes
})

export default router
