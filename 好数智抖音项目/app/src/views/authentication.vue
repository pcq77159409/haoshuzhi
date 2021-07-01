<template>
  <div class="authentication_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>实名认证</h4>
    </div>
    <div class="box_header">
      <ul>
        <li>
          <img :src="imgSrc1" alt="" />
          <img src="../assets/ppp.png" alt="" class="ppp" v-show="img_show1" />
          <p>请上传身份证正面</p>
          <input
            type="file"
            class="fileImg"
            id="file1"
            @change="onchangeFile(1, 'file1')"
          />
        </li>
        <li>
          <img :src="imgSrc2" alt="" />
          <img src="../assets/ppp.png" alt="" class="ppp" v-show="img_show2" />
          <p>请上传身份证反面</p>
          <input
            type="file"
            class="fileImg"
            id="file2"
            @change="onchangeFile(2, 'file2')"
          />
        </li>
        <li>
          <img :src="imgSrc3" alt="" />
          <img src="../assets/ppp.png" alt="" class="ppp" v-show="img_show3" />
          <p>请上传个人自拍照</p>
          <input
            type="file"
            class="fileImg"
            id="file3"
            @change="onchangeFile(3, 'file3')"
          />
        </li>
      </ul>
    </div>
    <div class="commit">提交</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      userid: "",
      img_show1: true,
      img_show2: true,
      img_show3: true,
      imgSrc1: require("../assets/one.png"),
      imgSrc2: require("../assets/two.png"),
      imgSrc3: require("../assets/three.png"),
      card_front: "", //身份证反面
      card_face: "", //人脸
      card_back: "", //身份证正面
    };
  },
  methods: {
    onchangeFile(index, id) {
      var oFReader = new FileReader();
      var file = document.getElementById(id).files[0];

      oFReader.readAsDataURL(file);

      oFReader.onloadend = (oFRevent) => {
        var src = oFRevent.target.result;
        if (index == 1) {
          this.imgSrc1 = src;
          this.img_show1 = false;
        } else if (index == 2) {
          this.imgSrc2 = src;
          this.img_show2 = false;
        } else if (index == 3) {
          this.imgSrc3 = src;
          this.img_show3 = false;
        }
      };
      var formData = new FormData();

      formData.append("file", file);

      this.$axios.post("/api/upload/upload", formData).then((r) => {
        if (r.error == 0) {
          console.log(r);
          if (index == 1) {
            this.card_back = r.url; //身份证正面
          } else if (index == 2) {
            this.card_front = r.url; //身份证反面
          } else if (index == 3) {
            this.card_face = r.url; //人脸
          }
        } else {
          alert("上传失败");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.authentication_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  padding-top: 68 / @vw;
  box-sizing: border-box;
}
.authentication_box .jumplabel {
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
.authentication_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.authentication_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.authentication_box .box_header {
  width: 345 / @vw;
  height: 285 / @vw;
  background-color: #fff;
  margin: 10 / @vw 15 / @vw;
  padding: 15 / @vw 0;
}
.authentication_box .box_header ul {
  display: flex;
  width: 325 / @vw;
  height: 285 / @vw;
  margin: 0 10 / @vw;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.authentication_box .box_header ul li {
  width: 152 / @vw;
  height: 127 / @vw;
  position: relative;
}
.authentication_box .box_header ul li:first-child {
  margin: 0 21 / @vw 21 / @vw 0;
}
.authentication_box .box_header ul li img:first-child {
  width: 100%;
  height: 97 / @vw;
}
.authentication_box .box_header ul li .ppp {
  width: 47 / @vw;
  height: 47 / @vw;
  position: absolute;
  left: 53 / @vw;
  top: 25 / @vw;
}
.authentication_box .box_header ul li p {
  font-size: 12 / @vw;
  color: #333333;
  text-align: center;
  margin-top: 10 / @vw;
}
.authentication_box .fileImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.authentication_box .commit {
    width: 345/@vw;
    height: 44/@vw;
    background-color: #ea5656;
    text-align: center;
    line-height: 44/@vw;
    color: #fff;
    font-size: 14/@vw;
    margin: 40/@vw auto;
    border-radius: 25/@vw;
}
</style>