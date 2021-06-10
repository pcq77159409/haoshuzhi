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
<style lang="scss" scoped>
.payment_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
//   padding-top: 10px;
//   overflow: hidden;
}
.payment_box .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
//   position: absolute;
//   left: 0;
//   top: 0;
}
.payment_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.payment_box .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.payment_box .top_up {
  width: 345px;
  height: 165px;
  background-color: #fff;
  margin: 10px 15px;
}
.payment_box .top_up .deposit {
  width: 325px;
  height: 103px;
  margin: 0 10px;
  border-bottom: 1px solid#ebebeb;
  text-align: center;
}
.payment_box .top_up .deposit p {
  padding-top: 30px;
  font-size: 12px;
  color: #999999;
}
.payment_box .top_up .deposit span {
  display: inline-block;
  font-size: 22px;
  color: #999999;
  padding-top: 10px;
}
.payment_box .top_up .need {
  width: 325px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
}
.payment_box .top_up .need p {
  font-size: 12px;
  color: #333333;
}
.payment_box .top_up .need span {
  color: #333333;
  font-size: 18px;
  font-weight: 600;
}
.payment_box .recommend {
    width: 345px;
    height: 87px;
    background-color: #fff;
    margin: 0 15px;
}
.payment_box .recommend h5{
    padding: 16px 0 0 11px;
    box-sizing: border-box;
}
.payment_box .recommend .wechat_pay {
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.payment_box .recommend .wechat_pay img:first-child {
    width: 23px;
    height: 20px;
    margin: 0 10px;
}
.payment_box .recommend .wechat_pay p{
    font-size: 12px;
    color: #333333;
}
.payment_box .recommend .wechat_pay img:nth-of-type(2) {
    width: 21px;
    height: 10px;
    margin-left: 10px;
}
.payment_box .recommend .wechat_pay img:last-child {
    width: 12px;
    height: 12px;
    margin-left: 200px;
}
.payment_box .text {
    margin: 15px 0 0 15px;
}
.payment_box .text p{
    font-size: 12px;
    color: #999999;
    margin-bottom: 6px;
}
.payment_box .que {
    width: 345px;
    height: 44px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 44px;
    margin: 50px 15px 0;
    background-color: #ea5656;
    border-radius: 25px;
}
</style>