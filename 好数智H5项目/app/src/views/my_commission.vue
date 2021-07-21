<template>
  <div class="my_commission">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>我的佣金</h4>
    </div>
    <div class="ellipse">
      <div class="months">
        <p>本月佣金收益</p>
        <span>6,000.00</span>
      </div>
      <i @click="$router.push('/commission_subsidiary')">佣金明细</i>
    </div>
    <div class="huts">
      <h4><img src="../assets/矩形 16@2x.png" alt="" />团队消费额完成进度</h4>
      <div class="bg">
        <el-steps :active="1" align-center space="60%">
          <el-step class="aaa"></el-step>
          <el-step
            title="已领取500元"
          ></el-step>
          <el-step
            title="未完成"
          ></el-step>
          <el-step
            title="未完成"
          ></el-step>
        </el-steps>
      </div>
      <h4><img src="../assets/矩形 16@2x.png" alt="" />我的邀请</h4>
      <ul>
        <li>
          <img src="../assets/no1.png" alt="" />
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li>
          <img src="../assets/no1.png" alt="" />
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li>
          <img src="../assets/no1.png" alt="" />
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li class="paim">
          <del>4</del>
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li class="paim">
          <del>5</del>
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li class="paim">
          <del>6</del>
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
        <li class="paim">
          <del>7</del>
          <img src="../assets/user.png" alt="" />
          <div class="one">
            <p>张珊珊</p>
            <span>ID:123456</span>
          </div>
          <div class="two">
            <p>本月消费</p>
            <span><i>9630</i>元</span>
          </div>
          <div class="three">
            <p>客户邀请</p>
            <span><i>120</i>人</span>
          </div>
        </li>
      </ul>
      <h5>查看更多 <img src="../assets/xia.png" alt="" /></h5>
    </div>
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

<style lang="less" scoped>
@import "../assets/css/base.less";
.my_commission .huts .bg /deep/ .el-step__head.is-finish {
  color: #ffffff !important;
  border-color: #FE5858 !important;
  border: none;
}
.my_commission .huts .bg /deep/  .el-step__title.is-finish{
  color: #fe5858 !important;
  font-size: 12/@vw;
  background-color: rgba(255,237,237,.5);
  height: 24/@vw;
  line-height: 24/@vw;
  margin-top: 7/@vw;
  margin-right: 6/@vw;
}
.my_commission .huts .bg .aaa /deep/  .el-step__title.is-finish{
  background-color: transparent !important;
}
.my_commission .huts .bg /deep/  .el-step__icon.is-text {
  background-color: #fff;
  border: 1/@vw dotted #ff9797;
}
.my_commission .huts .bg /deep/  .el-step__icon-inner {
  color: #ff9797;
  font-weight: 600;
  font-size: 12/@vw;
}
.my_commission /deep/  .el-step__title.is-wait {
  font-size: 12/@vw;
}
.my_commission /deep/  .el-step__title.is-process {
  color: #c0c4cc;
  font-size: 12/@vw;
  font-weight: 500;
}
// .my_commission .huts .bg .el-step__icon.is-text{
//   background: linear-gradient( to bottom, #fd9999, #fe5858);
//   border: none;
// }

.my_commission {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  overflow: auto;
}
.my_commission .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.my_commission .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.my_commission .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.my_commission .ellipse {
  width: 345/@vw;
  height: 142/@vw;
  background: url("../assets/椭圆 2 拷贝 2@2x.png") no-repeat;
  background-size: 345/@vw 145/@vw;
  margin: 74/@vw 15/@vw 0;
  display: flex;
  align-items: center;
}
.my_commission .ellipse .months {
  margin-left: 65/@vw;
}
.my_commission .ellipse .months p {
  font-size: 15/@vw;
  color: #ffffff;
  margin-bottom: 8/@vw;
}
.my_commission .ellipse .months span {
  font-size: 23/@vw;
  color: #ffffff;
}
.my_commission .ellipse i {
  display: inline-block;
  width: 89/@vw;
  height: 22/@vw;
  background-color: #fff;
  border-radius: 25/@vw;
  color: #ea5656;
  box-shadow: 1/@vw 4/@vw 8/@vw 1/@vw #ea5656;
  text-align: center;
  line-height: 22/@vw;
  font-size: 12/@vw;
  margin-left: 40/@vw;
}
.my_commission .huts {
  width: 345/@vw;
  height: 600/@vw;
  background-color: #fff;
  margin: 14/@vw 15/@vw 22/@vw;
}
.my_commission .huts h4 {
  padding: 20/@vw 0 0 10/@vw;
  display: flex;
  align-items: center;
  font-size: 12;
  color: #333333;
}
.my_commission .huts h5 {
  text-align: center;
  line-height: 48/@vw;
  font-size: 12/@vw;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my_commission .huts h5 img {
  width: 11/@vw;
  height: 6/@vw;
  margin-left: 6/@vw;
}
.my_commission .huts h4 img {
  width: 2/@vw*1.3;
  height: 12/@vw*1.3;
  margin-right: 8/@vw;
}
.my_commission .huts .bg {
  width: 319/@vw;
  height: 60/@vw;
  margin: 20/@vw 13/@vw 0;
}
.my_commission .huts ul {
  width: 325/@vw;
  height: 385/@vw;
  margin-top: 10/@vw;
}
.my_commission .huts ul .paim del {
  text-decoration: none;
  margin-left: 7/@vw;
}
.my_commission .huts ul .paim img {
  width: 35/@vw;
  height: 35/@vw;
  margin-left: 15/@vw;
}
.my_commission .huts ul li {
  width: 100%;
  height: 55/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 0 10/@vw;
}
.my_commission .huts ul li img:first-child {
  width: 17/@vw;
  height: 23/@vw;
}
.my_commission .huts ul li img:nth-of-type(2) {
  width: 35/@vw;
  height: 35/@vw;
  margin-left: 15/@vw;
}
.my_commission .huts ul li .one {
  margin-left: 11/@vw;
}
.my_commission .huts ul li .one p,
.my_commission .huts ul li .two p,
.my_commission .huts ul li .three p {
  font-size: 12/@vw;
  color: #333333;
}
.my_commission .huts ul li .one span,
.my_commission .huts ul li .two span,
.my_commission .huts ul li .three span {
  font-size: 12/@vw;
  color: #666666;
}
.my_commission .huts ul li .two {
  margin-left: 59/@vw;
  text-align: center;
}
.my_commission .huts ul li .three {
  margin-left: 30/@vw;
  text-align: center;
}
.my_commission .huts ul li .two i,
.my_commission .huts ul li .three i {
  color: #ea5656;
}
</style>