// 以模块的方式引入vue
var Vue = require('../node_modules/vue/dist/vue');

new Vue({
    el: '#demo',
    data: {
        html: "1234567890好好学习天天向上",
        key: null,
    },
    template: `<div >
                    <input v-model="key"/>
                    <p v-html="html1"></p>
                </div>
                `,

    computed: {
        html1() {
            const reg = new RegExp(this.key, 'gi');
            return this.html.replace(reg, '<span style="color:red";}>' + this.key + '</span>')

        }
    }
})