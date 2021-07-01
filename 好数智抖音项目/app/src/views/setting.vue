<template>
  <div class="set_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>设置</h4>
    </div>
    <div class="show">
      <ul>
        <li>
          <p>显示价格</p>
          <div @click="onClickClose">
            <span ref="jia">{{ open }}</span>
            <el-switch
              v-model="value"
              active-color="#fe5858"
              inactive-color="#ccc"
            >
            </el-switch>
          </div>
        </li>
        <li>
          <p>显示佣金</p>
          <div @click="onClickClose">
            <span ref="yon">{{ close }}</span>
            <el-switch
              v-model="actives"
              active-color="#fe5858"
              inactive-color="#ccc"
              :disabled="type != 1"
            >
            </el-switch>
          </div>
        </li>
      </ul>
    </div>
    <i>* 显示佣金默认关闭 ： 实力买家可开启佣金显示</i>
    <div class="person_massage" @click="$router.push('/personmsg')">
      <p>个人信息</p>
      <img src="../assets/跳转箭头@2x.png" alt="" />
    </div>
    <div class="show">
      <ul>
        <li>
          <p>意见反馈</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </li>
        <li>
          <p>关于我们</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </li>
        <li>
          <p>版本更新</p>
          <span>版本2.3.0</span>
        </li>
      </ul>
    </div>
    <div class="clear">清空缓存</div>
    <div class="login" @click="onclickLogin">退出登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      actives: false,
      close: "关闭",
      open: "开启",
      type: 0,
    };
  },
  watch: {
    value(val) {
      localStorage.setItem("priceShow", val);
    },
    actives(val) {
      localStorage.setItem("commissionShow", val);
    },
  },
  methods: {
    onClickClose() {
      if (this.value == true) {
        this.$refs.jia.innerText = this.open;
      } else {
        this.$refs.jia.innerText = this.close;
      }
      if (this.type != 1) {
        if (this.actives == true) {
          this.$refs.yon.innerText = this.open;
        } else {
          this.$refs.yon.innerText = this.close;
        }
      }
    },
    onclickLogin() {
      localStorage.setItem("user-id", "");
      localStorage.setItem("token", "");
      this.$axios
        .post("api/user/uuidlogin", "", {
          headers: {
            token: localStorage.getItem("token"),
            user_id: localStorage.getItem("user-id"),
            uuid: localStorage.getItem("uuid"),
          },
        })
        .then((r) => {
          console.log(r);
          if (r.code == 200) {
            localStorage.setItem("user-id", r.data.id);
            localStorage.setItem("token", r.data.token);
            localStorage.setItem("uuidstatus", r.data.uuidstatus);
            this.$router.push("/commons/home/m");
          }
        });
    },
  },
  mounted() {
    if (localStorage.getItem("priceShow")) {
      if (localStorage.getItem("priceShow") == "true") {
        this.value = true;
      } else {
        this.value = false;
      }
    }
    if (localStorage.getItem("commissionShow")) {
      if (localStorage.getItem("commissionShow") == "true") {
        this.actives = true;
      } else {
        this.actives = false;
      }
    }
    this.onClickClose();

    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      if (r.code == 200) {
        this.type = r.data.type;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.set_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  padding-top: 64 / @vw;
  box-sizing: border-box;
}
.set_box .jumplabel {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.set_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.set_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.set_box .show {
  width: 100%;
  background-color: #fff;
  margin-top: 10 / @vw;
}
.set_box .show ul {
  width: 100%;
}
.set_box .show ul li {
  width: 345 / @vw;
  height: 54 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15 / @vw;
}
.set_box .show ul li:last-child {
  border-bottom: none;
}
.set_box .show ul li p {
  font-size: 14 / @vw;
  color: #333333;
}
.set_box .show ul li span {
  font-size: 12 / @vw;
  color: #999999;
  margin-right: 8 / @vw;
}
.set_box .show ul li img {
  width: 8 / @vw;
  height: 14 / @vw;
}
.set_box i {
  display: inline-block;
  margin: 10 / @vw 0 20 / @vw 15 / @vw;
  font-size: 12 / @vw;
  color: #999999;
}
.set_box .person_massage {
  width: 100%;
  height: 54 / @vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15 / @vw;
}
.set_box .person_massage p {
  font-size: 14 / @vw;
  color: #333333;
  margin-left: 15 / @vw;
}
.set_box .person_massage img {
  width: 8 / @vw;
  height: 14 / @vw;
  margin-right: 15 / @vw;
}
.set_box .clear {
  width: 100%;
  height: 54 / @vw;
  background-color: #fff;
  font-size: 12 / @vw;
  color: #333333;
  margin: 10 / @vw 0;
  line-height: 54 / @vw;
  text-indent: 15 / @vw;
}
.set_box .login {
  width: 100%;
  height: 54 / @vw;
  background-color: #fff;
  font-size: 12 / @vw;
  color: #ea5656;
  text-align: center;
  line-height: 54 / @vw;
}
</style>