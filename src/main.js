import Vue from 'vue'
import App from './App.vue'
import router from './router'
//css初始化 移动端适配
import './assets/css/reset.css'
import api from './api/index';
import echarts from './plugins/echarts'
import './plugins/myTabs/index'
// 全局引用 swiper
import './components/mySwiper/index';
// 法1、 vant全局引用-----------
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
// 法2、样式按需加载------------
import './plugins/vant';

Vue.config.productionTip = false;

// 将封装的axios挂在Vue原型链上
Vue.prototype.$api = api;

// 挂载 自封装的echarts组件
Vue.use(echarts);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
