<template>
  <div>
    <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-header">
      <!-- <grid-item link="/component/cell" label="30,000.00" class="grid-header-item">剩余待还款</grid-item> -->
      <div class="payment">
        <span>30,000.00</span><br>
        <span class="label">剩余待还款</span>
      </div>
    </grid>

    <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-buttons">
      <grid-item link="/loan/payment" class="grid-item-full">
        <img slot="icon" src="../../assets/images/loan-recent.svg" />
        <span slot="label" class="grid-buttons__label">近期待还</span>
      </grid-item>
      <grid-item link="/loan/history" class="grid-item-full">
        <img slot="icon" src="../../assets/images/loan-record.svg" />
        <span slot="label" class="grid-buttons__label">借还记录</span>
      </grid-item>
      <grid-item @on-item-click="onItemClick" class="grid-item-full">
        <img slot="icon" src="../../assets/images/loan-order.svg" />
        <span slot="label" class="grid-buttons__label">我的订单</span>
      </grid-item>
    </grid>
    
    <div style="margin-top:20px !important">
      <card :header="{title: '工商银行', class: 'card-title'}" class="card">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>已用额度(元)</span>
            <br />
            {{ '￥10,000' }}
          </div>
          <div class="vux-1px-r">
            <span>总额度(元)</span>
            <br />
            {{ '￥10,000' }}
          </div>
        </div>
      </card>
      <card :header="{title: '建设银行'}" class="card">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>已用额度(元)</span>
            <br />
            {{ '￥10,000' }}
          </div>
          <div class="vux-1px-r">
            <span>总额度(元)</span>
            <br />
            {{ '￥10,000' }}
          </div>
        </div>
      </card>
    </div>
    <x-button type="primary" link="#">额度申请</x-button>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle, Divider, Card, XButton } from "vux";

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Card,
    Divider,
    XButton
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    }
  }
};
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}

.grid-header {
  height: 99px;
  background-color: #263239;
}

.grid-item-full {
  height: 100%;
}

/* card */
.card{
  margin: 10px 30px 0px 30px;
  vertical-align: top;
  box-sizing: border-box; 
  border: 1px #e6e6e6 solid; 
  border-right: 0;
  border-radius: 10px 10px; 
  box-shadow: 0 0 6px 1px #e4e4e4
}
.card-title{
  font-family: SourceHanSansSC;
  font-weight: 700;
  font-size: 15px;
  color: rgb(16, 16, 16);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 22px;
  text-decoration: none;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: left;
  margin-left: 20px;
  font-family: SourceHanSansSC;
  font-weight: 700;
  font-size: 15px;
  color: rgb(69, 70, 69);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 22px;
  text-decoration: none;
}
.card-demo-flex span {
  font-family: SourceHanSansSC;
  font-weight: 400;
  font-size: 11px;
  color: rgb(175, 176, 175);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 17px;
  text-decoration: none;
}
.weui-btn{
  width: 70%;
  margin-top: 15px;
}

.payment{
  height: 100%;
  font-size: 30px;
  color: white;
  text-align: center;
  margin-top: 20px;
  line-height: 1;
}
.payment .label{
  color: #919191;
  font-size: 13px;
}

.grid-buttons__label{
  color: white;
}
.grid-buttons {
  /* height: 108px; */
  height: 98px;
  background-color: #1e82d2;
  text-align: center;
}
.grid-buttons img{
  /* height: 150%; */
  /* width: 150%;
  width: 150%; */ 
}
</style>