<template>
  <div class="personmsg_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>个人信息</h4>
    </div>
    <div class="replace">
      <div class="portrait" @click="geng">
        <img :src="src" alt="" />
        <p>更换头像</p>
        <input type="file" class="fileImg" id="file1" @change="geng('file1')" />
      </div>
      <ul>
        <li>
          <p>昵称更改</p>
          <input type="text" placeholder="随机生成昵称" v-model="username" />
        </li>
        <li>
          <p>性别</p>
          <img :src="img" alt="" @click="ji(1)" v-show="show" />
          <span v-show="show">男</span>
          <input type="text" placeholder="男/女" v-model="sex" v-show="flag" />
          <img :src="imgs" alt="" @click="ji(2)" v-show="show" />
          <span v-show="show">女</span>
        </li>
        <li>
          <p>生日</p>
          <input type="text" placeholder="请输入出生日期" v-model="birsday" />
        </li>
        <!-- <li>
          <p>支付宝账号</p>
          <input type="text" placeholder="请输入支付宝账号" />
        </li> -->
      </ul>
    </div>
    <div class="authentication" @click="$router.push('/authentication')">
      <p>实名认证</p>
      <img src="../assets/跳转箭头@2x.png" alt="" />
    </div>
    <div class="xiu" @click="onUser">确认修改</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      head_img: "",
      src: require("../assets/矢量智能对象@2x (4).png"),
      username: "",
      sex: "",
      birsday: "",
      img: require("../assets/圆角矩形 2@2x.png"),
      imgs: require("../assets/圆角矩形 2@2x.png"),
      show: true,
      flag: false,
    };
  },
  methods: {
    geng(id) {
      var oFReader = new FileReader();
      var file = document.getElementById(id).files[0];
      console.log(document.getElementById(id).files[0]);
      oFReader.readAsDataURL(file);

      oFReader.onloadend = (oFRevent) => {
        var src = oFRevent.target.result;
        this.src = src;
      };
      var formData = new FormData();

      formData.append("file", file);
      this.$axios.post("/api/upload/upload", formData).then((r) => {
        if (r.error == 0) {
          this.head_img = r.url;
          this.$post("/api/user/updateinfo", {
            user_id: localStorage.getItem("user-id"),
            head_img: this.head_img,
          }).then((val) => {
            console.log(val);
          });
        } else {
          alert("上传失败");
        }
      });
    },
    onUser() {
      this.$post("/api/user/updateinfo", {
        user_id: localStorage.getItem("user-id"),
        username: this.username,
        sex: this.sex,
        birthday: this.birsday,
      }).then((val) => {
        console.log(val);
        if (val.code == 200) {
          this.show = false;
          this.flag = true;
          if (this.sex == 1) {
          this.sex = "男";
        } else if (this.sex == 2) {
          this.sex = "女";
        } else if (this.sex == null) {
          this.sex = "未知";
        }
        }
      });
    },
    ji(id) {
      if (id == 1) {
        this.img = require("../assets/yes.png");
        this.imgs = require("../assets/圆角矩形 2@2x.png");
        this.sex = 1;
      } else if (id == 2) {
        this.imgs = require("../assets/yes.png");
        this.img = require("../assets/圆角矩形 2@2x.png");
        this.sex = 2;
      }
    },
    // onSex(){
    //   this.$post("/api/user/updateinfo", {
    //     user_id: localStorage.getItem("user-id"),
    //     sex: this.sex,
    //   }).then((val) => {
    //     console.log(val);
    //   });
    // },
    // onbirsday(){
    //    this.$post("/api/user/updateinfo", {
    //     user_id: localStorage.getItem("user-id"),
    //     birsday: this.birsday,
    //   }).then((val) => {
    //     console.log(val);
    //   });
    // }
  },
  mounted() {
    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((val) => {
      if (val.data.head_img != null) {
        this.src = val.data.head_img;
        this.username = val.data.username;
        this.sex = val.data.sex;
        this.birsday = val.data.birthday;
        if (val.data.sex == 1) {
          this.sex = "男";
        } else if (val.data.sex == 2) {
          this.sex = "女";
        } else if (val.data.sex == null) {
          this.sex = "未知";
        }
      }
      console.log(val.data.sex);
    });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.xiu {
  width: 345 / @vw;
  height: 44 / @vw;
  text-align: center;
  line-height: 44 / @vw;
  color: #fff;
  background-color: #fe5858;
  border-radius: 25 / @vw;
  font-size: 14 / @vw;
  margin: 20 / @vw auto;
}
.personmsg_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  padding-top: 68 / @vw;
  box-sizing: border-box;
}
.personmsg_box .jumplabel {
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
.personmsg_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.personmsg_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.personmsg_box .replace {
  width: 100%;
  // height: 244/@vw;
  background-color: #fff;
}
.personmsg_box .replace img {
  width: 15 / @vw;
  height: 15 / @vw;
  margin-right: 6 / @vw;
  pointer-events: auto;
}
.personmsg_box .replace span {
  font-size: 12 / @vw;
  color: #999;
  margin-right: 4 / @vw;
  display: block;
}
.personmsg_box .replace .portrait {
  width: 60 / @vw;
  height: 69 / @vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25 / @vw;
  position: relative;
}
.personmsg_box .replace .portrait .fileImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.personmsg_box .replace .portrait img {
  width: 52 / @vw;
  height: 52 / @vw;
}
.personmsg_box .replace .portrait p {
  font-size: 12 / @vw;
  color: #fe5858;
  margin-top: 7 / @vw;
}
.personmsg_box .replace ul {
  width: 345 / @vw;
  // height: 121/@vw;
  margin: 29 / @vw auto 0;
}
.personmsg_box .replace ul li {
  width: 100%;
  height: 40 / @vw;
  border-top: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.personmsg_box .replace ul li p {
  font-size: 14 / @vw;
  color: #333;
  margin-right: 48 / @vw;
}
.personmsg_box .replace ul li:first-child p {
  margin-right: 20 / @vw;
}
.personmsg_box .replace ul li input {
  font-size: 12 / @vw;
  color: #999;
}
.personmsg_box .authentication {
  width: 100%;
  height: 40 / @vw;
  background-color: #fff;
  margin-top: 10 / @vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.personmsg_box .authentication p {
  font-size: 14 / @vw;
  color: #333;
  margin-left: 15 / @vw;
}
.personmsg_box .authentication img {
  width: 8 / @vw;
  height: 14 / @vw;
  margin-right: 15 / @vw;
}
</style>