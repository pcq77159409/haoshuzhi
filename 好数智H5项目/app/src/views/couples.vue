<template>
  <div class="Mobile_phone" ref="bugun" @scroll="scrollBox($event)">
    <!-- 头部导航 开始-->
    <div class="reds">
      <div class="moveing">
        <img src="../assets/left.png" alt="" @click="onClickGo" />
        <h3>情侣号码</h3>
      </div>
      <div class="input_bg">
        <div class="tail">
          <img src="../assets/yes.png" alt="" />
          <p>尾号</p>
          <span></span>
        </div>
        <div class="searchs">
          <div class="want">
            <img src="../assets/搜索@2x.png" alt="" />
            <input type="text" placeholder="搜索你想要的号码" />
          </div>
          <h4>搜索</h4>
        </div>
      </div>
    </div>
    <!-- 头部导航 结束-->

    <!-- 搜索号码 开始-->
    <div class="accurate">
      <ul class="phoneNumber">
        <li>
          <input type="number" value="1" class="number" />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
        <li>
          <input
            type="number"
            class="number"
            oninput="if(value.length>1)value=value.slice(0,1)"
          />
        </li>
      </ul>
      <p>* 请在指定位置上填写数字，无要求的位置可留空</p>
      <ul class="reset">
        <li>重置</li>
        <li>精准搜索</li>
      </ul>
    </div>
    <!-- 搜索号码 结束-->

    <!-- 下拉选择 开始-->
    <div class="select_change">
      <ul>
        <li @click="onClickShow(0)">
          <p @click="onClickDn" ref="gsd">归属地</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 0" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 0"
          />
        </li>
        <li @click="onClickShow(1)">
          <p @click="onClickOperating" ref="yys">运营商</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 1" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 1"
          />
        </li>
        <li @click="onClickShow(2)">
          <p @click="onClickRegular" ref="rule">规律</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 2" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 2"
          />
        </li>
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!--手机号 开始-->
    <div class="start_pinoes">
      <!-- 归属地 开始-->
      <div class="black" v-show="active == 0">
        <div class="Belonging">
          <ul class="pro">
            <li
              v-for="(item, index) in proList"
              :key="index"
              :class="{ current: num == index }"
              @click="onClickHide(index, item)"
            >
              <img src="../assets/right.png" alt="" v-show="num == index" />
              <p>{{ item }}</p>
            </li>
          </ul>
          <ul class="city">
            <li
              v-for="(item, index) in cityList[nums]"
              :key="index"
              :class="{ currents: wrap == item }"
              @click="onClickHided(item)"
            >
              <img src="../assets/right.png" alt="" v-show="wrap == item" />
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 归属地 结束-->

      <!-- 运营商 开始-->
      <div class="opeateing" v-show="active == 1">
        <ul>
          <li
            v-for="(item, index) in chinese"
            :key="index"
            :class="{ currents: opList == item.operators_name }"
            @click="onclickOpeateing(item.operators_name)"
          >
            <img
              src="../assets/right.png"
              alt=""
              v-show="opList == item.operators_name"
            />
            <p>{{ item.operators_name }}</p>
          </li>
        </ul>
      </div>
      <!-- 运营商 结束-->
      <!-- 规律 开始-->
      <div class="regular" v-show="active == 2">
        <ul>
          <li @click="onclickRule(2)">
            <img src="../assets/right.png" alt="" v-show="ruleDui == 2" />
            <p>尾号不同</p>
          </li>
          <li @click="onclickRule(1)">
            <img src="../assets/right.png" alt="" v-show="ruleDui == 1" />
            <p>号段不同</p>
          </li>
        </ul>
      </div>
      <!-- 规律 结束-->
      <div
        class="class_box"
        v-for="(item, index) in love"
        :key="index"
        @click="onClickFarm(item)"
      >
        <img src="../assets/矩形 47@2x.png" alt="" style="" />
        <div class="end">
          <h5 v-html="item[0].number_tag"></h5>
          <div class="commission">
            <p>{{ item[0].location }}</p>
            <span v-show="commissionShow">佣金￥{{ item[0].returned_commission }}</span>
          </div>
          <div class="contains">
            <p>含通话费{{ item[0].contain_charge }}</p>
            <span v-show="priceShow">￥{{ item[0].sale_price }}</span>
          </div>
        </div>
        <span class="line"></span>
        <div class="end">
          <h5 v-html="item[1].number_tag"></h5>
          <div class="commission">
            <p>{{ item[1].location }}</p>
            <span v-show="commissionShow">佣金￥{{ item[1].returned_commission }}</span>
          </div>
          <div class="contains">
            <p>含通话费{{ item[1].contain_charge }}</p>
            <span v-show="priceShow">￥{{ item[1].sale_price }}</span>
          </div>
        </div>
      </div>
      <div class="botttomjz" ref="bjz">加载中...</div>
    </div>
    <!--手机号 结束-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      commissionShow: false,
      priceShow: true,
      active: null,
      proList: [],
      ruleDui: 1,
      cityList: [
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
      ],
      parameter: {},
      love: [],
      list: [],
      chinese: [],
      num: null,
      wrap: null,
      flag: false,
      cut: false,
      regulars: false,
      back: false,
      from: "",
      operator: "",
      type: "",
      nums: "",
      opList: -1,
      numbers: 1,
      numbers1: 1,
      sumsid: 0,
      pList: {},
    };
  },
  methods: {
    scrollBox(e) {
      // console.log(e.target.scrollTop);
      // 找一个滚动到合适加载的位置(与数据多少有关)，并拿到值，做处理
      // 如果滚动的位置为2100加载
      // 并且到每次滚动的位置一定与2100有关
      console.log(this.numbers);
      if (e.target.scrollTop >= 500 * this.numbers) {
        // this.rember();
        if (this.numbers1 <= this.sumsid - 1) {
          this.numbers += 1.2;
          this.numbers1++;
          console.log(this.numbers1);
          this.pList.page = this.numbers;
          this.$axios
            .post("/api/home_page/loveNumber", this.$route.query)
            .then((val) => {
              console.log(val);
              val.data.data.forEach((i) => {
                this.love.push(i);
              });
            });
          this.$refs.bjz.innerText = "加载中...";
          if (this.numbers1 == this.sumsid) {
            this.$refs.bjz.innerText = "已经到底了";
          }
        } else {
          this.$refs.bjz.innerText = "已经到底了";
        }
      }
    },
    onclickOpeateing(index) {
      let id = 0;
      this.$refs.yys.innerText = index;
      if (index == "中国移动") {
        id = 1;
      } else if (index == "中国联通") {
        id = 2;
      } else if (index == "中国电信") {
        id = 3;
      } else {
        id = 4;
      }
      this.cut = false;
      this.opList = index;
      this.active = -1;
      this.parameter.operator = id;
      this.onclickQuery();
    },
    onClickGo() {
      this.$router.push("/commons/home/m");
    },
    onClickShow(num) {
      if (this.active == num) {
        this.active = null;
        this.$refs.bugun.style = "overflow-y:auto";
      } else {
        this.active = num;
        this.$refs.bugun.style = "overflow-y:hidden";
      }
    },
    onClickDn() {
      if (this.flag == false) {
        this.flag = true;
        this.cut = false;
      } else {
        this.flag = false;
      }
    },
    onClickHide(val, v) {
      this.num = val;
      this.nums = v;
      this.wrap = "";
    },
    onClickHided(val) {
      this.$refs.gsd.innerText = val;
      this.wrap = val;
      this.flag = false;
      this.active = -1;
      this.parameter.from = val;
      localStorage.setItem("from", val);
      this.onclickQuery();
    },
    onclickRule(val) {
      if (val == 1) {
        this.$refs.rule.innerText = "号段不同";
      } else if (val == 2) {
        this.$refs.rule.innerText = "尾数不同";
      }
      this.ruleDui = val;
      this.active = null;
      console.log(val);
      // this.require = false;
      this.parameter.type = val;
      this.onclickQuery();
    },
    onClickOperating() {
      if (this.cut == false) {
        this.cut = true;
        this.flag = false;
      } else {
        this.cut = false;
      }
    },
    onClickRegular() {
      if (this.regulars == false) {
        this.regulars = true;
        this.flag = false;
        this.cut = false;
      } else {
        this.regulars = false;
      }
    },
    onClickTo() {
      this.back = false;
    },
    onclickQuery() {
      let flag = false;
      for (var k in this.parameter) {
        if (this.parameter[k] != this.$route.query[k]) {
          flag = true;
        }
      }
      if (flag) {
        this.$router.push({
          path: "/couples",
          query: this.parameter,
        });
        console.log(this.$route.query);
        if (localStorage.getItem("from")) {
          this.$route.query.from = localStorage.getItem("from");
        } else {
          this.$route.query.from = "上海市";
        }
        if (!this.$route.query.limit) {
          this.$route.query.limit = 20;
        }
        if (!this.$route.query.page) {
          this.$route.query.page = 1;
        }
        if (!this.$route.query.type) {
          this.$route.query.type = 1;
        }
        this.$axios
          .post("/api/home_page/loveNumber", this.$route.query)
          .then((val) => {
            if (val.code == 200) {
              this.love = val.data.data;
              this.sumsid = val.data.last_page;
              if (this.sumsid == 1) {
                this.$refs.bjz.innerText = "已经到底了";
              }
            } else {
              alert(val.msg);
            }
          });
      }
    },
    onClickFarm(id) {
      // this.$router.push('/details_couplesfor')
      this.$router.push({
        path: "/details_couplesfor",
        query: {
          "ids[0]": id[0].id,
          "ids[1]": id[1].id,
        },
      });
    },
  },
  created() {
    if (localStorage.getItem("priceShow")) {
      if (localStorage.getItem("priceShow") == "true") {
        this.priceShow = true;
      } else {
        this.priceShow = false;
      }
    }
    if (localStorage.getItem("commissionShow")) {
      if (localStorage.getItem("commissionShow") == "true") {
        this.commissionShow = true;
      } else {
        this.commissionShow = false;
      }
    }

    if (localStorage.getItem("from")) {
      this.$route.query.from = localStorage.getItem("from");
    } else {
      this.$route.query.from = "上海市";
    }
    if (!this.$route.query.limit) {
      this.$route.query.limit = 20;
    }
    if (!this.$route.query.page) {
      this.$route.query.page = 1;
    }
    if (!this.$route.query.type) {
      this.$route.query.type = 1;
    } else {
      this.ruleDui = this.$route.query.type;
    }
    this.pList = this.$route.query;
    this.$axios
      .post("/api/home_page/loveNumber", this.$route.query)
      .then((val) => {
        console.log(val);
        if (val.code == 200) {
          this.love = val.data.data;
          this.sumsid = val.data.last_page;
          if (this.sumsid == 1 || this.sumsid == 0) {
            this.$refs.bjz.innerText = "已经到底了";
          }
        } else {
          alert(val.msg);
        }
      });
  },
  mounted() {
    this.$axios.get("api/home_page/getLocation").then((val) => {
      this.nums = Object.keys(val.data)[0];
      for (var k in val.data) {
        this.proList.push(k);
      }
      this.cityList = val.data;
    });
    this.$axios.get("/api/home_page/getOperator").then((val) => {
      this.chinese = val.data;
    });
  },
  watch: {
    active(val) {
      if (val == null || val == -1) {
        this.$refs.bugun.style = "overflow:auto";
      } else {
        this.$refs.bugun.style = "overflow:hidden";
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.botttomjz {
  width: 100%;
  line-height: 40 / @vw;
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.black {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}
.current {
  background-color: #ececec;
}
.current p {
  color: #dc0101 !important;
}
.currents p {
  color: #dc0101 !important;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.dn {
  display: none !important;
}
.Mobile_phone {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  overflow-x: hidden;
}

.Mobile_phone .reds {
  width: 100%;
  height: 122 / @vw;
  background-color: #fe5858;
}
.Mobile_phone .start_pinoes {
  position: relative;
}
.Mobile_phone .reds .moveing {
  display: flex;
  position: relative;
}
.Mobile_phone .reds .moveing img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  top: 35 / @vw;
  pointer-events: auto;
}
.Mobile_phone .reds .moveing h3 {
  color: #ffffff;
  margin: 30 / @vw auto 0;
  font-size: 18 / @vw;
  font-weight: 500;
}
.Mobile_phone .reds .input_bg {
  width: 345 / @vw;
  height: 28 / @vw;
  background: url("../assets/input_bg.png") no-repeat;
  background-size: 345 / @vw 28 / @vw;
  margin: 22 / @vw auto 0;
  display: flex;
}
.Mobile_phone .reds .input_bg .tail {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}
.Mobile_phone .reds .input_bg .tail img {
  width: 12 / @vw;
  height: 12 / @vw;
  margin: 0 10 / @vw 0 15 / @vw;
  vertical-align: middle;
}
.Mobile_phone .reds .input_bg .tail p {
  font-size: 10 / @vw*1.3;
  color: #666666;
  margin-right: 10 / @vw;
  margin-bottom: 1 / @vw;
}
.Mobile_phone .reds .input_bg .tail span {
  width: 1 / @vw;
  height: 12 / @vw;
  background-color: #e0e0e0;
}
.Mobile_phone .reds .input_bg .searchs {
  width: 75%;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .reds .input_bg .searchs .want {
  display: flex;
  align-items: center;
  width: 80%;
}
.Mobile_phone .reds .input_bg .searchs .want img {
  width: 10 / @vw*1.3;
  height: 10 / @vw*1.3;
  margin: 0 10 / @vw 0 4 / @vw;
}
.Mobile_phone .reds .input_bg .searchs .want input {
  font-size: 12 / @vw;
  color: #999999;
}
.Mobile_phone .reds .input_bg .searchs h4 {
  font-size: 14 / @vw;
  color: #ffffff;
  font-weight: 500;
  margin-right: 11 / @vw;
  line-height: 28 / @vw;
}
.Mobile_phone .accurate {
  width: 100%;
}
.Mobile_phone .accurate .phoneNumber {
  display: flex;
  margin: 20 / @vw 18 / @vw 0;
  justify-content: space-evenly;
}
.Mobile_phone .accurate .phoneNumber li {
  width: 22 / @vw;
  height: 26 / @vw;
  text-align: center;
  border-radius: 3 / @vw;
  font-size: 14 / @vw;
}
// .Mobile_phone .accurate .phoneNumber li:hover {
//   border-color: #dc0101;
// }
.Mobile_phone .accurate .phoneNumber li input:focus {
  border: 1 / @vw solid #dc0101;
}
.Mobile_phone .accurate .phoneNumber li:first-child input {
  color: #333333;
}
.Mobile_phone .accurate .phoneNumber li input {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #dc0101;
  outline: none;
  border: 1 / @vw solid #cacaca;
}
.Mobile_phone .accurate p {
  font-size: 12 / @vw;
  color: #fe5858;
  margin: 10 / @vw 0 0 21 / @vw;
}
.Mobile_phone .accurate .reset {
  margin: 16 / @vw 48 / @vw 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .accurate .reset li {
  width: 130 / @vw;
  height: 26 / @vw;
  text-align: center;
  line-height: 26 / @vw;
  border-radius: 20 / @vw;
  font-size: 10 / @vw*1.3;
}
.Mobile_phone .accurate .reset li:hover {
  background-color: skyblue !important;
}
.Mobile_phone .accurate .reset li:first-child {
  background-color: #f0eeee;
  color: #666666;
}
.Mobile_phone .accurate .reset li:last-child {
  background-color: #fe5858;
  color: #ffffff;
}
.Mobile_phone .select_change {
  width: 100%;
  height: 33 / @vw;
  background-color: #fff;
  margin-top: 20 / @vw;
  border: 1 / @vw solid #e5e5e5;
}
.Mobile_phone .select_change ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  line-height: 33 / @vw;
}
.Mobile_phone .select_change ul li {
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .select_change ul li .red_triangle {
  position: absolute;
  right: -4 / @vw;
  top: 44%;
}
.Mobile_phone .select_change ul li p {
  font-size: 14 / @vw;
  color: #666666;
  margin-right: 9 / @vw;
}
.Mobile_phone .select_change ul li img {
  width: 6 / @vw;
  height: 4 / @vw;
}
.Mobile_phone .class_box {
  display: flex;
  width: 345 / @vw;
  height: 102 / @vw;
  margin: 0 auto;
  border: 1 / @vw solid #e5e5e5;
  background-color: #fff;
  border-radius: 10 / @vw;
  margin-top: 10 / @vw;
  position: relative;
}
.Mobile_phone .class_box img {
  position: absolute;
  right: 0;
  top: 0;
  width: 25 / @vw;
  height: 16 / @vw;
}
.Mobile_phone .class_box .line {
  display: inline-block;
  width: 2 / @vw;
  height: 52 / @vw*1.3;
  background-color: #f2f2f2;
  margin: 16 / @vw 7 / @vw 0 7 / @vw;
}
.Mobile_phone .end {
  width: 167 / @vw;
  height: 102 / @vw;
  position: relative;
  margin-top: 10 / @vw;
}
.Mobile_phone .end h5 {
  font-size: 16 / @vw;
  color: #333333;
  margin: 4 / @vw 0 0 10 / @vw;
  letter-spacing: 1px;
}
.Mobile_phone .end .commission {
  margin: 10 / @vw 10 / @vw 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .end .commission p {
  color: #666666;
  font-size: 12 / @vw;
}
.Mobile_phone .end .commission span,
.Mobile_phone .end .contains p {
  color: #dd1414;
  font-size: 12 / @vw;
}
.Mobile_phone .end .contains {
  margin: 10 / @vw 10 / @vw 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Mobile_phone .end .contains span {
  font-size: 14 / @vw;
  color: #dc0101;
  font-weight: bold;
}

.Mobile_phone .Belonging,
.Mobile_phone .regular {
  width: 100%;
  height: 376 / @vw;
  position: absolute;
  left: 0;
  top: -10 / @vw;
  display: flex;
  z-index: 99;
}
.Mobile_phone .Belonging .pro {
  width: 40%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
}
.Mobile_phone .Belonging .pro li,
.Mobile_phone .Belonging .city li {
  width: 100%;
  height: 45 / @vw;
  border-bottom: 1 / @vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .Belonging .pro li p {
  color: #333333;
  font-size: 10 / @vw*1.3;
  margin-left: 35 / @vw;
}

.Mobile_phone .Belonging .pro li img,
.Mobile_phone .Belonging .city li img {
  position: absolute;
  left: 15 / @vw;
  width: 10 / @vw*1.3;
  height: 7 / @vw*1.3;
}
.Mobile_phone .Belonging .city {
  width: 60%;
  height: 100%;
  background-color: #f8f8f8;
}
.Mobile_phone .Belonging .city li p {
  color: #333333;
  font-size: 10 / @vw*1.3;
  margin-left: 48 / @vw;
}
.Mobile_phone .opeateing {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: -10 / @vw;
  display: flex;
  z-index: 99;
}
.Mobile_phone .opeateing ul {
  width: 100%;
  height: 88 / @vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.Mobile_phone .opeateing ul li {
  width: 187 / @vw;
  height: 43 / @vw;
  display: flex;
  align-items: center;
  border-bottom: 1 / @vw solid #ececec;
  position: relative;
}
.Mobile_phone .opeateing ul li img {
  position: absolute;
  left: 40 / @vw;
  width: 10 / @vw*1.3;
  height: 7 / @vw*1.3;
  display: none;
}
.Mobile_phone .opeateing ul li p {
  color: #333333;
  font-size: 12 / @vw;
  margin-left: 63 / @vw;
  text-align: center;
}
.Mobile_phone .opeateing ul li:hover,
.Mobile_phone .regular ul li:hover {
  background-color: #ececec;
}
.Mobile_phone .opeateing ul li:hover p,
.Mobile_phone .regular ul li:hover p {
  color: #fe5858;
}
.Mobile_phone .opeateing ul li:hover img,
.Mobile_phone .regular ul li:hover img {
  display: block;
}
.Mobile_phone .regular ul {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.Mobile_phone .regular ul li {
  width: 100%;
  height: 44 / @vw;
  border-bottom: 1 / @vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .regular ul li img {
  position: absolute;
  left: 15 / @vw;
  width: 10 / @vw*1.3;
  height: 7 / @vw*1.3;
  // display: none;
}
.Mobile_phone .regular ul li p {
  color: #333333;
  font-size: 12 / @vw;
  margin-left: 40 / @vw;
}
.Mobile_phone .Montmorillonite {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
}
.Mobile_phone .Montmorillonite .search_filter {
  width: 330 / @vw;
  height: 100%;
  background-color: #fff;
  margin-left: 45 / @vw;
  overflow-y: auto;
}
.Mobile_phone .Montmorillonite .search_filter .back {
  width: 100%;
  height: 40 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  display: flex;
  align-items: center;
}
.Mobile_phone .Montmorillonite .search_filter .back img {
  width: 6 / @vw;
  height: 11 / @vw;
  margin-left: 11 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .back p {
  font-size: 12 / @vw;
  color: #666666;
  margin-left: 5 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .handle {
  width: 286 / @vw;
  height: 55 / @vw;
  margin: 0 22 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .handle p {
  width: 115 / @vw;
  height: 25 / @vw;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25 / @vw;
  color: #999999;
}
.Mobile_phone .Montmorillonite .search_filter .price {
  width: 286 / @vw;
  height: 200 / @vw;
  margin: 0 22 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .price p {
  position: absolute;
  left: 184 / @vw;
  top: 157 / @vw;
  font-size: 12 / @vw;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .price h5,
.Mobile_phone .Montmorillonite .search_filter .charge h5,
.Mobile_phone .Montmorillonite .search_filter .contract h5,
.Mobile_phone .Montmorillonite .search_filter .more_number h5 {
  color: #666666;
  font-size: 14 / @vw;
  font-weight: 500;
  margin: 14 / @vw 0;
}
.Mobile_phone .Montmorillonite .search_filter .price ul,
.Mobile_phone .Montmorillonite .search_filter .charge ul,
.Mobile_phone .Montmorillonite .search_filter .more_number ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li,
.Mobile_phone .Montmorillonite .search_filter .charge ul li,
.Mobile_phone .Montmorillonite .search_filter .more_number ul li {
  position: relative;
  width: 89 / @vw;
  height: 25 / @vw;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25 / @vw;
  margin-bottom: 15 / @vw;
  border-radius: 4 / @vw;
  font-size: 12 / @vw;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li span,
.Mobile_phone .Montmorillonite .search_filter .charge span {
  position: absolute;
  left: 10 / @vw;
  top: 0;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li input,
.Mobile_phone .Montmorillonite .search_filter .charge ul li input {
  border: none;
  outline: none;
  background: none;
  text-indent: 30 / @vw;
  width: 100%;
  height: 100%;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:last-child:hover {
  color: #666666;
  background-color: #f8f8f8;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:last-child,
.Mobile_phone .Montmorillonite .search_filter .charge ul li:last-child {
  width: 85 / @vw;
  margin-left: 8 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:nth-of-type(11),
.Mobile_phone .Montmorillonite .search_filter .charge ul li:nth-of-type(11) {
  width: 85 / @vw;
}
.Mobile_phone
  .Montmorillonite
  .search_filter
  .price
  ul
  li:nth-of-type(11):hover {
  color: #666666;
  background-color: #f8f8f8;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:hover {
  background-color: #ea5656;
  color: #ffffff;
}
.Mobile_phone .Montmorillonite .search_filter .charge {
  width: 286 / @vw;
  height: 160 / @vw;
  margin: 0 22 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .charge p {
  font-size: 12 / @vw;
  color: #666666;
  position: absolute;
  left: 186 / @vw;
  top: 117 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .contract {
  width: 286 / @vw;
  height: 195 / @vw;
  margin: 0 22 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .contract .linings {
  width: 1 / @vw;
  height: 104 / @vw;
  background-color: #f2f2f2;
  position: absolute;
  left: 50%;
  top: 74 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .contract .december {
  width: 100%;
  height: 25 / @vw;
  display: flex;
  justify-content: space-around;
}
.Mobile_phone .Montmorillonite .search_filter .contract .december li {
  width: 89 / @vw;
  height: 25 / @vw;
  background-color: #f8f8f8;
  text-align: center;
  border-radius: 4 / @vw;
  font-size: 12 / @vw;
  line-height: 25 / @vw;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change {
  width: 100%;
  height: 100 / @vw;
  margin-top: 15 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li {
  width: 100%;
  height: 25 / @vw;
  display: flex;
  border-bottom: 1 / @vw solid #f2f2f2;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li:first-child {
  border-top: 1 / @vw solid #f2f2f2;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li h3 {
  font-weight: 500;
  font-size: 14 / @vw;
  color: #666666;
  flex: 1;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li p {
  font-size: 12 / @vw;
  color: #666666;
  flex: 1;
}
.Mobile_phone .Montmorillonite .search_filter .more_number {
  width: 286 / @vw;
  height: 160 / @vw;
  margin: 0 22 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .more_number ul li:last-child {
  margin-right: 98 / @vw;
}
.Mobile_phone .Montmorillonite .search_filter .sure {
  width: 100%;
  height: 44 / @vw;
  display: flex;
}
.Mobile_phone .Montmorillonite .search_filter .sure p {
  width: 50%;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 44 / @vw;
  font-size: 16 / @vw;
  color: #666666;
  border-bottom: 1 / @vw solid #f2f2f2;
  border-top: 1 / @vw solid #f2f2f2;
}
.Mobile_phone .Montmorillonite .search_filter .sure span {
  width: 50%;
  background-color: #fe5858;
  text-align: center;
  line-height: 44 / @vw;
  font-size: 16 / @vw;
  color: #ffffff;
}
</style>