<template>
  <div class="hui">
    <div class="sales">
      <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)"/>
      <p class="aftersales">选择服务</p>
    </div>
    <div class="one">
      <p class="tui">退款商品</p>
      <div class="two">
        <p class="number">13133393741</p>
        <div class="three">
          <p class="money">含话费￥320</p>
          <p class="total">总金额:<span class="moneys">￥500</span></p>
        </div>
      </div>
    </div>
    <div class="Servicetype">
      <p class="type">选择服务类型</p>
      <div class="my" @click="onTui">
        <img src="../assets/money.png" alt="" class="m" />
        <p class="tuikuan">我要退款(无需退货)</p>
        <img src="../assets/形状 20@2x.png" alt="" class="right" />
      </div>
      <div class="mys" @click="onTuis">
        <img src="../assets/tui.png" alt="" class="t" />
        <p class="tuihuo">我要退货退款</p>
        <img src="../assets/形状 20@2x.png" alt="" class="rights" />
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {};
  },
  methods: {
    onTui() {
      this.$router.push("/refund");
    },
    onTuis() {
      this.$router.push("/refunds");
    },
  },
  mounted(){
    this.$
  }
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
.hui {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.tuikuan {
  font-size: 12/@vw;
  font-weight: bold;
  margin-right: 165/@vw;
  margin-top: 3/@vw;
}
.tuihuo {
  font-size: 12/@vw;
  font-weight: bold;
  margin-right: 198/@vw;
  margin-top: 3/@vw;
}
.m {
  width: 20/@vw;
  height: 20/@vw;
  margin-left: 10/@vw;
}
.t {
  width: 20/@vw;
  height: 20/@vw;
  margin-left: 10/@vw;
}
.right {
  width: 10/@vw;
  height: 10/@vw;
  margin-top: 7/@vw;
  margin-right: 10/@vw;
}
.rights {
  width: 10/@vw;
  height: 10/@vw;
  margin-top: 7/@vw;
  margin-right: 10/@vw;
}
.mys {
  display: flex;
  justify-content: space-between;
  margin-top: 20/@vw;
}
.my {
  display: flex;
  justify-content: space-between;
  margin-top: 10/@vw;
}
.sales {
  width: 100%;
  height: 64/@vw;
  background-color: #fe5858;
}
.back {
  width: 10/@vw;
  height: 16/@vw;
  margin: 22/@vw 12/@vw;
}
.aftersales {
  margin: -45/@vw 155/@vw;
  color: white;
  font-size: 16/@vw;
}
.one {
  width: 340/@vw;
  height: 120/@vw;
  background-color: white;
  margin: 10/@vw 17/@vw;
  border-radius: 5/@vw;
}
.tui {
  font-size: 13/@vw;
  font-weight: bold;
  margin: 0 10/@vw;
  padding: 10/@vw 0;
}
.two {
  width: 320/@vw;
  height: 74/@vw;
  background-color: #f8f8f8;
  margin: 0 10/@vw;
  border-radius: 5/@vw;
}
.number {
  font-size: 14/@vw;
  font-weight: bold;
  margin: 0 10/@vw;
  padding: 10/@vw 0;
}
.three {
  display: flex;
  justify-content: space-between;
}
.money {
  font-size: 12/@vw;
  margin-left: 10/@vw;
}
.total {
  font-size: 13/@vw;
}
.moneys {
  color: #fe5858;
  margin-right: 10/@vw;
}
.Servicetype {
  width: 340/@vw;
  height: 120/@vw;
  background-color: white;
  margin: 10/@vw 17/@vw;
  border-radius: 5/@vw;
}
.type {
  font-size: 13/@vw;
  font-weight: bold;
  margin: 0 10/@vw;
  padding: 10/@vw 0;
}
</style>