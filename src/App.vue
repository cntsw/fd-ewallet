<template>
  <div id="app">
    <router-view />
    <footer-tab-bar slot="bottom" />
  </div>
</template>

<script>
import FooterTabBar from '@/components/FooterTabBar'

export default {
  name: 'app',
  components: { FooterTabBar },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
