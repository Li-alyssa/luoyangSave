import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ChartsPage from '../components/ChartsPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ChartsPage/:time',
    name: 'ChartsPage',
    component: ChartsPage
  }
]

const router = new VueRouter({
  routes
})

export default router
