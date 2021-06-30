<template>
  <div class="cont_box">
    <div class="drawBoundingBox">
      <!-- 头部 开始-->
      <div class="summer">
        <img src="../assets/left.png" alt="" @click="onClickGoto" />
        <h4>完善信息</h4>
      </div>
      <!-- 头部 结束-->
      <div class="endcsname">
        <!-- <img src="../assets/ding.png" alt="" />
        <div class="mercifully">
          <div class="parameter">
            <h3>好名字</h3>
            <p>18812345689</p>
          </div>
          <div class="reklameadvice">
            <p>收货地址: 上海嘉定区平城路118弄</p>
          </div>
        </div>
        <img src="../assets/跳转箭头@2x.png" alt="" /> -->
        正规三大运营商号码，配合国家安全，严厉打击电信诈骗，应运营商要求，必须实行实名制办理激活开通。敬请理解！平台客服会在1小时内电
      </div>
      <h4 class="sureing">请确认你的身份信息</h4>
      <div class="reali">
        <div class="multreal">
          <p>真实姓名 <span style="color: red">*</span></p>
          <input type="text" placeholder="填写你的姓名" v-model="username" />
        </div>
        <div class="box_construct">
          <p>身份证号 <span style="color: red">*</span></p>
          <input
            type="text"
            placeholder="341616********6610"
            v-model="userid"
            maxlength="18"
          />
        </div>
      </div>
      <h4 class="sureing">请拍摄并上传你的身份证照片 (非必填)</h4>
      <div class="box_header">
        <ul>
          <li>
            <img :src="imgSrc1" alt="" />
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show1"
            />
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
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show2"
            />
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
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show3"
            />
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
      <h4 class="sureings">
        <p><span>注:</span>拍摄时确保身份证边框完整,字体清晰!尺寸最大不超过2m</p>
        <!-- <img src="../assets/hh.png" alt="" /> -->
      </h4>
      <div class="instructionsare">
        <h4>购号须知</h4>
        <div class="InstructionSet">
          <img src="../assets/圆角矩形 2@2x.png" alt="" />
          <img src="../assets/yes.png" alt="" class="yes" v-show="true" />
          <p>请仔细阅读 <span>《办理须知》</span> 服务条款</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </div>
        <div class="InstructionSet">
          <img src="../assets/圆角矩形 2@2x.png" alt="" />
          <img src="../assets/yes.png" alt="" class="yes" v-show="true" />
          <p>请仔细阅读 <span>《入网协议》</span> 服务条款</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </div>
      </div>
      <div class="sensorbox_init_osd">
        <p>合计:</p>
        <span>￥{{ money }}</span>
        <div class="commit" @click="onClickJump">立即购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 0,
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
    onClickJump() {
      let arr = {
        user_id: localStorage.getItem('user-id'),
        order_id: this.$route.query.order_id,
        cards: [{}],
      };

      console.log(arr);
      arr.cards[0].card_back = this.card_back;
      arr.cards[0].card_front = this.card_front;
      arr.cards[0].card_face = this.card_face;
      arr.cards[0].name = this.username;
      arr.cards[0].cardnumber = this.userid;
      arr.cards[0].goods_id = this.$route.query.goods_id;
      this.$post("api/order/updateusercode", arr).then((val) => {
        console.log(val);
        if (val.code == 200) {
          this.$router.push({path:'/confirm',query:this.$route.query});
        }
      });
    },
    onClickGoto() {
      this.$router.go(-1);
    },
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
  mounted() {
    this.money = this.$route.query.money;
    console.log(this.$store.state.createTheOrder);
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.cont_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.drawBoundingBox {
  width: 100%;
  // height: 100%;
  padding-bottom: 20/@vw;
}
.drawBoundingBox .summer {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.drawBoundingBox .summer img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.drawBoundingBox .summer h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.drawBoundingBox .endcsname {
  width: 345/@vw;
  height: 68/@vw;
  background-color: rgba(250, 202, 207, 0.2);
  margin: 74/@vw 15/@vw 15/@vw;
  display: flex;
  color: #fe5858;
  padding: 10/@vw;
  box-sizing: border-box;
  border-radius: 5/@vw;
  font-size: 12/@vw;
}
.drawBoundingBox .endcsname img:first-child {
  width: 20/@vw;
  height: 29/@vw;
  margin: 20/@vw 0 0 20/@vw;
}
.drawBoundingBox .endcsname img:last-child {
  width: 8/@vw;
  height: 14/@vw;
  margin: 29/@vw 0 0 10/@vw;
}
.drawBoundingBox .endcsname .mercifully {
  width: 80%;
}
.drawBoundingBox .endcsname .mercifully .parameter {
  display: flex;
}
.drawBoundingBox .endcsname .mercifully .parameter h3 {
  color: #333333;
  font-size: 15/@vw;
  font-weight: 500;
  margin: 15/@vw 0 0 12/@vw;
}
.drawBoundingBox .endcsname .mercifully .parameter p {
  color: #666666;
  font-size: 12/@vw;
  margin: 17/@vw 0 0 14/@vw;
}
.drawBoundingBox .endcsname .mercifully .reklameadvice {
  display: flex;
}
.drawBoundingBox .endcsname .mercifully .reklameadvice p {
  font-size: 12/@vw;
  color: #333333;
  margin: 4/@vw 0 0 12/@vw;
}
.drawBoundingBox .sureing {
  font-size: 12/@vw;
  color: #333333;
  font-weight: 500;
  margin-left: 15/@vw;
}
.drawBoundingBox .sureings p{
  color: #333333;
  font-size: 12/@vw;
  font-weight: normal;
}
.drawBoundingBox .sureings span {
  font-size: 12/@vw;
  color: #e33232;
  margin-left: 15/@vw;
  margin-right: 4/@vw;
  font-weight: normal;
}
.drawBoundingBox .reali {
  width: 345/@vw;
  height: 83/@vw;
  background-color: #fff;
  margin:15/@vw;
}
.drawBoundingBox .reali .multreal {
  display: flex;
  align-items: center;
  width: 325/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid #d2d2d2;
  height: 50%;
}
.drawBoundingBox .reali .multreal p,
.drawBoundingBox .reali .box_construct p {
  font-size: 14/@vw;
  color: #333333;
  margin-right: 14/@vw;
}
.drawBoundingBox .reali .multreal input {
  border: none;
  outline: none;
  font-size: 12/@vw;
  color: #666666;
  margin-top: 1/@vw;
}
.drawBoundingBox .reali .box_construct {
  display: flex;
  align-items: center;
  width: 325/@vw;
  height: 50%;
  margin: 0 10/@vw;
}
.drawBoundingBox .reali .box_construct span {
  color: #333333;
  font-size: 12/@vw;
}
.drawBoundingBox .box_header {
  width: 345/@vw;
  height: 285/@vw;
  background-color: #fff;
  margin: 15/@vw;
  padding: 15/@vw 0;
}
.drawBoundingBox .box_header ul {
  display: flex;
  width: 325/@vw;
  height: 285/@vw;
  margin: 0 10/@vw;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.drawBoundingBox .box_header ul li {
  width: 152/@vw;
  height: 127/@vw;
  position: relative;
}
.drawBoundingBox .box_header ul li:first-child {
  margin: 0 21/@vw 21/@vw 0;
}
.drawBoundingBox .box_header ul li img:first-child {
  width: 100%;
  height: 97/@vw;
}
.drawBoundingBox .box_header ul li .ppp {
  width: 47/@vw;
  height: 47/@vw;
  position: absolute;
  left: 53/@vw;
  top: 25/@vw;
}
.drawBoundingBox .box_header ul li p {
  font-size: 12/@vw;
  color: #333333;
  text-align: center;
  margin-top: 10/@vw;
}
.drawBoundingBox .instructionsare {
  width: 345/@vw;
  height: 133/@vw;
  background-color: #fff;
  margin: 10/@vw 15/@vw 47/@vw;
}
.drawBoundingBox .instructionsare h4 {
  width: 325/@vw;
  height: 44/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid #eaeaea;
  line-height: 44/@vw;
  font-size: 14/@vw;
  color: #333333;
}
.drawBoundingBox .InstructionSet {
  width: 325/@vw;
  height: 44/@vw;
  margin: 0 10/@vw;
  border-bottom: 1/@vw solid #eaeaea;
  display: flex;
  align-items: center;
  position: relative;
}
.drawBoundingBox .InstructionSet img:first-child {
  width: 11/@vw;
  height: 11/@vw;
  margin-left: 6/@vw;
}
.drawBoundingBox .InstructionSet img:last-child {
  width: 6/@vw;
  height: 10/@vw;
  margin-left: 90/@vw;
}
.drawBoundingBox .InstructionSet p {
  font-size: 12/@vw;
  color: #666666;
  margin-left: 14/@vw;
}
.drawBoundingBox .InstructionSet p span {
  color: #fe5858;
}
.drawBoundingBox .InstructionSet .yes {
  width: 11/@vw;
  height: 11/@vw;
  position: absolute;
  left: 6/@vw;
}
.drawBoundingBox .InstructionSet:last-child {
  border-bottom: none;
}
.drawBoundingBox .sensorbox_init_osd {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 44/@vw;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.drawBoundingBox .sensorbox_init_osd p {
  font-size: 14/@vw;
  color: #2c2c2c;
  font-weight: 600;
  margin-left: 14/@vw;
}
.drawBoundingBox .sensorbox_init_osd span {
  color: #fe5858;
  font-size: 14/@vw;
  margin-left: 4/@vw;
  font-weight: 600;
}
.drawBoundingBox .sensorbox_init_osd .commit {
  width: 105/@vw;
  height: 100%;
  background-color: #fe5858;
  color: #fff;
  text-align: center;
  line-height: 44/@vw;
  position: absolute;
  right: 0;
  font-size: 14/@vw;
}
.fileImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>