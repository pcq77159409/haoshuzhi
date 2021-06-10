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
      <div class="bg"></div>
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
<style lang="scss" scoped>
.my_commission {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.my_commission .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.my_commission .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.my_commission .jumplabel h4 {
  font-size: 16px;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.my_commission .ellipse {
  width: 345px;
  height: 142px;
  background: url("../assets/椭圆 2 拷贝 2@2x.png") no-repeat;
  background-size: 345px 145px;
  margin: 74px 15px 0;
  display: flex;
  align-items: center;
}
.my_commission .ellipse .months {
  margin-left: 65px;
}
.my_commission .ellipse .months p {
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 8px;
}
.my_commission .ellipse .months span {
  font-size: 23px;
  color: #ffffff;
}
.my_commission .ellipse i {
  display: inline-block;
  width: 89px;
  height: 22px;
  background-color: #fff;
  border-radius: 25px;
  color: #ea5656;
  box-shadow: 1px 4px 8px 1px #ea5656;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  margin-left: 40px;
}
.my_commission .huts {
  width: 345px;
  height: 600px;
  background-color: #fff;
  margin: 14px 15px 22px;
}
.my_commission .huts h4 {
  padding: 20px 0 0 10px;
  display: flex;
  align-items: center;
  font-size: 12;
  color: #333333;
}
.my_commission .huts h5 {
  text-align: center;
  line-height: 48px;
  font-size: 12px;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my_commission .huts h5 img {
  width: 11px;
  height: 6px;
  margin-left: 6px;
}
.my_commission .huts h4 img {
  width: 2pt;
  height: 12pt;
  margin-right: 8px;
}
.my_commission .huts .bg {
  width: 319px;
  height: 60px;
  margin: 20px 13px 0;
  background-color: #000;
}
.my_commission .huts ul {
  width: 325px;
  height: 385px;
  margin-top: 10px;
}
.my_commission .huts ul .paim del {
  text-decoration: none;
  margin-left: 7px;
}
.my_commission .huts ul .paim img {
  width: 35px;
  height: 35px;
  margin-left: 15px;
}
.my_commission .huts ul li {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.my_commission .huts ul li img:first-child {
  width: 17px;
  height: 23px;
}
.my_commission .huts ul li img:nth-of-type(2) {
  width: 35px;
  height: 35px;
  margin-left: 15px;
}
.my_commission .huts ul li .one {
  margin-left: 11px;
}
.my_commission .huts ul li .one p,
.my_commission .huts ul li .two p,
.my_commission .huts ul li .three p {
  font-size: 12px;
  color: #333333;
}
.my_commission .huts ul li .one span,
.my_commission .huts ul li .two span,
.my_commission .huts ul li .three span {
  font-size: 12px;
  color: #666666;
}
.my_commission .huts ul li .two {
  margin-left: 59px;
  text-align: center;
}
.my_commission .huts ul li .three {
  margin-left: 30px;
  text-align: center;
}
.my_commission .huts ul li .two i,
.my_commission .huts ul li .three i {
  color: #ea5656;
}
</style>