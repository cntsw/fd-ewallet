<template>
<div>asdf
    <flexbox>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-order.svg"></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-recent.svg"></div></flexbox-item>
      <flexbox-item><div class="flex-demo"><img slot="icon" src="../../assets/images/loan-record.svg"></div></flexbox-item>
    </flexbox>
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
</style>