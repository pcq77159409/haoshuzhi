<template>
  <div class="pay_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)"/>
      <h4>订单支付</h4>
    </div>
    <div class="gou">
      <img src="../assets/gou.png" alt="" />
      <p>订单支付成功</p>
      <span>订单支付成功后3天内将进行发货</span>
    </div>
    <div class="watch">查看订单</div>
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
.pay_box {
  width: 100%;
  height: 100%;
}
.pay_box .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.pay_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.pay_box .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.pay_box .gou {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
}
.pay_box .gou img {
  width: 77px;
  height: 77px;
  margin-bottom: 26px;
}
.pay_box .gou p {
  font-size: 18px;
  color: #333333;
  font-weight: 600;
  margin-bottom: 20px;
}
.pay_box .gou span {
  font-size: 12px;
  color: #666666;
}
.pay_box .watch {
    width: 345px;
    height: 44px;
    margin: 0 15px;
    background-color: #ea5656;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 44px;
    border-radius: 25px;
    margin-top: 43px;
}
</style>