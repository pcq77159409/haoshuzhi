<template>
  <div class="A">
    <div class="imgs">
      <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)"/>
      <p class="detalis">退款详情</p>
    </div>
    <div class="total">
      <div class="delivered">
        <p class="one">商家已拒绝</p>
        <p class="two">还剩1天21时25分</p>
      </div>
      <div class="right">
        <img src="../assets/cars.png" alt="" />
      </div>
    </div>
    <div class="address">
      <p class="name">商家拒绝您的申请，填写有误建议修改在次提交。</p>
      <p class="add">您可修改后再次发起，商家会重新处理</p>
      <p class="adds">
        如果您逾期未处理本次申请将自动关闭，关闭后若超出保障期，不能在提交
      </p>
    </div>
    <div>
      <div class="orders">
        <p class="tuikuan">退款信息</p>
        <div class="card">
          <p class="number">13133393741</p>
          <p class="yingye">上海移动</p>
          <div class="three">
            <p class="money">含话费￥320</p>
            <p class="total">总金额:<span class="moneys">￥500</span></p>
          </div>
        </div>
        <ul class="table">
          <li>
            退款原因:
            <p class="rights">123456789098776</p>
          </li>
          <li>
            退款金额:
            <p class="rights">￥500</p>
          </li>
          <li>
            申请时间:
            <p class="rights">2021.03.16 16:23:27</p>
          </li>
          <li>
            退款编号:
            <p class="rights">9879876</p>
          </li>
        </ul>
      </div>
    </div>

     <div class="make">
      <div class="bo">
        <img src="../assets/dianhua.png" alt="" />
        <p @click="centerDialogVisible = true">拨打电话</p>
      </div>
      <div class="borders"></div>
      <div class="bo">
        <img src="../assets/kefu.png" alt="" />
        <p>咨询客服</p>
      </div>
    </div>
    <div class="delivery">
      <div class="del">
        <p>关闭订单</p>
      </div>
      <div class="dels">
        <p>平台介入</p>
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
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.yingye {
  font-size: 12/@vw;
  margin-left: 10/@vw;
  margin-top: -6/@vw;
}
.number {
  font-size: 14/@vw;
  font-weight: bold;
  margin: 0 10/@vw;
  padding: 10/@vw 0;
}
.three {
  display: flex;
  justify-content: space-between;
  margin: 10/@vw 0;
}
.money {
  font-size: 12/@vw;
  margin-left: 10/@vw;
}
.total {
  font-size: 13/@vw;
}
.moneys {
  color: #fe5858;
  margin-right: 10/@vw;
}
.card {
  width: 330/@vw;
  height: 90/@vw;
  background: #f8f8f8;
  margin-left: 10/@vw;
  border-radius: 5/@vw;
}
.tuikuan {
  font-size: 13/@vw;
  font-weight: bold;
  margin: 0 10/@vw;
  padding: 10/@vw 0;
}

.el-dialog {
  margin-top: 45vh;
  width: 233/@vw;
}
.el-dialog--center {
  text-align: center;
  height: 70/@vw;
  background: #666666;
  margin-top: 45vh;
}
.del p {
  position: absolute;
  right: 11/@vw;
  bottom: 13/@vw;
  border: 1/@vw solid #f5f5f5;
  text-align: center;
  border-radius: 15/@vw;
  color: #999999;
  padding: 6/@vw 17/@vw;
  font-size: 12/@vw;
  color: #fe5858;
  border: 1/@vw solid #fe5858;
}
.dels p {
  position: absolute;
  right: 11/@vw;
  bottom: 13/@vw;
  border: 1/@vw solid #f5f5f5;
  text-align: center;
  border-radius: 15/@vw;
  color: #999999;
  padding: 6/@vw 17/@vw;
  font-size: 12/@vw;
  margin-right: 114/@vw;
}
.dels {
  width: 100/@vw;
  height: 40/@vw;
}
.del {
  width: 100/@vw;
  height: 40/@vw;
}
.delivery {
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 60/@vw;
  background-color: white;
}
.v {
  width: 20/@vw;
  height: 20/@vw;
}
.borders {
  border-right: 1/@vw solid #ccc;
  width: 1/@vw;
  height: 40/@vw;
  margin-top: 10/@vw;
}
.make {
  width: 350/@vw;
  height: 46/@vw;
  background-color: white;
  margin: -52/@vw 13/@vw;
  border-radius: 5/@vw;
  display: flex;
  color: #666666;
  justify-content: space-evenly;
  line-height: 46/@vw;
  margin-bottom: 15/@vw;
  align-items: center;
}
.make .bo {
  display: flex;
  align-items: center;
}
.make p {
  font-size: 15/@vw;
}
.make img {
  width: 15/@vw;
  height: 15/@vw;
  margin-right: 10/@vw;
}

.rights {
  margin-left: 25/@vw;
}
.information {
  font-size: 14/@vw;
  font-weight: bold;
  margin-left: 20/@vw;
  margin-top: 20/@vw;
  width: 200/@vw;
  height: 30/@vw;
  line-height: 40/@vw;
}
.table {
  font-size: 12/@vw;
  line-height: 40/@vw;
}
.table li {
  display: flex;
  width: 200/@vw;
  height: 30/@vw;
  margin-left: 20/@vw;
}
.no {
  width: 350/@vw;
  height: 290/@vw;
  background-color: white;
  margin: 65/@vw 13/@vw;
  border-radius: 5/@vw;
  font-size: 13/@vw;
}
.yes p {
  line-height: 40/@vw;
  margin: 0 40/@vw;
}
.yes span {
  color: #fe5858;
}
.yes {
  width: 350/@vw;
  height: 40/@vw;
  background-color: white;
  margin: -52/@vw 13/@vw;
  border-radius: 5/@vw;
  font-size: 13/@vw;
}
.redmoney {
  color: #fe5858;
  font-size: 13/@vw;
}
.heng {
  display: flex;
  justify-content: space-between;
}
.this {
  margin-left: 5/@vw;
}

.pay {
  margin: -25/@vw 28/@vw;
  font-size: 16/@vw;
  color: #fe5858;
}
.need {
  margin: 0 255/@vw;
  font-weight: bold;
  font-size: 14/@vw;
  color: #333333;
}
.ordertime {
  font-size: 12/@vw;
  display: flex;
  margin-top: 5/@vw;
}
.spend {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}

.phonenumber {
  font-size: 16/@vw;
  font-weight: bold;
  color: #333333;
}

.names {
  margin: 0 10/@vw;
  line-height: 25/@vw;
  color: #666666;
}

.times {
  display: flex;
  justify-content: space-between;
  margin: 10/@vw 10/@vw;
}
.orders {
  width: 350/@vw;
  height: 258/@vw;
  background-color: white;
  margin: 75/@vw 13/@vw;
  border-radius: 5/@vw;
  position: relative;
}

.name {
  font-size: 13/@vw;
  font-weight: bold;
  color: #333333;
  width: 320/@vw;
  margin: 10/@vw 10/@vw;
  letter-spacing: 1/@vw;
}

.add {
  font-size: 12/@vw;
  color: #999999;
  width: 250/@vw;
  margin: -5/@vw 10/@vw;
  letter-spacing: 1/@vw;
}
.adds {
  font-size: 12/@vw;
  margin: 0 10/@vw;
  color: #999999;
  margin-top: 10/@vw;
  letter-spacing: 1/@vw;
}
.A {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  background-color: #f5f5f5;
}
.imgs {
  width: 100%;
  background-color: #fe5858;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20/@vw 0 37/@vw 0; 
}

.back {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.detalis {
  margin: 0 auto;
  color: white;
  font-size: 16/@vw;
  font-weight: Medium;
  font-family: PingFang-SC-Medium;
  text-align: center;
  line-height: 30/@vw;
}
.total {
  display: flex;
}
.delivered {
  width: 255/@vw;
  height: 95/@vw;
  background-color: #fe5858;
}
.right {
  width: 120/@vw;
  height: 95/@vw;
  background-color: #fe5858;
}
.right img {
  width: 60/@vw;
  height: 52/@vw;
  margin: 0 20/@vw;
}
.address {
  position: absolute;
  margin: -27/@vw 13/@vw;
  width: 350/@vw;
  height: 90/@vw;
  background-color: white;
  border-radius: 5/@vw;
}

.one {
  width: 130/@vw;
  height: 35/@vw;
  font-size: 18/@vw;
  color: white;
  margin-left: 40/@vw;
}
.two {
  width: 220/@vw;
  height: 30/@vw;
  font-size: 14/@vw;
  color: white;
  margin-left: 42/@vw;
}
</style>