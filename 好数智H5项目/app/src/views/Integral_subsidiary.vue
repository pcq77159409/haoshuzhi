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
<style lang="scss" scoped>
.Integral_subsidiary_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.Integral_subsidiary_box .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.Integral_subsidiary_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.Integral_subsidiary_box .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.Integral_subsidiary_box .years {
  width: 345px;
  margin: 0 15px;
  overflow: auto;
}
.Integral_subsidiary_box .years h4 {
  font-size: 12px;
  margin: 10px 0;
  color: #666666;
  font-weight: 500;
}
.Integral_subsidiary_box .years .finished ul {
  width: 100%;
  height: 377px;
  background-color: #fff;
}
.Integral_subsidiary_box .years .finished ul li {
  width: 325px;
  height: 62px;
  margin: 0 10px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Integral_subsidiary_box .years .finished ul li:last-child {
    border-bottom: none;
}
.Integral_subsidiary_box .years .finished ul li .mintued p {
  font-size: 12px;
  color: #333333;
  font-weight: 600;
}
.Integral_subsidiary_box .years .finished ul li .mintued .nowtime span,
.Integral_subsidiary_box .years .finished ul li .mintued .nowtime i {
  font-size: 12px;
  color: #999999;
  margin-right: 6px;
}
.Integral_subsidiary_box .years .finished ul li .send p {
  font-size: 14px;
  color: #f62c2c;
}
.Integral_subsidiary_box .years .finished ul li .send span {
  font-size: 12px;
  color: #999999;
}
.Integral_subsidiary_box .years .complete ul{
    height: 140px;
}
.Integral_subsidiary_box .years .complete ul li:last-child {
    border-bottom: 1px solid #f2f2f2;
}
</style>