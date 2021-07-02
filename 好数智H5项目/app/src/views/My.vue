<template>
  <div class="ccccc">
    <div class="my_box">
      <div class="box">
        <img src="../assets/bg.png" alt="" class="bg" />
      </div>
      <div class="good">
        <div class="user_name">
          <img :src="src" alt="" class="Head_portrait" @click="Dian" />
          <div
            class="login"
            v-if="loginShow == 1"
            @click="$router.push('/login')"
          >
            手机号登录
          </div>
          <div class="id">
            <p>{{ user.username }}</p>
            <p>ID:{{ user.id }}</p>
          </div>
        </div>
        <div @click="onClickOpen">
          <img src="../assets/sign.png" alt="" class="sign" />
        </div>
      </div>
      <!-- 我的账户 -->
      <div class="account">
        <h3>我的账户</h3>
        <ul>
          <li @click="$router.push('/walletmodel')">
            <img src="../assets/balance.png" alt="" />
            <p>钱包余额</p>
          </li>
          <li @click="onJin">
            <img src="../assets/coupon.png" alt="" />
            <p>优惠劵</p>
          </li>
          <li @click="onjifen">
            <img src="../assets/integral.png" alt="" />
            <p>积分</p>
          </li>
        </ul>
      </div>
      <!-- 我的订单 -->
      <div class="ordering">
        <div class="mine">
          <h3>我的订单</h3>
          <div class="all">
            <span
              @click="
                $router.push({ path: '/order', query: { name: 'second' } })
              "
              >查看全部</span
            >
            <img src="../assets/形状 20@2x.png" alt="" />
          </div>
        </div>
        <ul class="finish">
          <li
            @click="$router.push({ path: '/order', query: { name: 'first' } })"
          >
            <img src="../assets/pay.png" alt="" />
            <p>待支付</p>
            <span>{{ status1 }}</span>
          </li>
          <li
            @click="$router.push({ path: '/order', query: { name: 'third' } })"
          >
            <img src="../assets/delivery.png" alt="" />
            <p>待发货</p>
            <span>{{ status2 }}</span>
          </li>
          <li
            @click="$router.push({ path: '/order', query: { name: 'fourth' } })"
          >
            <img src="../assets/closed.png" alt="" />
            <p>待收货</p>
            <span>{{ status3 }}</span>
          </li>
          <li
            @click="
              $router.push({ path: '/order', query: { name: 'complete' } })
            "
          >
            <img src="../assets/complete.png" alt="" />
            <p>已完成</p>
            <span>{{ status4 }}</span>
          </li>
          <li @click="$router.push('/aftersale')">
            <img src="../assets/sales.png" alt="" />
            <p>退款/售后</p>
            <span>{{ status4 }}</span>
          </li>
        </ul>
        <div class="wait" v-if="unapid.length != 0">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in unapid"
                :key="index"
                :data-item="func_str(item)"
              >
                <!-- @click="onclickFK(item.id, item.price, item.number)" -->

                <div class="payment_box">
                  <img src="../assets/card.png" alt="" />
                  <div>
                    <p>手机靓号:{{ item.orderdetail[0].phonenumber }}</p>
                    <p>等待付款</p>
                  </div>
                </div>
                <span>立即支付</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="road">
        <ul>
          <li @click="onclickSczd">
            <img src="../assets/矢量智能对象@2x.png" alt="" />
            <p>生财之道</p>
          </li>
          <li @click="$router.push('/Purchase')">
            <img src="../assets/订单@2x.png" alt="" />
            <p>购买流程</p>
          </li>
          <li @click="onCLickadd()">
            <img src="../assets/坐标1@2x.png" alt="" />
            <p>收货地址</p>
          </li>
          <li @click="$router.push('/setting')">
            <img src="../assets/set.png" alt="" />
            <p>设置</p>
          </li>
        </ul>
      </div>
      <!-- 蒙层 -->
      <div class="signs" v-show="flag">
        <div class="white">
          <img src="../assets/seven.png" alt="" />
          <h4>签到成功</h4>
          <p>获得<span>2</span>积分</p>
          <div class="know" @click="onClickClose">我知道了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      mySwiper: null,
      flag: false,
      loginShow: null,
      user: [],
      unapid: [
        {
          address: "asgag",
          area: "沙坪坝区",
          city: "重庆市",
          code_url: "",
          com: "",
          created_at: "2021-06-07 10:49:21",
          delivery: "送货上门",
          delivery_time: "不限时间",
          express_number: null,
          finishtime: "1970-01-01 08:00:00",
          id: 92,
          info: null,
          mobile: "15197911446",
          name: "65872",
          number: "SJ20210607104921578341391",
          orderdetail: [
            {
              phonenumber: "13554888999",
            },
          ],
          pay_money: null,
          pay_time: "1970-01-01 08:00:00",
          paytype: 0,
          price: "150.00",
          province: "重庆市",
          remarks: null,
          status: 1,
          updated_at: "2021-06-07 10:49:21",
          user_id: 21,
        },
      ],
      timer: null,
      status1: "",
      status2: "",
      status3: "",
      status4: "",
      dcd: [],
      src: require("../assets/Head_portrait.png"),
    };
  },
  methods: {
    Dian() {
      if (this.loginShow == 1) {
        this.$router.push("/login");
      } else {
        this.$router.push("/personmsg");
      }
    },
    initSwiper() {
      let _this = this;
      setTimeout(() => {
        this.mySwiper = new Swiper(".swiper-container", {
          direction: "vertical", // 垂直切换选项
          loopAdditionalSlides: 3,
          loop: true,
          speed: 500,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          pagination: ".swiper-pagination",
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          onClick: function (swiper) {
            let item = JSON.parse(
              swiper.clickedSlide.attributes["data-item"].nodeValue
            ); //转换为对象
            item;
            _this.onclickFK(item.id, item.price, item.number);
          },
          onSlideChangeEnd: function (swiper) {
            //切换结束时，获取slide序号
            _this.swiperIndex = swiper.realIndex + 1; //realIndex: 当前活动块的索引，与activeIndex不同的是，在loop模式下不会将复制的块的数量计算在内。
          },
        });
      }, 300);
    },
    func_str: function (item) {
      //将当前的item对象转换为字符串
      return JSON.stringify(item);
    },
    onCLickadd() {
      this.$router.push("/GoAddress");
    },
    onClickOpen() {
      this.flag = true;
    },
    onClickClose() {
      this.flag = false;
    },
    onclickFK(id, price, number) {
      //去付款
      sessionStorage.setItem("time", +new Date());
      this.$router.push({
        path: "/commerce_payment",
        query: {
          order_id: id,
          price: price,
          number: number,
        },
      });
    },
    onJin() {
      alert("该功能暂未开放，敬请期待");
    },
    onjifen() {
      alert("该功能暂未开放，敬请期待");
    },
    onclickSczd() {
      if (this.loginShow == 1) {
        this.$router.push("/login");
      } else {
        if (this.user.type == 1) {
          this.$router.push("/money_road");
        } else if (this.user.type == 2) {
          this.$router.push("/payment");
        } else {
          this.$router.push("/apply_for");
        }
      }
    },
  },
  created() {
    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((val) => {
      console.log(val);
      if (val.data.head_img != null) {
        this.src = val.data.head_img;
      }
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });

    this.loginShow = localStorage.getItem("uuidstatus");
    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      if (r.code == 200) {
        this.user = r.data;
      }
    });

    this.$get("/api/order/getlist", {
      user_id: localStorage.getItem("user-id"),
      status: 1,
    }).then((r) => {
      if (r.code == 200) {
        console.log(r);
        if (r.data.total == 0) {
          this.unapid = [];
          this.status1 = "";
        } else {
          this.status1 = r.data.total;
          // let num = 0;
          this.unapid = r.data.data;
          console.log(this.status1);
          // console.log(this.unapid);
          // this.timer = setInterval(() => {
          //   num++;
          //   if (num >= r.data.data.length) {
          //     num = 0;
          //   }
          //   this.unapid = r.data.data[num];
          // }, 10000);
        }
      }
    });

    this.$get("/api/order/getlist", {
      user_id: localStorage.getItem("user-id"),
      status: 2,
    }).then((r) => {
      if (r.data.total == 0) {
        this.status2 = "";
      } else {
        this.status2 = r.data.total;
      }
    });
    this.$get("/api/order/getlist", {
      //
      user_id: localStorage.getItem("user-id"),
      status: 3,
    }).then((r) => {
      if (r.data.total == 0) {
        this.status3 = "";
      } else {
        this.status3 = r.data.total;
      }
    });
    this.$get("/api/order/getlist", {
      //
      user_id: localStorage.getItem("user-id"),
      status: 4,
    }).then((r) => {
      if (r.data.total == 0) {
        this.status4 = "";
      } else {
        this.status4 = r.data.total;
      }
    });
  },
  // 路由离开生命周期函数
  // beforeRouteLeave(to, from, next) {
  //   to;
  //   from;
  //   next();
  //   clearInterval(this.timer);
  // },
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
body {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
.login {
  position: absolute;
  top: 78 / @vw;
  left: 0;
  width: 80 / @vw;
  // height: 24 / @vw;
  text-align: center;
  line-height: 24 / @vw;
  border-radius: 12 / @vw;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 5 / @vw;
  font-size: 14 / @vw;
}
.ccccc {
  position: relative;
  overflow: auto;
}
.my_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding-bottom: 100 / @vw;
  box-sizing: border-box;
  overflow: auto;
}
.box {
  width: 100%;
  height: 266 / @vw;
}
.box .bg {
  width: 100%;
  height: 266 / @vw;
  margin: 0 auto;
}
.box p {
  position: absolute;
  left: 45%;
  top: 25 / @vw;
  color: #ffffff;
  font-weight: 500;
}
.good {
  position: absolute;
  left: 30 / @vw;
  top: 50 / @vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300 / @vw;
}
.good .user_name {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.good .id p {
  line-height: 25 / @vw;
}
.Head_portrait {
  width: 59 / @vw*1.3;
  height: 59 / @vw*1.3;
  margin-right: 20 / @vw;
  border-radius: 50%;
}
.id p {
  color: #ffffff;
  // margin-top: 15 / @vw;
  // margin-bottom: 10 / @vw;
}
.sign {
  width: 32 / @vw;
  height: 28 / @vw;
}
.account {
  width: 353 / @vw;
  height: 90 / @vw*1.3;
  background-color: #fff;
  // margin: 0 11/@vw;
  position: absolute;
  top: 181 / @vw;
  border-radius: 5 / @vw;
}
.account h3 {
  font-size: 14 / @vw;
  color: #333333;
  margin: 12 / @vw 0 12 / @vw 19 / @vw;
  font-weight: 500;
}
.account ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 2 / @vw solid #f8f8f8;
  align-items: center;
}
.account ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10 / @vw*1.3;
}
.account ul li img {
  width: 22 / @vw*1.3;
  height: 22 / @vw*1.3;
}
.account ul li p {
  font-size: 13 / @vw;
  color: #666666;
  margin-top: 4 / @vw;
}
.ordering {
  border-radius: 5 / @vw;
  width: 353 / @vw;
  // height: 180/@vw*1.3;
  padding-bottom: 20 / @vw;
  background-color: #fff;
  margin: 42 / @vw auto 0;
}
.ordering .mine {
  margin: 0 20 / @vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ordering .mine h3 {
  font-size: 14 / @vw;
  color: #333333;
  font-family: PingFang-SC-Medium;
  margin: 12 / @vw 0;
  font-weight: 500;
}
.ordering .mine .all img {
  width: 6 / @vw*1.3;
  height: 8 / @vw*1.3;
  margin-left: 10 / @vw;
}
.ordering .mine .all span {
  font-size: 12 / @vw;
  color: #999999;
}
.ordering .finish {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 2 / @vw solid #f8f8f8;
}
.ordering .finish li {
  position: relative;
  width: 20%;
  height: 89 / @vw;
  margin-top: 10 / @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
}
.ordering .finish li span {
  position: absolute;
  left: 40 / @vw;
  top: 10 / @vw;
  padding: 0 6 / @vw;
  background-color: #ea5656;
  line-height: 18 / @vw;
  text-align: center;
  border-radius: 20 / @vw;
  font-size: 12 / @vw;
  color: #fff;
}
.ordering .finish li:nth-of-type(1) img {
  margin-left: 10 / @vw;
}
.ordering .finish li p {
  font-size: 13 / @vw;
  color: #666666;
}
.ordering .finish li img {
  margin-bottom: 10 / @vw;
}
.ordering .finish li:nth-of-type(1) p {
  margin-bottom: 10 / @vw;
}
.ordering .finish li:nth-of-type(1) img {
  width: 25 / @vw*1.3;
  height: 23 / @vw*1.3;
}
.ordering .finish li:nth-of-type(2) img {
  width: 19 / @vw*1.3;
  height: 16 / @vw*1.3;
}
.ordering .finish li:nth-of-type(3) img {
  width: 19 / @vw*1.3;
  height: 16 / @vw*1.3;
}
.ordering .finish li:nth-of-type(4) img {
  width: 14 / @vw*1.3;
  height: 16 / @vw*1.3;
}

.ordering .finish li:nth-of-type(5) img {
  width: 18 / @vw*1.3;
  height: 16 / @vw*1.3;
}
.ordering .wait {
  width: 316 / @vw;
  height: 53 / @vw*1.3;
  background-color: #f8f8f8;
  margin: 0 auto 0;

  border-radius: 5 / @vw;
}
.ccccc /deep/ .swiper-slide {
  display: flex;
  justify-content: space-between;
}
.ccccc /deep/ .swiper-container {
  width: 100%;
  height: 100%;
}
.ordering .wait span {
  display: inline-block;
  color: #ff5757;
  font-size: 12 / @vw;
  width: 72 / @vw;
  margin: 40 / @vw 6 / @vw 6 / @vw 0;
  border: 1 / @vw solid #ff5757;
  border-radius: 8 / @vw;
  text-align: center;
  height: 20 / @vw;
  line-height: 20 / @vw;
}
.ordering .wait .payment_box {
  display: flex;
  align-items: center;
}
.ordering .wait .payment_box P:first-child {
  color: #333333;
  font-size: 12 / @vw;
  margin: 10 / @vw 0;
}
.ordering .wait .payment_box P:last-child {
  color: #ff5757;
  font-size: 12 / @vw;
}
.ordering .wait .payment_box img {
  width: 44 / @vw*1.3;
  height: 44 / @vw*1.3;
  margin: 0 10 / @vw;
}
.road {
  border-radius: 5 / @vw;
  width: 354 / @vw;
  height: 64 / @vw*1.3;
  background-color: #fff;
  margin: 10 / @vw auto 8 / @vw;
  //   display: flex;
  //   justify-content: center;
}
.road ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.road ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.road ul li img {
  width: 25 / @vw*1.3;
  height: 25 / @vw*1.3;
}
.road ul li p {
  margin-top: 6 / @vw;
  color: #666;
  font-size: 12 / @vw;
}
.signs {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.signs .white {
  width: 247 / @vw;
  height: 215 / @vw;
  background-color: #fff;
  border-radius: 10 / @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signs .white img {
  width: 82 / @vw;
  height: 58 / @vw;
  margin-top: 28 / @vw;
  margin-bottom: 12 / @vw;
}
.signs .white h4 {
  font-size: 12 / @vw*1.3;
  color: #333333;
  margin-bottom: 11 / @vw;
}
.signs .white p {
  color: #666666;
  font-size: 12 / @vw;
  margin-bottom: 20 / @vw;
}
.signs .white span {
  color: #ff5757;
  margin: 0 6 / @vw;
}
.signs .white .know {
  width: 178 / @vw;
  height: 35 / @vw;
  background: url("../assets/red.png") no-repeat;
  background-size: 178 / @vw 35 / @vw;
  text-align: center;
  line-height: 35 / @vw;
  color: #ffffff;
  font-size: 14 / @vw;
}
</style>