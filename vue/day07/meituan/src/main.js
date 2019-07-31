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
Vant()
// import {
//   search
// } from 'vant';
// Vue.use(search);

// import {
//   Grid,
//   GridItem
// } from 'vant';
// Vue.use(Grid).use(GridItem);

// import {
//   Divider
// } from 'vant';
// Vue.use(Divider);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')