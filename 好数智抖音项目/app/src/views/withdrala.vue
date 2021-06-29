<template>
  <div class="a">
    <div class="header">
      <img src="../assets/left.png" alt="" class="banck" @click="$router.go(-1)"/>
      <p class="com">佣金提现</p>
    </div>
    <div class="one">
      <p class="coms">
        提现金额<span class="di">（限不低于100元的整元金额）</span>
      </p>
      <p class="money">￥<input type="text" class="inputs" /></p>
      <div class="xian"></div>
      <div class="two">
        <p class="comss">可提现金额2345.50元</p>
        <p class="ord">全部提现</p>
      </div>
    </div>
    <div>
      <p class="gong">*请提供本人银行卡账户或者支付宝账户</p>
    </div>
    <div class="three">
      <div class="zhi">
        <p>提现至佣金卡</p>
        <img src="../assets/xia.png" alt="" />
      </div>
      <div class="four">
        <p>卡号</p>
        <input type="text" class="inputss" placeholder="请输入本人卡号" />
      </div>
      <div class="four">
        <p>验证全名</p>
        <input type="text" class="inputss" placeholder="请输入本人姓名" />
      </div>
      <div class="fours">
        <p class="mone">验证软件账号</p>
        <input type="text" class="inp" placeholder="请输入短信验证码" />
        <p class="fa">发送验证码</p>
      </div>
      <i>您绑定的手机号码为：13856798888</i>
      <div class="sures" @click="$router.push('/withdrawal_success')">
          确认提现
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
@import "../assets/css/base.less";
.a {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.header {
  width: 100%;
  height: 64/@vw;
  background-color: #fe5858;
  display: flex;
  align-items: center;
}
.banck {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.com {
  font-size: 16/@vw;
  color: #ffffff;
  margin: 0 auto;
}
.one {
  width: 345/@vw;
  height: 160/@vw;
  background-color: #ffffff;
  margin: 15/@vw 15/@vw;
  border-radius: 5/@vw;
}
.coms {
  font-size: 14/@vw;
  color: #333333;
  margin-left: 10/@vw;
  padding: 20/@vw 10/@vw;
}
.di {
  font-size: 12/@vw;
}
.money {
  margin: -5/@vw 18/@vw;
  font-size: 25/@vw;
  font-weight: bold;
}
.inputs {
  width: 262/@vw;
  height: 40/@vw;
  border: none;
  outline: none;
  font-size: 22/@vw;
  color: #fe5858;
  font-weight: bold;
}
.xian {
  width: 300/@vw;
  height: 1/@vw;
  background-color: #f8f8f8;
  margin: 10/@vw 22/@vw;
}
.two {
  display: flex;
  justify-content: space-around;
  padding: 5/@vw 0;
}
.comss {
  margin-left: -30/@vw;
  color: #999999;
  font-size: 14/@vw;
}
.ord {
  margin-right: -30/@vw;
  font-size: 14/@vw;
  color: #1f98ff;
}
.gong {
  font-size: 12/@vw;
  margin: 0 20/@vw;
  color: #999999;
}
.three {
  width: 345/@vw;
  height: 228/@vw;
  background-color: #ffffff;
  margin: 10/@vw auto;
  border-radius: 5/@vw;
}
.three i {
    font-size: 12/@vw;
    color: #999999;
    line-height: 44/@vw;
    margin-left: 15/@vw;
}
.zhi {
  display: flex;
  width: 325/@vw;
  height: 44/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  margin: 0 10/@vw;
  align-items: center;
  justify-content: space-between;
}
.zhi p {
  color: #333333;
  font-size: 12/@vw;
}
.zhi img {
  width: 11/@vw;
  height: 6/@vw;
}
.inputss {
  width: 262/@vw;
  height: 40/@vw;
  border: none;
  outline: none;
  font-size: 12/@vw;
  color: #999999;
  text-indent: 20/@vw;
  margin-top: 1/@vw;
}
.four {
  width: 325/@vw;
  height: 44/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  align-items: center;
}
.four p {
  font-size: 12/@vw;
  color: #333333;
}
.inps {
  width: 230/@vw;
  height: 40/@vw;
  border: none;
  outline: none;
  font-size: 12/@vw;
  color: #999999;
  text-indent: 20/@vw;
}
.mone {
  margin-right: 20/@vw;
  width: 90/@vw;
}
.inp {
  font-size: 12/@vw;
  margin-top: 1/@vw;
  width: 100/@vw;
  color:#999999;
}
input::-webkit-input-placeholder,  

textarea::-webkit-input-placeholder {  
    color: #999999;
}
.fours .fa {
  margin-left: 54/@vw;
  width: 70/@vw;
  height: 19/@vw;
  border: 1/@vw solid #fe5858;
  text-align: center;
  line-height: 19/@vw;
  color: #fe5858;
}
.fours {
  width: 325/@vw;
  height: 44/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 0 10/@vw;
}
.fours p {
  font-size: 12/@vw;
  color: #333333;
}
.sures {
    width: 345/@vw;
    height: 44/@vw;
    background-color: #ea5656;
    color: #ffffff;
    font-size: 15/@vw;
    line-height: 44/@vw;
    text-align: center;
    border-radius: 25/@vw;
    margin-top: 80/@vw;
}
</style>