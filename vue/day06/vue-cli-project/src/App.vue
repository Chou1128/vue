<template>
  <div id="app">
    <Header />
    <Naver />
    <Mainer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Naver from './components/Naver.vue';
import Mainer from './components/Mainer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Naver,
    Mainer
  }
}
</script>

<style>
</style>
