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
            this.$store.commit("onToken", localStorage.getItem("token"));
            this.$store.commit("onUesrId", localStorage.getItem("user-id"));
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
<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box .white_box {
  width: 249px;
  height: 256px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-box .white_box .colse {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 6px;
  right: 8px;
}
.login-box .white_box .logo {
  width: 136px;
  height: 44px;
  margin-top: 27px;
}
.login-box .white_box ul {
  width: 200px;
  height: 102px;
  margin-top: 10px;
}
.login-box .white_box ul li {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #fe5858;
  padding-bottom: 6px;
  box-sizing: border-box;
}
.login-box .white_box ul li img {
  width: 10px;
  height: 14px;
  margin: 0 10px 5px 4px;
}
.login-box .white_box ul li input {
  font-size: 12px;
  color: #999999;
  width: 122px;
  margin-bottom: 5px;
}
.login-box .white_box ul li button {
  font-size: 12px;
  color: #fe5858;
  border: 1px dashed #fe5858;
  text-align: center;
  background: transparent;
  width: 50px;
  height: 24px;
}
.login-box .white_box .login {
  width: 214px;
  height: 33px;
  background-color: #fe5858;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 33px;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 20px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #999999;
  font-size: 12px;
}
</style>