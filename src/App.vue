<template>
  <div id="app">
    <view-box ref="viewBox">
      <router-view key="page" class="router-view"/>
    </view-box>
    <footer-tab-bar slot="bottom" v-if="showFooter" v-transfer-dom/>
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #263240;
}

.weui-tabbar {
  position: fixed !important;
}

// .weui-btn {
  
// }

// .weui-btn_primary{
//   background-color: #1e82d2 ;
// }

</style>
