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


<style scoped>
.a {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.header {
  width: 100%;
  height: 64px;
  background-color: #fe5858;
  display: flex;

  align-items: center;
}
.banck {
  width: 10px;
  height: 16px;
  margin: 0 15px;
}
.com {
  font-size: 16px;
  color: #ffffff;
  margin: 0 120px;
}
.one {
  width: 345px;
  height: 160px;
  background-color: #ffffff;
  margin: 15px 15px;
  border-radius: 5px;
}
.coms {
  font-size: 14px;
  color: #333333;
  margin-left: 10px;
  padding: 20px 10px;
}
.di {
  font-size: 12px;
}
.money {
  margin: -5px 18px;
  font-size: 25px;
  font-weight: bold;
}
.inputs {
  width: 262px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 22px;
  color: #fe5858;
  font-weight: bold;
}
.xian {
  width: 300px;
  height: 1px;
  background-color: #f8f8f8;
  margin: 10px 22px;
}
.two {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
}
.comss {
  margin-left: -30px;
  color: #999999;
  font-size: 14px;
}
.ord {
  margin-right: -30px;
  font-size: 14px;
  color: #1f98ff;
}
.gong {
  font-size: 12px;
  margin: 0 20px;
  color: #999999;
}
.three {
  width: 345px;
  height: 228px;
  background-color: #ffffff;
  margin: 10px auto;
  border-radius: 5px;
}
.three i {
    font-size: 12px;
    color: #999999;
    line-height: 44px;
    margin-left: 15px;
}
.zhi {
  display: flex;
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 10px;
  align-items: center;
  justify-content: space-between;
}
.zhi p {
  color: #333333;
  font-size: 12px;
}
.zhi img {
  width: 11px;
  height: 6px;
}
.inputss {
  width: 262px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 12px;
  color: #999999;
  text-indent: 20px;
  margin-top: 1px;
}
.four {
  width: 325px;
  height: 44px;
  margin: 0 10px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.four p {
  font-size: 12px;
  color: #333333;
}
.inps {
  width: 230px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 12px;
  color: #999999;
  text-indent: 20px;
}
.mone {
  margin-right: 20px;
  width: 90px;
}
.inp {
  font-size: 12px;
  margin-top: 1px;
  width: 100px;
  color:#999999;
}
input::-webkit-input-placeholder,  

textarea::-webkit-input-placeholder {  
    color: #999999;
}
.fours .fa {
  margin-left: 54px;
  width: 70px;
  height: 19px;
  border: 1px solid #fe5858;
  text-align: center;
  line-height: 19px;
  color: #fe5858;
}
.fours {
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.fours p {
  font-size: 12px;
  color: #333333;
}
.sures {
    width: 345px;
    height: 44px;
    background-color: #ea5656;
    color: #ffffff;
    font-size: 15px;
    line-height: 44px;
    text-align: center;
    border-radius: 25px;
    margin-top: 80px;
}
</style>