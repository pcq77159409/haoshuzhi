<template>
  <div class="liji">
    <div class="service">
      <img src="../assets/left.png" alt="" @click="onBack" />
      <p>购买号码</p>
    </div>
    <div class="total">
      <div class="totals">
        <div class="address">
          <ul>
            <li class="number">13133393741</li>
            <li class="citys">
              <p class="city">上海 <span>移动</span></p>
              <p>￥400</p>
            </li>
          </ul>
        </div>
        <div class="nums">
          <p>
            <span>提示:</span
            >宽大的时的卡莎卡仕达话说到核实客户带来很多老客户带来喀什
          </p>
        </div>
      </div>
    </div>
    <div class="phone" @click="onClickBack">
      <p>号码套餐 <span>移动花卡宝藏版29元套餐</span></p>
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          预存话费<span style="margin-left: 30px">￥500</span>
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          花费(含)<span style="margin-left: 35px; color: #666666">￥800</span>
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 55px">￥100</span>
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 30px; color: #666666"
            >线上实名制办理</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码预约<span style="margin-left: 30px; color: #666666">￥500</span>
        </li>
        <li style="color: #999999">
          温馨提示<span style="margin-left: 30px; color: #666666"
            >收到号码后请尽快修改号码</span
          >
        </li>
      </ul>
    </div>
    <div class="bottom">
      <p>合计:</p>
      <span>￥400.00</span>
      <router-link to="/form_orders_path">
        <div class="now">立即购买</div>
      </router-link>
    </div>
    <div class="black" v-show="back">
      <div class="consumption">
        <div class="chargetion">
          <img src="../assets/back.png" alt="" @click="onClickTo" />
          <p>套餐资费</p>
        </div>
        <div class="already">
          <img src="../assets/cards.png" alt="" />
          <div class="treasure">
            <span>已选:</span>
            <p>移动花卡宝藏版19元套餐</p>
          </div>
        </div>
        <div class="traffic">
          <h5>套餐</h5>
          <ul>
            <li>18元小魔卡</li>
            <li>19元移动花卡宝藏版</li>
            <li>19元移动花卡宝藏版</li>
            <li>18元小魔卡</li>
            <li>58元流量+语音畅享套餐</li>
          </ul>
        </div>
        <div class="unlimited">
          <h5>套餐内容</h5>
          <ul>
            <li>
              <p>套餐月费</p>
              <span>￥19.00</span>
            </li>
            <li>
              <p>通话时长</p>
              <span>0.1元/分钟</span>
            </li>
            <li>
              <p>通话超出部分</p>
              <span>0.1元/分钟</span>
            </li>
            <li>
              <p>套餐流量</p>
              <span>1元/1G</span>
            </li>
            <li>
              <p>流量超出部分</p>
              <span>1元/1G</span>
            </li>
          </ul>
        </div>
        <div class="instructions">
          <h5>套餐说明</h5>
          <p>套餐月费19/月,语音通话0.1元/分钟,流量1元/1G,流量超出部分1元/1G</p>
        </div>
        <div class="cancel">
          <p @click="onClickTo">取消</p>
          <span @click="onClickTo">确定</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      back: false,
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onClickTo() {
      this.back = false;
    },
    onClickBack() {
      if (this.back == false) {
        this.back = true;
      } else {
        this.back = false;
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  margin: 0;
}
li {
  list-style: none;
}
.liji {
  width: 100%;
  height: 100%;
   background-color: #f8f8f8;
}
.box {
  width: 250pt;
  height: 180pt;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin: 10px auto;
}
.box ul li {
  line-height: 40px;
  font-size: 13px;
  margin: auto 15px;
}
.phone {
  width: 250pt;
  height: 40pt;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin: 10px auto;
  line-height: 40pt;
}
.phone p {
  margin: auto 15px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
}
.phone p span {
  margin-left: 15px;
}
.service {
  width: 100%;
  height: 65px;
  background: #ea5656;
  display: flex;
  align-items: center;
}
.service p {
  font-size: 16px;
  color: white;
  font-family: PingFang-SC-Medium;
  font-weight: Medium;
  line-height: 65px;
  text-align: center;
  margin-left: 132px;
}
.service img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}

.totals {
  width: 250pt;
  height: 140pt;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
}
.total {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-evenly;
}
.number {
  font-size: 18px;
  font-weight: 600;
   margin: 21px 0 0 10px;
}
.city {
  font-size: 13px;
  margin-left: 10px;
}
.city span {
  margin-left: 10px;
}
.citys {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
}
.citys p:last-child {
  margin-right: 10px;
  font-size: 16px;
  color: #ff5858;
  font-weight: 600;
}
.nums {
  width: 312px;
  height: 65px;
  background: url("../assets/plpur.png");
  background-size: 312px 65px;
  margin: 0 10px;
}
.nums p {
  font-size: 12px;
  margin: 10px 10px;
  padding-top: 10px;
  color: #666666;
}
.nums span {
  margin-right: 10px;
  font-weight: 600;
  color: #ff0000;
}
.bottom {
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 38px;
}
.bottom p {
  font-size: 14px;
  color: #2c2c2c;
  margin: 0 8px 0 14px;
}
.bottom span {
  font-size: 14px;
  color: #dc0101;
}
.bottom .now {
  width: 105px;
  height: 44px;
  background-color: #ea5656;
  color: #fff;
  font-size: 16px;
  margin-left: 158px;
  text-align: center;
  line-height: 44px;
}
.black {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.black .consumption {
  width: 330px;
  height: 100%;
  background-color: #fff;
  margin-left: 45px;
  overflow-x: hidden;
  overflow-y: auto;
}
.black .consumption .chargetion {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
}
.black .consumption .chargetion img {
  width: 7px;
  height: 13px;
  margin: 0 10px;
}
.black .consumption .chargetion p {
  color: #333333;
  font-size: 12px;
}
.black .consumption .already {
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
}
.black .consumption .already img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
}
.black .consumption .already .treasure span {
  font-size: 12px;
  color: #666666;
  margin-bottom: 6px;
  display: inline-block;
}
.black .consumption .already .treasure p {
  color: #333333;
  font-size: 13px;
  margin-bottom: 4px;
}
.black .consumption .traffic {
  width: 100%;
}
.black .consumption .traffic h5,
.black .consumption .unlimited h5,
.black .consumption .instructions h5 {
  color: #666666;
  font-size: 12px;
  margin: 16px 0 0 10px;
}
.black .consumption .traffic ul {
  width: 253px;
  margin: 15px 0 0 8px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
}
.black .consumption .traffic ul li {
  background-color: #f7f7f7;
  padding: 8px 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: #666666;
  margin: 0 10px 10px 0;
  border-radius: 4px;
}
.black .consumption .unlimited {
  width: 100%;
}
.black .consumption .unlimited ul {
  width: 310px;
  height: 214px;
  background-color: #f8f8f8;
  margin: 15px 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.black .consumption .unlimited ul li {
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  height: 42px;
  align-items: center;
}
.black .consumption .unlimited ul li p {
  color: #666666;
  font-size: 13px;
  margin-right: 44px;
}
.black .consumption .unlimited ul li:first-child span {
  color: #ff0000;
}
.black .consumption .unlimited ul li span {
  color: #666666;
  font-size: 13px;
}
.black .consumption .unlimited ul li:last-child p {
  margin-right: 20px;
}
.black .consumption .unlimited ul li:nth-of-type(3) p {
  margin-right: 20px;
}
.black .consumption .unlimited ul li:last-child {
  border-bottom: none;
}
.black .consumption .instructions p {
  width: 310px;
  height: 63px;
  background-color: #f5f5f5;
  margin: 15px 10px 0;
  font-size: 13px;
  color: #666666;
  padding: 8px 15px 15px 10px;
  box-sizing: border-box;
  line-height: 24px;
}
.black .consumption .cancel {
  width: 100%;
  height: 45px;
  display: flex;
  text-align: center;
  line-height: 45px;
  margin-top: 21px;
}
.black .consumption .cancel p {
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #666666;
}
.black .consumption .cancel span {
  width: 50%;
  height: 100%;
  background-color: #ea5656;
  font-size: 14px;
  color: #fff;
}
</style>