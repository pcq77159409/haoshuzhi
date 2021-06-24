<template>
  <div class="pay_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.push('/commons/home/m')"/>
      <h4>订单支付</h4>
    </div>
    <div class="gou">
      <img src="../assets/gou.png" alt="" />
      <p>订单支付成功</p>
      <span>订单支付成功后3天内将进行发货</span>
    </div>
    <div class="watch" @click="onclickDeta">查看订单</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onclickDeta(){
      this.$router.push({path:'/deta',query:{id:this.$route.query.order_id}});
    }
  },
};
</script> 
<style lang="less" scoped>
@import "../assets/css/base.less";
.pay_box {
  width: 100%;
  height: 100%;
}
.pay_box .jumplabel {
  width: 100%;
  height: 64/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.pay_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
  pointer-events: auto;
}
.pay_box .jumplabel h4 {
  font-size: 16/@vw;
  margin-left: 132/@vw;
  color: #fff;
  font-weight: 500;
}
.pay_box .gou {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58/@vw;
}
.pay_box .gou img {
  width: 77/@vw;
  height: 77/@vw;
  margin-bottom: 26/@vw;
}
.pay_box .gou p {
  font-size: 18/@vw;
  color: #333333;
  font-weight: 600;
  margin-bottom: 20/@vw;
}
.pay_box .gou span {
  font-size: 12/@vw;
  color: #666666;
}
.pay_box .watch {
    width: 345/@vw;
    height: 44/@vw;
    margin: 0 15/@vw;
    background-color: #ea5656;
    color: #fff;
    font-size: 16/@vw;
    text-align: center;
    line-height: 44/@vw;
    border-radius: 25/@vw;
    margin-top: 43/@vw;
}
</style>