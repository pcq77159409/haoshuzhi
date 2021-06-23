<template>
  <div class="Mobile_phone">
    <!-- 头部导航 开始-->
    <div class="reds">
      <div class="moveing">
        <img src="../assets/left.png" alt="" @click="onClickGo" />
        <h3>移动号码</h3>
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
            <p>搜索你想要的号码</p>
          </div>
          <h4>搜索</h4>
        </div>
      </div>
    </div>
    <!-- 头部导航 结束-->

    <!-- 搜索号码 开始-->
    <div class="accurate">
      <ul class="phoneNumber">
        <li><input type="number" value="1" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
        <li><input type="number" /></li>
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
          <p @click="onClickDn">归属地</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 0" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 0"
          />
        </li>
        <li @click="onClickShow(1)">
          <p @click="onClickOperating">运营商</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 1" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 1"
          />
        </li>
        <li @click="onClickShow(2)">
          <p @click="onClickRegular">规律</p>
          <img src="../assets/triangle.png" alt="" v-show="active !== 2" />
          <img
            src="../assets/red_triangle.png"
            alt=""
            class="red_triangle"
            v-show="active == 2"
          />
        </li>
        <li>
          <p>筛选</p>
          <img src="../assets/filter.png" alt="" />
        </li>
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!--暂无搜索内容 开始-->
    <div class="available">
      <img src="../assets/sou.png" alt="" />
      <p>暂无搜索内容</p>
    </div>
    <!--暂无搜索内容 结束-->

    <!-- 归属地 开始-->
    <div class="Belonging" v-show="flag == true">
      <ul class="pro">
        <li
          v-for="(item, index) in proList"
          :key="index"
          :class="{ current: num == index }"
          @click="onClickHide(index)"
        >
          <img :src="item.src" alt="" v-show="num == index" />
          <p>{{ item.username }}</p>
        </li>
      </ul>
      <ul class="city">
        <li
          v-for="(item, index) in cityList"
          :key="index"
          :class="{ currents: wrap == index }"
          @click="onClickHided(index)"
        >
          <img :src="item.src" alt="" v-show="wrap == index" />
          <p>{{ item.username }}</p>
        </li>
      </ul>
    </div>
    <!-- 归属地 结束-->

    <!-- 运营商 开始-->
    <div class="opeateing" v-show="cut == true">
      <ul>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>中国移动</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>中国电信</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>中国联通</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>虚拟号码</p>
        </li>
      </ul>
    </div>
    <!-- 运营商 结束-->

    <!-- 规律 开始-->
    <div class="regular" v-show="regulars == true">
      <ul>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
        <li>
          <img src="../assets/right.png" alt="" />
          <p>不限</p>
        </li>
      </ul>
    </div>
    <!-- 规律 结束-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: null,
      proList: [
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
        {
          src: require("../assets/right.png"),
          username: "全国",
        },
      ],
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
      num: null,
      wrap: null,
      flag: false,
      cut: false,
      regulars: false,
    };
  },
  methods: {
    onClickGo() {
      this.$router.go(-1);
    },
    onClickShow(num) {
      if (this.active == num) {
        this.active = null;
      } else {
        this.active = num;
      }
    },
    onClickDn() {
      if (this.flag == false) {
        this.flag = true;
        this.cut = false;
        this.regulars = false;
      } else {
        this.flag = false;
      }
    },
    onClickHide(val) {
      this.num = val;
    },
    onClickHided(val) {
      this.wrap = val;
    },
    onClickOperating() {
      if (this.cut == false) {
        this.cut = true;
        this.flag = false;
        this.regulars = false;
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
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
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
  height: 100%;
  background-color: #f8f8f8;
}
.Mobile_phone .reds {
  width: 100%;
  height: 122/@vw;
  background-color: #fe5858;
}
.Mobile_phone .reds .moveing {
  display: flex;
}
.Mobile_phone .reds .moveing img {
  width: 10/@vw;
  height: 16/@vw;
  margin: 35/@vw 0 0 15/@vw;
  pointer-events: auto;
}
.Mobile_phone .reds .moveing h3 {
  color: #ffffff;
  margin: 30/@vw auto 0;
  font-size: 18/@vw;
  font-weight: 500;
}
.Mobile_phone .reds .input_bg {
  width: 345/@vw;
  height: 28/@vw;
  background: url("../assets/input_bg.png") no-repeat;
  background-size: 345/@vw 28/@vw;
  margin: 22/@vw auto 0;
  display: flex;
}
.Mobile_phone .reds .input_bg .tail {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}
.Mobile_phone .reds .input_bg .tail img {
  width: 12/@vw;
  height: 12/@vw;
  margin: 0 10/@vw 0 15/@vw;
  vertical-align: middle;
}
.Mobile_phone .reds .input_bg .tail p {
  font-size: 10/@vw*1.3;
  color: #666666;
  margin-right: 10/@vw;
  margin-bottom: 1/@vw;
}
.Mobile_phone .reds .input_bg .tail span {
  width: 1/@vw;
  height: 12/@vw;
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
  width: 10/@vw*1.3;
  height: 10/@vw*1.3;
  margin: 0 10/@vw 0 4/@vw;
}
.Mobile_phone .reds .input_bg .searchs .want p {
  font-size: 12/@vw;
  color: #999999;
}
.Mobile_phone .reds .input_bg .searchs h4 {
  font-size: 14/@vw;
  color: #ffffff;
  font-weight: 500;
  margin-right: 11/@vw;
  line-height: 28/@vw;
}
.Mobile_phone .accurate {
  width: 100%;
}
.Mobile_phone .accurate .phoneNumber {
  display: flex;
  margin: 20/@vw 18/@vw 0;
  justify-content: space-evenly;
}
.Mobile_phone .accurate .phoneNumber li {
  width: 22/@vw;
  height: 26/@vw;
  border: 1/@vw solid #cacaca;
  text-align: center;
  border-radius: 3/@vw;
  font-size: 14/@vw;
}
.Mobile_phone .accurate .phoneNumber li:hover {
  border: 1/@vw solid #dc0101;
}
.Mobile_phone .accurate .phoneNumber li:first-child input {
  color: #333333;
}
.Mobile_phone .accurate .phoneNumber li input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  color: #dc0101;
  outline: none;
}
.Mobile_phone .accurate p {
  font-size: 12/@vw;
  color: #fe5858;
  margin: 10/@vw 0 0 21/@vw;
}
.Mobile_phone .accurate .reset {
  margin: 16/@vw 48/@vw 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .accurate .reset li {
  width: 130/@vw;
  height: 26/@vw;
  text-align: center;
  line-height: 26/@vw;
  border-radius: 20/@vw;
  font-size: 10/@vw*1.3;
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
  height: 33/@vw;
  background-color: #fff;
  margin-top: 20/@vw;
  border: 1/@vw solid #e5e5e5;
}
.Mobile_phone .select_change ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  line-height: 33/@vw;
}
.Mobile_phone .select_change ul li {
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .select_change ul li .red_triangle {
  position: absolute;
  right: -4/@vw;
  top: 44%;
}
.Mobile_phone .select_change ul li p {
  font-size: 14/@vw;
  color: #666666;
  margin-right: 9/@vw;
}
.Mobile_phone .select_change ul li img {
  width: 6/@vw;
  height: 4/@vw;
}
.Mobile_phone .select_change ul li:last-child img {
  width: 10/@vw;
  height: 9/@vw;
}
.Mobile_phone .class_name {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.Mobile_phone .start {
  width: 167/@vw;
  height: 102/@vw;
  border: 1/@vw solid #e5e5e5;
  border-radius: 10/@vw;
  position: relative;
  margin-top: 10/@vw;
}
.Mobile_phone .start img {
  position: absolute;
  right: 0;
  top: 0;
  width: 30/@vw;
  height: 18/@vw;
}
.Mobile_phone .start h5 {
  font-size: 16/@vw;
  color: #333333;
  font-weight: bold;
  margin: 12/@vw 0 0 10/@vw;
}
.Mobile_phone .start .commission {
  margin: 10/@vw 10/@vw 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .start .commission p {
  color: #666666;
  font-size: 12/@vw;
}
.Mobile_phone .start .commission span,
.Mobile_phone .start .contains p {
  color: #dd1414;
  font-size: 12/@vw;
}
.Mobile_phone .start .contains {
  margin: 10/@vw 10/@vw 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Mobile_phone .start .contains span {
  font-size: 12/@vw*1.3;
  color: #dc0101;
  font-weight: bold;
}

.Mobile_phone .Belonging,
.Mobile_phone .regular {
  width: 100%;
  height: 360/@vw;
  position: absolute;
  left: 0;
  top: 293/@vw;
  display: flex;
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
  height: 45/@vw;
  border-bottom: 1/@vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .Belonging .pro li p {
  color: #333333;
  font-size: 10/@vw*1.3;
  margin-left: 35/@vw;
}

.Mobile_phone .Belonging .pro li img,
.Mobile_phone .Belonging .city li img {
  position: absolute;
  left: 15/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
}
.Mobile_phone .Belonging .city {
  width: 60%;
  height: 100%;
  background-color: #f8f8f8;
}
.Mobile_phone .Belonging .city li p {
  color: #333333;
  font-size: 10/@vw*1.3;
  margin-left: 48/@vw;
}
.Mobile_phone .opeateing {
  width: 100%;
  height: 360/@vw;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 293/@vw;
  display: flex;
}
.Mobile_phone .opeateing ul {
  width: 100%;
  height: 88/@vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.Mobile_phone .opeateing ul li {
  width: 187/@vw;
  height: 43/@vw;
  display: flex;
  align-items: center;
  border-bottom: 1/@vw solid #ececec;
  position: relative;
}
.Mobile_phone .opeateing ul li img {
  position: absolute;
  left: 40/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
  display: none;
}
.Mobile_phone .opeateing ul li p {
  color: #333333;
  font-size: 12/@vw;
  margin-left: 63/@vw;
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
  height: 44/@vw;
  border-bottom: 1/@vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .regular ul li img {
  position: absolute;
  left: 15/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
  display: none;
}
.Mobile_phone .regular ul li p {
  color: #333333;
  font-size: 12/@vw;
  margin-left: 40/@vw;
}
.Mobile_phone .available {
  width: 137/@vw;
  margin: 46/@vw auto;
  text-align: center;
}
.Mobile_phone .available img {
  width: 100%;
  height: 100/@vw;
}
.Mobile_phone .available p{
    color: #999999;
    font-size: 12/@vw;
    margin-top: 17/@vw;
}
</style>