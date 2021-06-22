<template>
  <div class="cont_box">
    <div class="drawBoundingBox">
      <!-- 头部 开始-->
      <div class="summer">
        <img src="../assets/left.png" alt="" @click="onClickGoto" />
        <h4>完善信息</h4>
      </div>
      <!-- 头部 结束-->
      <div class="formal">
        <p>
          正规三大运营商号码，配合国家安全，严厉打击电信诈骗，应运营商要求，必须实行实名制办理激活开通。敬请理解！平台客服会在1小时内电话为您一对一服务
        </p>
      </div>
      <div class="gooddata">
        <p>{{ pathsorder[0][0].number }}</p>
        <span>上海</span>
        <span>移动</span>
      </div>
      <h4 class="sureing">请确认你的身份信息</h4>
      <div class="reali">
        <div class="multreal">
          <p>真实姓名<span>*</span></p>
          <input type="text" placeholder="填写你的姓名" v-model="username" />
        </div>
        <div class="box_construct">
          <p>身份证号<span>*</span></p>
          <input type="tel" maxlength="18" v-model="userid" />
        </div>
      </div>
      <h4 class="sureing">请拍摄并上传你的身份证照片(非必填)</h4>
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
        <img src="../assets/hh.png" alt="" class="sureings" />
      </div>
    </div>
    <div class="drawBoundingBox">
      <div class="gooddata">
        <p>{{ pathsorder[0][0].number }}</p>
        <span>上海</span>
        <span>移动</span>
      </div>
      <h4 class="sureing">请确认你的身份信息</h4>
      <div class="reali">
        <div class="multreal">
          <p>真实姓名<span>*</span></p>
          <input type="text" placeholder="填写你的姓名" v-model="usernames" />
        </div>
        <div class="box_construct">
          <p>身份证号<span>*</span></p>
          <input type="tel" maxlength="18" v-model="userids" />
        </div>
      </div>
      <h4 class="sureing">请拍摄并上传你的身份证照片(非必填)</h4>
      <div class="box_header">
        <ul>
          <li>
            <img :src="imgSrc4" alt="" />
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show4"
            />
            <p>请上传身份证正面</p>
            <input
              type="file"
              class="fileImg"
              id="file4"
              @change="onchangeFile(4, 'file4')"
            />
          </li>
          <li>
            <img :src="imgSrc5" alt="" />
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show5"
            />
            <p>请上传身份证反面</p>
            <input
              type="file"
              class="fileImg"
              id="file5"
              @change="onchangeFile(5, 'file5')"
            />
          </li>
          <li>
            <img :src="imgSrc6" alt="" />
            <img
              src="../assets/ppp.png"
              alt=""
              class="ppp"
              v-show="img_show6"
            />
            <p>请上传个人自拍照</p>
            <input
              type="file"
              class="fileImg"
              id="file6"
              @change="onchangeFile(6, 'file6')"
            />
          </li>
        </ul>
        <img src="../assets/hh.png" alt="" class="sureings" />
      </div>
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
        <span>￥{{ price }}</span>
        <div class="commit" @click="onClickJump">立即购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pathsorder: [
        [
          {
            //号码详情
            id: 1,
            number: "18755226962",
            location: "蚌埠市", //归属地
            operator: "1", //运营商：1中国移动 2中国电信 3中国联通
            tag: null,
            initial_charge: 150,
            min_charge: 88, //低消
            prepaid_charge: 50,
            contain_charge: 0, //含话费
            contract: "0", // 协议期，单位月
            purchase_price: "50.00",
            sale_price: "100.00", //卡费
            package_group: "YD00001,YD00002",
            status: 2,
            handle_type: 1,
            recommend: 0,
            describe: "测试数据1",
            store_id: 1,
            store_phone: 2147483647,
            owner: "cecil",
            owner_phone: "18876548765",
            create_time: 1618325669,
            update_time: null,
            returned_commission: 7.5,
            numberpackage: [
              //套餐
              {
                id: 188, //套餐ID
                number: "18755226962",
                package_id: "YD00001",
                storepackage: {
                  id: 1,
                  store_id: 1,
                  type: 1,
                  package_id: "YD00001",
                  package_name: "19元小魔卡", //套餐名称
                  operator: 1,
                  month_charge: "20",
                  general_flow: "10",
                  directional_flow: "15",
                  talk_time: "100",
                  network_service: "5G套餐",
                  package_describe: "123和耨哈USVB",
                  head_image: null,
                  main_image: null,
                  detail_image: null,
                  location: "上海市",
                  status: 0,
                },
              },
              {
                id: 189,
                number: "18755226962",
                package_id: "YD00002",
                storepackage: {
                  id: 2,
                  store_id: 1,
                  type: 1,
                  package_id: "YD00002",
                  package_name: "39元小魔卡",
                  operator: 1,
                  month_charge: "20",
                  general_flow: "10",
                  directional_flow: "15",
                  talk_time: "100",
                  network_service: "5G套餐",
                  package_describe: "123和耨哈USVB",
                  head_image: null,
                  main_image: null,
                  detail_image: null,
                  location: "上海市",
                  status: 1,
                },
              },
            ],
          },
        ],
        [
          {
            //号码详情
            id: 1,
            number: "18755226962",
            location: "蚌埠市", //归属地
            operator: "1", //运营商：1中国移动 2中国电信 3中国联通
            tag: null,
            initial_charge: 150,
            min_charge: 88, //低消
            prepaid_charge: 50,
            contain_charge: 0, //含话费
            contract: "0", // 协议期，单位月
            purchase_price: "50.00",
            sale_price: "100.00", //卡费
            package_group: "YD00001,YD00002",
            status: 2,
            handle_type: 1,
            recommend: 0,
            describe: "测试数据1",
            store_id: 1,
            store_phone: 2147483647,
            owner: "cecil",
            owner_phone: "18876548765",
            create_time: 1618325669,
            update_time: null,
            returned_commission: 7.5,
            numberpackage: [
              //套餐
              {
                id: 188, //套餐ID
                number: "18755226962",
                package_id: "YD00001",
                storepackage: {
                  id: 1,
                  store_id: 1,
                  type: 1,
                  package_id: "YD00001",
                  package_name: "19元小魔卡", //套餐名称
                  operator: 1,
                  month_charge: "20",
                  general_flow: "10",
                  directional_flow: "15",
                  talk_time: "100",
                  network_service: "5G套餐",
                  package_describe: "123和耨哈USVB",
                  head_image: null,
                  main_image: null,
                  detail_image: null,
                  location: "上海市",
                  status: 0,
                },
              },
              {
                id: 189,
                number: "18755226962",
                package_id: "YD00002",
                storepackage: {
                  id: 2,
                  store_id: 1,
                  type: 1,
                  package_id: "YD00002",
                  package_name: "39元小魔卡",
                  operator: 1,
                  month_charge: "20",
                  general_flow: "10",
                  directional_flow: "15",
                  talk_time: "100",
                  network_service: "5G套餐",
                  package_describe: "123和耨哈USVB",
                  head_image: null,
                  main_image: null,
                  detail_image: null,
                  location: "上海市",
                  status: 1,
                },
              },
            ],
          },
        ],
      ],
      username: "",
      userid: "",
      usernames: "",
      userids: "",
      card_front: "", //身份证反面
      card_face: "", //人脸
      card_back: "", //身份证正面
      card_fronts: "", //身份证反面
      card_faces: "", //人脸
      card_backs: "", //身份证正面
      img_show1: true,
      img_show2: true,
      img_show3: true,
      img_show4: true,
      img_show5: true,
      img_show6: true,
      imgSrc1: require("../assets/one.png"),
      imgSrc2: require("../assets/two.png"),
      imgSrc3: require("../assets/three.png"),
      imgSrc4: require("../assets/one.png"),
      imgSrc5: require("../assets/two.png"),
      imgSrc6: require("../assets/three.png"),
      price: "",
    };
  },
  methods: {
    onClickGoto() {
      this.$router.go(-1);
    },
    onClickJump() {
      let arr = {
        user_id: this.$store.state.user_id,
        order_id: this.$route.query.order_id,
        cards: [{}, {}],
      };
      console.log(arr);
      arr.cards[0].card_back = this.card_back;
      arr.cards[0].goods_id = this.$route.query.goods_id1;
      arr.cards[0].card_front = this.card_front;
      arr.cards[0].card_face = this.card_face;
      arr.cards[0].name = this.username;
      arr.cards[0].cardnumber = this.userid;
      arr.cards[1].goods_id = this.$route.query.goods_id2;
      arr.cards[1].card_back = this.card_backs;
      arr.cards[1].card_front = this.card_fronts;
      arr.cards[1].card_face = this.card_faces;
      arr.cards[1].name = this.usernames;
      arr.cards[1].cardnumber = this.userids;
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
        } else if (index == 4) {
          this.imgSrc4 = src;
          this.img_show4 = false;
        } else if (index == 5) {
          this.imgSrc5 = src;
          this.img_show5 = false;
        } else if (index == 6) {
          this.imgSrc6 = src;
          this.img_show6 = false;
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
          } else if (index == 4) {
            this.card_backs = r.url; //身份证正面
          } else if (index == 5) {
            this.card_fronts = r.url; //身份证反面
          } else if (index == 6) {
            this.card_faces = r.url; //人脸
          }
        } else {
          alert("上传失败");
        }
      });
    },
  },
  created() {
    this.$get("/api/number/getNumberInfo", this.$route.query).then((val) => {
      this.pathsorder = val.data;
      this.price =
        parseInt(this.pathsorder[0][0].sale_price) +
        parseInt(this.pathsorder[1][0].sale_price);
    });
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
.fileImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.drawBoundingBox {
  width: 100%;
}

.drawBoundingBox .summer {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
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
.drawBoundingBox .formal {
  width: 345px;
  height: 68px;
  margin: 18px auto 0;
  background-color: rgb(248, 235, 235);
  padding: 10px 10px 14px;
  box-sizing: border-box;
}
.drawBoundingBox .formal p {
  font-size: 12px;
  color: #fe5858;
}
.drawBoundingBox .gooddata {
  width: 345px;
  height: 44px;
  margin: 15px auto 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.drawBoundingBox .gooddata p {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin: 0 15px 0 6px;
}
.drawBoundingBox .gooddata span {
  color: #666666;
  margin-right: 10px;
  font-size: 12px;
}
.drawBoundingBox .sureing {
  font-size: 12px;
  color: #333333;
  font-weight: 500;
  margin-left: 15px;
}
.drawBoundingBox .sureings {
  width: 256px;
  height: 9px;
  margin-left: 15px;
}
.drawBoundingBox .reali {
  width: 345px;
  height: 83px;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 4px;
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
.drawBoundingBox .reali .multreal p span,
.drawBoundingBox .reali .box_construct p span {
  font-size: 14px;
  color: #fe5858;
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
  height: 304px;
  background-color: #fff;
  margin: 10px auto;
  padding: 15px 0;
  border-radius: 4px;
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
  margin: 10px auto 47px;
  border-radius: 4px;
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
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
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
</style>