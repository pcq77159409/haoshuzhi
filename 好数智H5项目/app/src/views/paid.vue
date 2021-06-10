<template>
  <div class="A">
    <div class="imgs">
      <img src="../assets/left.png" alt="" class="back" />
      <p class="detalis">订单详情</p>
    </div>
    <div class="total">
      <div class="delivered">
        <p class="one">待付款</p>
        <p class="two">交易将在25分钟30秒后自动关闭</p>
      </div>
      <div class="right">
        <img src="../assets/cars.png" alt="" />
      </div>
    </div>
    <div class="address">
      <p class="name">好名字 <span class="number">13133393741</span></p>
      <p class="add">收货地址:上海嘉定区平城路118弄</p>
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
        <img src="../assets/v.png" alt="" class="v" />
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
      <p @click="centerDialogVisible = true">拨打电话</p>
      <div class="borders"></div>
      <p>咨询客服</p>
    </div>

    <el-dialog :visible.sync="centerDialogVisible" width="295px" center>
      <span class="phones">拨打电话</span>
      <p class="phonel">030—79772486</p>
      <div class="xia"></div>
      <span slot="footer" class="dialog-footer">
        <div class="buttom">
          <div class="cancal" @click="centerDialogVisible = false">取消</div>
          <div class="rightss"></div>
          <div class="que">确定</div>
        </div>
      </span>
    </el-dialog>
    <div class="delivery">
      <p @click="onclickCenel = true">取消订单</p>
      <p>去支付</p>
      <el-dialog :visible.sync="onclickCenel" width="295px" center>
        <span class="cencl"> </span>
        <p class="phonels">请问您是否确认取消此订单？</p>

        <div class="xia"></div>
        <span slot="footer" class="dialog-footer">
          <div class="buttom">
            <div class="cancal" @click="onclickCenel = false">取消</div>
            <div class="rightss"></div>
            <div class="que">确定</div>
          </div>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      centerDialogVisible: false,
      onclickCenel: false,
    };
  },
  methods: {},
};
</script>

<style>
.phonels {
  margin-left: 42px;
  margin-bottom: 41px;
  margin-top: -29px;
}

.el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 50px 25px 30px;
}
.el-dialog__header {
  padding: 0;
}
.el-icon-close:before {
  content: none;
}
.el-dialog__headerbtn {
  background-color: white;
}
.phonel {
  margin-left: 65px;
  margin-bottom: 15px;
  margin-top: 10px;
}
.el-dialog__wrapper {
  position: fixed;
  top: 132px;
  right: 0px;
  bottom: -1px;
  left: 0;
  overflow: auto;
  margin: 0;
}
.cencl {
  margin-left: 43px;
  color: #333333;
  font-weight: bold;
}
.phones {
  margin-left: 95px;
  color: #333333;
  font-weight: bold;
}
.el-dialog--center .el-dialog__footer {
  height: 51px;
  margin-top: -30px;
}
.xia {
  width: 295px;
  height: 1px;
  background-color: #f5f5f5;
  margin-top: 10px;
  margin-left: -25px;
}
.que {
  font-size: 15px;
  margin-top: 9px;
  color: #0443d1;
}
.cancal {
  font-size: 15px;
  margin-top: 9px;
  color: #0443d1;
}
.el-dialog--center {
  text-align: center;
  border-radius: 10px;
}
.rightss {
  width: 1px;
  height: 51px;
  background-color: #f5f5f5;
  margin-top: -10px;
}
.buttom {
  display: flex;
  justify-content: space-around;
}

.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid white;
  color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button--primary:hover {
  background: white;
  border-color: white;
  color: white;
}
.el-button--primary {
  color: #409eff;
  background-color: white;
  border-color: white;
}

.el-button + .el-button {
  margin-left: 42px;
}
.cancel {
  width: 100px;
  height: 40px;
}

.delivery {
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
}
.delivery p:first-child {
  margin: 0 25px 0 152px;
  border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 15px;
  color: #999999;
  padding: 6px 17px;
  font-size: 14px;
}
.delivery p {
  border: 1px solid #fe5858;
  text-align: center;
  border-radius: 15px;
  color: #fe5858;
  padding: 6px 17px;
  font-size: 14px;
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

  display: flex;
  color: #666666;
  font-size: 16px;
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

.name {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  width: 200px;
  margin: 10px 45px;
}
.number {
  font-size: 13px;
  font-weight: 500;
  color: #333333;
}
.add {
  font-size: 13px;
  color: #333333;
  width: 200px;
  margin: 0 45px;
}
.A {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
  overflow-x: hidden;
  overflow-y: auto;
}
.imgs {
  width: 100%;
  height: 85px;
  background-color: #fe5858;
  display: flex;
  position: relative;
}

.back {
  width: 16px;
  height: 19px;
  margin: 38px 15px;
}
.detalis {
  width: 100px;
  height: 30px;
  margin: 32px 97px;
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