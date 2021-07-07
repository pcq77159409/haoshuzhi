<template>
  <div class="payment_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>缴纳押金</h4>
    </div>
    <div class="top_up">
      <div class="deposit">
        <p>押金(元)</p>
        <span>{{ pledge }}</span>
      </div>
      <div class="need">
        <p>需充值押金</p>
        <span>￥{{ pledge }}</span>
      </div>
    </div>
    <div class="recommend">
      <h5>支付方式</h5>
      <div class="wechat_pay" @click="imgShow = 2">
        <img src="../assets/5678.png" alt="" />
        <p>微信支付</p>
        <img src="../assets/tui.png" alt="" />
        <img src="../assets/888.png" alt="" v-if="imgShow == 2" />
        <img src="../assets/选择 拷贝 3@2x.png" alt="" v-else />
      </div>
      <div class="wechat_pay" @click="imgShow = 3">
        <img src="../assets/1234.png" alt="" />
        <p>支付宝支付</p>
        <img src="../assets/tui.png" alt="" />
        <img src="../assets/888.png" alt="" v-if="imgShow == 3" />
        <img src="../assets/选择 拷贝 3@2x.png" alt="" v-else />
      </div>
    </div>
    <div class="text">
      <p>* 系统将在您的余额中冻结10000元押金</p>
      <p>* 1.xxxxxx规则，押金将退到余额里</p>
      <p>* 2.xxxxxx规则，押金将自动返还</p>
    </div>
    <div class="que" @click="onclickYj">确认缴纳</div>
    <div ref="box" class="box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pledge: 0,
      imgShow: 2,
      feedata: {},
    };
  },
  methods: {
    onclickYj() {
      let number = this.imgShow;
      if (this.zfbShow == false) {
        number = 4;
      }
      // $router.push('/money_road')
      this.$post("/api/order/paypledge", {
        user_id: localStorage.getItem("user-id"),
        pledgetype: number,
      }).then((r) => {
        if (r.code == 200) {
          if (number == 3) {
            this.$refs.box.innerHTML = r.data;
            document.querySelector('.box input[type="submit"]').click();
          } else if (number == 2) {
            window.location.href = r.data;
          } else if (number == 4) {
            this.feedata = r.data.data;
            this.payment();
          }
        }
      });
    },
    payment() {
      var self = this;
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            self.onBridgeReady(self.feedata),

            false
          );
        } else if (document.attachEvent) {
          document.attachEvent(
            "WeixinJSBridgeReady",
            self.onBridgeReady(self.feedata)
          );
          document.attachEvent(
            "onWeixinJSBridgeReady",
            self.onBridgeReady(self.feedata)
          );
        }
      } else {
        self.onBridgeReady(self.feedata);
      }
    },
    onBridgeReady(data) {
      let self = this;
      //挂在window注意
      window.WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: data.appId, //公众号名称，由商户传入
          timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: data.nonceStr, //随机串
          package: data.package,
          signType: data.signType, //微信签名方式：
          paySign: data.paySign, //微信签名
        },
        function (res) {
          if (res.err_msg === "get_brand_wcpay_request:ok") {
            self.success("支付成功");
          } else if (res.err_msg === "get_brand_wcpay_request:fail") {
            self.error("支付失败");
          }
        }
      );
    },
  },
  created() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      this.zfbShow = false;
    }
    this.$post("/api/order/pledgeinfo").then((r) => {
      if (r.code == 200) {
        this.pledge = r.data.pledge;
      }
    });
  },
};
</script>
<style lang="less" scoped>
.box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100 / @vw;
  display: none;
}
@import "../assets/css/base.less";
.payment_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  //   padding-top: 10/@vw;
  //   overflow: hidden;
}
.payment_box .jumplabel {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: relative;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
}
.payment_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  margin-left: 15 / @vw;
  pointer-events: auto;
}
.payment_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin-left: 132 / @vw;
  color: #fff;
  font-weight: 500;
}
.payment_box .top_up {
  width: 345 / @vw;
  height: 165 / @vw;
  background-color: #fff;
  margin: 10 / @vw 15 / @vw;
}
.payment_box .top_up .deposit {
  width: 325 / @vw;
  height: 103 / @vw;
  margin: 0 10 / @vw;
  border-bottom: 1 / @vw solid#ebebeb;
  text-align: center;
}
.payment_box .top_up .deposit p {
  padding-top: 30 / @vw;
  font-size: 12 / @vw;
  color: #999999;
}
.payment_box .top_up .deposit span {
  display: inline-block;
  font-size: 22 / @vw;
  color: #999999;
  padding-top: 10 / @vw;
}
.payment_box .top_up .need {
  width: 325 / @vw;
  height: 62 / @vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10 / @vw;
}
.payment_box .top_up .need p {
  font-size: 12 / @vw;
  color: #333333;
}
.payment_box .top_up .need span {
  color: #333333;
  font-size: 18 / @vw;
  font-weight: 600;
}
.payment_box .recommend {
  width: 345 / @vw;
  height: 130 / @vw;
  background-color: #fff;
  margin: 0 15 / @vw;
}
.payment_box .recommend h5 {
  padding: 16 / @vw 0 0 11 / @vw;
  box-sizing: border-box;
}
.payment_box .recommend .wechat_pay {
  display: flex;
  align-items: center;
  margin-top: 20 / @vw;
}
.payment_box .recommend .wechat_pay img:first-child {
  width: 23 / @vw;
  // height: 20 / @vw;
  margin: 0 10 / @vw;
}
.payment_box .recommend .wechat_pay p {
  width: 60 / @vw;
  font-size: 12 / @vw;
  color: #333333;
}
.payment_box .recommend .wechat_pay img:nth-of-type(2) {
  width: 21 / @vw;
  height: 10 / @vw;
  margin-left: 10 / @vw;
}
.payment_box .recommend .wechat_pay img:last-child {
  width: 12 / @vw;
  height: 12 / @vw;
  margin-left: 180 / @vw;
}
.payment_box .text {
  margin: 15 / @vw 0 0 15 / @vw;
}
.payment_box .text p {
  font-size: 12 / @vw;
  color: #999999;
  margin-bottom: 6 / @vw;
}
.payment_box .que {
  width: 345 / @vw;
  height: 44 / @vw;
  color: #fff;
  font-size: 16 / @vw;
  text-align: center;
  line-height: 44 / @vw;
  margin: 50 / @vw 15 / @vw 0;
  background-color: #ea5656;
  border-radius: 25 / @vw;
}
</style>