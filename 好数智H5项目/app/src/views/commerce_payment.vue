<template>
  <div class="ace_jump_search">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)"/>
      <h4>订单支付</h4>
    </div>
    <div class="force_time">
      <div class="inform">
        <p>支付剩余时间</p>
        <span>29 : 59 ：29</span>
      </div>
      <h2>￥900.00</h2>
      <i>订单编号: <span>DD202012191212</span></i>
    </div>
    <div class="debugformat">
        <div class="restore">
            <img src="../assets/1234.png" alt="">
            <p>余额支付</p>
            <span>当前余额9999999元</span>
            <img src="../assets/选择 拷贝 2@2x.png" alt="" class="xs" v-show="false">
            <img src="../assets/选择 拷贝 3@2x.png" alt="">
        </div>
        <div class="restore wecat">
            <img src="../assets/5678.png" alt="">
            <p>微信支付</p>
            <img src="../assets/选择 拷贝 2@2x.png" alt="" class="xs" v-show="false">
            <img src="../assets/选择 拷贝 3@2x.png" alt="">
        </div>
    </div>
    <router-link to="/Payload">
        <div class="offset">确认支付</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script> 
<style lang="scss" scoped>
.ace_jump_search {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.ace_jump_search .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.ace_jump_search .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.ace_jump_search .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.ace_jump_search .force_time {
  width: 100%;
  height: 12 0px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ace_jump_search .force_time .inform {
  display: flex;
  margin-bottom: 20px;
}
.ace_jump_search .force_time .inform span,
.ace_jump_search .force_time .inform p {
  font-size: 12px;
  color: #ea5656;
  margin-right: 6px;
}
.ace_jump_search .force_time h2 {
    margin-right: 4px;
    color: #333333;
    margin-bottom: 17px;
}
.ace_jump_search .force_time i {
    color: #666666;
    font-size: 12px;
}
.ace_jump_search .force_time i span {
    margin-left: 6px;
}
.ace_jump_search .debugformat {
    width: 353px;
    height: 109px;
    margin: 45px 11px 227px;
    background-color: #fff;
    border-radius: 4px;
}
.ace_jump_search .debugformat .restore {
    display: flex;
    align-items: center;
    width: 325px;
    height: 50%;
    margin: 0 14px;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
}
.ace_jump_search .debugformat .restore img:first-child{
    width: 16px;
    height: 17px;
    margin-right: 14px;
}
.ace_jump_search .debugformat .restore img:last-child {
    width: 15px;
    height: 15px;
    margin-left: 90px;
}
.ace_jump_search .debugformat .restore .xs{
    width: 15px;
    height: 15px;
    position: absolute;
    right: 1px;
}
.ace_jump_search .debugformat .restore p{
    font-size: 15px;
    color: #333333;
    font-weight: 600;
    margin-right: 20px;
}
.ace_jump_search .debugformat .restore span {
    font-size: 12px;
    color: #666666;
}
.ace_jump_search .debugformat .wecat img:last-child {
    margin-left: 200px;
}
.ace_jump_search .offset {
    width: 345px;
    height: 44px;
    margin: 0 15px;
    background-color: #ea5656;
    border-radius: 25px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    font-size: 16px;
}
</style>