<template>
  <div class="personmsg_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>个人信息</h4>
    </div>
    <div class="replace">
        <div class="portrait">
            <img src="../assets/矢量智能对象@2x (4).png" alt="">
            <p>更换头像</p>
        </div>
        <ul>
            <li>
                <p>昵称更改</p>
                <input type="text" placeholder="随机生成昵称"/>
            </li>
            <li>
                <p>性别</p>
                <input type="text" placeholder="男/女">
            </li>
            <li>
                <p>生日</p>
                <input type="text" placeholder="请输入出生日期">
            </li>
        </ul>
    </div>
    <div class="authentication" @click="$router.push('/authentication')">
        <p>实名认证</p>
        <img src="../assets/跳转箭头@2x.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return{

      }
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.personmsg_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 68/@vw;
  box-sizing: border-box;
}
.personmsg_box .jumplabel {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.personmsg_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.personmsg_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.personmsg_box .replace {
    width: 100%;
    height: 244/@vw;
    background-color: #fff;
}
.personmsg_box .replace .portrait {
    width: 60/@vw;
    height: 69/@vw;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25/@vw;
}
.personmsg_box .replace .portrait img {
    width: 52/@vw;
    height: 52/@vw;
}
.personmsg_box .replace .portrait p {
    font-size: 12/@vw;
    color: #fe5858;
    margin-top: 7/@vw;
}
.personmsg_box .replace ul {
    width: 345/@vw;
    height: 121/@vw;
    margin: 29/@vw auto 0;
}
.personmsg_box .replace ul li {
    width: 100%;
    height: 40/@vw;
    border-top: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
}
.personmsg_box .replace ul li p{
    font-size: 14/@vw;
    color: #333;
    margin-right: 48/@vw;
}
.personmsg_box .replace ul li:first-child p{
    margin-right: 20/@vw;
}
.personmsg_box .replace ul li input {
    font-size: 12/@vw;
    color: #999;
}
.personmsg_box .authentication {
    width: 100%;
    height: 40/@vw;
    background-color: #fff;
    margin-top: 10/@vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.personmsg_box .authentication p {
    font-size: 14/@vw;
    color: #333;
    margin-left: 15/@vw;
}
.personmsg_box .authentication img {
    width: 8/@vw;
    height: 14/@vw;
    margin-right: 15/@vw;
}
</style>