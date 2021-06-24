<template>
  <div class="Integral_subsidiary_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>积分明细</h4>
    </div>
    <div class="years">
      <h4>2021年3月</h4>
      <div class="finished">
        <ul>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
        </ul>
      </div>
      <h4>2021年2月</h4>
      <div class="finished complete">
        <ul>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
          <li>
            <div class="mintued">
              <p>分享</p>
              <div class="nowtime">
                <span>2021-03-15</span>
                <i>15:4406</i>
              </div>
            </div>
            <div class="send">
              <p>+120</p>
              <span>已发送</span>
            </div>
          </li>
        </ul>
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
.Integral_subsidiary_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.Integral_subsidiary_box .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.Integral_subsidiary_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.Integral_subsidiary_box .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.Integral_subsidiary_box .years {
  width: 345/@vw;
  margin: 0 15/@vw;
  overflow: auto;
}
.Integral_subsidiary_box .years h4 {
  font-size: 12/@vw;
  margin: 10/@vw 0;
  color: #666666;
  font-weight: 500;
}
.Integral_subsidiary_box .years .finished ul {
  width: 100%;
  height: 377/@vw;
  background-color: #fff;
}
.Integral_subsidiary_box .years .finished ul li {
  width: 325/@vw;
  height: 62/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Integral_subsidiary_box .years .finished ul li:last-child {
    border-bottom: none;
}
.Integral_subsidiary_box .years .finished ul li .mintued p {
  font-size: 12/@vw;
  color: #333333;
  font-weight: 600;
}
.Integral_subsidiary_box .years .finished ul li .mintued .nowtime span,
.Integral_subsidiary_box .years .finished ul li .mintued .nowtime i {
  font-size: 12/@vw;
  color: #999999;
  margin-right: 6/@vw;
}
.Integral_subsidiary_box .years .finished ul li .send p {
  font-size: 14/@vw;
  color: #f62c2c;
}
.Integral_subsidiary_box .years .finished ul li .send span {
  font-size: 12/@vw;
  color: #999999;
}
.Integral_subsidiary_box .years .complete ul{
    height: 140/@vw;
}
.Integral_subsidiary_box .years .complete ul li:last-child {
    border-bottom: 1/@vw solid #f2f2f2;
}
</style>