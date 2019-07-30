<template>
    <div class="top_menu_bar ">
        <div class="top_menu_more">
            <div class="list_shadow"></div>
            <a class="more_btn" href="javascript:void(0)">
                <span class="cross"></span>
            </a>
        </div>
        <div class="top_menu_list">
            <a v-on:click="test(item.id - 1)" v-for="item in arr" href="javascript:void(0)" data-channel="__all__" data-query="channel=__all__" class="btn"  :class="{cur:item.id - 1 == number}" v-text="item.html"></a>
            <!-- <a href="javascript:void(0)" data-channel="video" data-query="channel=video" class="btn">视频</a>
            <a href="javascript:void(0)" data-channel="news_hot" data-query="channel=news_hot" class="btn">热点</a>
            <a href="javascript:void(0)" data-channel="news_society" data-query="channel=news_society" class="btn">社会</a>
            <a href="javascript:void(0)" data-channel="news_entertainment" data-query="channel=news_entertainment" class="btn">娱乐</a>
            <a href="javascript:void(0)" data-channel="news_military" data-query="channel=news_military" class="btn">军事</a>
            <a href="javascript:void(0)" data-channel="news_tech" data-query="channel=news_tech" class="btn">科技</a>
            <a href="javascript:void(0)" data-channel="news_car" data-query="channel=news_car" class="btn">汽车</a>
            <a href="javascript:void(0)" data-channel="news_house" data-query="channel=news_house" class="btn">房产</a>
            <a href="javascript:void(0)" data-channel="new_furnish" data-query="channel=new_furnish" class="btn">家居</a>
            <a href="javascript:void(0)" data-channel="news_sports" data-query="channel=news_sports" class="btn">体育</a>
            <a href="javascript:void(0)" data-channel="news_finance" data-query="channel=news_finance" class="btn">财经</a> -->
        </div>
    </div>
</template>

<script>
export default {
  // M
  data() {
    return {
         arr: [{
            id: 1,
            html:'推荐',
        }, {
            id: 2,
            html:'视频',
        }, {
            id: 3,
            html:'热点',
        },{
            id: 4,
            html:'社会',
        }, {
            id: 5,
            html:'财经',
        }, {
            id: 6,
            html:'娱乐',
        },{
            id: 7,
            html:'军事',
        }, {
            id: 8,
            html:'科技',
        }, {
            id: 9,
            html:'汽车',
        },{
            id: 10,
            html:'房产',
        }, {
            id: 11,
            html:'体育',
        }, {
            id: 12,
            html:'家居',
        }],
        number: 0
    //   title: "搜索",
    //   // 用于控制搜索框的状态
    //   bool: false,
    //   // 搜索的内容
    //   searchInput: ""
    };
  },
  methods: {
    test(num) {
            // V->M->V
            // 把M层改变，由于M变，V会跟着变
           this.number = num;
            console.log(num);
        }
  },
  // 自定义指令
//   directives: {
//     // focus(el, binding) {
//     //   // 自动聚焦输入框
//     //   el.focus();
//     // }
//     active(el, binding) {
//         // V->M->V
//         // 把M层改变，由于M变，V会跟着变
//         this.number = num;
//         console.log(num);
//     }
//   }
};
</script>


