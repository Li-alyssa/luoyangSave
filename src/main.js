import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// main.js
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

Vue.config.productionTip = false

//统一接收api文件夹内的全部请求函数
import * as API from '@/api';

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$API = API;
  },
}).$mount('#app')
