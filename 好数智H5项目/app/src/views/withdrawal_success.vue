<template>
  <div class="withdrala_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>提现成功</h4>
    </div>
    <div class="successly">
      <img src="../assets/gou.png" alt="" />
      <h4>提现成功</h4>
    </div>
    <div class="arrive_account">
      <p>到账账户</p>
      <span>工商银行(0908)</span>
    </div>
    <div class="staus">
      <h5>提现状态</h5>
      <div class="commit_m">
        <div class="please">
          <span></span>
          <p>提交申请</p>
        </div>
        <div class="please">
          <span></span>
          <p>提交成功</p>
        </div>
      </div>
      <i></i>
    </div>
    <div class="longtime">
      <p>申请时间 <span>2021-04-13 14:11:23</span></p>
      <p>到账时间 <span>2021-04-13 14:11:24</span></p>
      <p>提现单号 <span>202104131424202104131424</span></p>
    </div>
    <div class="finish">完成</div>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/css/base.less";
.withdrala_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #fff;
  padding-top: 64/@vw;
  box-sizing: border-box;
}

.withdrala_box .jumplabel {
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
.withdrala_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
}
.withdrala_box .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.withdrala_box .successly {
  width: 72/@vw;
  margin: 29/@vw auto 0;
}
.withdrala_box .successly img {
  width: 67/@vw;
  height: 67/@vw;
}
.withdrala_box .successly h4 {
  color: #333333;
  font-size: 18/@vw;
  text-align: center;
  margin-top: 10/@vw;
}
.withdrala_box .arrive_account {
  width: 100%;
  height: 45/@vw;
  border-top: 1/@vw solid #f2f2f2;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28/@vw;
}
.withdrala_box .arrive_account p {
  margin-left: 15/@vw;
  font-size: 12/@vw;
  color: #333333;
}
.withdrala_box .arrive_account span {
  font-size: 12/@vw;
  color: #999999;
  margin-right: 15/@vw;
}
.withdrala_box .staus {
  width: 100%;
  height: 128/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  position: relative;
}
.withdrala_box .staus h5 {
  font-size: 12/@vw;
  color: #333333;
  margin: 15/@vw 0 0 15/@vw;
  font-weight: 500;
}
.withdrala_box .staus i {
  display: inline-block;
  width: 1/@vw;
  height: 60/@vw;
  background-color: #ea5656;
  position: absolute;
  left: 20.5/@vw;
  top: 36/@vw;
}
.withdrala_box .staus .commit_m {
  width: 68/@vw;
  height: 75/@vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15/@vw 0 0 15/@vw;
}
.withdrala_box .staus .commit_m span {
  display: inline-block;
  border-radius: 50%;
  width: 12/@vw;
  height: 12/@vw;
  background-color: #ea5656;
}
.withdrala_box .staus .commit_m .please {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.withdrala_box .staus .commit_m .please p {
  font-size: 12/@vw;
  color: #999999;
}
.withdrala_box .staus .commit_m .please:nth-of-type(2) p {
  color: #333333;
}
.withdrala_box .longtime {
  margin-left: 15/@vw;
}
.withdrala_box .longtime p {
  font-size: 12/@vw;
  color: #999999;
  margin-top: 15/@vw;
}
.withdrala_box .longtime span {
  margin-left: 6/@vw;
}
.withdrala_box .finish {
  width: 345/@vw;
  height: 44/@vw;
  background-color: #ea5656;
  color: #ffffff;
  font-size: 15/@vw;
  line-height: 44/@vw;
  text-align: center;
  border-radius: 25/@vw;
  margin: 80/@vw auto 0;
}
</style>