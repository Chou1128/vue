<template>
     <!-- 搜索框 -->
        <van-search
            placeholder="请输入搜索关键词"
            v-model="value"
            background="#0085ff" />
        <!-- 宫格 -->
        <van-grid :column-num="5">
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
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
            <van-dropdown-item v-model="value1" :options="menu2|handleMenu" />
        </van-dropdown-menu>
</template>
