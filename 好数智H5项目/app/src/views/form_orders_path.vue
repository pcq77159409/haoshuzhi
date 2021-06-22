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
        <img src="../assets/hh.png" alt="" />
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
        user_id: this.$store.state.user_id,
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
          sessionStorage.setItem("time", +new Date());
          this.$router.push({
            path: "/commerce_payment",
            query: {
              order_id: val.data.id,
              price: val.data.price,
              number: val.data.number,
            },
          });
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
<style lang="scss" scoped>
.cont_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.drawBoundingBox {
  width: 100%;
  // height: 100%;
  padding-bottom: 20px;
}
.drawBoundingBox .summer {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
}
.drawBoundingBox .summer img {
  width: 10px;
  height: 16px;
  margin-left: 16px;
}
.drawBoundingBox .summer h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.drawBoundingBox .endcsname {
  width: 345px;
  height: 68px;
  background-color: rgba(250, 202, 207, 0.2);
  margin: 74px 15px 10px;
  display: flex;
  color: #fe5858;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 13px;
}
.drawBoundingBox .endcsname img:first-child {
  width: 20px;
  height: 29px;
  margin: 20px 0 0 20px;
}
.drawBoundingBox .endcsname img:last-child {
  width: 8px;
  height: 14px;
  margin: 29px 0 0 10px;
}
.drawBoundingBox .endcsname .mercifully {
  width: 80%;
}
.drawBoundingBox .endcsname .mercifully .parameter {
  display: flex;
}
.drawBoundingBox .endcsname .mercifully .parameter h3 {
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 15px 0 0 12px;
}
.drawBoundingBox .endcsname .mercifully .parameter p {
  color: #666666;
  font-size: 12px;
  margin: 17px 0 0 14px;
}
.drawBoundingBox .endcsname .mercifully .reklameadvice {
  display: flex;
}
.drawBoundingBox .endcsname .mercifully .reklameadvice p {
  font-size: 12px;
  color: #333333;
  margin: 4px 0 0 12px;
}
.drawBoundingBox .sureing {
  font-size: 12px;
  color: #333333;
  font-weight: 500;
  margin-left: 15px;
}
.drawBoundingBox .sureings img {
  width: 256px;
  height: 9px;
  margin-left: 15px;
}
.drawBoundingBox .reali {
  width: 345px;
  height: 83px;
  background-color: #fff;
  margin: 10px 15px;
}
.drawBoundingBox .reali .multreal {
  display: flex;
  align-items: center;
  width: 325px;
  margin: 0 10px;
  border-bottom: 1px solid #d2d2d2;
  height: 50%;
}
.drawBoundingBox .reali .multreal p,
.drawBoundingBox .reali .box_construct p {
  font-size: 14px;
  color: #333333;
  margin-right: 14px;
}
.drawBoundingBox .reali .multreal input {
  border: none;
  outline: none;
  font-size: 12px;
  color: #666666;
  margin-top: 1px;
}
.drawBoundingBox .reali .box_construct {
  display: flex;
  align-items: center;
  width: 325px;
  height: 50%;
  margin: 0 10px;
}
.drawBoundingBox .reali .box_construct span {
  color: #333333;
  font-size: 12px;
}
.drawBoundingBox .box_header {
  width: 345px;
  height: 285px;
  background-color: #fff;
  margin: 10px 15px;
  padding: 15px 0;
}
.drawBoundingBox .box_header ul {
  display: flex;
  width: 325px;
  height: 285px;
  margin: 0 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.drawBoundingBox .box_header ul li {
  width: 152px;
  height: 127px;
  position: relative;
}
.drawBoundingBox .box_header ul li:first-child {
  margin: 0 21px 21px 0;
}
.drawBoundingBox .box_header ul li img:first-child {
  width: 100%;
  height: 97px;
}
.drawBoundingBox .box_header ul li .ppp {
  width: 47px;
  height: 47px;
  position: absolute;
  left: 53px;
  top: 25px;
}
.drawBoundingBox .box_header ul li p {
  font-size: 12px;
  color: #333333;
  text-align: center;
  margin-top: 10px;
}
.drawBoundingBox .instructionsare {
  width: 345px;
  height: 133px;
  background-color: #fff;
  margin: 10px 15px 47px;
}
.drawBoundingBox .instructionsare h4 {
  width: 325px;
  height: 44px;
  margin: 0 10px;
  border-bottom: 1px solid #eaeaea;
  line-height: 44px;
  font-size: 14px;
  color: #333333;
}
.drawBoundingBox .InstructionSet {
  width: 325px;
  height: 44px;
  margin: 0 10px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  position: relative;
}
.drawBoundingBox .InstructionSet img:first-child {
  width: 11px;
  height: 11px;
  margin-left: 6px;
}
.drawBoundingBox .InstructionSet img:last-child {
  width: 6px;
  height: 10px;
  margin-left: 90px;
}
.drawBoundingBox .InstructionSet p {
  font-size: 12px;
  color: #666666;
  margin-left: 14px;
}
.drawBoundingBox .InstructionSet p span {
  color: #fe5858;
}
.drawBoundingBox .InstructionSet .yes {
  width: 11px;
  height: 11px;
  position: absolute;
  left: 6px;
}
.drawBoundingBox .InstructionSet:last-child {
  border-bottom: none;
}
.drawBoundingBox .sensorbox_init_osd {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.drawBoundingBox .sensorbox_init_osd p {
  font-size: 14px;
  color: #2c2c2c;
  font-weight: 600;
  margin-left: 14px;
}
.drawBoundingBox .sensorbox_init_osd span {
  color: #fe5858;
  font-size: 14px;
  margin-left: 4px;
  font-weight: 600;
}
.drawBoundingBox .sensorbox_init_osd .commit {
  width: 105px;
  height: 100%;
  background-color: #fe5858;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: absolute;
  right: 0;
  font-size: 14px;
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