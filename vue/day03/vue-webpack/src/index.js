// 以模块的方式引入vue
var Vue = require('../node_modules/vue/dist/vue');
// 引入css模块，非JS模块
require('./styles/index.css');

var vm = new Vue({
    //v
    el: '#demo',
    //M
    data: {
        // name:[{}],
        arr: [{
            id: 1,
        }, {
            id: 2,
        }, {
            id: 3,
        }],
        number : 0
    },

    template: `
    <div>
        <button v-on:click="test(item.id - 1)"  v-for="item in arr" v-text="item.id" :class="{active:item.id - 1 == number}">
        </button>
        <p v-for="item in arr" v-text="item.id" v-show="item.id - 1 == number"></p>
    </div>
    `,

    methods: {
        test(num) {
            // V->M->V
            // 把M层改变，由于M变，V会跟着变
           this.number = num;
            console.log(num);
            v - html = "item.html"
        }
    },

});
console.log(vm);