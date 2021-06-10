<template>
  <div class="ccccc">
    <div class="my_box">
      <div class="box">
        <p>我的</p>
        <img src="../assets/bg.png" alt="" class="bg" />
      </div>
      <div class="good">
        <div class="user_name">
          <img src="../assets/Head_portrait.png" alt="" class="Head_portrait" />
          <div class="id">
            <p>好名字</p>
            <p>ID:123456</p>
          </div>
        </div>
        <div @click="onClickOpen">
          <img src="../assets/sign.png" alt="" class="sign" />
        </div>
      </div>
      <!-- 我的账户 -->
      <div class="account">
        <h3>我的账户</h3>
        <ul>
          <li @click="$router.push('/walletmodel')">
            <img src="../assets/balance.png" alt="" />
            <p>钱包余额</p>
          </li>
          <li>
            <img src="../assets/coupon.png" alt="" />
            <p>优惠劵</p>
          </li>
          <li @click="$router.push('/integral')">
            <img src="../assets/integral.png" alt="" />
            <p>积分</p>
          </li>
        </ul>
      </div>
      <!-- 我的订单 -->
      <div class="ordering">
        <div class="mine">
          <h3>我的订单</h3>
          <div class="all">
            <span>查看全部</span>
            <img src="../assets/形状 20@2x.png" alt="" />
          </div>
        </div>
        <ul class="finish">
          <li @click="$router.push('/order')">
            <img src="../assets/pay.png" alt="" />
            <p>待支付</p>
          </li>
          <li @click="$router.push('/order')">
            <img src="../assets/delivery.png" alt="" />
            <p>待发货</p>
          </li>
          <li @click="$router.push('/order')">
            <img src="../assets/closed.png" alt="" />
            <p>待收货</p>
          </li>
          <li @click="$router.push('/order')">
            <img src="../assets/complete.png" alt="" />
            <p>已完成</p>
          </li>
          <li>
            <img src="../assets/sales.png" alt="" />
            <p>退款/售后</p>
          </li>
        </ul>
        <div class="wait">
          <div class="payment_box">
            <img src="../assets/card.png" alt="" />
            <div>
              <p>手机靓号:13566668866</p>
              <p>等待付款</p>
            </div>
          </div>
          <span>立即支付</span>
        </div>
      </div>
      <div class="road">
        <ul>
          <li @click="$router.push('/apply_for')">
            <img src="../assets/矢量智能对象@2x.png" alt="" />
            <p>生财之道</p>
          </li>
          <li @click="$router.push('/Purchase')">
            <img src="../assets/订单@2x.png" alt="" />
            <p>购买流程</p>
          </li>
          <li @click="onCLickadd()">
            <img src="../assets/坐标1@2x.png" alt="" />
            <p>收货地址</p>
          </li>
          <li @click="$router.push('/setting')">
            <img src="../assets/set.png" alt="" />
            <p>设置</p>
          </li>
        </ul>
      </div>
      <!-- 蒙层 -->
      <div class="signs" v-show="flag">
        <div class="white">
          <img src="../assets/seven.png" alt="" />
          <h4>签到成功</h4>
          <p>获得<span>2</span>积分</p>
          <div class="know" @click="onClickClose">我知道了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    onCLickadd() {
      this.$router.push("/GoAddress");
    },
    onClickOpen() {
      this.flag = true;
    },
    onClickClose() {
      this.flag = false;
    },
    
  },
};
</script>


<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
}
.ccccc {
  position: relative;
}
.my_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding-bottom: 100px;
}
.box {
  width: 100%;
  height: 266px;
}
.box .bg {
  width: 100%;
  height: 266px;
  margin: 0 auto;
}
.box p {
  position: absolute;
  left: 45%;
  top: 35px;
  color: #ffffff;
  font-weight: 500;
}
.good {
  position: absolute;
  left: 30px;
  top: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}
.good .user_name {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.Head_portrait {
  width: 59pt;
  height: 59pt;
  margin-right: 20px;
}
.id p {
  color: #ffffff;
  margin-top: 15px;
  margin-bottom: 10px;
}
.sign {
  width: 32px;
  height: 28px;
}
.account {
  width: 353px;
  height: 100pt;
  background-color: #fff;
  margin: 0 11px;
  position: absolute;
  top: 181px;
  border-radius: 5px;
}
.account h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  font-family: PingFang-SC-Medium;
  margin: 12px 0 12px 19px;
}
.account ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 2px solid #f8f8f8;
  align-items: center;
}
.account ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10pt;
}
.account ul li img {
  width: 22pt;
  height: 22pt;
}
.account ul li p {
  font-size: 13px;
  color: #666666;
  margin-top: 4px;
}
.ordering {
  border-radius: 5px;
  width: 353px;
  height: 180pt;
  background-color: #fff;
  margin: 60px 11px 0 11px;
}
.ordering .mine {
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ordering .mine h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  font-family: PingFang-SC-Medium;
  margin: 12px 0;
}
.ordering .mine .all img {
  width: 6pt;
  height: 8pt;
  margin-left: 10px;
}
.ordering .mine .all span {
  font-size: 12px;
  color: #999999;
}
.ordering .finish {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 2px solid #f8f8f8;
}
.ordering .finish li {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
}
.ordering .finish li p {
  font-size: 13px;
  color: #666666;
}
.ordering .finish li img {
  margin-bottom: 10px;
}
.ordering .finish li:nth-of-type(1) p {
  margin-bottom: 10px;
}
.ordering .finish li:nth-of-type(1) img {
  width: 25pt;
  height: 23pt;
}
.ordering .finish li:nth-of-type(2) img {
  width: 19pt;
  height: 16pt;
}
.ordering .finish li:nth-of-type(3) img {
  width: 19pt;
  height: 16pt;
}
.ordering .finish li:nth-of-type(4) img {
  width: 14pt;
  height: 16pt;
}

.ordering .finish li:nth-of-type(5) img {
  width: 18pt;
  height: 16pt;
}
.ordering .wait {
  width: 316px;
  height: 53pt;
  background-color: #f8f8f8;
  margin: 12px auto 0;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
}
.ordering .wait span {
  display: inline-block;
  color: #ff5757;
  font-size: 12px;
  width: 72px;
  margin: 46px 6px 6px 0;
  border: 1px solid #ff5757;
  border-radius: 8px;
  text-align: center;
}
.ordering .wait .payment_box {
  display: flex;
  align-items: center;
}
.ordering .wait .payment_box P:first-child {
  color: #333333;
  font-size: 12px;
  margin: 10px 0;
}
.ordering .wait .payment_box P:last-child {
  color: #ff5757;
  font-size: 12px;
}
.ordering .wait .payment_box img {
  width: 44pt;
  height: 44pt;
  margin: 0 10px;
}
.road {
  border-radius: 5px;
  width: 354px;
  height: 64pt;
  background-color: #fff;
  margin: 10px auto 8px;
  //   display: flex;
  //   justify-content: center;
}
.road ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.road ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.road ul li img {
  width: 25pt;
  height: 25pt;
}
.road ul li p {
  margin-top: 6px;
  color: #666;
  font-size: 12px;
}
.signs {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signs .white {
  width: 247px;
  height: 215px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signs .white img {
  width: 82px;
  height: 58px;
  margin-top: 28px;
  margin-bottom: 12px;
}
.signs .white h4 {
  font-size: 12pt;
  color: #333333;
  font-weight: bold;
  margin-bottom: 11px;
}
.signs .white p {
  color: #666666;
  font-size: 12px;
  margin-bottom: 20px;
}
.signs .white span {
  color: #ff5757;
  margin: 0 6px;
}
.signs .white .know {
  width: 178px;
  height: 35px;
  background: url("../assets/red.png") no-repeat;
  background-size: 178px 35px;
  text-align: center;
  line-height: 35px;
  color: #ffffff;
  font-size: 14px;
}
</style>