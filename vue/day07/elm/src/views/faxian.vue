<template>
    <div class="faxian">
        <h1>发现</h1>
         <!-- 标签栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item :to="`/`" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item :to="`/faxian/`" icon="search">发现</van-tabbar-item>
            <van-tabbar-item :to="`/mine/`" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item :to="`/dinda/`" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 1,
        }
    }
}
</script>
