<template>
  <div>
      <x-header>我的爱车</x-header>
      <div align="center"> 
        <img width="80%" src="../../assets/images/car.png" />

        <span class="car-btns">
        <flexbox>
            <flexbox-item><x-button type="primary">启动</x-button></flexbox-item>
            <flexbox-item><x-button type="primary">锁车</x-button></flexbox-item>
        </flexbox>
        </span>
      </div>
      <div style="padding:15px;">
        <x-table full-bordered style="background-color:#fff;" class="car-table">
          <thead>
            <tr>
              <th style="font-size:30px" colspan="2">宝马320xxx</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="prop-card">
                  2.63<small>万公里</small><br/>
                  <small>行驶里程</small>
                </div>
              </td>
              <td>
               <div class="prop-card">
                  2.8<small>T</small><br/>
                  <small>排量</small>
                </div>
              </td>
            </tr>
            <tr>
              <td>
               <div class="prop-card">
                  国V<br/>
                  <small>排放标准</small>
                </div>
              </td>
              <td>
               <div class="prop-card">
                  良好<br/>
                  <small>车辆状况</small>
                </div>
              </td>
            </tr>
            <tr>
              <td>
               <div class="prop-card">
                  2019-08<br/>
                  <small>购买时间</small>
                </div>
              </td>
              <td>
               <div class="prop-card">
                  2019-10<br/>
                  <small>上牌时间</small>
                </div>
              </td>
            </tr>
          </tbody>
        </x-table>
    </div>
  </div>
</template>

<script>
import { XTable, LoadMore } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XTable,
    LoadMore,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style scoped>
.prop-card {
  font-size: 25px;
  line-height: 15px;
  height: 100%;
}
.prop-card small{
  font-size: 10px;
}

.car-table tr{
    height: 65px;
}
.car-table td,tr{
  border-right: 0px !important
}

.car-btns button{
  width: 80%
}

</style>