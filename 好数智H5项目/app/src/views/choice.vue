<template>
  <div class="choice_box">
    <div class="package_box">
      <img src="../assets/left.png" alt="" @click="onClickIntroPara" />
      <h4>套餐资费</h4>
    </div>
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
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!-- 小魔卡 开始-->
    <div class="mocha">
      <div
        class="Characteristics"
        @click="onClickTsao(item.id)"
        v-for="(item, index) in taocany"
        :key="index"
      >
        <img :src="item.main_image" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>{{ item.package_name }}</h6>
            <div class="tea">
              <p>{{ item.location }}</p>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>{{item.talk_time}}分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>{{item.directional_flow}}G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>{{item.month_charge}}</p>
            </li>
          </ul>
          <!-- <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 小魔卡 结束-->

    <!-- 归属地 开始-->
    <div class="Belonging" v-show="flag">
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
    <div class="opeateing" v-show="cut">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        {
          src: require("../assets/right.png"),
          username: "石家庄市",
        },
      ],
      taocany: [
        {
          id: 25,
          store_id: 1,
          type: 1,
          package_id: "YD00016",
          package_name: "移动花卡宝藏版",
          operator: 1,
          month_charge: "19",
          general_flow: "0",
          directional_flow: "200",
          talk_time: "0",
          network_service: "4G",
          package_describe: "移动花卡宝藏版",
          head_image:
            "/public/uploads/store/package/20210626/a9dfe8a8afb05a7c070d97e4a4d1856c.jpg",
          main_image:
            "/public/uploads/store/package/20210626/a9dfe8a8afb05a7c070d97e4a4d1856c.jpg",
          detail_image:
            "/public/uploads/store/package/20210626/d1bb2fd22b3077cc123b5204ce9ab957.jpg,/public/uploads/store/package/20210626/dc8da22af8654ef22378e191f5893b6d.jpg,/public/uploads/store/package/20210626/eaecab59fba856fb9f5387134a0d0209.jpg,/public/uploads/store/package/20210626/dca8a44913a44a8381c0227b8b6af00b.jpg,/public/uploads/store/package/20210626/26330cfea378a500e746bd31b709721a.jpg",
          location: "上海市",
          status: 0,
        },
      ],
      cont: false,
      went: false,
      wrap: null,
      flag: false,
      num: null,
      active: null,
      cut: false,
      tranges: null,
      one: false,
      two: false,
      three: false,
      operator: null,
      location: "",
      package_name: "",
      page: 1,
      id:null
    };
  },
  methods: {
    onClickHide(val) {
      this.num = val;
    },
    onClickHided(val) {
      this.wrap = val;
    },
    onClickShow(num) {
      if (this.active == num) {
        this.active = null;
      } else {
        this.active = num;
      }
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
    onClickDn() {
      if (this.flag == false) {
        this.flag = true;
        this.cut = false;
        this.regulars = false;
      } else {
        this.flag = false;
      }
    },
    onClickTo() {
      this.back = false;
    },
    onTab(index) {
      this.went = index;
    },
    onClickOne(index) {
      this.cont = index;
    },
    onClickTwo(index) {
      this.two = index;
    },
    onClickThree(index) {
      this.three = index;
    },
    onClickReset() {
      this.tranges = null;
      this.went = false;
      this.cont = false;
      this.one = false;
      this.two = false;
      this.three = false;
    },
    onClickIntroPara() {
      this.$router.go(-1);
    },
    onClickTsao(id) {
      this.$router.push({
        path:'/khssb',
        query:{
          id:id
        }
      })
    },
  },
  created() {
    this.$axios
      .get("/api/package/getPackage", {
        operator: this.operator,
        location: this.location,
        package_name: this.package_name,
        page: this.page,
      })
      .then((val) => {
        this.taocany = val.data.data;
        this.id=this.taocany[0].id
        console.log(this.id);
        console.log(this.taocany);
      });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.active {
  background-color: #ea5656 !important;
  color: #ffffff !important;
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
.wrok {
  background: url("../assets/white_bg.png");
  background-size: 115 / @vw 25 / @vw;
  color: #fe5858;
}
.choice_box {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #f8f8f8;
}
.choice_box .package_box {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .package_box img {
  width: 10 / @vw;
  height: 16 / @vw;
  pointer-events: auto;
  position: absolute;
  left: 15 / @vw;
}
.choice_box .package_box h4 {
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.choice_box .select_change {
  width: 100%;
  height: 43 / @vw;
  background-color: #fff;
  border: 1 / @vw solid #e5e5e5;
}
.choice_box .select_change ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  line-height: 33 / @vw;
}
.choice_box .select_change ul li {
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .select_change ul li .red_triangle {
  position: absolute;
  right: -4 / @vw;
  top: 44%;
}
.choice_box .select_change ul li p {
  font-size: 14 / @vw;
  color: #666666;
  margin-right: 9 / @vw;
}
.choice_box .select_change ul li img {
  width: 6 / @vw;
  height: 4 / @vw;
}
.choice_box .Belonging {
  width: 100%;
  height: 368 / @vw;
  position: absolute;
  left: 0;
  top: 109 / @vw;
  display: flex;
}

.choice_box .Belonging .pro {
  width: 40%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
}
.choice_box .Belonging .pro li,
.choice_box .Belonging .city li {
  width: 100%;
  height: 45 / @vw;
  border-bottom: 1 / @vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .Belonging .pro li p {
  color: #333333;
  font-size: 10 / @vw*1.3;
  margin-left: 35 / @vw;
}

.choice_box .Belonging .pro li img,
.choice_box .Belonging .city li img {
  position: absolute;
  left: 15 / @vw;
  width: 10 / @vw*1.3;
  height: 7 / @vw*1.3;
}
.choice_box .Belonging .city {
  width: 60%;
  height: 100%;
  background-color: #f8f8f8;
}
.choice_box .Belonging .city li p {
  color: #333333;
  font-size: 10 / @vw*1.3;
  margin-left: 48 / @vw;
}
.choice_box .opeateing {
  width: 100%;
  height: 360 / @vw;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 109 / @vw;
  display: flex;
}
.choice_box .opeateing ul {
  width: 100%;
  height: 88 / @vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.choice_box .opeateing ul li {
  width: 187 / @vw;
  height: 43 / @vw;
  display: flex;
  align-items: center;
  border-bottom: 1 / @vw solid #ececec;
  position: relative;
}
.choice_box .opeateing ul li img {
  position: absolute;
  left: 40 / @vw;
  width: 10 / @vw*1.3;
  height: 7 / @vw*1.3;
  display: none;
}
.choice_box .opeateing ul li p {
  color: #333333;
  font-size: 12 / @vw;
  margin-left: 63 / @vw;
  text-align: center;
}
.choice_box .opeateing ul li:hover {
  background-color: #ececec;
}
.choice_box .opeateing ul li:hover p {
  color: #fe5858;
}
.choice_box .opeateing ul li:hover img {
  display: block;
}

.choice_box .mocha {
  width: 345 / @vw;
  height: 555 / @vw;
  margin: 0 auto;
}
.choice_box .mocha .Characteristics {
  width: 100%;
  height: 103 / @vw;
  background-color: #fff;
  margin-top: 10 / @vw;
  border-radius: 4 / @vw;
  display: flex;
}
.choice_box .mocha .Characteristics .tao {
  width: 80 / @vw;
  height: 80 / @vw;
  margin: 12 / @vw 0 0 10 / @vw;
}
.choice_box .mocha .Characteristics .movement {
  width: 240 / @vw;
  display: flex;
  height: 20 / @vw;
  margin: 10 / @vw 4 / @vw 0 16 / @vw;
  justify-content: space-between;
}
.choice_box .mocha .Characteristics .movement h6 {
  color: #333333;
  font-size: 13 / @vw;
  margin-top: 6/@vw;
  font-weight: 500;
}
.choice_box .mocha .Characteristics .movement .tea {
  display: flex;
}
.choice_box .mocha .Characteristics .movement .tea p,
.choice_box .mocha .Characteristics .movement .tea span {
  font-size: 13 / @vw;
  color: #666666;
  margin-right: 6 / @vw;
  margin-top: 6/@vw;
}
.choice_box .mocha .Characteristics .voice {
  font-size: 12 / @vw;
  color: #666666;
  margin: 15 / @vw 0 0 16 / @vw;
}
.choice_box .mocha .Characteristics .amount {
  width: 202 / @vw;
  display: flex;
  margin-left: 16 / @vw;
  justify-content: flex-start;
  margin-top: 10 / @vw;
}
.choice_box .mocha .Characteristics .amount li {
  display: flex;
  align-items: center;
  margin-right: 32 / @vw;
}
.choice_box .mocha .Characteristics .amount li:last-child {
  margin: 0;
}
.choice_box .mocha .Characteristics .amount li img {
  width: 8 / @vw;
  height: 8 / @vw;
  margin-right: 4 / @vw;
}
.choice_box .mocha .Characteristics .amount li p {
  font-size: 12 / @vw;
  color: #666666;
}
.choice_box .mocha .Characteristics .champion {
  width: 232 / @vw;
  display: flex;
  margin-left: 16 / @vw;
  margin-top: 4 / @vw;
  justify-content: space-between;
}
.choice_box .mocha .Characteristics .champion p {
  font-size: 12 / @vw;
  color: #666666;
}
.choice_box .mocha .Characteristics .champion span {
  font-size: 12 / @vw;
  color: #ea5656;
}
</style>