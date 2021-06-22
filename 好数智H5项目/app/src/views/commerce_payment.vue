<template>
  <div class="ace_jump_search">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>订单支付</h4>
    </div>
    <div class="force_time">
      <div class="inform">
        <p>支付剩余时间</p>
        <span>{{ hour }} : {{ minute }} ：{{ second }}</span>
      </div>
      <h2>￥{{ price }}</h2>
      <i
        >订单编号: <span>{{ number }}</span></i
      >
    </div>
    <div class="debugformat">
      <div class="restore" @click="imgShow = 3">
        <img src="../assets/1234.png" alt="" />
        <p>支付宝支付</p>
        <!-- <span style="width: 200px">当前余额{{ balance }}元</span> -->
        <span style="width: 160px"></span>
        <img
          src="../assets/选择 拷贝 2@2x.png"
          alt=""
          class="xs"
          v-show="imgShow == 3"
        />
        <img src="../assets/选择 拷贝 3@2x.png" alt="" />
      </div>
      <div class="restore wecat" @click="imgShow = 2">
        <img src="../assets/5678.png" alt="" />
        <p>微信支付</p>
        <img
          src="../assets/选择 拷贝 2@2x.png"
          alt=""
          class="xs"
          v-show="imgShow == 2"
        />
        <img src="../assets/选择 拷贝 3@2x.png" alt="" />
      </div>
    </div>
    <!-- <router-link to="/Payload"> -->
    <div class="offset" @click="onclickPayment">确认支付</div>
    <div ref="box" class="box"></div>
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      price: 100,
      number: "100",
      balance: 0,
      imgShow: 2,
    };
  },
  methods: {
    onclickPayment() {
      this.$post("api/order/mobielpay", {
        user_id: this.$store.state.user_id,
        order_id: this.$route.query.order_id,
        paytype: this.imgShow,
      }).then((r) => {
        console.log(r);
        if (r.code == 200) {
          console.log(this.imgShow);
          if (this.imgShow == 3) {
            this.$refs.box.innerHTML = r.data;
            document.querySelector('.box input[type="submit"]').click();
          } else if (this.imgShow == 2) {
            window.location.href = r.data;
          }
        }
      });
      // this.$router.push({path:'/Payload',query:{order_id:this.$route.query.order_id}});
    },
  },
  mounted() {
    // ================ 将时间格式转换成  时间戳===============
    // let date = new Date(data.created_at);
    let date = parseInt(sessionStorage.getItem("time"));
    function add0(m) {
      return m < 10 ? "0" + m : m;
    }
    // ================ 将时间戳转换成 时间格式 ===============
    function format(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        y +
        "-" +
        add0(m) +
        "-" +
        add0(d) +
        " " +
        add0(h) +
        ":" +
        add0(mm) +
        ":" +
        add0(s)
      );
    }
    // =================倒计时函数===================
    var showtime = () => {
      var nowtime = new Date(), //获取当前时间
        // endtime = new Date(format(date.getTime() + (1000 * 60 * 30))); //定义结束时间
        endtime = new Date(format(date + 1000 * 60 * 30)); //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        // leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
        lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
        leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
        lefts = Math.floor((lefttime / 1000) % 60); //计算秒数

      if (endtime - nowtime <= 0) {
        clearInterval(timer);
        this.$router.go(-1); //时间到了返回上一个页面
      }
      this.hour = lefth;
      this.minute = leftm;
      this.second = lefts;
      // return add0(leftm) + ":" + add0(lefts); //返回倒计时的字符串
    };
    var timer = setInterval(() => {
      showtime();
    }, 1000); //反复执行函数本身

    this.price = this.$route.query.price;
    this.number = this.$route.query.number;

    this.$get("/api/balance_log/balance", {
      user_id: this.$store.state.user_id,
    }).then((r) => {
      console.log(r);
      if (r.code == 200) {
        if (r.data.balance == null) {
          this.balance = 0;
        } else {
          this.balance = r.data.balance;
        }
      } else {
        alert(r.msg);
      }
    });
  },
};
</script> 
<style lang="scss" scoped>
.box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  // display: none;
}
#alipaysubmit {
  width: 100%;
  height: 100%;
}
.ace_jump_search {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}

.ace_jump_search .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.ace_jump_search .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.ace_jump_search .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.ace_jump_search .force_time {
  width: 100%;
  height: 12 0px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ace_jump_search .force_time .inform {
  display: flex;
  margin-bottom: 20px;
}
.ace_jump_search .force_time .inform span,
.ace_jump_search .force_time .inform p {
  font-size: 12px;
  color: #ea5656;
  margin-right: 6px;
}
.ace_jump_search .force_time h2 {
  margin-right: 4px;
  color: #333333;
  margin-bottom: 17px;
}
.ace_jump_search .force_time i {
  color: #666666;
  font-size: 12px;
}
.ace_jump_search .force_time i span {
  margin-left: 6px;
}
.ace_jump_search .debugformat {
  width: 353px;
  height: 109px;
  margin: 45px auto 227px;
  background-color: #fff;
  border-radius: 4px;
}
.ace_jump_search .debugformat .restore {
  display: flex;
  align-items: center;
  width: 325px;
  height: 50%;
  margin: 0 14px;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
}
.ace_jump_search .debugformat .restore img:first-child {
  width: 16px;
  height: 17px;
  margin-right: 14px;
}
.ace_jump_search .debugformat .restore img:last-child {
  width: 15px;
  height: 15px;
  // margin-left: 90px;
}
.ace_jump_search .debugformat .restore .xs {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 1px;
}
.ace_jump_search .debugformat .restore p {
  width: 100px;
  font-size: 15px;
  color: #333333;
  font-weight: 600;
  margin-right: 20px;
}
.ace_jump_search .debugformat .restore span {
  font-size: 12px;
  color: #666666;
}
.ace_jump_search .debugformat .wecat img:last-child {
  margin-left: 200px;
}
.ace_jump_search .offset {
  width: 345px;
  height: 44px;
  margin: 0 15px;
  background-color: #ea5656;
  border-radius: 25px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 16px;
}
</style>