<template>
  <div class="hui">
    <div class="sales">
      <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)"/>
      <p class="aftersales">申请退款</p>
    </div>
    <div class="one">
      <p class="tui">退款商品</p>
      <div class="two">
        <p class="number">13133393741</p>
        <p class="yingye">上海移动</p>
        <div class="three">
          <p class="money">含话费￥320</p>
          <p class="total">总金额:<span class="moneys">￥500</span></p>
        </div>
      </div>
    </div>

    <div class="Servicetype">
      <p class="type">选择服务类型</p>
      <div class="my" @click="drawer = true">
        <p class="tuikuan">退款原因</p>
        <img src="../assets/xing.png" alt="" class="m" />
        <img src="../assets/形状 20@2x.png" alt="" class="right" />
      </div>
      <div class="mys">
        <p class="tuihuo">退款金额</p>
        <img src="../assets/xing.png" alt="" class="t" />
        <p class="rights">￥500</p>
      </div>
      <p class="say">不可修改，最多￥500，含发货邮费￥0.00</p>
    </div>
    <el-drawer
      title=""
      :visible.sync="drawer"
      direction="btt"
      :with-header="false"
    >
      <div></div>
    </el-drawer>
    <div class="yes" @click="onYes">
      <p>提交</p>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    onYes() {
      this.$router.push("/refundDetalis");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.hui {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.el-drawer {
  height: 40% !important;
  border-top-left-radius: 5/@vw;
  border-top-right-radius: 5/@vw;
}
.yes p {
  text-align: center;
  line-height: 54/@vw;
  color: white;
  font-size: 16/@vw;
}
.yes {
  margin-top: 212/@vw;
  width: 340/@vw;
  height: 54/@vw;
  background-color: #fe5858;
  border-radius: 30/@vw;
  margin-left: 17/@vw;
}
.say {
  font-size: 12/@vw;
  color: #999999;
  margin-left: 10/@vw;
}
.yingye {
  font-size: 12/@vw;
  margin-left: 10/@vw;
  margin-top: -6/@vw;
}
.three {
  margin-top: 6/@vw;
}
.tuikuan {
  font-size: 12/@vw;
  font-weight: bold;
  margin-left: 10/@vw;
}
.tuihuo {
  font-size: 12/@vw;
  font-weight: bold;
  margin-left: 10/@vw;
}
.m {
  width: 10/@vw;
  height: 10/@vw;
  margin-left: -249/@vw;
  margin-top: 3/@vw;
}
.t {
  width: 10/@vw;
  height: 10/@vw;
  margin-left: -214/@vw;
  margin-top: 3/@vw;
}
.right {
  width: 10/@vw;
  height: 10/@vw;
  margin-top: 3/@vw;
  margin-right: 10/@vw;
}
.rights {
  width: 10/@vw;
  height: 10/@vw;
  margin-top: -3/@vw;
  margin-right: 45/@vw;
  color: #fe5858;
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
  width: 16/@vw;
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
  height: 130/@vw;
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
  height: 80/@vw;
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