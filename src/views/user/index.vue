<template>
<div>
    <!-- <flexbox>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-order.svg"></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-recent.svg"></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-record.svg"></div></flexbox-item>
    </flexbox> -->

    
    <group class="my-group">
      <cell title='银行卡' link="#">
        <img slot="icon"  src="../../assets/images/credit-card.svg">
      </cell>
      <cell title='信用卡' link="#">
        <img slot="icon" src="../../assets/images/credit-card.svg">
      </cell>
    </group>
    <group class="my-group">
      <cell title='我的爱车' link="/user/car">
        <img slot="icon"  src="../../assets/icons/car-sport.svg">
      </cell>
      <cell title='车辆服务' link="#">
        <img slot="icon" src="../../assets/icons/car-sport-o.svg">
      </cell>
    </group>
    <group class="my-group">
      <cell title='车商认证' link="#">
        <img slot="icon"  src="../../assets/icons/car-dealer.svg">
      </cell>
      <cell title='车商信息' link="#">
        <img slot="icon" src="../../assets/icons/car-dealer-info.svg">
      </cell>
    </group>
</div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Divider
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}

.my-group img{
  margin: 3px 10px 0px 10px;
  height: 30px;
}
</style>