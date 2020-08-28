import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoanView from '@/views/loan'
import LoanPaymentView from '@/views/loan/Payment'
import LoanPaymentDetailView from '@/views/loan/PaymentDetail'

import UserView from '@/views/user'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: __dirname,

  routes: [
    {
      path: '/car',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loan',
      name: 'loan',
      component: LoanView
    },
    { path: '/loan/payment', component: LoanPaymentView},
    { path: '/loan/payment-detail', component: LoanPaymentDetailView},
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
  ]
})
