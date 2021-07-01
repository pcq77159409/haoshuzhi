<template>
  <div class="hui">
    <div class="header">
      <img
        src="../assets/left.png"
        alt=""
        class="back"
        @click="$router.go(-1)"
      />
      <p class="sales">退款/售后</p>
    </div>
    <!-- <div class="orders">
      <div class="times">
        <p class="shoping">
          <img
            src="../assets/shop.png"
            alt=""
            class="shops"
          />数智时代专营店<span class="this">></span>
        </p>
        <p class="paid">退款</p>
      </div>
      <div class="xian"></div>
      <div class="name">
        <p class="phonenumber">13133393741</p>
        <p class="yidong">上海移动</p>
        <div class="to">
          <p class="spend">含话费</p>
          <p class="money">￥400</p>
        </div>
        <div class="tuikuans">
          <div class="success">
            <p class="one">退款关闭</p>
            <p class="two">退款成功：<span>￥500</span></p>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomA">
            <p @click="onclickCenel = true">删除记录</p>
          </div>
          <div class="bottomB" @click="$router.push('/refundDetalis')">
            <p>查看详情</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ordersA">
      <div class="times">
        <p class="shoping">
          <img
            src="../assets/shop.png"
            alt=""
            class="shops"
          />数智时代专营店<span class="this">></span>
        </p>
        <p class="paid">退款</p>
      </div>
      <div class="xian"></div>
      <div class="name">
        <p class="phonenumber">13133393741</p>
        <p class="yidong">上海移动</p>
        <div class="to">
          <p class="spend">含话费</p>
          <p class="money">￥400</p>
        </div>
        <div class="tuikuans">
          <div class="success">
            <p class="one">退款成功</p>
            <p class="two">退款已关闭</p>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomA">
            <p @click="onclickCenel = true">删除记录</p>
          </div>
          <div class="bottomB">
            <p>查看详情</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ordersA">
      <div class="times">
        <p class="shoping">
          <img
            src="../assets/shop.png"
            alt=""
            class="shops"
          />数智时代专营店<span class="this">></span>
        </p>
        <p class="paid">退款</p>
      </div>
      <div class="xian"></div>
      <div class="name">
        <p class="phonenumber">13133393741</p>
        <p class="yidong">上海移动</p>
        <div class="to">
          <p class="spend">含话费</p>
          <p class="money">￥400</p>
        </div>
        <div class="tuikuans">
          <div class="success">
            <p class="ones">待商家处理</p>
            <p class="two">商家将在<span>1天23时59分</span>内处理</p>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomA">
            <p @click="onclickCenel = true">删除记录</p>
          </div>
          <div class="bottomB">
            <p>查看详情</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ordersA">
      <div class="times">
        <p class="shoping">
          <img
            src="../assets/shop.png"
            alt=""
            class="shops"
          />数智时代专营店<span class="this">></span>
        </p>
        <p class="paid">退款</p>
      </div>
      <div class="xian"></div>
      <div class="name">
        <p class="phonenumber">13133393741</p>
        <p class="yidong">上海移动</p>
        <div class="to">
          <p class="spend">含话费</p>
          <p class="money">￥400</p>
        </div>
        <div class="tuikuans">
          <div class="success">
            <p class="ones">请处理</p>
            <p class="two">您需在<span>4天15时26分</span>内处理</p>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomA">
            <p @click="onclickCenel = true">删除记录</p>
          </div>
          <div class="bottomB">
            <p>查看详情</p>
          </div>
        </div>
        <el-dialog :visible.sync="onclickCenel"  center>
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
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      onclickCenel: false,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.hui {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.ordersA /deep/ .el-dialog--center .el-dialog__footer {
  text-align: inherit;
  height: 1/@vw;
}
.ordersA /deep/ .el-icon-close:before {
  content: "";
}
.ordersA /deep/ .el-dialog {
  border-radius: 6/@vw;
}
.buttom {
  display: flex;
  justify-content: space-around;
  margin: -31/@vw 10/@vw;
}
.phonels {
  margin-left: 42/@vw;
  margin-bottom: 41/@vw;
  margin-top: -29/@vw;
}

.el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 50/@vw 25/@vw 30/@vw;
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
  margin-left: 65/@vw;
  margin-bottom: 15/@vw;
  margin-top: 10/@vw;
}
.el-dialog__wrapper {
  position: fixed;
  top: 132/@vw;
  right: 0/@vw;
  bottom: -1/@vw;
  left: 0;
  overflow: auto;
  margin: 0;
}
.cencl {
  margin-left: 43/@vw;
  color: #333333;
  font-weight: bold;
}
.phones {
  margin-left: 95/@vw;
  color: #333333;
  font-weight: bold;
}
.el-dialog--center .el-dialog__footer {
  height: 51/@vw;
  margin-top: -30/@vw;
}
.xia {
  width: 295/@vw;
  height: 1/@vw;
  background-color: #f5f5f5;
  margin-left: -25/@vw;
}
.que {
  font-size: 15/@vw;
  margin-top: 9/@vw;
  color: #0443d1;
}
.cancal {
  font-size: 15/@vw;
  margin-top: 9/@vw;
  color: #0443d1;
}
.el-dialog--center {
  text-align: center;
  border-radius: 10/@vw;
}
.rightss {
  width: 1/@vw;
  height: 61/@vw;
  background-color: #f5f5f5;
  margin-top: -10/@vw;
}
.bottomA {
  width: 100/@vw;
  height: 30/@vw;
  border: 1/@vw solid #e3e3e3;
  text-align: center;
  line-height: 30/@vw;
  border-radius: 20/@vw;
  color: #999999;
}
.bottomB {
  width: 100/@vw;
  height: 30/@vw;
  border: 1/@vw solid #fe5858;
  text-align: center;
  line-height: 30/@vw;
  border-radius: 20/@vw;
  color: #fe5858;
}

.bottomA p {
  font-size: 12/@vw;
}
.bottomB p {
  font-size: 12/@vw;
}
.bottom {
  display: flex;
  margin-top: 17/@vw;
  justify-content: space-around;
}
.success span {
  color: #fe5858;
}
.one {
  margin-left: 19/@vw;
  font-weight: bold;
  color: #333333;
  font-size: 12/@vw;
}
.ones {
  margin-left: 19/@vw;
  font-weight: bold;
  color: #fe5858;
  font-size: 12/@vw;
}
.two {
  margin-right: 13/@vw;
  color: #999999;
  font-size: 12/@vw;
}
.success {
  display: flex;
  font-size: 14/@vw;
  justify-content: space-evenly;
  line-height: 30/@vw;
}
.tuikuans {
  margin-top: 10/@vw;
  width: 300/@vw;
  height: 30/@vw;
  background-color: #f2f2f2;
  margin-left: 15/@vw;
  border-radius: 5/@vw;
}
.money {
  color: #fe5858;
  margin: 3/@vw 0;
}
.to {
  display: flex;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 58/@vw;
  background: #fe5858;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
}
.back {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.sales {
  margin: 0 auto;
  font-size: 16/@vw;
  color: white;
}

.spend {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}
.yidong {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}
.phonenumber {
  font-size: 16/@vw;
  font-weight: bold;
  color: #333333;
}
.shops {
  width: 15/@vw;
  height: 15/@vw;
  padding: 0/@vw 2/@vw;
  margin-right: 4/@vw;
}
.shoping {
  font-size: 15/@vw;
  font-weight: bold;
  margin-top: 10/@vw;
  display: flex;
  align-items: center;
}
.this {
  margin-left: 5/@vw;
}
.paid {
  font-size: 12/@vw;
  color: #fe5858;
  margin-top: 12/@vw;
}
.endtime {
  margin-left: 15/@vw;
}
.xian {
  width: 330/@vw;
  height: 1/@vw;
  background-color: #f2f2f2;
  margin: 10/@vw auto;
}

.name {
  margin: 0 10/@vw;
  line-height: 25/@vw;
  color: #666666;
  position: relative;
}

.order {
  width: 100%;
  height: 65/@vw;
  background: #ff5757;
}
.order p {
  color: white;
  font-size: 16/@vw;
  margin: 20/@vw 103/@vw;
}

.orders {
  width: 350/@vw;
  height: 260/@vw;
  background-color: white;
  margin-top: 80/@vw;
  margin-left: 14/@vw;
  border-radius: 5/@vw;
}
.ordersA {
  width: 350/@vw;
  height: 260/@vw;
  background-color: white;
  margin: 15/@vw 11/@vw;
  border-radius: 5/@vw;
}
.orders:first-child {
  margin-top: 80/@vw;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10/@vw 10/@vw;
}
</style>