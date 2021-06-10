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
<style lang="scss" scoped>
.deposit {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.deposit .integral_bg {
  width: 100%;
  height: 332px;
  background: url("../assets/integral_bg.png") no-repeat;
  background-size: 100% 332px;
}
.deposit .integral_bg .preferential {
  display: flex;
}
.deposit .integral_bg .preferential img {
  width: 10px;
  height: 16px;
  margin: 25px 0 0 15px;
}
.deposit .integral_bg .preferential h4 {
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 132px;
  margin-top: 25px;
}
.deposit .integral_bg .signing {
  width: 128px;
  height: 121px;
  margin: 76px auto 0;
  text-align: center;
}
.deposit .integral_bg .signing p {
  font-size: 12px;
  color: #fff;
  margin-bottom: 10px;
}
.deposit .integral_bg .signing h2 {
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
}
.deposit .integral_bg .signing span {
  display: inline-block;
  width: 128px;
  height: 38px;
  background: url("../assets/圆角矩形 5@2x.png") no-repeat;
  background-size: 128px 38px;
  text-align: center;
  line-height: 34px;
  color: #ea5656;
  font-size: 14px;
}
.deposit ul {
  width: 345px;
  height: 180px;
  background-color: #fff;
  margin: 10px 15px 0;
  border-radius: 4px;
}
.deposit ul li {
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
}
.deposit ul li:last-child {
  border-bottom: none;
}
.deposit ul li p {
  font-size: 14px;
  color: #666666;
}
.deposit ul li span {
  font-size: 12px;
  color: #666666;
}
.deposit ul li img {
  width: 5px;
  height: 10px;
}
</style>