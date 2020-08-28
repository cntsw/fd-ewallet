<template>
  <div>
    <x-header>借还记录</x-header>
    <tab>
      <tab-item disabled @on-item-click="onItemClick">借款记录</tab-item>
      <tab-item selected @on-item-click="onItemClick">还款记录</tab-item>
    </tab>
    <group>
      <cell title="还款1232元" inline-desc='2020-01-13 22:12'>还款失败</cell>
      <cell title="还款332元" inline-desc='2019-01-13 22:12'>还款失败</cell>
    </group>
  </div>
</template>


<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
import { XHeader,XButton } from 'vux'
import { Tab, TabItem } from 'vux'

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
    XButton,

    Tab,
    TabItem,
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