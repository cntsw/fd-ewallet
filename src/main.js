// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import { AlertPlugin, ToastPlugin, XButton, XInput, Tabbar, TabbarItem, ViewBox, Grid, GridItem, TransferDom, Popup, Group, Toast } from 'vux'

import router from'./router'

Vue.use(VueRouter)

Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('view-box', ViewBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('group', Group)
Vue.component('popup', Popup)
Vue.component('toast', Toast)

Vue.directive('transfer-dom', TransferDom)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
