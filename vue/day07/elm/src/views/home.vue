<template>
    <div>
        <!-- 地址 -->
        <!-- <header class="index-JMUSj_0">
            <div class="index-1DPx9_0">
                <div aria-label="当前地址：慧通产业园B9栋，轻点两下重新选择" role="button" class="index-2S5Ah_0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
                        <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
                    </svg>
                    <span class="index-2uW_v_0">慧通产业园B9栋</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
                        <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
                    </svg>
                </div>
            </div>
        </header> -->
        <!-- 搜索框 -->
        <van-search
            class="searchFixed"
            placeholder="请输入搜索关键词"
            v-model="value"
            background="#0085ff"
            label="广州" />
        <!-- 宫格 -->
        <van-grid style="margin-top:50px" :column-num="5" >
            <van-grid-item
                v-for="(k,index) in king"
                :key="index"
                :icon="k.imgsrc"
                :text="k.name"
            />
        </van-grid>
        <!-- 分割线 -->
        <van-divider>附近商家</van-divider>
        <!-- 下拉菜单 -->
        <van-dropdown-menu :class="{menuFixed}">
            <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
            <van-dropdown-item v-model="value1" :options="menu2|handleMenu" />
            <van-dropdown-item v-model="value1" :options="menu3|handleMenu" />
        </van-dropdown-menu>
        <!-- 标签栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item :to="`/`" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item :to="`/faxian/`" icon="search">发现</van-tabbar-item>
            <van-tabbar-item :to="`/dinda/`" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item :to="`/mine/`" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 商品列表 -->
        <van-list
            style="margin-bottom:50px"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getShopList"
            >
            <van-card
                v-for="(item,index) in shopList"
                :key="index"
                :price="214.00"
                :desc="item.address"
                :title="item.shopName"
                :thumb="item.picUrl"
                />
        </van-list>
    </div>
</template>
<script>
export default {
  data() {
    return {
        value: "",
        //宫格
        king: [],
        //下拉菜单
        value1: 0,
        menu: [],
        menu2: [],
        menu3: [],
        //标签栏 记录你所在第几项
        active: 0,
        //列表
        shopList: [],
        loading: false,
        finished: false,
        // 是否固定下拉菜单，启动吸顶菜单
        menuFixed: false
    };
  },
  methods: {
    onSearch() {},
    async getShopList() {
      /// 获取商店信息
        let poilist = await this.$axios.post(
        "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/poilist"
        );
        this.shopList = [...this.shopList, ...poilist.data.data.shopList];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.shopList.length >= 40) {
        this.finished = true;
        }
    }
  },
  async created() {
    //宫格
        let kinglist = await this.$axios(
        "https://www.easy-mock.com/mock/5d403516b34a2e035a114195/king"
        );
        this.king = kinglist.data[0].entries;
        // console.log(kinglist.data[0].entries);
    //下拉菜单
        let menulist = await this.$axios(
        "https://www.easy-mock.com/mock/5d403516b34a2e035a114195/menu"
        );
        this.menu = menulist.data.outside.inside_sort_filter;
        // console.log(menulist.data.outside.inside_sort_filter);
        this.menu2 = menulist.data.outside.outside_filters;
        // console.log(menulist.data.outside.outside_filters);
         this.menu3 = menulist.data.outside.outside_sort_filter;
        // 列表首次加载
        this.getShopList();
  },
  mounted() {
       window.onscroll = () => {
      // 吸顶菜单
    //   console.log(window.scrollY);
      if (window.scrollY >= 300) {
        this.menuFixed = true;
      } else {
        this.menuFixed = false;
      }
    }
  },
  destoryed() {
    // 在home离场的时候销毁全局监听事件
    window.onscroll = null;
 },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //   往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        // 构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>
<style scoped>
.menuFixed {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 99;
}
.searchFixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>




