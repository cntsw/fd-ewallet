import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import WalletView from '@/views/wallet'

import LoanView from '@/views/loan'
import LoanPaymentView from '@/views/loan/Payment'
import LoanPaymentDetailView from '@/views/loan/PaymentDetail'
import LoanHistoryView from '@/views/loan/History'

import UserView from '@/views/user'
import UserCarView from '@/views/user/Car'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: __dirname,

  routes: [
    {
      path: '/car',
      name: 'HelloWorld',
      // component: HelloWorld
    },

    { path: '/wallet', component: WalletView },

    {
      path: '/loan',
      name: 'loan',
      component: LoanView
    },
    { path: '/loan/payment', component: LoanPaymentView},
    { path: '/loan/payment-detail', component: LoanPaymentDetailView},
    { path: '/loan/history', component: LoanHistoryView},

    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    { path: '/user/car', component: UserCarView }
  ]
})
