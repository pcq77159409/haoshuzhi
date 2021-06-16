<template>
  <div class="cont_box">
    <div class="drawBoundingBox">
      <!-- 头部 开始-->
      <div class="summer">
        <img src="../assets/left.png" alt="" @click="onClickGoto" />
        <h4>完善信息</h4>
      </div>
      <!-- 头部 结束-->
      <div class="formal">
        <p>正规三大运营商号码，配合国家安全，严厉打击电信诈骗，应运营商要求，必须实行实名制办理激活开通。敬请理解！平台客服会在1小时内电话为您一对一服务</p>
      </div>
      <div class="gooddata">
        <p>13641961314</p>
        <span>上海</span>
        <span>移动</span>
      </div>
      <h4 class="sureing">请确认你的身份信息</h4>
      <div class="reali">
        <div class="multreal">
          <p>真实姓名</p>
          <input type="text" placeholder="填写你的姓名" />
        </div>
        <div class="box_construct">
          <p>身份证号</p>
          <span>341616********6610</span>
        </div>
      </div>
      <h4 class="sureing">请拍摄并上传你的身份证照片</h4>
      <div class="box_header">
        <ul>
          <li>
            <img src="../assets/one.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传身份证正面</p>
          </li>
          <li>
            <img src="../assets/two.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传身份证反面</p>
          </li>
          <li>
            <img src="../assets/three.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传个人自拍照</p>
          </li>
        </ul>
        <img src="../assets/hh.png" alt="" class="sureings" />
      </div>
    </div>
    <div class="drawBoundingBox">
      <div class="gooddata">
        <p>13641961314</p>
        <span>上海</span>
        <span>移动</span>
      </div>
      <h4 class="sureing">请确认你的身份信息</h4>
      <div class="reali">
        <div class="multreal">
          <p>真实姓名</p>
          <input type="text" placeholder="填写你的姓名" />
        </div>
        <div class="box_construct">
          <p>身份证号</p>
          <span>341616********6610</span>
        </div>
      </div>
      <h4 class="sureing">请拍摄并上传你的身份证照片</h4>
      <div class="box_header">
        <ul>
          <li>
            <img src="../assets/one.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传身份证正面</p>
          </li>
          <li>
            <img src="../assets/two.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传身份证反面</p>
          </li>
          <li>
            <img src="../assets/three.png" alt="" />
            <img src="../assets/ppp.png" alt="" class="ppp" />
            <p>请上传个人自拍照</p>
          </li>
        </ul>
        <img src="../assets/hh.png" alt="" class="sureings" />
      </div>
      <div class="instructionsare">
        <h4>购号须知</h4>
        <div class="InstructionSet">
          <img src="../assets/圆角矩形 2@2x.png" alt="" />
          <img src="../assets/yes.png" alt="" class="yes" v-show="false" />
          <p>请仔细阅读 <span>《办理须知》</span> 服务条款</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </div>
        <div class="InstructionSet">
          <img src="../assets/圆角矩形 2@2x.png" alt="" />
          <img src="../assets/yes.png" alt="" class="yes" v-show="false" />
          <p>请仔细阅读 <span>《入网协议》</span> 服务条款</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </div>
      </div>
      <div class="sensorbox_init_osd">
        <p>合计:</p>
        <span>￥900.00</span>
        <div class="commit" @click="$router.push('/confirm_couples')">立即购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickGoto() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.cont_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.drawBoundingBox {
  width: 100%;
}

.drawBoundingBox .summer {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.drawBoundingBox .summer img {
  width: 10px;
  height: 16px;
  margin-left: 16px;
}
.drawBoundingBox .summer h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.drawBoundingBox .formal {
  width: 345px;
  height: 68px;
  margin: 18px auto 0;
  background-color: rgb(248,235,235);
  padding: 10px 10px 14px;
  box-sizing: border-box;
  
}
.drawBoundingBox .formal p {
  font-size: 12px;
  color: #fe5858;
}
.drawBoundingBox .gooddata {
  width: 345px;
  height: 44px;
  margin: 15px 15px 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.drawBoundingBox .gooddata p {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin: 0 15px 0 6px;
}
.drawBoundingBox .gooddata span {
  color: #666666;
  margin-right: 10px;
  font-size: 12px;
}
.drawBoundingBox .sureing {
  font-size: 12px;
  color: #333333;
  font-weight: 500;
  margin-left: 15px;
}
.drawBoundingBox .sureings {
  width: 256px;
  height: 9px;
  margin-left: 15px;
}
.drawBoundingBox .reali {
  width: 345px;
  height: 83px;
  background-color: #fff;
  margin: 10px 15px;
  border-radius: 4px;
}
.drawBoundingBox .reali .multreal {
  display: flex;
  align-items: center;
  width: 325px;
  margin: 0 10px;
  border-bottom: 1px solid #d2d2d2;
  height: 50%;
}
.drawBoundingBox .reali .multreal p,
.drawBoundingBox .reali .box_construct p {
  font-size: 14px;
  color: #333333;
  margin-right: 14px;
}
.drawBoundingBox .reali .multreal input {
  border: none;
  outline: none;
  font-size: 12px;
  color: #666666;
  margin-top: 1px;
}
.drawBoundingBox .reali .box_construct {
  display: flex;
  align-items: center;
  width: 325px;
  height: 50%;
  margin: 0 10px;
}
.drawBoundingBox .reali .box_construct span {
  color: #333333;
  font-size: 12px;
}
.drawBoundingBox .box_header {
  width: 345px;
  height: 304px;
  background-color: #fff;
  margin: 10px 15px;
  padding: 15px 0;
  border-radius: 4px;
}
.drawBoundingBox .box_header ul {
  display: flex;
  width: 325px;
  height: 285px;
  margin: 0 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.drawBoundingBox .box_header ul li {
  width: 152px;
  height: 127px;
  position: relative;
}
.drawBoundingBox .box_header ul li:first-child {
  margin: 0 21px 21px 0;
}
.drawBoundingBox .box_header ul li img:first-child {
  width: 100%;
  height: 97px;
}
.drawBoundingBox .box_header ul li .ppp {
  width: 47px;
  height: 47px;
  position: absolute;
  left: 53px;
  top: 25px;
}
.drawBoundingBox .box_header ul li p {
  font-size: 12px;
  color: #333333;
  text-align: center;
  margin-top: 10px;
}
.drawBoundingBox .instructionsare {
  width: 345px;
  height: 133px;
  background-color: #fff;
  margin: 10px 15px 47px;
  border-radius: 4px;
}
.drawBoundingBox .instructionsare h4 {
  width: 325px;
  height: 44px;
  margin: 0 10px;
  border-bottom: 1px solid #eaeaea;
  line-height: 44px;
  font-size: 14px;
  color: #333333;
}
.drawBoundingBox .InstructionSet {
  width: 325px;
  height: 44px;
  margin: 0 10px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  position: relative;
}
.drawBoundingBox .InstructionSet img:first-child {
  width: 11px;
  height: 11px;
  margin-left: 6px;
}
.drawBoundingBox .InstructionSet img:last-child {
  width: 6px;
  height: 10px;
  margin-left: 90px;
}
.drawBoundingBox .InstructionSet p {
  font-size: 12px;
  color: #666666;
  margin-left: 14px;
}
.drawBoundingBox .InstructionSet p span {
  color: #fe5858;
}
.drawBoundingBox .InstructionSet .yes {
  width: 11px;
  height: 11px;
  position: absolute;
  left: 6px;
}
.drawBoundingBox .InstructionSet:last-child {
  border-bottom: none;
}
.drawBoundingBox .sensorbox_init_osd {
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}
.drawBoundingBox .sensorbox_init_osd p {
  font-size: 14px;
  color: #2c2c2c;
  font-weight: 600;
  margin-left: 14px;
}
.drawBoundingBox .sensorbox_init_osd span {
  color: #fe5858;
  font-size: 14px;
  margin-left: 4px;
  font-weight: 600;
}
.drawBoundingBox .sensorbox_init_osd .commit {
  width: 105px;
  height: 100%;
  background-color: #fe5858;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: absolute;
  right: 0;
  font-size: 14px;
}
</style>