<template>
  <div class="money_road">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>生财之道</h4>
    </div>
    <div class="the_layer"></div>
    <div class="qrcode">
      <img src="../assets/组 27@2x (3).png" alt="" />
      <img src="../assets/now.png" alt="" @click="flag = true" />
      <p>——保存二维码并分享——</p>
    </div>
    <div class="two_box">
      <div class="pink_box">
        <div class="zero">
          <p><i>0</i>元</p>
          <span>本月收益</span>
        </div>
        <del></del>
        <div class="zero">
          <p><i>0</i>元</p>
          <span>本月收益</span>
        </div>
      </div>
      <img
        src="../assets/组 18@2x.png"
        alt=""
        class="jin"
        @click="$router.push('/my_commission')"
      />
    </div>
    <div class="three_box">
      <img src="../assets/rule.png" alt="" class="rule" />
      <div class="qing">
        <span>1</span>
        <p>邀请新用户注册，新老用户各得100积分（积分用于兑换商品）</p>
      </div>
      <div class="qing">
        <span>2</span>
        <p>
          新用户首次下单（金额不限）立减5元，订单完成所绑定老用户立得5元现金，发放至余额中，可用于任意消费于任意消费。
        </p>
      </div>
      <div class="qing">
        <span>3</span>
        <p>
          通过老用户分享的二维码，扫描注册的新用户，直接与老用户自动绑定（不可解绑），老用户可获得所绑定新用户每次消费总金额的2%
        </p>
      </div>
    </div>
    <!-- 蒙层 -->
    <div class="mongolia" v-show="flag" @click="flag=false">
      <div class="stratum"  @click.stop>
        <div class="long">
          <img src="../assets/组 27@2x (3).png" alt="" />
        </div>
        <img src="../assets/组 6@2x.png" alt="" />
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
img {
  pointer-events: auto;
}
.money_road {
  width: 100%;
  height: 100%;
  background-color: #fd2352;
  background-size: 100% 100%;
  padding-top: 64/@vw;
  box-sizing: border-box;
  overflow: auto;
}
.money_road .jumplabel {
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
.money_road .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
}
.money_road .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.money_road .the_layer {
  width: 100%;
  height: 454/@vw;
  background: url("../assets/图层 0@2x.png") no-repeat;
  background-size: 100% 454/@vw;
}
.money_road .qrcode {
  width: 330/@vw;
  height: 195/@vw;
  background: url("../assets/组 27@2x.png") no-repeat;
  background-size: 330/@vw 195/@vw;
  margin: -118/@vw auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.money_road .qrcode img:first-child {
  width: 116/@vw;
  height: 113/@vw;
  margin-top: 8/@vw;
}
.money_road .qrcode img {
  width: 137/@vw;
  height: 27/@vw;
}
.money_road .qrcode p {
  font-size: 12/@vw;
  color: #999999;
  margin-top: 8/@vw;
}
.money_road .two_box {
  width: 330/@vw;
  height: 166/@vw;
  margin: 10/@vw auto;
  background: url("../assets/组 27@2x (1).png") no-repeat;
  background-size: 330/@vw 166/@vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.money_road .two_box .pink_box {
  width: 195/@vw;
  height: 73/@vw;
  background: url("../assets/pink.png") no-repeat;
  background-size: 195/@vw 73/@vw;
  margin-top: 27/@vw;
  display: flex;
}
.money_road .two_box .pink_box .zero {
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.money_road .two_box .pink_box del {
  width: 1/@vw;
  height: 50/@vw;
  background-color: #fa95d3;
  margin-top: 10/@vw;
}
.money_road .two_box .pink_box .zero p {
  font-size: 16/@vw;
  color: #ea5656;
  margin-top: 6/@vw;
}
.money_road .two_box .pink_box .zero p i {
  font-size: 30/@vw;
}
.money_road .two_box .pink_box .zero span {
  font-size: 12/@vw;
  color: #666666;
}
.money_road .two_box .jin {
  width: 137/@vw;
  height: 27/@vw;
  margin-top: 13/@vw;
}
.money_road .three_box {
  width: 330/@vw;
  height: 233/@vw;
  background: url("../assets/组 27@2x (2).png") no-repeat;
  background-size: 330/@vw 233/@vw;
  margin: 0 auto 20/@vw;
  display: flex;
  flex-direction: column;
}
.money_road .three_box .qing {
  align-items: flex-start;
  display: flex;
  padding: 10/@vw 0 0 31/@vw;
}
.money_road .three_box .qing:first-child {
  padding: 60/@vw 0 0 31/@vw;
}
.money_road .three_box .qing p {
  font-size: 12/@vw;
  color: #666666;
  margin-right: 30/@vw;
}
.money_road .three_box .qing span {
  color: #ea5656;
  font-weight: 600;
  margin-right: 10/@vw;
}
.money_road .three_box .rule {
  width: 113/@vw;
  height: 16/@vw;
  margin: 30/@vw auto 0;
}
.money_road .mongolia {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.money_road .mongolia .stratum {
  position: absolute;
  z-index: 44;
  width: 254/@vw;
  height: 384/@vw;
  background: url("../assets/百万靓号“大放送”@2x.png") no-repeat;
  background-size: 254/@vw 384/@vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 auto;
}
.money_road .mongolia .stratum img {
  width: 177/@vw;
  height: 40/@vw;
  margin-top: 30/@vw;
}
.money_road .mongolia .stratum .long {
  width: 152/@vw;
  height: 180/@vw;
  background: url("../assets/红包@2x.png") no-repeat;
  background-size: 152/@vw 180/@vw;
  display: flex;
  justify-content: center;
  margin-top: 60/@vw;
}
.money_road .mongolia .stratum .long img {
  width: 93/@vw;
  height: 91/@vw;
  margin-top: 10/@vw;
}
</style>