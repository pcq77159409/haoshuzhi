<template>
  <div class="Mobile_phone">
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
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!--手机号 开始-->
      <div class="class_box" v-for="(item, index) in love" :key="index" @click="onClickFarm(item)">
        <img src="../assets/矩形 47@2x.png" alt="" style="" />
        <div class="end">
          <h5 v-html="item[0].number_tag"></h5>
          <div class="commission">
            <p>{{ item[0].location }}</p>
            <span>佣金￥{{item[0].returned_commission}}</span>
          </div>
          <div class="contains">
            <p>含通话费{{ item[0].contain_charge }}</p>
            <span>￥{{ item[0].sale_price }}</span>
          </div>
        </div>
        <span class="line"></span>
        <div class="end">
          <h5 v-html="item[1].number_tag"></h5>
          <div class="commission">
            <p>{{ item[1].location }}</p>
          </div>
          <div class="contains">
            <p>含通话费{{ item[1].contain_charge }}</p>
            <span>￥{{ item[1].sale_price }}</span>
          </div>
        </div>
      </div>
    <!--手机号 结束-->

    <!-- 归属地 开始-->
    <div class="Belonging" v-show="flag">
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
    <!-- 归属地 结束-->

    <!-- 运营商 开始-->
    <div class="opeateing" v-show="cut == true">
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
      proList: [],
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
    };
  },
  methods: {
    onclickOpeateing(index) {
      let id = 0;
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
      this.parameter.operator_id = id;
      console.log(index);
      this.onclickQuery();
    },
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
      this.wrap = val;
      this.flag = false;
      this.active = -1;
      this.parameter.from = val;
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
        this.$axios
          .post("/api/home_page/loveNumber", {
            from: this.from,
            operator: this.operator,
            type: this.type,
          })
          .then((val) => {
            this.list = val.data.data;
          });
      }
    },
    onClickFarm(id){
      // this.$router.push('/details_couplesfor')
      this.$router.push({
        path:'/details_couplesfor',
        query:{
          "ids[0]":id[0].id,
          "ids[1]":id[1].id
        }
      })
    }
  },
  created() {
    this.$axios
      .post("/api/home_page/loveNumber", {
        from: this.from,
        operator: this.operator,
        type: this.type,
      })
      .then((val) => {
        this.love = val.data.data;
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
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
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
  height: 100%;
  background-color: #f8f8f8;
  overflow-x: hidden;
}

.Mobile_phone .reds {
  width: 100%;
  height: 122px;
  background-color: #fe5858;
}
.Mobile_phone .reds .moveing {
  display: flex;
}
.Mobile_phone .reds .moveing img {
  width: 10px;
  height: 16px;
  margin: 35px 0 0 15px;
  pointer-events: auto;
}
.Mobile_phone .reds .moveing h3 {
  color: #ffffff;
  margin: 30px auto 0;
  font-size: 18px;
  font-weight: 500;
}
.Mobile_phone .reds .input_bg {
  width: 345px;
  height: 28px;
  background: url("../assets/input_bg.png") no-repeat;
  background-size: 345px 28px;
  margin: 22px auto 0;
  display: flex;
}
.Mobile_phone .reds .input_bg .tail {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}
.Mobile_phone .reds .input_bg .tail img {
  width: 12px;
  height: 12px;
  margin: 0 10px 0 15px;
  vertical-align: middle;
}
.Mobile_phone .reds .input_bg .tail p {
  font-size: 10pt;
  color: #666666;
  margin-right: 10px;
  margin-bottom: 1px;
}
.Mobile_phone .reds .input_bg .tail span {
  width: 1px;
  height: 12px;
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
  width: 10pt;
  height: 10pt;
  margin: 0 10px 0 4px;
}
.Mobile_phone .reds .input_bg .searchs .want input {
  font-size: 12px;
  color: #999999;
}
.Mobile_phone .reds .input_bg .searchs h4 {
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  margin-right: 11px;
  line-height: 28px;
}
.Mobile_phone .accurate {
  width: 100%;
}
.Mobile_phone .accurate .phoneNumber {
  display: flex;
  margin: 20px 18px 0;
  justify-content: space-evenly;
}
.Mobile_phone .accurate .phoneNumber li {
  width: 22px;
  height: 26px;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
}
// .Mobile_phone .accurate .phoneNumber li:hover {
//   border-color: #dc0101;
// }
.Mobile_phone .accurate .phoneNumber li input:focus {
  border: 1px solid #dc0101;
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
  border: 1px solid #cacaca;
}
.Mobile_phone .accurate p {
  font-size: 12px;
  color: #fe5858;
  margin: 10px 0 0 21px;
}
.Mobile_phone .accurate .reset {
  margin: 16px 48px 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .accurate .reset li {
  width: 130px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 20px;
  font-size: 10pt;
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
  height: 33px;
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid #e5e5e5;
}
.Mobile_phone .select_change ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  line-height: 33px;
}
.Mobile_phone .select_change ul li {
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .select_change ul li .red_triangle {
  position: absolute;
  right: -4px;
  top: 44%;
}
.Mobile_phone .select_change ul li p {
  font-size: 14px;
  color: #666666;
  margin-right: 9px;
}
.Mobile_phone .select_change ul li img {
  width: 6px;
  height: 4px;
}
.Mobile_phone .class_box {
  display: flex;
  width: 345px;
  height: 102px;
  margin: 0 15px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
}
.Mobile_phone .class_box img {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 18px;
}
.Mobile_phone .class_box .line {
  display: inline-block;
  width: 2px;
  height: 52pt;
  background-color: #f2f2f2;
  margin: 16px 7px 0 7px;
}
.Mobile_phone .end {
  width: 167px;
  height: 102px;
  position: relative;
  margin-top: 10px;
}
.Mobile_phone .end h5 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  margin: 4px 0 0 10px;
}
.Mobile_phone .end .commission {
  margin: 10px 10px 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .end .commission p {
  color: #666666;
  font-size: 12px;
}
.Mobile_phone .end .commission span,
.Mobile_phone .end .contains p {
  color: #dd1414;
  font-size: 12px;
}
.Mobile_phone .end .contains {
  margin: 10px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Mobile_phone .end .contains span {
  font-size: 14px;
  color: #dc0101;
  font-weight: bold;
}

.Mobile_phone .Belonging,
.Mobile_phone .regular {
  width: 100%;
  height: 376px;
  position: absolute;
  left: 0;
  top: 291px;
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
  height: 45px;
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .Belonging .pro li p {
  color: #333333;
  font-size: 10pt;
  margin-left: 35px;
}

.Mobile_phone .Belonging .pro li img,
.Mobile_phone .Belonging .city li img {
  position: absolute;
  left: 15px;
  width: 10pt;
  height: 7pt;
}
.Mobile_phone .Belonging .city {
  width: 60%;
  height: 100%;
  background-color: #f8f8f8;
}
.Mobile_phone .Belonging .city li p {
  color: #333333;
  font-size: 10pt;
  margin-left: 48px;
}
.Mobile_phone .opeateing {
  width: 100%;
  height: 376px;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 291px;
  display: flex;
}
.Mobile_phone .opeateing ul {
  width: 100%;
  height: 88px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.Mobile_phone .opeateing ul li {
  width: 187px;
  height: 43px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  position: relative;
}
.Mobile_phone .opeateing ul li img {
  position: absolute;
  left: 40px;
  width: 10pt;
  height: 7pt;
  display: none;
}
.Mobile_phone .opeateing ul li p {
  color: #333333;
  font-size: 12px;
  margin-left: 63px;
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
  height: 44px;
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.Mobile_phone .regular ul li img {
  position: absolute;
  left: 15px;
  width: 10pt;
  height: 7pt;
  display: none;
}
.Mobile_phone .regular ul li p {
  color: #333333;
  font-size: 12px;
  margin-left: 40px;
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
  width: 330px;
  height: 100%;
  background-color: #fff;
  margin-left: 45px;
  overflow-y: auto;
}
.Mobile_phone .Montmorillonite .search_filter .back {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.Mobile_phone .Montmorillonite .search_filter .back img {
  width: 6px;
  height: 11px;
  margin-left: 11px;
}
.Mobile_phone .Montmorillonite .search_filter .back p {
  font-size: 12px;
  color: #666666;
  margin-left: 5px;
}
.Mobile_phone .Montmorillonite .search_filter .handle {
  width: 286px;
  height: 55px;
  margin: 0 22px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
}
.Mobile_phone .Montmorillonite .search_filter .handle p {
  width: 115px;
  height: 25px;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25px;
  color: #999999;
}
.Mobile_phone .Montmorillonite .search_filter .price {
  width: 286px;
  height: 200px;
  margin: 0 22px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .price p {
  position: absolute;
  left: 184px;
  top: 157px;
  font-size: 12px;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .price h5,
.Mobile_phone .Montmorillonite .search_filter .charge h5,
.Mobile_phone .Montmorillonite .search_filter .contract h5,
.Mobile_phone .Montmorillonite .search_filter .more_number h5 {
  color: #666666;
  font-size: 14px;
  font-weight: 500;
  margin: 14px 0;
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
  width: 89px;
  height: 25px;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25px;
  margin-bottom: 15px;
  border-radius: 4px;
  font-size: 12px;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li span,
.Mobile_phone .Montmorillonite .search_filter .charge span {
  position: absolute;
  left: 10px;
  top: 0;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li input,
.Mobile_phone .Montmorillonite .search_filter .charge ul li input {
  border: none;
  outline: none;
  background: none;
  text-indent: 30px;
  width: 100%;
  height: 100%;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:last-child:hover {
  color: #666666;
  background-color: #f8f8f8;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:last-child,
.Mobile_phone .Montmorillonite .search_filter .charge ul li:last-child {
  width: 85px;
  margin-left: 8px;
}
.Mobile_phone .Montmorillonite .search_filter .price ul li:nth-of-type(11),
.Mobile_phone .Montmorillonite .search_filter .charge ul li:nth-of-type(11) {
  width: 85px;
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
  width: 286px;
  height: 160px;
  margin: 0 22px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .charge p {
  font-size: 12px;
  color: #666666;
  position: absolute;
  left: 186px;
  top: 117px;
}
.Mobile_phone .Montmorillonite .search_filter .contract {
  width: 286px;
  height: 195px;
  margin: 0 22px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
}
.Mobile_phone .Montmorillonite .search_filter .contract .linings {
  width: 1px;
  height: 104px;
  background-color: #f2f2f2;
  position: absolute;
  left: 50%;
  top: 74px;
}
.Mobile_phone .Montmorillonite .search_filter .contract .december {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-around;
}
.Mobile_phone .Montmorillonite .search_filter .contract .december li {
  width: 89px;
  height: 25px;
  background-color: #f8f8f8;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  line-height: 25px;
  color: #666666;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change {
  width: 100%;
  height: 100px;
  margin-top: 15px;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li {
  width: 100%;
  height: 25px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li:first-child {
  border-top: 1px solid #f2f2f2;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li h3 {
  font-weight: 500;
  font-size: 14px;
  color: #666666;
  flex: 1;
}
.Mobile_phone .Montmorillonite .search_filter .contract .change li p {
  font-size: 12px;
  color: #666666;
  flex: 1;
}
.Mobile_phone .Montmorillonite .search_filter .more_number {
  width: 286px;
  height: 160px;
  margin: 0 22px;
}
.Mobile_phone .Montmorillonite .search_filter .more_number ul li:last-child {
  margin-right: 98px;
}
.Mobile_phone .Montmorillonite .search_filter .sure {
  width: 100%;
  height: 44px;
  display: flex;
}
.Mobile_phone .Montmorillonite .search_filter .sure p {
  width: 50%;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  color: #666666;
  border-bottom: 1px solid #f2f2f2;
  border-top: 1px solid #f2f2f2;
}
.Mobile_phone .Montmorillonite .search_filter .sure span {
  width: 50%;
  background-color: #fe5858;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  color: #ffffff;
}
</style>