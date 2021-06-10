<template>
  <div class="wallet_box">
    <div class="plassets">
      <div class="mine_bag">
        <img src="../assets/left.png" alt="" class="left" />
        <h4>我的钱包</h4>
      </div>
      <div class="dolors">
        <div class="total_errors">
          <p>总资产（元）</p>
          <span>6,000.00</span>
        </div>
        <i></i>
        <div class="total_errors">
          <p>累计佣金（元）</p>
          <span>2,000.00</span>
        </div>
      </div>
    </div>
    <div class="tix">佣金提现</div>
    <ul>
      <li @click="$router.push('/newOrderPayment')">
        <div class="szmx">
          <img src="../assets/ya.png" alt="" />
          <p>收支明细</p>
        </div>
        <img src="../assets/跳转箭头@2x.png" alt="">
      </li>
      <li @click="$router.push('/Deposit')">
        <div class="szmx" >
          <img src="../assets/ya.png" alt="" />
          <p>我的押金</p>
        </div>
        <img src="../assets/跳转箭头@2x.png" alt="">
      </li>
    </ul>
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
.wallet_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.wallet_box .plassets {
  width: 100%;
  height: 230px;
  background: url("../assets/组 6@2x (1).png") no-repeat;
  background-size: 100% 230px;
}
.wallet_box .plassets .mine_bag {
  display: flex;
}
.wallet_box .plassets .mine_bag img {
  width: 10px;
  height: 16px;
  margin: 31px 0 0 15px;
}
.wallet_box .plassets .mine_bag h4 {
  font-size: 16px;
  color: #ffffff;
  margin: 28px auto 0;
  font-weight: 500;
}
.wallet_box .plassets .total_errors {
  margin: 62px 0 0 68px;
  text-align: center;
  width: 100px;
}
.wallet_box .plassets .total_errors:nth-of-type(2) {
  margin-left: 40px;
}
.wallet_box .plassets .total_errors p {
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 12px;
}
.wallet_box .plassets .total_errors span {
  font-size: 22px;
  color: #ffffff;
}
.wallet_box .plassets .dolors {
  display: flex;
  align-items: center;
}
.wallet_box .plassets .dolors i {
  width: 1px;
  height: 42px;
  background-color: #f2f2f2;
  margin: 60px 0 0 30px;
}
.wallet_box .tix {
  width: 163px;
  height: 50px;
  background: url("../assets/white.png") no-repeat;
  background-size: 163px 50px;
  text-align: center;
  line-height: 50px;
  color: #ea5656;
  font-size: 14px;
  margin: -28px auto;
}
.wallet_box  ul {
    width: 345px;
    height: 88px;
    background-color: #fff;
    margin: 56px 15px 0;
}
.wallet_box  ul li {
    width: 325px;
    height: 43px;
    margin: 0 10px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wallet_box  ul li:last-child{
    border-bottom: none;
}
.wallet_box  ul li  .szmx {
    display: flex;
    align-items: center;
}
.wallet_box  ul li  .szmx img{
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
.wallet_box  ul li  .szmx p {
    font-size: 12px;
    color: #666666;
}
.wallet_box  ul li img {
    width: 5px;
    height: 10px;
}
</style>