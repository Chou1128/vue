<template>
    <div class="dinda">
        <h1>订单</h1>
         <!-- 标签栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item :to="`/home/`" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item :to="`/faxian/`" icon="search">发现</van-tabbar-item>
            <van-tabbar-item :to="`/dinda/`" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item :to="`/mine/`" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 2,
        }
    }
}
</script>