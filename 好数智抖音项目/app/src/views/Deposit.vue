<template>
  <div class="deposit">
    <div class="integral_bg">
      <div class="preferential">
        <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
        <h4>我的押金</h4>
      </div>
      <div class="signing">
        <p>当前押金</p>
        <h2>1000</h2>
        <span>返还押金</span>
      </div>
    </div>
    <ul>
      <li>
        <p>押金共计</p>
        <span>1000元</span>
      </li>
      <li>
        <p>已返押金</p>
        <span>0元</span>
      </li>
      <li>
        <p>剩余押金</p>
        <span>1000元</span>
      </li>
      <li>
        <p>押金说明   </p>
        <img src="../assets/跳转箭头@2x.png" alt="">
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/css/base.less";
.deposit {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.deposit .integral_bg {
  width: 100%;
  height: 332/@vw;
  background: url("../assets/integral_bg.png") no-repeat;
  background-size: 100% 332/@vw;
}
.deposit .integral_bg .preferential {
  display: flex;
  align-items: center;
}
.deposit .integral_bg .preferential img {
  width: 10/@vw;
  height: 16/@vw;
  margin: 25/@vw 0 0 15/@vw;
}
.deposit .integral_bg .preferential h4 {
  font-size: 16/@vw;
  color: #ffffff;
  font-weight: 500;
  margin-left: 132/@vw;
  margin-top: 25/@vw;
}
.deposit .integral_bg .signing {
  width: 128/@vw;
  height: 121/@vw;
  margin: 76/@vw auto 0;
  text-align: center;
}
.deposit .integral_bg .signing p {
  font-size: 12/@vw;
  color: #fff;
  margin-bottom: 10/@vw;
}
.deposit .integral_bg .signing h2 {
  font-size: 40/@vw;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10/@vw;
}
.deposit .integral_bg .signing span {
  display: inline-block;
  width: 128/@vw;
  height: 38/@vw;
  background: url("../assets/圆角矩形 5@2x.png") no-repeat;
  background-size: 128/@vw 38/@vw;
  text-align: center;
  line-height: 34/@vw;
  color: #ea5656;
  font-size: 14/@vw;
}
.deposit ul {
  width: 345/@vw;
  height: 180/@vw;
  background-color: #fff;
  margin: 10/@vw 15/@vw 0;
  border-radius: 4/@vw;
}
.deposit ul li {
  width: 325/@vw;
  height: 44/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10/@vw;
}
.deposit ul li:last-child {
  border-bottom: none;
}
.deposit ul li p {
  font-size: 14/@vw;
  color: #666666;
}
.deposit ul li span {
  font-size: 12/@vw;
  color: #666666;
}
.deposit ul li img {
  width: 5/@vw;
  height: 10/@vw;
}
</style>