import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FooterTabBar from '@/components/FooterTabBar'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: __dirname,

  routes: [
    {
      path: '/car',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
