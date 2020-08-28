<template>
<div>
    <x-header>还钱</x-header>
    <div class="total">
        <div class="total_title">未还本金总额 (元)</div><br>
        <div class="total_number"><b>12345.00</b></div><br>
        <x-button class="total_btn" link="#">提前还款</x-button>
    </div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">近期还款</tab-item>
      <tab-item disabled @on-item-click="onItemClick">全部账单</tab-item>
    </tab>
    <group>
        <cell is-link title="9月21日应还" link="/loan/payment-detail">
        <b>12345.00</b><br>
        <b>还款当日从招商银行自动扣款</b>
        </cell>
    </group>
</div>



</template>
<script>
import { Grid, GridItem, GroupTitle, Divider, Card, XButton,Cell,Group } from "vux";
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, FormPreview } from 'vux'
import { Tab, TabItem } from 'vux'

export default {
  components: {
    XButton,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    FormPreview,
    Tab,
    TabItem,
    Cell,
    Group
  }
};
</script>
<style scoped>
.total{
    margin: 10px 10px;
    height: 145px;
    border-color: #f3f3f3;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    font-size: 14px;
    padding: 0px;
    text-align: center;
    line-height: 20px;
    font-weight: normal;
    font-style: normal;
    background-color: white;
    line-height: 1;
}
.total_title{
    margin-top: 20px;
    line-height: 13px;
    font-weight: normal;
    font-style: normal;
}
.total_number{
    font-size: 28px;
    margin-bottom: 10px;
}
.total_btn{
    width: 100px;
    font-size: 14px;
    color: #1e82d2;
    background-color: white;
}



</style>