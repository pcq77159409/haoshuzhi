<template>
  <div class="wallet_box">
    <div class="plassets">
      <div class="mine_bag">
        <img src="../assets/left.png" alt="" class="left" @click="$router.go(-1)"/>
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
    <div class="tix" @click="$router.push('/withdrala')">佣金提现</div>
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
  created(){
    this.$axios.get('/api/integral_log/getlist').then(val=>{
      console.log(val);
    })
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.wallet_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.wallet_box .plassets {
  width: 100%;
  height: 230/@vw;
  background: url("../assets/组 6@2x (1).png") no-repeat;
  background-size: 100% 230/@vw;
}
.wallet_box .plassets .mine_bag {
  display: flex;
}
.wallet_box .plassets .mine_bag img {
  width: 10/@vw;
  height: 16/@vw;
  margin: 31/@vw 0 0 15/@vw;
}
.wallet_box .plassets .mine_bag h4 {
  font-size: 16/@vw;
  color: #ffffff;
  margin: 28/@vw auto 0;
  font-weight: 500;
}
.wallet_box .plassets .total_errors {
  margin: 62/@vw 0 0 68/@vw;
  text-align: center;
  width: 100/@vw;
}
.wallet_box .plassets .total_errors:nth-of-type(2) {
  margin-left: 40/@vw;
}
.wallet_box .plassets .total_errors p {
  font-size: 12/@vw;
  color: #ffffff;
  margin-bottom: 12/@vw;
}
.wallet_box .plassets .total_errors span {
  font-size: 22/@vw;
  color: #ffffff;
}
.wallet_box .plassets .dolors {
  display: flex;
  align-items: center;
}
.wallet_box .plassets .dolors i {
  width: 1/@vw;
  height: 42/@vw;
  background-color: #f2f2f2;
  margin: 60/@vw 0 0 30/@vw;
}
.wallet_box .tix {
  width: 163/@vw;
  height: 50/@vw;
  background: url("../assets/white.png") no-repeat;
  background-size: 163/@vw 50/@vw;
  text-align: center;
  line-height: 50/@vw;
  color: #ea5656;
  font-size: 14/@vw;
  margin: -28/@vw auto;
}
.wallet_box  ul {
    width: 345/@vw;
    height: 88/@vw;
    background-color: #fff;
    margin: 56/@vw auto 0;
}
.wallet_box  ul li {
    width: 325/@vw;
    height: 43/@vw;
    margin: 0 10/@vw;
    border-bottom: 1/@vw solid #f2f2f2;
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
    width: 15/@vw;
    height: 15/@vw;
    margin-right: 10/@vw;
}
.wallet_box  ul li  .szmx p {
    font-size: 12/@vw;
    color: #666666;
}
.wallet_box  ul li img {
    width: 5/@vw;
    height: 10/@vw;
}
</style>