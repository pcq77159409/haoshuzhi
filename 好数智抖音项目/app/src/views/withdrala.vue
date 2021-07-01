<template>
  <div class="a">
    <div class="header">
      <img
        src="../assets/left.png"
        alt=""
        class="banck"
        @click="$router.go(-1)"
      />
      <p class="com">佣金提现</p>
    </div>
    <div class="one">
      <p class="coms">
        提现金额<span class="di">（限不低于100元的整元金额）</span>
      </p>
      <p class="money">￥<input type="text" class="inputs" v-model="num" /></p>
      <div class="xian"></div>
      <div class="two">
        <p class="comss" v-if="dataList.balance == null">可提现金额0元</p>
        <p class="comss" v-else>可提现金额{{ dataList.balance }}元</p>
        <p class="ord" @click="num = dataList.balance">全部提现</p>
      </div>
    </div>
    <div>
      <p class="gong">*请提供本人支付宝账户</p>
    </div>
    <div class="three">
      <div class="zhi">
        <p>提现至支付宝</p>
        <!-- <img src="../assets/xia.png" alt="" /> -->
      </div>
      <div class="four">
        <p>支付宝账号</p>
        <p class="alinumber">{{ alinumber }}</p>
        <!-- <input
          type="text"
          class="inputss"
          placeholder="请输入本人卡号"
          v-model="cardNum"
        /> -->
      </div>
      <div class="four">
        <p>支付宝名称</p>
        <input
          type="text"
          class="inputss"
          placeholder="请输入本人姓名"
          v-model="realname"
        />
      </div>
      <div class="fours">
        <p class="mone">验证软件账号</p>
        <input type="text" class="inp" placeholder="请输入短信验证码" />
        <p class="fa">发送验证码</p>
      </div>
      <i>您绑定的手机号码为：{{ dataList.mobile }}</i>
      <div class="sures" @click="onclickTx">确认提现</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: {},
      num: "",
      cardNum: "",
      realname: "",
      alinumber: "",
    };
  },
  methods: {
    onclickTx() {
      if (this.num > 0 && this.num <= this.dataList.balance) {
        if (
          this.alinumber &&
          this.alinumber != null &&
          this.alinumber != "" &&
          this.alinumber != 0
        ) {
          this.$get("/api/commission/withdraw", {
            money: this.num,
            alipay_num: this.alinumber,
            realname: this.realname,
          }).then((r) => {
            console.log(r);
            if (r.code == 200) {
              // this.$router.push({path:"/withdrawal_success",query:{
              //   alinumber:this.alinumber
              // }});
              this.$router.push("/through");
            }
          });
        }
      }
    },
  },
  created() {
    this.$get("/api/balance_log/balance", {
      user_id: localStorage.getItem("user-id"),
    }).then((val) => {
      console.log(val);
      this.dataList = val.data;
    });

    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      if (r.code == 200) {
        this.alinumber = r.data.alinumber;
      } else {
        alert(r.msg);
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.a {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f5f5f5;
}
.header {
  width: 100%;
  height: 64 / @vw;
  background-color: #fe5858;
  display: flex;
  align-items: center;
}
.banck {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.com {
  font-size: 16 / @vw;
  color: #ffffff;
  margin: 0 auto;
}
.one {
  width: 345 / @vw;
  height: 160 / @vw;
  background-color: #ffffff;
  margin: 15 / @vw 15 / @vw;
  border-radius: 5 / @vw;
}
.coms {
  font-size: 14 / @vw;
  color: #333333;
  margin-left: 10 / @vw;
  padding: 20 / @vw 10 / @vw;
}
.di {
  font-size: 12 / @vw;
}
.money {
  margin: -5 / @vw 18 / @vw;
  font-size: 25 / @vw;
  font-weight: bold;
}
.inputs {
  width: 262 / @vw;
  height: 40 / @vw;
  border: none;
  outline: none;
  font-size: 22 / @vw;
  color: #fe5858;
  font-weight: bold;
}
.xian {
  width: 300 / @vw;
  height: 1 / @vw;
  background-color: #f8f8f8;
  margin: 10 / @vw 22 / @vw;
}
.two {
  display: flex;
  justify-content: space-around;
  padding: 5 / @vw 0;
}
.comss {
  margin-left: -30 / @vw;
  color: #999999;
  font-size: 14 / @vw;
}
.ord {
  margin-right: -30 / @vw;
  font-size: 14 / @vw;
  color: #1f98ff;
}
.gong {
  font-size: 12 / @vw;
  margin: 0 20 / @vw;
  color: #999999;
}
.three {
  width: 345 / @vw;
  height: 228 / @vw;
  background-color: #ffffff;
  margin: 10 / @vw auto;
  border-radius: 5 / @vw;
}
.three i {
  font-size: 12 / @vw;
  color: #999999;
  line-height: 44 / @vw;
  margin-left: 15 / @vw;
}
.zhi {
  display: flex;
  width: 325 / @vw;
  height: 44 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  margin: 0 10 / @vw;
  align-items: center;
  justify-content: space-between;
}
.zhi p {
  color: #333333;
  font-size: 12 / @vw;
}
.zhi img {
  width: 11 / @vw;
  height: 6 / @vw;
}
.inputss {
  width: 262 / @vw;
  height: 40 / @vw;
  border: none;
  outline: none;
  font-size: 12 / @vw;
  color: #999999;
  text-indent: 20 / @vw;
  margin-top: 1 / @vw;
}
.four {
  width: 325 / @vw;
  height: 44 / @vw;
  margin: 0 10 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  display: flex;
  align-items: center;
}
.four p {
  font-size: 12 / @vw;
  color: #333333;
}
.inps {
  width: 230 / @vw;
  height: 40 / @vw;
  border: none;
  outline: none;
  font-size: 12 / @vw;
  color: #999999;
  text-indent: 20 / @vw;
}
.mone {
  margin-right: 20 / @vw;
  width: 90 / @vw;
}
.inp {
  font-size: 12 / @vw;
  margin-top: 1 / @vw;
  width: 100 / @vw;
  color: #999999;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
}
.fours .fa {
  margin-left: 54 / @vw;
  width: 70 / @vw;
  height: 19 / @vw;
  border: 1 / @vw solid #fe5858;
  text-align: center;
  line-height: 19 / @vw;
  color: #fe5858;
}
.fours {
  width: 325 / @vw;
  height: 44 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 0 10 / @vw;
}
.fours p {
  font-size: 12 / @vw;
  color: #333333;
}
.sures {
  width: 345 / @vw;
  height: 44 / @vw;
  background-color: #ea5656;
  color: #ffffff;
  font-size: 15 / @vw;
  line-height: 44 / @vw;
  text-align: center;
  border-radius: 25 / @vw;
  margin-top: 80 / @vw;
}
.alinumber {
  margin-left: 20 / @vw;
}
</style>