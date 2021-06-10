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
<style lang="scss" scoped>
.integral_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.integral_box .integral_bg {
  width: 100%;
  height: 332px;
  background: url("../assets/integral_bg.png") no-repeat;
  background-size: 100% 332px;
}
.integral_box .integral_bg .preferential {
  display: flex;
}
.integral_box .integral_bg .preferential img {
  width: 10px;
  height: 16px;
  margin: 25px 0 0 15px;
}
.integral_box .integral_bg .preferential h4 {
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  margin-left: 132px;
  margin-top: 25px;
}
.integral_box .integral_bg .signing {
  width: 128px;
  height: 121px;
  margin: 76px auto 0;
  text-align: center;
}
.integral_box .integral_bg .signing p {
  font-size: 12px;
  color: #fff;
  margin-bottom: 10px;
}
.integral_box .integral_bg .signing h2 {
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
}
.integral_box .integral_bg .signing span {
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
.integral_box .integral_bg .exchange {
  width: 356px;
  height: 55px;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 25px;
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
  width: 17px;
  height: 19px;
  margin: 0 14px 0 20px;
}
.integral_box .integral_bg .exchange .eleven p,
.integral_box .integral_bg .exchange .twelve p {
  font-size: 15px;
  color: #666666;
}
.integral_box .integral_bg .exchange .eleven p {
  margin-right: 10px;
}
.integral_box .integral_bg .exchange .twelve img {
  margin-left: 14px;
}
.integral_box .integral_bg .exchange span {
  width: 2px;
  height: 26px;
  background-color: #d8d8d8;
}
.integral_box .task {
  width: 345px;
  height: 260px;
  margin: 35px 15px 0;
  background-color: #fff;
}
.integral_box .task h4 {
  padding: 16px 0 14px 14px;
  font-size: 14px;
  color: #333333;
}
.integral_box .task ul {
  width: 317px;
  height: 210px;
  margin: 0 14px;
}
.integral_box .task ul li {
  width: 100%;
  height: 33%;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.integral_box .task ul li .shared p{
  font-size: 12px;
  color: #333333;
  margin: 10px 0;
}
.integral_box .task ul li .shared .addsix {
  display: flex;
  align-items: center;
}
.integral_box .task ul li .shared .addsix  img {
  width: 16px;
  height: 16px;
}
.integral_box .task ul li .shared .addsix span {
  font-size: 12px;
  color: #ea5656;
}
.integral_box .task ul li .alreadyd {
  width: 72px;
  height: 22px;
  border: 1px solid #ff8e00;
  color: #FF9204;
  font-size: 12px;
  border-radius: 25px;
  text-align: center;
  line-height: 22px;
}
</style>