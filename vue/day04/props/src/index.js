// 以模块的方式引入vue
var Vue = require('../node_modules/vue/dist/vue');
// 引入css模块，非JS模块
require('./styles/index.css');

var template = require('./template.html');

Vue.component('my-header', {
    // 从标签的属性值上面获取父组件给我的值
    props: ['title', 'color', 'con', 'className', 'type', 'span', 'textAlign'],
    template: template,
});

// 根容器
new Vue({
    el: "#demo",
    data: {
        name1: '未能获取收货地址',
        name2: "选择收货地址",
        value1: '搜索饿了么商家、商品名称',
        value2: '请输入地址',
        span1: '',
        span2: '选择'
    },
    template: `
        <div>
            <my-header :title="name1" :con="value1" className="class1" :span="span1" textAlign="left"></my-header>
            <my-header :title="name2" :con="value2" className="class2" :span="span2" textAlign="center" :style="{backgroundColor:'#fff'}"></my-header>
        </div>
    `
})