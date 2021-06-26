<template>
  <div class="payment_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>缴纳押金</h4>
    </div>
    <div class="top_up">
      <div class="deposit">
        <p>押金(元)</p>
        <span>0.00</span>
      </div>
      <div class="need">
        <p>需充值押金</p>
        <span>￥10000.00</span>
      </div>
    </div>
    <div class="recommend">
        <h5>支付方式</h5>
        <div class="wechat_pay">
            <img src="../assets/5678.png" alt="" >
            <p>微信支付</p>
            <img src="../assets/tui.png" alt="">
            <img src="../assets/888.png" alt="">
        </div>
    </div>
    <div class="text">
        <p>* 系统将在您的余额中冻结10000元押金</p>
        <p>* 1.xxxxxx规则，押金将退到余额里 </p>
        <p>* 2.xxxxxx规则，押金将自动返还</p>
    </div>
    <div class="que" @click="$router.push('/money_road')">
        确认缴纳
    </div>
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
<style lang="less" scoped>
@import "../assets/css/base.less";
.payment_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
//   padding-top: 10/@vw;
//   overflow: hidden;
}
.payment_box .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: relative;
//   position: absolute;
//   left: 0;
//   top: 0;
}
.payment_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
  pointer-events: auto;
}
.payment_box .jumplabel h4 {
  font-size: 16/@vw;
  margin-left: 132/@vw;
  color: #fff;
  font-weight: 500;
}
.payment_box .top_up {
  width: 345/@vw;
  height: 165/@vw;
  background-color: #fff;
  margin: 10/@vw 15/@vw;
}
.payment_box .top_up .deposit {
  width: 325/@vw;
  height: 103/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid#ebebeb;
  text-align: center;
}
.payment_box .top_up .deposit p {
  padding-top: 30/@vw;
  font-size: 12/@vw;
  color: #999999;
}
.payment_box .top_up .deposit span {
  display: inline-block;
  font-size: 22/@vw;
  color: #999999;
  padding-top: 10/@vw;
}
.payment_box .top_up .need {
  width: 325/@vw;
  height: 62/@vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10/@vw;
}
.payment_box .top_up .need p {
  font-size: 12/@vw;
  color: #333333;
}
.payment_box .top_up .need span {
  color: #333333;
  font-size: 18/@vw;
  font-weight: 600;
}
.payment_box .recommend {
    width: 345/@vw;
    height: 87/@vw;
    background-color: #fff;
    margin: 0 15/@vw;
}
.payment_box .recommend h5{
    padding: 16/@vw 0 0 11/@vw;
    box-sizing: border-box;
}
.payment_box .recommend .wechat_pay {
    display: flex;
    align-items: center;
    margin-top: 20/@vw;
}
.payment_box .recommend .wechat_pay img:first-child {
    width: 23/@vw;
    height: 20/@vw;
    margin: 0 10/@vw;
}
.payment_box .recommend .wechat_pay p{
    font-size: 12/@vw;
    color: #333333;
}
.payment_box .recommend .wechat_pay img:nth-of-type(2) {
    width: 21/@vw;
    height: 10/@vw;
    margin-left: 10/@vw;
}
.payment_box .recommend .wechat_pay img:last-child {
    width: 12/@vw;
    height: 12/@vw;
    margin-left: 200/@vw;
}
.payment_box .text {
    margin: 15/@vw 0 0 15/@vw;
}
.payment_box .text p{
    font-size: 12/@vw;
    color: #999999;
    margin-bottom: 6/@vw;
}
.payment_box .que {
    width: 345/@vw;
    height: 44/@vw;
    color: #fff;
    font-size: 16/@vw;
    text-align: center;
    line-height: 44/@vw;
    margin: 50/@vw 15/@vw 0;
    background-color: #ea5656;
    border-radius: 25/@vw;
}
</style>