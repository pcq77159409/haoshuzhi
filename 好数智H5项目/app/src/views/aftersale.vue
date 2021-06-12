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
    <div class="orders">
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

<style scoped>
.hui {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.el-dialog--center .el-dialog__footer {
  text-align: inherit;
  height: 1px;
}
.el-icon-close:before {
  content: "";
}
.buttom {
  display: flex;
  justify-content: space-around;
  margin: -31px 10px;
}
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
  height: 61px;
  background-color: #f5f5f5;
  margin-top: -10px;
}
.bottomA {
  width: 100px;
  height: 30px;
  border: 1px solid #e3e3e3;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  color: #999999;
}
.bottomB {
  width: 100px;
  height: 30px;
  border: 1px solid #fe5858;
  text-align: center;
  line-height: 30px;
  border-radius: 20px;
  color: #fe5858;
}

.bottomA p {
  font-size: 14px;
}
.bottomB p {
  font-size: 14px;
}
.bottom {
  display: flex;
  margin-top: 17px;
  justify-content: space-around;
}
.success span {
  color: #fe5858;
}
.one {
  margin-left: 19px;
  font-weight: bold;
  color: #333333;
}
.ones {
  margin-left: 19px;
  font-weight: bold;
  color: #fe5858;
}
.two {
  margin-right: 13px;
  color: #999999;
}
.success {
  display: flex;
  line-height: 50px;
  font-size: 14px;
  justify-content: space-evenly;
}
.tuikuans {
  margin-top: 10px;
  width: 300px;
  height: 50px;
  background-color: #f2f2f2;
  margin-left: 15px;
  border-radius: 5px;
}
.money {
  color: #fe5858;
  margin: 3px 0;
}
.to {
  display: flex;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 64px;
  background: #fe5858;
  z-index: 2;
  position: fixed;
  top: 0;
}
.back {
  width: 10px;
  height: 16px;
  margin: 23px 12px;
}
.sales {
  margin: -46px 152px;
  font-size: 16px;
  color: white;
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
.shops {
  width: 15px;
  height: 15px;
  padding: 0px 2px;
  margin-right: 4px;
}
.shoping {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.this {
  margin-left: 5px;
}
.paid {
  font-size: 12px;
  color: #fe5858;
  margin-top: 12px;
}
.endtime {
  margin-left: 15px;
}
.xian {
  width: 330px;
  height: 1px;
  background-color: #f2f2f2;
  margin: 10px auto;
}

.name {
  margin: 0 10px;
  line-height: 25px;
  color: #666666;
  position: relative;
}

.order {
  width: 100%;
  height: 65px;
  background: #ff5757;
}
.order p {
  color: white;
  font-size: 16px;
  margin: 20px 103px;
}

.orders {
  width: 350px;
  height: 260px;
  background-color: white;
  margin-top: 80px;
  margin-left: 14px;
  border-radius: 5px;
}
.ordersA {
  width: 350px;
  height: 260px;
  background-color: white;
  margin: 15px 11px;
  border-radius: 5px;
}
.orders:first-child {
  margin-top: 80px;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
</style>