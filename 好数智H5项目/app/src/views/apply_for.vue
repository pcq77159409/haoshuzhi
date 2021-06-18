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
<style lang="scss" scoped>
input::-webkit-input-placeholder {
  color: #999999;
}
.apply_for {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding: 10px 0 67px 0;
}
.apply_for .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
.apply_for .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.apply_for .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.apply_for .realty {
  width: 345px;
  height: 438px;
  background-color: #fff;
  margin: 66px auto;
}
.apply_for .realty ul {
  width: 325px;
  height: 335px;
  margin: 0 10px;
}
.apply_for .realty ul li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  border-bottom: 1px solid #f2f2f2;
}
.apply_for .realty ul li:nth-child(5) {
  height: 95px;
  align-items: flex-start;
  padding-top: 18px;
  box-sizing: border-box;
}
.apply_for .realty ul li p {
  font-size: 12px;
  color: #333333;
  font-weight: 600;
}
.apply_for .realty ul li textarea{
  outline: none;
  border: none;
  margin-left: 16px;
  margin-top: 1px;
}
.apply_for .realty ul li input {
  border: none;
  outline: none;
  margin: 2px 0 0 15px;
  font-size: 12px;
}
.apply_for .realty ul li img {
  width: 6px;
  height: 11px;
  margin-left: 102px;
}
.apply_for .realty .submit {
  width: 345px;
  height: 64px;
  background: url("../assets/矩形 9@2x.png") no-repeat;
  background-size: 345px 64px;
  text-align: center;
  line-height: 64px;
  margin-top: 18px;
  color: #ffffff;
}
.apply_for .realty .powers {
  width: 345px;
  height: 160px;
  background-color: #fff;
  margin-top: 30px;
}
.apply_for .realty .powers h4 {
  width: 325px;
  height: 38px;
  margin: 0 10px;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
  line-height: 38px;
  color: #333333;
  font-size: 12px;
}
.apply_for .realty .powers .Become {
  display: flex;
  margin-bottom: 10px;
}
.apply_for .realty .powers .Become img {
  width: 15pt;
  height: 15pt;
  margin: 10px 0 0 10px;
}
.apply_for .realty .powers .Become p {
  font-size: 14px;
  color: #333333;
  margin: 10px 0 0 10px;
}
.apply_for .realty .powers .Become span {
  font-size: 12px;
  color: #999999;
  margin: 10px 0 0 10px;
}
</style>