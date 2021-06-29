<template>
  <div class="home">
    <div class="searchBox" v-show="searchShow" @click="searchShow = false">
      <div class="sb_head" @click.stop="searchShow = true">
        <div class="sbh_top">
          <div class="sbht_center">
            <img src="../assets/搜索@2x.png" alt="" class="search" />
            <input
              v-bind:autofocus="!searchBtnFlag"
              type="tel"
              placeholder="请输入您要搜索的内容"
              @keyup.enter="onKeyupSearch"
              v-model="search"
              maxlength="11"
              id="inputVal"
              autocomplete="off"
            />
            <span @click="onKeyupSearch">搜索</span>
          </div>
        </div>
        <div class="used">
          <h3>常用搜索</h3>
          <ul>
            <li @click="onclickSearch('666')">666</li>
            <li @click="onclickSearch('888')">888</li>
            <li @click="onclickSearch('520')">520</li>
            <li @click="onclickSearch('1314')">1314</li>
          </ul>
        </div>
        <div class="footprint">
          <h3>
            搜索足迹 <img src="../assets/222.png" alt="" @click="onclickDel" />
          </h3>
          <ul>
            <li
              v-for="(item, index) in footprintData"
              :key="index"
              @click="onclickSearch(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="head">
      <div class="locations" @click="$router.push('/citys')">
        <img src="../assets/123.png" alt="" />
        <p>上海</p>
      </div>
      <!-- <p class="haoshu">好数智</p> -->
      <img src="../assets/矩形 12@2x.png" alt="" class="bg_img" />
      <i @click="onclickSearchShow" ref="search1">请输入您要搜索的内容</i>
      <img src="../assets/搜索@2x.png" alt="" class="search" />
    </div>
    <div class="heads">
      <!-- <img src="../assets/banner@2x.png" alt="" /> -->
      <router-view></router-view>
    </div>

    <div class="header">
      <div class="one">
        <dl @click="onCLickTiao({ operator_id: 1 })">
          <dt><img src="../assets/组 36@2x(5).png" alt="" /></dt>
          <dd>移动号码</dd>
        </dl>
        <dl @click="onCLickTiao({ operator_id: 2 })">
          <dt><img src="../assets/组 22@2x.png" alt="" /></dt>
          <dd>联通号码</dd>
        </dl>
        <dl @click="onCLickTiao({ operator_id: 3 })">
          <dt><img src="../assets/组 23@2x.png" alt="" /></dt>
          <dd>电信号码</dd>
        </dl>
        <dl @click="onCLickTiao({ operator_id: 4 })">
          <dt><img src="../assets/组 36@2x(1).png" alt="" /></dt>
          <dd>虚拟号码</dd>
        </dl>
      </div>
      <div class="two">
        <dl @click="onCLickTiao({ tag: 44 })">
          <dt><img src="../assets/组 36@2x(1).png" alt="" /></dt>
          <dd>生日号码</dd>
        </dl>
        <router-link to="/couples">
          <dl>
            <dt><img src="../assets/组 36@2x(2).png" alt="" /></dt>
            <dd>情侣号码</dd>
          </dl>
        </router-link>
        <router-link to="/choice">
          <dl>
            <dt><img src="../assets/组 36@2x(3).png" alt="" /></dt>
            <dd>套餐介绍</dd>
          </dl>
        </router-link>
        <router-link to="">
          <dl>
            <dt><img src="../assets/组 36@2x(4).png" alt="" /></dt>
            <dd>业务办理</dd>
          </dl>
        </router-link>
      </div>
    </div>
    <div class="three">
      <img src="../assets/卡片@2x.png" alt="" />
    </div>
    <div class="four">
      <img src="../assets/矩形 31 拷贝 3@2x_proc.jpg" alt="" />
    </div>
    <!-- 特价专场 -->
    <div class="footer">
      <div class="five">
        <img src="../assets/时间表@2x.png" alt="" />
        <p>特价专场</p>
      </div>
      <div class="six">
        <p @click="$router.push('/screen')">
          更多<img src="../assets/形状 20@2x.png" alt="" />
        </p>
      </div>
    </div>
    <div class="cap">
      <router-link
        :to="{ path: '/details', query: { 'ids[]': value.id } }"
        v-for="(value, index) in dataList"
        :key="index"
      >
        <div class="shit">
          <img src="../assets/te.png" alt="" />
          <div class="number" v-html="value.number_tag"></div>
          <div class="money">
            <p>{{ value.location }}</p>
            <p class="dolor" v-show="commissionShow">
              佣金￥{{ value.returned_commission }}
            </p>
          </div>
          <div class="money">
            <p class="han">含话费￥260</p>
            <p class="twietion" v-show="priceShow">
              ￥{{ value.initial_charge }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 特价专场 -->

    <!-- 猜你喜欢 -->
    <div class="four">
      <img src="../assets/矩形 31 拷贝 3@2x_proc.jpg" alt="" />
    </div>
    <div class="like">
      <div class="you">
        <img src="../assets/love.png.png" alt="" />
        <span>猜你喜欢</span>
      </div>
      <ul class="shun">
        <li>
          <img src="../assets/p_1.png.png" alt="" />
          <div>
            <p class="lian">顺子靓号</p>
            <p class="of">属于你的生日号码</p>
          </div>
        </li>
        <li>
          <img src="../assets/p_2.png.png" alt="" />
          <div>
            <p class="lian">豹子靓号</p>
            <p class="of">好的号码彰显身份</p>
          </div>
        </li>
        <li>
          <img src="../assets/p_3.png.png" alt="" />
          <div class="yes">
            <p class="lian">连对靓号</p>
            <p class="of">靓号对对碰</p>
          </div>
        </li>
        <li>
          <img src="../assets/p_4.png.png" alt="" />
          <div class="yes">
            <p class="lian">个性靓号</p>
            <p class="of">专属个性靓号</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="four">
      <img src="../assets/矩形 31 拷贝 3@2x_proc.jpg" alt="" />
    </div>
    <!-- 靓号推荐 -->
    <div class="footer">
      <div class="five">
        <img src="../assets/形状 8@2x.png" alt="" class="ff-img" />
        <p>靓号推荐</p>
      </div>
      <div class="six">
        <p @click="$router.push('/screen')">
          更多<img src="../assets/形状 20@2x.png" alt="" />
        </p>
      </div>
    </div>
    <div class="cap lina">
      <router-link
        :to="{ path: '/details', query: { 'ids[]': item.id } }"
        v-for="(item, index) in dataTj"
        :key="index"
      >
        <div class="shit">
          <img src="../assets/te.png" alt="" />
          <div class="number" v-html="item.number_tag"></div>
          <div class="money">
            <p>{{ item.location }}</p>
            <p class="dolor" v-show="commissionShow">
              佣金￥{{ item.returned_commission }}
            </p>
          </div>
          <div class="money">
            <p class="han">含话费￥260</p>
            <p class="twietion" v-show="priceShow">￥{{ item.initial_charge }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 靓号推荐 -->
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      dataList: [],
      search: "",
      dataTj: [],
      searchShow: false,
      footprintData: [],
      searchBtnFlag: false,
      commissionShow: false,
      priceShow: true,
    };
  },
  methods: {
    onCLickTiao(obj) {
      this.$router.push({ path: "/screen", query: obj });
    },
    onKeyupSearch() {
      if (this.search.trim() != "") {
        if (this.footprintData.indexOf(this.search) == -1) {
          this.footprintData.unshift(this.search);
        } else {
          this.footprintData.splice(this.footprintData.indexOf(this.search), 1);
          this.footprintData.unshift(this.search);
        }
      }
      localStorage.setItem("footprintData", JSON.stringify(this.footprintData));
      this.$router.push({
        path: "/screen",
        query: { type: 1, search: this.search },
      });
    },
    onclickSearch(val) {
      this.search = val;
      this.onKeyupSearch();
    },
    onclickSearchShow() {
      this.searchShow = true;
      this.searchBtnFlag = !this.searchBtnFlag;
      this.$nextTick(function () {
        document.getElementById("inputVal").focus();
      });
    },
    onclickDel() {
      this.footprintData = [];
      localStorage.setItem("footprintData", JSON.stringify(this.footprintData));
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

    if (localStorage.getItem("footprintData")) {
      this.footprintData = JSON.parse(localStorage.getItem("footprintData"));
    }
    this.$axios
      .post("/api/home_page/getNumList", { recommend: 2, from: "上海" })
      .then((val) => {
        if (val.code == 200) {
          this.dataList = val.data.data;
        }
      });
    this.$axios
      .post("/api/home_page/getNumList", { recommend: 1, from: "上海" })
      .then((val) => {
        if (val.code == 200) {
          this.dataTj = val.data.data;
        }
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
}
.ff-img {
  width: 16 / @vw*1.3;
  height: 15.5 / @vw*1.3;
  margin-top: 5 / @vw;
}
a {
  text-decoration: none;
  color: #333333;
}

.searchBox {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}
.sb_head {
  width: 750 / @vw / 2;
  // height: 670 / @vw / 2;
  padding: 15 / @vw;
  background: #f6f6f6;
  border-radius: 0px 0px 10 / @vw 10 / @vw;
  box-sizing: border-box;
  overflow: hidden;
}
.sbh_top {
  width: 500 / @vw / 2;
  height: 56 / @vw / 2;
  margin: 0 auto;
}
.sbht_center {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 56 / @vw / 4;
  z-index: 99999;
  overflow: hidden;
  box-sizing: border-box;
}
.sbht_center span {
  position: absolute;
  right: 10 / @vw;
  top: 0 / @vw;
  display: inline-block;
  line-height: 28 / @vw;
  font-size: 13 / @vw;
  color: #fe5858;
  text-align: center;
  // box-shadow: -5px 0px 5px 5px #eee inset;
  // background-color: #f6f6f6;
  box-sizing: border-box;
}
.sbh_top input {
  width: 100%;
  height: 100%;
  text-indent: 40 / @vw;
  background: #f6f6f6 url("../assets/t_1.png");
  background-size: 100%;
  // background-color: rgb(239, 239, 239);
}

.sbh_top img {
  position: absolute;
  top: 50%;
  left: 20 / @vw;
  transform: translateY(-50%);
  width: 12 / @vw;
  height: 12 / @vw;
}
.searchBox h3 {
  margin-top: 10 / @vw;
  margin-bottom: 10 / @vw;
  font-size: 14 / @vw;
  font-family: PingFang SC;
  color: #333333;
  line-height: 60 / @vw / 2;
}
.searchBox h3 img {
  width: 11 / @vw * 1.2;
  height: 12 / @vw * 1.2;
  margin-left: 260 / @vw;
}
.searchBox li {
  padding: 0 10 / @vw;
  margin-right: 20 / @vw;
  margin-bottom: 15 / @vw;
  font-size: 14 / @vw;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  background: #f2f2f2;
  border-radius: 4 / @vw;
  line-height: 50 / @vw / 2;
}
.searchBox ul {
  display: flex;
  flex-wrap: wrap;
}
.footprint ul {
  max-height: 120 / @vw;
  overflow-y: auto;
}
.number {
  color: #333333;
  font-size: 15 / @vw;
  margin-left: 10 / @vw;
  margin-top: 7 / @vw;
  margin-bottom: 4px;
}
.money {
  width: 94%;
  display: flex;
  font-size: 12 / @vw;
  justify-content: space-between;
  align-items: center;
  margin: 0 10 / @vw;
}
.money:last-child {
  margin-top: 6 / @vw;
}
.money p {
  font-size: 10 / @vw;
}
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #fff;
}
.haed {
  width: 100%;
  height: 300 / @vw;
}
.head p {
  position: absolute;
  left: 50%;
  top: 25 / @vw;
  color: white;
  font-size: 17 / @vw;
}
// .head .haoshu {
//   position: absolute;
//   left: 50%;
//   top: 25/@vw;
//   transform: translateX(-50%);
//   color: white;
//   font-size: 17/@vw;
// }
.head .bg_img {
  width: 100%;
  height: 200 / @vw;
}
.head i {
  display: inline-block;
  width: 227 / @vw;
  // height: 28 / @vw;
  line-height: 26 / @vw;
  font-size: 12 / @vw;
  color: #999999;
  position: absolute;
  left: 55%;
  top: 25 / @vw;
  transform: translateX(-50%);
  border: 1 / @vw solid white;
  border-radius: 20 / @vw;
  text-indent: 55 / @vw;
  background-color: #fff;
}
.head .locations img {
  width: 11 / @vw;
  height: 14 / @vw;
  position: absolute;
  left: 15 / @vw*1.3;
  top: 24 / @vw*1.3;
}
.head .locations p {
  position: absolute;
  left: 30 / @vw*1.3;
  top: 21 / @vw*1.3;
  font-size: 16 / @vw;
}
.heads {
  width: 340 / @vw;
  height: 120 / @vw;
  margin: -126 / @vw auto 0;
  border-radius: 5 / @vw;
  overflow: hidden;
}
.heads img {
  width: 100%;
  height: 100%;
}
.head .search {
  position: absolute;
  left: 55%;
  top: 33 / @vw;
  width: 10 / @vw*1.3;
  height: 10 / @vw*1.3;
  margin-left: -90 / @vw;
}

.one {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 90 / @vw;
  margin-top: 10 / @vw;
  text-align: center;
  margin: 0 auto;
}
.one dl dt img {
  width: 45 / @vw*1.3;
  height: 45 / @vw*1.3;
}

.one dl dd {
  margin-left: 2 / @vw;
  color: #333333;
  font-size: 13 / @vw;
}
.two {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 90 / @vw;
  margin: 0 auto;
}
.two dl dt img {
  width: 45 / @vw*1.3;
  height: 45 / @vw*1.3;
}

.two dl dd {
  margin-left: 2 / @vw;
  color: #333333;
  font-size: 13 / @vw;
}
.three {
  width: 100%;
  height: 90 / @vw;
  position: relative;
  background: white;
}
.three img {
  width: 354 / @vw;
  height: 83 / @vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.four img {
  width: 100%;
}
.footer {
  width: 90%;
  height: 30 / @vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 30 / @vw;
}
.footer .five img {
  width: 14 / @vw*1.3;
  height: 15.5 / @vw*1.3;
  margin-top: 5 / @vw;
}
.five {
  display: flex;
}
.five p {
  font-size: 11 / @vw*1.3;
  color: #333333;
  margin-left: 5 / @vw;
}

.six p {
  font-size: 11 / @vw;
  color: #666666;
  margin-left: -46 / @vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.six img {
  width: 8 / @vw;
  height: 8 / @vw;
  margin-left: 5 / @vw;
}

.cap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10 / @vw;
  justify-content: space-between;
  padding: 0 15 / @vw;
  box-sizing: border-box;
}

.cap .shit {
  width: 127 / @vw*1.3;
  height: 80 / @vw;
  border: 1 / @vw*1.3 solid #e5e5e5;
  border-radius: 10 / @vw;
  margin-bottom: 10 / @vw;
  // margin-left: 15/@vw;
  letter-spacing: 1px;
}
.cap .shit img {
  float: right;
  width: 25 / @vw;
  height: 16 / @vw;
}
.cap .shit .dolor {
  margin-right: 10 / @vw;
  color: #dd1414;
  font-size: 10 / @vw;
}
.cap .shit .han {
  font-size: 10 / @vw;
  color: #dd1414;
  // margin-top: 4 / @vw;
}
.cap .shit .twietion {
  font-size: 10 / @vw;
  color: #dc0101;
  margin-right: 10 / @vw;
}
.like {
  width: 100%;
  padding: 0 10 / @vw;
  box-sizing: border-box;
}
.like .you {
  width: 94 / @vw;
  margin: 3 / @vw 0 15 / @vw -2 / @vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.like .shun {
  width: 100%;
  margin-top: 10 / @vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.like .shun li {
  width: 174 / @vw;
  height: 72 / @vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1 / @vw solid #e5e5e5;
  margin-bottom: 2 / @vw;
}
.like .shun li img {
  width: 38 / @vw;
  height: 51 / @vw;
}
.like .shun li:last-child img {
  width: 24 / @vw;
  height: 50 / @vw;
}
.like .shun li .yes {
  margin-right: 16 / @vw;
}
.like .shun li .lian {
  font-size: 16 / @vw;
  color: #010101;
  margin-bottom: 7 / @vw;
}
.like .shun li .of {
  font-size: 8 / @vw*1.3;
  color: #666666;
}
.like .you img {
  width: 14 / @vw*1.3;
  height: 14 / @vw*1.3;
}
.like .you span {
  display: inline-block;
  color: #333333;
  margin-left: 6 / @vw;
  font-size: 11 / @vw*1.3;
}
.lina {
  padding-bottom: 68 / @vw;
}
.header {
  margin-top: 10 / @vw;
}
</style>

