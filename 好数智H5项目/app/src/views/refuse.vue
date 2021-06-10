<template>
  <div class="A">
    <div class="imgs">
      <img src="../assets/left.png" alt="" class="back" />
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
      <p>拨打电话</p>
      <div class="borders"></div>
      <p>咨询客服</p>
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

<style>
.yingye {
  font-size: 12px;
  margin-left: 10px;
  margin-top: -6px;
}
.number {
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px 0;
}
.three {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.money {
  font-size: 12px;
  margin-left: 10px;
}
.total {
  font-size: 13px;
}
.moneys {
  color: #fe5858;
  margin-right: 10px;
}
.card {
  width: 330px;
  height: 90px;
  background: #f8f8f8;
  margin-left: 10px;
  border-radius: 5px;
}
.tuikuan {
  font-size: 13px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px 0;
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
  position: absolute;
  right: 11px;
  bottom: 13px;
  border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 15px;
  color: #999999;
  padding: 6px 17px;
  font-size: 15px;
  color: #fe5858;
  border: 1px solid #fe5858;
}
.dels p {
  position: absolute;
  right: 11px;
  bottom: 13px;
  border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 15px;
  color: #999999;
  padding: 6px 17px;
  font-size: 15px;
  margin-right: 114px;
}
.dels {
  width: 100px;
  height: 40px;
}
.del {
  width: 100px;
  height: 40px;
}
.delivery {
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: white;
}
.v {
  width: 20px;
  height: 20px;
}
.borders {
  border-right: 1px solid #ccc;
  width: 1px;
  height: 40px;
  margin-top: 10px;
}
.make {
  width: 350px;
  height: 60px;
  background-color: white;
  margin: -52px 13px;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  color: #666666;
  font-size: 15px;
  justify-content: space-evenly;
  line-height: 60px;
  margin-bottom: 15px;
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
  margin: 0 40px;
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

.phonenumber {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}

.names {
  margin: 0 10px;
  line-height: 25px;
  color: #666666;
}

.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.orders {
  width: 350px;
  height: 258px;
  background-color: white;
  margin: 75px 13px;
  border-radius: 5px;
  position: relative;
}

.name {
  font-size: 13px;
  font-weight: bold;
  color: #333333;
  width: 320px;
  margin: 10px 10px;
  letter-spacing: 1px;
}

.add {
  font-size: 12px;
  color: #999999;
  width: 250px;
  margin: -5px 10px;
  letter-spacing: 1px;
}
.adds {
  font-size: 12px;
  margin: 0 10px;
  color: #999999;
  margin-top: 10px;
  letter-spacing: 1px;
}
.A {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
}
.imgs {
  width: 100%;
  height: 85px;
  background-color: #fe5858;
  display: flex;
  position: relative;
}

.back {
  width: 10px;
  height: 16px;
  margin: 35px 15px;
}
.detalis {
  width: 100px;
  height: 30px;
  margin: 32px 109px;
  color: white;
  font-size: 16px;
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
  margin: 0 20px;
}
.address {
  position: absolute;
  margin: -27px 13px;
  width: 350px;
  height: 90px;
  background-color: white;
  border-radius: 5px;
}

.one {
  width: 130px;
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