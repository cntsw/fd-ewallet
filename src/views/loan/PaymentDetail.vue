<template>
  <div>
    <x-header>还钱</x-header>
    <group>
      <cell title="还款本金（元）">50212</cell>
      <cell title="息费（元）">1827.12</cell>
      <cell title="优惠券（元）">50212</cell>
      <cell title="息费抵扣金（元）">50212</cell>
      <cell title="总还款额（元）">50212</cell>
    </group>
    <group>
      <cell title="还款银行卡">45989281982909817878</cell>
    </group>
    <x-button type="primary" link="#">确定还款</x-button>
  </div>
</template>


<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
import { XHeader,XButton } from 'vux'

export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,

    XHeader,
    XButton
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}

.weui-btn{
  width: 70%;
  margin-top: 15px;
  background-color: #1e82d2;
}
</style>