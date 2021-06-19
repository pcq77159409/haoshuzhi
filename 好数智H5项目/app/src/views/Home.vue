<template>
  <div class="home">
    <div class="head">
      <div @click="citys" class="locations">
        <img src="../assets/123.png" alt="" />
        <p>上海</p>
      </div>
      <p>好数智</p>
      <img src="../assets/矩形 12@2x.png" alt="" class="bg_img" />
      <input
        type="text"
        placeholder="请输入您要搜索的内容"
        @keyup.enter="onKeyupSearch"
        v-model="search"
        maxlength="11"
      />
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
          <div class="number" v-html="value.red_number"></div>
          <div class="money">
            <p>{{ value.location }}</p>
            <p class="dolor">佣金￥{{ value.returned_commission }}</p>
          </div>
          <div class="money">
            <p class="han">含话费￥260</p>
            <p class="twietion">￥{{ value.initial_charge }}</p>
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
        <img
          src="../assets/形状 8@2x.png"
          alt=""
          style="width: 16pt; height: 15.5pt; margintop: 5px"
        />
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
          <div class="number">{{ item.number }}</div>
          <div class="money">
            <p>{{ item.from }}</p>
            <!-- <p class="dolor">佣金￥200</p> -->
          </div>
          <div class="money">
            <!-- <p class="han">含话费￥260</p> -->
            <p class="twietion">￥{{ item.sale_price }}</p>
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
    };
  },
  methods: {
    citys() {
      this.$router.push("/citys");
    },
    onCLickTiao(obj) {
      this.$router.push({ path: "/screen", query: obj });
    },
    onKeyupSearch() {
      this.$router.push({
        path: "/screen",
        query: { type: 1, search: this.search },
      });
    },
  },
  created() {
    this.$axios
      .post("/api/home_page/getNumbers", { operator_id: 1, from: "上海" })
      .then((val) => {
        console.log(val.data);
        this.dataList = val.data;
      });
    this.$get("/api/number/getHotNumber").then((val) => {
      console.log(val);
      if (val.code == 200) {
        this.dataTj = val.data;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: #333333;
}
.number {
  color: #333333;
  font-size: 19px;
  margin-top: 15px;
  margin-left: 10px;
}
.money {
  margin-top: 8px;
  width: 95%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-left: 10px;
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
  height: 300px;
}
.head p {
  position: absolute;
  left: 42%;
  top: 25px;
  color: white;
  font-size: 17px;
}
.head .bg_img {
  width: 100%;
  height: 200px;
}
.head input {
  width: 227px;
  height: 28px;
  font-size: 12px;
  color: #999999;
  position: absolute;
  left: 55pt;
  top: 46pt;
  border: 1px solid white;
  border-radius: 20px;
  text-indent: 55px;
}
.head .locations img {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 15pt;
  top: 23pt;
}
.head .locations p {
  width: 105px;
  height: 50px;
  position: absolute;
  left: 30pt;
  top: 21pt;
  font-size: 16px;
}
.heads {
  width: 340px;
  height: 120px;
  margin: -100px auto 0;
  border-radius: 5px;
  overflow: hidden;
}
.heads img {
  width: 100%;
  height: 100%;
}
.head .search {
  position: absolute;
  left: 105px;
  top: 69px;
  width: 10pt;
  height: 10pt;
}

.one {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 90px;
  margin-top: 10px;
  text-align: center;
  margin: 0 auto;
}
.one dl dt img {
  width: 45pt;
  height: 45pt;
}

.one dl dd {
  margin-left: 2px;
  color: #333333;
  font-size: 13px;
}
.two {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 90px;
  margin: 0 auto;
}
.two dl dt img {
  width: 45pt;
  height: 45pt;
}

.two dl dd {
  margin-left: 2px;
  color: #333333;
  font-size: 13px;
}
.three {
  width: 100%;
  height: 90px;
  position: relative;
  background: white;
}
.three img {
  width: 354px;
  height: 83px;
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
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  line-height: 30px;
}
.footer .five img {
  width: 14pt;
  height: 15.5pt;
  margin-top: 5px;
}
.five {
  display: flex;
}
.five p {
  font-size: 11pt;
  color: #333333;
  font-weight: bold;
  margin-left: 5px;
}

.six p {
  font-size: 11px;
  color: #666666;
  margin-left: -46px;
}
.six img {
  width: 10px;
  height: 10px;
  margin-left: 5px;
}

.cap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
}

.cap .shit {
  width: 125pt;
  height: 75pt;
  border: 0.5pt solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 10px;
  // margin-left: 15px;
}
.cap .shit img {
  float: right;
  width: 30px;
  height: 18px;
}
.cap .shit .dolor {
  margin-right: 10px;
  color: #dd1414;
}
.cap .shit .han {
  font-size: 8px;
  color: #dd1414;
  margin-top: 4px;
}
.cap .shit .twietion {
  font-size: 16px;
  font-weight: bold;
  color: #dc0101;
  margin-right: 10px;
}
.like {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.like .you {
  width: 94px;
  margin: 3px 0 15px -2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.like .shun {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.like .shun li {
  width: 164px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
  padding: 9px 0px 12px 0;
}
.like .shun li img {
  width: 38pt;
  height: 51pt;
}
.like .shun li .yes {
  margin-right: 28px;
}
.like .shun li .lian {
  font-size: 16px;
  color: #010101;
  font-weight: 600;
  margin-bottom: 7px;
}
.like .shun li .of {
  font-size: 8pt;
  color: #666666;
  font-weight: 600;
}
.like .you img {
  width: 14pt;
  height: 14pt;
}
.like .you span {
  display: inline-block;
  color: #333333;
  margin-left: 6px;
  font-weight: bold;
  font-size: 11pt;
}
.lina {
  padding-bottom: 68px;
}
.header {
  margin-top: 10px;
}
</style>

