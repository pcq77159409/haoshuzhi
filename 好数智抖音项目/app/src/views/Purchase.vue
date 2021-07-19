<template>
  <div class="purchase_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>购货流程</h4>
    </div>
    <div class="process">
      <div class="network">
        <h3>网上选号</h3>
        <p>一、在网站首页，选择合适的资费，也可告诉我们在线客服帮您选号。</p>
        <p>二、自己选号码，按导航及左侧的分类，进行号码筛选。</p>
      </div>
      <div class="network">
        <h3>网上订购</h3>
        <p>选定号码之后，可以通过以下方式订购号码。</p>
        <p>一、直接点击号码右侧的“购买”按钮，输入个人信息即可。</p>
        <p>二、拨打电话订购。</p>
        <p>三、在线要求客服人员订购</p>
      </div>
      <div class="network">
        <h3>客服回访</h3>
        <p>一、由于号码的特殊性，客服人员会确定号码的详细信息。</p>
        <p>二、直接给客户联系，确定号码的相关信息。</p>
        <p>三、确定送货时间和送货方式</p>
      </div>
      <div class="network">
        <h3>订单付款</h3>
        <p>一、验证号码，提交相关资料。</p>
        <p>二、订单支付。</p>
        <p>三、交易完成。</p>
      </div>
      <div class="network">
        <h3>免费送货</h3>
        <p>一、提供同城货到付款服务。具体请查看相关送货政策</p>
        <p>二、免费送货仅限于号码所在地的城市市区。</p>
        <p>三、加急送货，需要支付相应的配送费用，具体咨询客服人员。</p>
      </div>
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
.purchase_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  overflow: auto;
}
.purchase_box::-webkit-scrollbar {
  display: none;
}
.purchase_box .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
.purchase_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
  pointer-events: auto;
}
.purchase_box .jumplabel h4 {
  font-size: 16/@vw;
  margin-left: 132/@vw;
  color: #fff;
  font-weight: 500;
}
.purchase_box .process {
  width: 345/@vw;
  height: 704/@vw;
  margin: 70/@vw 15/@vw 20/@vw;
  background-color: #fff;
}
.purchase_box .process .network h3 {
  padding: 15/@vw 0 10/@vw 12/@vw;
  font-size: 14/@vw;
  color: #333333;
}
.purchase_box .process .network p {
  font-size: 12/@vw;
  color: #666666;
  line-height: 30/@vw;
  margin-left: 12/@vw;
}
</style>