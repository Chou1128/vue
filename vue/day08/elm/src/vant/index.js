import Vue from 'vue'
// 第三方组件
// 搜索
import {
    Search
} from 'vant';
// 宫格
import {
    Grid,
    GridItem
} from 'vant';
// 分割线
import {
    Divider
} from 'vant';
// 下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
// 标签栏
import {
    Tabbar,
    TabbarItem
} from 'vant';
//列表
import {
    List
} from 'vant';
//单元格
import {
    Cell,
    CellGroup
} from 'vant';
//商品卡片
import {
    Card
} from 'vant';

Vue.use(List);

export default () => {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(List);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Card);
}