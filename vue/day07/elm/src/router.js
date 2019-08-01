import Vue from 'vue'
// 全局引入vuetouter
import Router from 'vue-router'

// 安装路由
Vue.use(Router)

// 定义路由组件
import home from './views/home.vue'
// import faxian from './views/faxian.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // component: () => import( /* webpackChunkName: "about" */ './views/home.vue')
    },
    {
      path: '/faxian',
      name: 'faxian',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/faxian.vue')
    }, {
      path: '/dinda',
      name: 'dinda',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/dinda.vue')
    }
    , {
      path: '/mine',
      name: 'mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/mine.vue')
    }
  ]
})
