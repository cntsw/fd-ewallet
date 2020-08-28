<template>
  <div id="app">
    <router-view />
    <footer-tab-bar slot="bottom" v-if="showFooter" />
  </div>
</template>

<script>
import FooterTabBar from '@/components/FooterTabBar'

export default {
  name: 'app',
  components: { FooterTabBar },

  computed: {
    showFooter () {
      const p = this.$route.path
      return  p !== '/loan/payment' && 
              p !== '/loan/payment-detail' &&
              p !== '/loan/history'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
