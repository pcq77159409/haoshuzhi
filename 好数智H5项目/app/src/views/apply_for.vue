<template>
  <div class="apply_for">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>实力买家申请</h4>
    </div>
    <div class="realty">
      <ul>
        <li>
          <p>真实姓名</p>
          <input type="text" placeholder="请输入真实姓名" />
        </li>
        <li>
          <p>联系电话</p>
          <input type="text" placeholder="请输入电话号码" />
        </li>
        <li>
          <p>所在地区</p>
          <input type="text" placeholder="省/市/区县" />
          <img src="../assets/timeRight.png" alt="" />
        </li>
        <li>
          <p>详细地址</p>
          <input type="text" placeholder="请输入详细地址" />
        </li>
        <li>
          <p>销售渠道</p>
          <textarea name="" id="" cols="30" rows="5" maxlength="100" placeholder="简洁介绍销售渠道"></textarea>
        </li>
        <li>
          <p>线上店铺</p>
          <input type="text" placeholder="(选填)" />
        </li>
      </ul>
      <div class="submit" @click="$router.push('/through')">提交申请</div>
      <div class="powers">
        <h4>实力买家权益</h4>
        <div class="Become">
          <img src="../assets/1234.png" alt="" />
          <div>
            <p>分销赚佣金</p>
            <span>成为分销商后卖出商品，您可以获得佣金</span>
          </div>
        </div>
        <div class="Become">
          <img src="../assets/1234.png" alt="" />
          <div>
            <p>分销赚佣金</p>
            <span>成为分销商后卖出商品，您可以获得佣金</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

input::-webkit-input-placeholder {
  color: #999999;
}
.apply_for {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding: 10/@vw 0 67/@vw 0;
}
.apply_for .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
.apply_for .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.apply_for .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.apply_for .realty {
  width: 345/@vw;
  height: 438/@vw;
  background-color: #fff;
  margin: 66/@vw auto;
}
.apply_for .realty ul {
  width: 325/@vw;
  height: 335/@vw;
  margin: 0 10/@vw;
}
.apply_for .realty ul li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 47/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
}
.apply_for .realty ul li:nth-child(5) {
  height: 95/@vw;
  align-items: flex-start;
  padding-top: 18/@vw;
  box-sizing: border-box;
}
.apply_for .realty ul li p {
  font-size: 12/@vw;
  color: #333333;
  font-weight: 600;
}
.apply_for .realty ul li textarea{
  outline: none;
  border: none;
  margin-left: 16/@vw;
  margin-top: 1/@vw;
  font-size: 12/@vw;
}
.apply_for .realty ul li input {
  border: none;
  outline: none;
  margin: 2/@vw 0 0 15/@vw;
  font-size: 12/@vw;
}
.apply_for .realty ul li img {
  width: 6/@vw;
  height: 11/@vw;
  margin-left: 102/@vw;
}
.apply_for .realty .submit {
  width: 345/@vw;
  height: 64/@vw;
  background: url("../assets/矩形 9@2x.png") no-repeat;
  background-size: 345/@vw 64/@vw;
  text-align: center;
  line-height: 64/@vw;
  margin-top: 18/@vw;
  color: #ffffff;
}
.apply_for .realty .powers {
  width: 345/@vw;
  height: 160/@vw;
  background-color: #fff;
  margin-top: 30/@vw;
}
.apply_for .realty .powers h4 {
  width: 325/@vw;
  height: 38/@vw;
  margin: 0 10/@vw;
  text-align: center;
  border-bottom: 1/@vw solid #f2f2f2;
  line-height: 38/@vw;
  color: #333333;
  font-size: 12/@vw;
}
.apply_for .realty .powers .Become {
  display: flex;
  margin-bottom: 10/@vw;
}
.apply_for .realty .powers .Become img {
  width: 15/@vw*1.3;
  height: 15/@vw*1.3;
  margin: 10/@vw 0 0 10/@vw;
}
.apply_for .realty .powers .Become p {
  font-size: 14/@vw;
  color: #333333;
  margin: 10/@vw 0 0 10/@vw;
}
.apply_for .realty .powers .Become span {
  font-size: 12/@vw;
  color: #999999;
  margin: 10/@vw 0 0 10/@vw;
}
</style>