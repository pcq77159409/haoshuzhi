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
};
</script>

<style scoped>
.hui {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.tuikuan {
  font-size: 12px;
  font-weight: bold;
  margin-right: 165px;
  margin-top: 3px;
}
.tuihuo {
  font-size: 12px;
  font-weight: bold;
  margin-right: 198px;
  margin-top: 3px;
}
.m {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.t {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.right {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  margin-right: 10px;
}
.rights {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  margin-right: 10px;
}
.mys {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.my {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.sales {
  width: 100%;
  height: 64px;
  background-color: #fe5858;
}
.back {
  width: 10px;
  height: 16px;
  margin: 22px 12px;
}
.aftersales {
  margin: -45px 155px;
  color: white;
  font-size: 16px;
}
.one {
  width: 340px;
  height: 120px;
  background-color: white;
  margin: 10px 17px;
  border-radius: 5px;
}
.tui {
  font-size: 13px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px 0;
}
.two {
  width: 320px;
  height: 74px;
  background-color: #f8f8f8;
  margin: 0 10px;
  border-radius: 5px;
}
.number {
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px 0;
}
.three {
  display: flex;
  justify-content: space-between;
}
.money {
  font-size: 12px;
  margin-left: 10px;
}
.total {
  font-size: 13px;
}
.moneys {
  color: #fe5858;
  margin-right: 10px;
}
.Servicetype {
  width: 340px;
  height: 120px;
  background-color: white;
  margin: 10px 17px;
  border-radius: 5px;
}
.type {
  font-size: 13px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px 0;
}
</style>