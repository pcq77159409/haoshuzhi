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
<style lang="scss" scoped>
.money_road {
  width: 100%;
  height: 100%;
  background-color: #fd2352;
  background-size: 100% 100%;
  padding-top: 64px;
  box-sizing: border-box;
  overflow: auto;
}
.money_road .jumplabel {
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
.money_road .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.money_road .jumplabel h4 {
  font-size: 16px;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.money_road .the_layer {
  width: 100%;
  height: 454px;
  background: url("../assets/图层 0@2x.png") no-repeat;
  background-size: 100% 454px;
}
.money_road .qrcode {
  width: 330px;
  height: 195px;
  background: url("../assets/组 27@2x.png") no-repeat;
  background-size: 330px 195px;
  margin: -118px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.money_road .qrcode img:first-child {
  width: 116px;
  height: 113px;
  margin-top: 8px;
}
.money_road .qrcode img {
  width: 137px;
  height: 27px;
}
.money_road .qrcode p {
  font-size: 12px;
  color: #999999;
  margin-top: 8px;
}
.money_road .two_box {
  width: 330px;
  height: 166px;
  margin: 10px auto;
  background: url("../assets/组 27@2x (1).png") no-repeat;
  background-size: 330px 166px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.money_road .two_box .pink_box {
  width: 195px;
  height: 73px;
  background: url("../assets/pink.png") no-repeat;
  background-size: 195px 73px;
  margin-top: 27px;
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
  width: 1px;
  height: 50px;
  background-color: #fa95d3;
  margin-top: 10px;
}
.money_road .two_box .pink_box .zero p {
  font-size: 16px;
  color: #ea5656;
  margin-top: 6px;
}
.money_road .two_box .pink_box .zero p i {
  font-size: 30px;
}
.money_road .two_box .pink_box .zero span {
  font-size: 12px;
  color: #666666;
}
.money_road .two_box .jin {
  width: 137px;
  height: 27px;
  margin-top: 13px;
}
.money_road .three_box {
  width: 330px;
  height: 233px;
  background: url("../assets/组 27@2x (2).png") no-repeat;
  background-size: 330px 233px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
}
.money_road .three_box .qing {
  align-items: flex-start;
  display: flex;
  padding: 10px 0 0 31px;
}
.money_road .three_box .qing:first-child {
  padding: 60px 0 0 31px;
}
.money_road .three_box .qing p {
  font-size: 12px;
  color: #666666;
  margin-right: 30px;
}
.money_road .three_box .qing span {
  color: #ea5656;
  font-weight: 600;
  margin-right: 10px;
}
.money_road .three_box .rule {
  width: 113px;
  height: 16px;
  margin: 30px auto 0;
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
  width: 254px;
  height: 384px;
  background: url("../assets/百万靓号“大放送”@2x.png") no-repeat;
  background-size: 254px 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: 0 auto;
}
.money_road .mongolia .stratum img {
  width: 177px;
  height: 40px;
  margin-top: 30px;
}
.money_road .mongolia .stratum .long {
  width: 152px;
  height: 180px;
  background: url("../assets/红包@2x.png") no-repeat;
  background-size: 152px 180px;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.money_road .mongolia .stratum .long img {
  width: 93px;
  height: 91px;
  margin-top: 10px;
}
</style>