<template>
  <div class="login-box">
    <div class="white_box">
      <img src="../assets/关闭按钮@2x.png" alt="" class="colse" @click="$router.push('/commons/home')"/>
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
          <p @click="onClickJump">验证码</p>
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
    };
  },
  methods: {
    onClickJump() {
      this.$axios.get("/api/user/getcode?mobile=" + this.mobile).then((val) => {
        console.log(val);
      });
    },
    onClicLogin() {
      this.$axios
        .post("/api/user/codelogin", 
        { 
            mobile: this.mobile,
             verify: this.code 
        })
        .then((val) => {
          console.log(val);
          console.log(this.mobile);
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
.login-box .white_box ul li p {
  font-size: 12px;
  color: #fe5858;
  border: 1px dashed #fe5858;
  text-align: center;
  padding: 1px 8px;
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