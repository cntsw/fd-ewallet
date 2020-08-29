<template>
  <div>
    <x-header :left-options="{showBack: false}" class="page-header">账户总览</x-header>
    <div class="balance">
        <span>1130,000.00</span><br>
        <span class="label">存款(元)</span>
        <hr style="margin: 50px 0px 10px 0px; color: #4d4d4d"/>
        <div slot="content" class="balance-content card-demo-content01">
          <div class="vux-1px-r">
            <span>10.000.00</span>
            <br />
            信用卡额度(元)
          </div>
          <div>
            <span>0.00</span>
            <br />
            总负债(元)
          </div>
        </div>
    </div>


    <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-buttons">
      <grid-item link="#" class="grid-item-full">
        <img slot="icon" src="../../assets/images/scan.svg" />
        <span slot="label" class="grid-buttons__label">扫一扫</span>
      </grid-item>
      <grid-item link="#" class="grid-item-full">
        <img slot="icon" src="../../assets/images/qr-code.svg" />
        <span slot="label" class="grid-buttons__label">付钱</span>
      </grid-item>
       <grid-item link="#" class="grid-item-full">
        <img slot="icon" src="../../assets/images/rcv-money.svg" />
        <span slot="label" class="grid-buttons__label">收钱</span>
      </grid-item>
       <grid-item link="#" class="grid-item-full">
        <img slot="icon" src="../../assets/images/card.svg" />
        <span slot="label" class="grid-buttons__label">卡包</span>
      </grid-item>
    </grid>
    <group title="活期">
        <!-- <div slot="title" class="card-header">
            <div class="card-circle"></div>
            <b>活期</b>
        </div> -->
        <cell 
            title='人民币'
            link="#">
            <b>10,000.00</b><br>
        </cell>
        <div style="margin-left:20px">
            <cell title='6214 **** **** 1234' link="#">
                <b>5,000.00</b><br>
            </cell>
            <cell title='6214 **** **** 1234' link="#">
                <b>5,000.00</b><br>
            </cell>
        </div>
    </group>


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


.grid-item-full {
  height: 100%;
}

/* card */
.card{
  /* margin: 10px 30px 0px 30px; */
  vertical-align: top;
  box-sizing: border-box; 
  border: 1px #e6e6e6 solid; 
  border-right: 0;
  /* border-radius: 10px 10px;  */
  box-shadow: 0 0 6px 1px #e4e4e4
}
.card-header{
    font-size: 20px;
    /* margin: 6px 30px; */
    background-color: white;
}
.weui-cells{
    margin-top: 0px;
}

.card-circle{
    width: 22px;
    /* height: 22px; */
    background-color: rgb(0, 131, 200);
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

.balance-content{
   display: flex; 
}
.balance-content > div {
  flex: 1;
  text-align: center;
  margin-left: 0px;
  font-family: SourceHanSansSC;
  font-weight: 700;
  font-size: 13px;
  color: rgb(126, 126, 126);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 22px;
  text-decoration: none;
}
.balance-content span {
  font-family: SourceHanSansSC;
  font-weight: 400;
  font-size: 18px;
  color: white;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 17px;
  text-decoration: none;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: left;
  margin-left: 0px;
  font-family: SourceHanSansSC;
  font-weight: 700;
  font-size: 15px;
  color: rgb(126, 126, 126);
  font-style: normal;
  letter-spacing: 0px;
  line-height: 22px;
  text-decoration: none;
}

.weui-btn{
  width: 70%;
  margin-top: 15px;
}

.balance{
  height: 160px !important;
  font-size: 30px;
  color: white;
  text-align: center;
  padding: 30px 10px;
  

  /* margin-top: 20px; */
  line-height: 1;
  height: 99px;
  background-color: #263239;
}
.balance .label{
  color: #919191;
  font-size: 13px;
}

.page-header{
    background-color: #263239;
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