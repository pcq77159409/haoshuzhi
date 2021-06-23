<template>
  <div class="login-box">
    <div class="white_box">
      <img
        src="../assets/关闭按钮@2x.png"
        alt=""
        class="colse"
        @click="$router.push('/commons/home/m')"
      />
      <img src="../assets/logo2x.png" alt="" class="logo" />
      <ul>
        <li>
          <img src="../assets/手机号码@2x.png" alt="" />
          <input
            type="number"
            placeholder="请输入手机号码"
            oninput="if(value.length>11)value=value.slice(0,11)"
            v-model="mobile"
          />
        </li>
        <li>
          <img src="../assets/验证码@2x.png" alt="" />
          <input
            type="number"
            placeholder="请输入验证码"
            oninput="if(value.length>6)value=value.slice(0,6)"
            v-model="code"
          />
          <button @click="onClickJump" :disabled="codeDisabled" ref="yan">
            验证码
          </button>
        </li>
      </ul>
      <div class="login" @click="onClicLogin">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      code: "",
      // 是否禁用按钮
      codeDisabled: false,
      // 倒计时秒数
      countdown: 60,
      // 定时器
      timer: null,
    };
  },
  methods: {
    onClickJump() {
      this.$axios.get("/api/user/getcode?mobile=" + this.mobile).then((val) => {
        console.log(val);
        if (val.code == 200) {
          this.$refs.yan.innerText = this.countdown;
          if (!this.timer) {
            this.timer = setInterval(() => {
              if (this.countdown > 0 && this.countdown <= 60) {
                this.countdown--;
                this.$refs.yan.innerText = this.countdown;
                this.codeDisabled = true;
                if (this.countdown !== 0) {
                  this.codeMsg = "重新发送(" + this.countdown + ")";
                } else {
                  clearInterval(this.timer);
                  this.$refs.yan.innerText = "验证码";
                  this.countdown = 60;
                  this.timer = null;
                  this.codeDisabled = false;
                }
              }
            }, 1000);
          }
        }
      });
    },
    onClicLogin() {
      this.$axios
        .post("/api/user/codelogin", {
          mobile: this.mobile,
          verify: this.code,
        })
        .then((val) => {
          console.log(val);
          console.log(this.mobile);
          if (val.code == 200) {
            localStorage.setItem("token", val.data.token);
            localStorage.setItem("user-id", val.data.id);
            alert("登陆成功");
            setTimeout(() => {
              this.$router.push("/commons/home/m");
            }, 2000);
          } else {
            alert(val.msg);
          }
        });
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.login-box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box .white_box {
  width: 249/@vw;
  height: 256/@vw;
  background-color: #fff;
  border-radius: 4/@vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-box .white_box .colse {
  width: 15/@vw;
  height: 15/@vw;
  position: absolute;
  top: 6/@vw;
  right: 8/@vw;
}
.login-box .white_box .logo {
  width: 136/@vw;
  height: 44/@vw;
  margin-top: 27/@vw;
}
.login-box .white_box ul {
  width: 200/@vw;
  height: 102/@vw;
  margin-top: 10/@vw;
}
.login-box .white_box ul li {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50/@vw;
  border-bottom: 1/@vw solid #fe5858;
  padding-bottom: 6/@vw;
  box-sizing: border-box;
}
.login-box .white_box ul li img {
  width: 10/@vw;
  height: 14/@vw;
  margin: 0 10/@vw 5/@vw 4/@vw;
}
.login-box .white_box ul li input {
  font-size: 12/@vw;
  color: #999999;
  width: 122/@vw;
  margin-bottom: 5/@vw;
}
.login-box .white_box ul li button {
  font-size: 12/@vw;
  color: #fe5858;
  border: 1/@vw dashed #fe5858;
  text-align: center;
  background: transparent;
  width: 50/@vw;
  height: 24/@vw;
}
.login-box .white_box .login {
  width: 214/@vw;
  height: 33/@vw;
  background-color: #fe5858;
  color: #fff;
  font-size: 14/@vw;
  text-align: center;
  line-height: 33/@vw;
  margin: 0 auto;
  border-radius: 25/@vw;
  margin-top: 20/@vw;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
  font-size: 12/@vw;
}
</style>