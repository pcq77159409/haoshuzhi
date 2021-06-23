<template>
  <div class="integral_box">
    <div class="integral_bg">
      <div class="preferential">
        <img src="../assets/left.png" alt="" @click="$router.go(-1)"/>
        <h4>我的积分</h4>
      </div>
      <div class="signing">
        <p>-签到领积分-</p>
        <h2>226</h2>
        <span>立即签到</span>
      </div>
      <div class="exchange">
        <div class="eleven" @click="$router.push('/Integral_subsidiary')">
          <img src="../assets/you.png" alt="" />
          <p>积分明细</p>
        </div>
        <span></span>
        <div class="twelve">
          <img src="../assets/bag.png" alt="" />
          <p>积分兑换</p>
        </div>
      </div>
    </div>
    <div class="task">
      <h4>做任务赚积分</h4>
      <ul>
        <li>
          <div class="shared">
            <p>分享1名好友注册</p>
            <div class="addsix">
              <img src="../assets/v@2x.png" alt="" />
              <span>+60</span>
            </div>
          </div>
          <div class="alreadyd">已领取</div>
        </li>
         <li>
          <div class="shared">
            <p>分享1名好友注册</p>
            <div class="addsix">
              <img src="../assets/v@2x.png" alt="" />
              <span>+60</span>
            </div>
          </div>
          <div class="alreadyd">已领取</div>
        </li>
         <li>
          <div class="shared">
            <p>分享1名好友注册</p>
            <div class="addsix">
              <img src="../assets/v@2x.png" alt="" />
              <span>+60</span>
            </div>
          </div>
          <div class="alreadyd">已领取</div>
        </li>
      </ul>
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
.integral_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.integral_box .integral_bg {
  width: 100%;
  height: 332/@vw;
  background: url("../assets/integral_bg.png") no-repeat;
  background-size: 100% 332/@vw;
}
.integral_box .integral_bg .preferential {
  display: flex;
}
.integral_box .integral_bg .preferential img {
  width: 10/@vw;
  height: 16/@vw;
  margin: 25/@vw 0 0 15/@vw;
}
.integral_box .integral_bg .preferential h4 {
  font-size: 16/@vw;
  color: #ffffff;
  font-weight: 500;
  margin-left: 132/@vw;
  margin-top: 25/@vw;
}
.integral_box .integral_bg .signing {
  width: 128/@vw;
  height: 121/@vw;
  margin: 76/@vw auto 0;
  text-align: center;
}
.integral_box .integral_bg .signing p {
  font-size: 12/@vw;
  color: #fff;
  margin-bottom: 10/@vw;
}
.integral_box .integral_bg .signing h2 {
  font-size: 40/@vw;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10/@vw;
}
.integral_box .integral_bg .signing span {
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
.integral_box .integral_bg .exchange {
  width: 356/@vw;
  height: 55/@vw;
  margin: 60/@vw auto;
  background-color: #fff;
  border-radius: 25/@vw;
  display: flex;
  align-items: center;
}
.integral_box .integral_bg .exchange .eleven,
.integral_box .integral_bg .exchange .twelve {
  width: 49%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.integral_box .integral_bg .exchange .eleven img,
.integral_box .integral_bg .exchange .twelve img {
  width: 17/@vw;
  height: 19/@vw;
  margin: 0 14/@vw 0 20/@vw;
}
.integral_box .integral_bg .exchange .eleven p,
.integral_box .integral_bg .exchange .twelve p {
  font-size: 15/@vw;
  color: #666666;
}
.integral_box .integral_bg .exchange .eleven p {
  margin-right: 10/@vw;
}
.integral_box .integral_bg .exchange .twelve img {
  margin-left: 14/@vw;
}
.integral_box .integral_bg .exchange span {
  width: 2/@vw;
  height: 26/@vw;
  background-color: #d8d8d8;
}
.integral_box .task {
  width: 345/@vw;
  height: 260/@vw;
  margin: 35/@vw 15/@vw 0;
  background-color: #fff;
}
.integral_box .task h4 {
  padding: 16/@vw 0 14/@vw 14/@vw;
  font-size: 14/@vw;
  color: #333333;
}
.integral_box .task ul {
  width: 317/@vw;
  height: 210/@vw;
  margin: 0 14/@vw;
}
.integral_box .task ul li {
  width: 100%;
  height: 33%;
  border-top: 1/@vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.integral_box .task ul li .shared p{
  font-size: 12/@vw;
  color: #333333;
  margin: 10/@vw 0;
}
.integral_box .task ul li .shared .addsix {
  display: flex;
  align-items: center;
}
.integral_box .task ul li .shared .addsix  img {
  width: 16/@vw;
  height: 16/@vw;
}
.integral_box .task ul li .shared .addsix span {
  font-size: 12/@vw;
  color: #ea5656;
}
.integral_box .task ul li .alreadyd {
  width: 72/@vw;
  height: 22/@vw;
  border: 1/@vw solid #ff8e00;
  color: #FF9204;
  font-size: 12/@vw;
  border-radius: 25/@vw;
  text-align: center;
  line-height: 22/@vw;
}
</style>