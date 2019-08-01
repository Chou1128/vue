import Vue from 'vue';
import App from './App.vue';

//全局引入
import axios from 'axios';
// Vue继承axios
Vue.prototype.$axios = axios;

// import './index.css'

//引入ElementUI的组件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 引入vant的组件
import Vant from './vant/index'

import router from './router'
Vant()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')