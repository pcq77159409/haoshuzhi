<template>
  <div class="A">
    <div class="imgs">
      <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)"/>
      <p class="detalis">订单详情</p>
    </div>
    <div class="total">
      <div class="delivered">
        <p class="one">待发货</p>
        <p class="two">商家正在努力发件中, 请耐心等待</p>
      </div>
      <div class="right">
        <img src="../assets/cars.png" alt="" />
      </div>
    </div>
    <div class="address">
      <img src="../assets/ding.png" alt="" />
      <div>
        <p class="name">好名字 <span class="number">13133393741</span></p>
        <p class="add">收货地址:上海嘉定区平城路118弄</p>
      </div>
    </div>
    <div>
      <div class="orders">
        <div class="times">
          <p class="shoping">
            <img
              src="../assets/shop.png"
              alt=""
              class="shops"
            />数智时代专营店<span class="this">></span>
          </p>
        </div>
        <div class="xian"></div>
        <div class="names">
          <div class="heng">
            <p class="phonenumber">13133393741</p>
            <p class="redmoney">￥400</p>
          </div>
          <p class="yidong">上海移动</p>
          <p class="spend">含话费￥230</p>
          <p class="ordertime">
            <span class="need"
              >实付
              <h6 class="pay">￥400</h6></span
            >
          </p>
          <div class="money">
            <p class="moneys">退款</p>
          </div>
        </div>
      </div>
    </div>
    <div class="yes">
      <p>
        <img src="../assets/v@2x.png" alt="" class="v" />
        获得<span>160</span>点积分
      </p>
    </div>
    <div class="no">
      <p class="information">订单信息</p>
      <ul class="table">
        <li>
          订单编号:
          <p class="rights">123456789098776</p>
        </li>
        <li>
          支付方式:
          <p class="rights">微信支付</p>
        </li>
        <li>
          下单时间:
          <p class="rights">2021.03.16 16:23:27</p>
        </li>
        <li>
          发货时间:
          <p class="rights">2021.03.16 16:23:27</p>
        </li>
        <li>
          快递方式:
          <p class="rights">顺丰速运</p>
        </li>
        <li>
          运单编号:
          <p class="rights">92929292</p>
        </li>
      </ul>
    </div>
    <div class="make">
      <p>拨打电话</p>
      <div class="borders"></div>
      <p>咨询客服</p>
    </div>
    <div class="delivery">
      <div class="del" @click="onClickOpen">
        <p>提醒发货</p>
      </div>
    </div>
    <div class="signs" v-show="flag">
      <div class="white">
        <img src="../assets//bei.png" alt="" />
        <p>提醒商家发货成功</p>
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
    onClickOpen() {
      this.flag = true;
    },
    onClickClose() {
      this.flag = false;
    },
  },
};
</script>

<style>
.signs {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signs .white {
  width: 247px;
  height: 64px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signs .white img {
  width: 100%;
  height: 100%;

  margin-bottom: 12px;
  border-radius: 7px;
}

.signs .white p {
  color: white;
  font-size: 16px;
  margin-top: -55px;
}

.el-dialog {
  margin-top: 45vh;
  width: 233px;
}
.el-dialog--center {
  text-align: center;
  height: 70px;
  background: #666666;
  margin-top: 45vh;
}
.del p {
  border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 25px;
  color: #999999;
  font-size: 14px;
  width: 112px;
  height: 32px;
  line-height: 32px;
  margin-left: 250px;
}
.del {
  width: 100px;
  height: 40px;
}
.delivery {
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
}
.v {
  width: 20px;
  height: 20px;
}
.borders {
  border-right: 1px solid #ccc;
  width: 1px;
  height: 22px;
}
.make {
  width: 350px;
  height: 46px;
  background-color: white;
  margin: -52px 13px;
  border-radius: 5px;
  display: flex;
  color: #666666;
  justify-content: space-evenly;
  line-height: 46px;
  margin-bottom: 15px;
  align-items: center;
}
.make p {
  font-size: 15px;
}

.rights {
  margin-left: 25px;
}
.information {
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
  line-height: 40px;
}
.table {
  font-size: 12px;
  line-height: 40px;
}
.table li {
  display: flex;
  width: 200px;
  height: 30px;
  margin-left: 20px;
  margin-top: 9px;
}
.no {
  width: 350px;
  height: 290px;
  background-color: white;
  margin: 65px 13px;
  border-radius: 5px;
  font-size: 13px;
}
.yes p {
  line-height: 40px;
  display: flex;
  align-items: center;
}
.yes span {
  color: #fe5858;
}
.yes {
  width: 350px;
  height: 40px;
  background-color: white;
  margin: -52px 13px;
  border-radius: 5px;
  font-size: 13px;
}
.redmoney {
  color: #fe5858;
  font-size: 13px;
}
.heng {
  display: flex;
  justify-content: space-between;
}
.this {
  margin-left: 5px;
}
.moneys {
  position: absolute;
  right: 11px;
  bottom: 47px;
  border: 1px solid #666666;
  text-align: center;
  border-radius: 15px;
  color: #666666;
  font-weight: 600;
  padding: 0 18px;
  font-size: 12px;
}
.pay {
  margin: -25px 28px;
  font-size: 16px;
  color: #fe5858;
}
.need {
  margin: 0 255px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}
.ordertime {
  font-size: 12px;
  display: flex;
  margin-top: 5px;
}
.spend {
  font-size: 12px;
  margin-top: 5px;
}
.yidong {
  font-size: 12px;
  margin-top: 5px;
}
.phonenumber {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.xian {
  width: 330px;
  height: 1px;
  background-color: #f2f2f2;
  margin: 10px auto;
}
.names {
  margin: 0 10px;
  line-height: 25px;
  color: #666666;
}

.shoping {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}
.shops {
  width: 15px;
  height: 15px;
  padding: 0px 2px;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.orders {
  width: 350px;
  height: 183px;
  background-color: white;
  margin: 64px 13px;
  border-radius: 5px;
  position: relative;
}

.number {
  font-size: 13px;
  font-weight: 500;
  color: #333333;
}

.A {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f5f5f5;
}
.imgs {
  width: 100%;
  height: 85px;
  background-color: #fe5858;
  display: flex;
  position: relative;
  align-items: center;
}

.back {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.detalis {
  width: 100px;
  height: 30px;
  margin: 0 auto;
  color: white;
  font-size: 18px;
  font-weight: Medium;
  font-family: PingFang-SC-Medium;
}
.total {
  display: flex;
}
.delivered {
  width: 255px;
  height: 95px;
  background-color: #fe5858;
}
.right {
  width: 120px;
  height: 95px;
  background-color: #fe5858;
}
.right img {
  width: 60px;
  height: 52px;
  margin: 0 29px;
}
.address {
  position: absolute;
  margin: -27px 13px;
  width: 350px;
  height: 80px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.address img {
  width: 20px;
  height: 30px;
  margin-left: 20px;
  margin-top: 8px;
}
.name {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  width: 200px;
  margin: 6px 15px;
}
.add {
  font-size: 13px;
  color: #333333;
  width: 200px;
  margin: 0 15px;
}
.address {
  position: absolute;
  margin: -27px 13px;
  width: 350px;
  height: 80px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.address img {
  width: 20px;
  height: 30px;
  margin-left: 20px;
  margin-top: 8px;
}
.one {
  width: 100px;
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-left: 40px;
}
.two {
  width: 220px;
  height: 30px;
  font-size: 14px;
  color: white;
  margin-left: 42px;
}
</style>