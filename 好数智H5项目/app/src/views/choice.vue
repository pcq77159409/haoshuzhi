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
        <li @click="onClickBack">
          <p>筛选</p>
          <img src="../assets/filter.png" alt="" />
        </li>
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!-- 小魔卡 开始-->
    <div class="mocha">
      <div class="Characteristics" @click="onClickTsao">
        <img src="../assets/tao.png" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>移动小魔卡</h6>
            <div class="tea">
              <p>上海</p>
              <span>移动</span>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>90分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>58G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>500元</p>
            </li>
          </ul>
          <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div>
        </div>
      </div>
      <div class="Characteristics">
        <img src="../assets/tao.png" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>移动小魔卡</h6>
            <div class="tea">
              <p>上海</p>
              <span>移动</span>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>90分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>58G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>500元</p>
            </li>
          </ul>
          <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div>
        </div>
      </div>
      <div class="Characteristics">
        <img src="../assets/tao.png" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>移动小魔卡</h6>
            <div class="tea">
              <p>上海</p>
              <span>移动</span>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>90分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>58G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>500元</p>
            </li>
          </ul>
          <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div>
        </div>
      </div>
      <div class="Characteristics">
        <img src="../assets/tao.png" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>移动小魔卡</h6>
            <div class="tea">
              <p>上海</p>
              <span>移动</span>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>90分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>58G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>500元</p>
            </li>
          </ul>
          <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div>
        </div>
      </div>
      <div class="Characteristics">
        <img src="../assets/tao.png" alt="" class="tao" />
        <div>
          <div class="movement">
            <h6>移动小魔卡</h6>
            <div class="tea">
              <p>上海</p>
              <span>移动</span>
            </div>
          </div>
          <p class="voice">套餐特征: 流量+语音畅享套餐</p>
          <ul class="amount">
            <li>
              <img src="../assets/phone.png" alt="" />
              <p>90分钟</p>
            </li>

            <li>
              <img src="../assets/liu.png" alt="" />
              <p>58G</p>
            </li>

            <li>
              <img src="../assets/qan.png" alt="" />
              <p>500元</p>
            </li>
          </ul>
          <div class="champion">
            <p>销量:808</p>
            <span>￥90.00</span>
          </div>
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

    <!-- 规律 开始-->
    <div class="regular" v-show="regulars">
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

    <!-- 搜索筛选 开始-->
    <div class="Montmorillonite" v-show="back">
      <div class="search_filter">
        <!-- 返回按钮 -->
        <div class="back">
          <img src="../assets/back.png" alt="" @click="onClickTo" />
          <p>筛选</p>
        </div>
        <!-- 返回按钮 -->

        <!-- 办理 -->
        <div class="handle">
          <p :class="{ wrok: tranges == true }" @click="tranges = true">
            线上实名制办理
          </p>
          <p :class="{ wrok: tranges == false }" @click="tranges = false">
            线下营业厅办理
          </p>
        </div>
        <!-- 办理 -->

        <!-- 价格筛选 -->
        <div class="price">
          <h5>价格筛选</h5>
          <ul>
            <li
              v-for="(item, index) in dataList"
              :key="index"
              @click="onTab(index)"
              :class="{ active: went == index }"
            >
              {{ item.name }}
            </li>
            <li><span>￥</span> <input type="number" /></li>
            <li><span>￥</span> <input type="number" /></li>
          </ul>
          <p>到</p>
        </div>
        <!-- 价格筛选 -->

        <!-- 话费筛选 -->
        <div class="charge">
          <h5>话费筛选</h5>
          <ul>
            <li
              v-for="(item, index) in itemList"
              :key="index"
              @click="onClickOne(index)"
              :class="{ active: cont == index }"
            >
              {{ item.val }}
            </li>
            <li><span>￥</span> <input type="number" /></li>
            <li><span>￥</span> <input type="number" /></li>
          </ul>
          <p>到</p>
        </div>
        <!-- 话费筛选 -->

        <!-- 合约筛选 开始-->
        <div class="contract">
          <h5>合约筛选</h5>
          <ul class="december">
            <li :class="{ active: one == 0 }" @click="one = 0">不限</li>
            <li :class="{ active: one == 1 }" @click="one = 1">无合约</li>
            <li :class="{ active: one == 2 }" @click="one = 2">
              12个月;30元...
            </li>
          </ul>
          <ul class="change">
            <li>
              <h3>选择合约时长</h3>
              <h3>选择最低消费</h3>
            </li>
            <li>
              <p>不限</p>
              <p>不限</p>
            </li>
            <li>
              <p>12月</p>
              <p>30/月</p>
            </li>
            <li>
              <p>24月</p>
              <p>50/月</p>
            </li>
          </ul>
          <span class="linings"></span>
        </div>
        <!-- 合约筛选 结束-->

        <!-- 较多数字 开始-->
        <div class="more_number">
          <h5>较多数字</h5>
          <ul>
            <li
              v-for="(item, index) in wrapList"
              :key="index"
              @click="onClickTwo(index)"
              :class="{ active: two == index }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <!-- 较多数字 结束-->

        <!-- 不含数字 开始-->
        <div class="more_number none">
          <h5>不含数字</h5>
          <ul>
            <li
              v-for="(item, index) in arrList"
              :key="index"
              @click="onClickThree(index)"
              :class="{ active: three == index }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <!-- 不含数字 结束-->

        <!-- 按钮 开始-->
        <div class="sure">
          <p @click="onClickReset">重置</p>
          <span @click="onClickTo">确定</span>
        </div>
        <!-- 按钮 结束-->
      </div>
    </div>
    <!-- 搜索筛选 结束-->
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
      dataList: [
        {
          name: "全部价格",
        },
        {
          name: "价格从高到低",
        },
        {
          name: "价格从低到高",
        },
        {
          name: "0-500元",
        },
        {
          name: "500-100元",
        },
        {
          name: "1000-2000元",
        },
        {
          name: "2000-5000元",
        },
        {
          name: "5000-1万元",
        },
        {
          name: "1万-2万元",
        },
        {
          name: "2万已上价格",
        },
      ],
      itemList: [
        {
          val: "不限",
        },
        {
          val: "无话费",
        },
        {
          val: "含话费",
        },
        {
          val: "含30元",
        },
        {
          val: "含50元",
        },
        {
          val: "含100元",
        },
        {
          val: "含300元",
        },
      ],
      wrapList: [
        {
          name: "0较多",
        },
        {
          name: "1较多",
        },
        {
          name: "2较多",
        },
        {
          name: "3较多",
        },
        {
          name: "4较多",
        },
        {
          name: "5较多",
        },
        {
          name: "6较多",
        },
        {
          name: "7较多",
        },
        {
          name: "8较多",
        },
        {
          name: "9较多",
        },
      ],
      arrList: [
        {
          name: "不含0",
        },
        {
          name: "不含2",
        },
        {
          name: "不含3",
        },
        {
          name: "不含4",
        },
        {
          name: "不含5",
        },
        {
          name: "不含6",
        },
        {
          name: "不含7",
        },
        {
          name: "不含8",
        },
        {
          name: "不含9",
        },
      ],
      cont: false,
      went: false,
      wrap: null,
      flag: false,
      num: null,
      active: null,
      cut: false,
      regulars: false,
      back: false,
      tranges: null,
      one: false,
      two: false,
      three: false,
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
    onClickBack() {
      if (this.back == false) {
        this.back = true;
      } else {
        this.back = false;
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
    onClickRegular() {
      if (this.regulars == false) {
        this.regulars = true;
        this.flag = false;
        this.cut = false;
      } else {
        this.regulars = false;
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
    onClickTsao(){
      this.$axios.
      this.$router.push('/login')
    }
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
  background-size: 115/@vw 25/@vw;
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
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: relative; 
}
.choice_box .package_box img {
  width: 10/@vw;
  height: 16/@vw;
  pointer-events: auto;
  position: absolute;
  left: 15/@vw;
}
.choice_box .package_box h4 {
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.choice_box .select_change {
  width: 100%;
  height: 43/@vw;
  background-color: #fff;
  border: 1/@vw solid #e5e5e5;
}
.choice_box .select_change ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  line-height: 33/@vw;
}
.choice_box .select_change ul li {
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .select_change ul li .red_triangle {
  position: absolute;
  right: -4/@vw;
  top: 44%;
}
.choice_box .select_change ul li p {
  font-size: 14/@vw;
  color: #666666;
  margin-right: 9/@vw;
}
.choice_box .select_change ul li img {
  width: 6/@vw;
  height: 4/@vw;
}
.choice_box .select_change ul li:last-child img {
  width: 10/@vw;
  height: 9/@vw;
}
.choice_box .Belonging,
.choice_box .regular {
  width: 100%;
  height: 368/@vw;
  position: absolute;
  left: 0;
  top: 109/@vw;
  display: flex;
}
.choice_box .regular {
  height: 360/@vw;
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
  height: 45/@vw;
  border-bottom: 1/@vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .Belonging .pro li p {
  color: #333333;
  font-size: 10/@vw*1.3;
  margin-left: 35/@vw;
}

.choice_box .Belonging .pro li img,
.choice_box .Belonging .city li img {
  position: absolute;
  left: 15/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
}
.choice_box .Belonging .city {
  width: 60%;
  height: 100%;
  background-color: #f8f8f8;
}
.choice_box .Belonging .city li p {
  color: #333333;
  font-size: 10/@vw*1.3;
  margin-left: 48/@vw;
}
.choice_box .opeateing {
  width: 100%;
  height: 360/@vw;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 109/@vw;
  display: flex;
}
.choice_box .opeateing ul {
  width: 100%;
  height: 88/@vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.choice_box .opeateing ul li {
  width: 187/@vw;
  height: 43/@vw;
  display: flex;
  align-items: center;
  border-bottom: 1/@vw solid #ececec;
  position: relative;
}
.choice_box .opeateing ul li img {
  position: absolute;
  left: 40/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
  display: none;
}
.choice_box .opeateing ul li p {
  color: #333333;
  font-size: 12/@vw;
  margin-left: 63/@vw;
  text-align: center;
}
.choice_box .opeateing ul li:hover,
.choice_box .regular ul li:hover {
  background-color: #ececec;
}
.choice_box .opeateing ul li:hover p,
.choice_box .regular ul li:hover p {
  color: #fe5858;
}
.choice_box .opeateing ul li:hover img,
.choice_box .regular ul li:hover img {
  display: block;
}
.choice_box .regular ul {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.choice_box .regular ul li {
  width: 100%;
  height: 44/@vw;
  border-bottom: 1/@vw solid #ececec;
  display: flex;
  align-items: center;
  position: relative;
}
.choice_box .regular ul li img {
  position: absolute;
  left: 15/@vw;
  width: 10/@vw*1.3;
  height: 7/@vw*1.3;
  display: none;
}
.choice_box .regular ul li p {
  color: #333333;
  font-size: 12/@vw;
  margin-left: 40/@vw;
}
.choice_box .Montmorillonite {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
}
.choice_box .Montmorillonite .search_filter {
  width: 330/@vw;
  height: 100%;
  background-color: #fff;
  margin-left: 45/@vw;
  overflow-y: auto;
}
.choice_box .Montmorillonite .search_filter .back {
  width: 100%;
  height: 40/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  align-items: center;
}
.choice_box .Montmorillonite .search_filter .back img {
  width: 6/@vw;
  height: 11/@vw;
  margin-left: 11/@vw;
}
.choice_box .Montmorillonite .search_filter .back p {
  font-size: 12/@vw;
  color: #666666;
  margin-left: 5/@vw;
}
.choice_box .Montmorillonite .search_filter .handle {
  width: 286/@vw;
  height: 55/@vw;
  margin: 0 22/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12/@vw;
}
.choice_box .Montmorillonite .search_filter .handle p {
  width: 115/@vw;
  height: 25/@vw;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25/@vw;
  color: #999999;
}

.choice_box .Montmorillonite .search_filter .price {
  width: 286/@vw;
  height: 200/@vw;
  margin: 0 22/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  position: relative;
}
.choice_box .Montmorillonite .search_filter .price p {
  position: absolute;
  left: 184/@vw;
  top: 157/@vw;
  font-size: 12/@vw;
  color: #666666;
}
.choice_box .Montmorillonite .search_filter .price h5,
.choice_box .Montmorillonite .search_filter .charge h5,
.choice_box .Montmorillonite .search_filter .contract h5,
.choice_box .Montmorillonite .search_filter .more_number h5 {
  color: #666666;
  font-size: 14/@vw;
  font-weight: 500;
  margin: 14/@vw 0;
}
.choice_box .Montmorillonite .search_filter .price ul,
.choice_box .Montmorillonite .search_filter .charge ul,
.choice_box .Montmorillonite .search_filter .more_number ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.choice_box .Montmorillonite .search_filter .price ul li,
.choice_box .Montmorillonite .search_filter .charge ul li,
.choice_box .Montmorillonite .search_filter .more_number ul li {
  position: relative;
  width: 89/@vw;
  height: 25/@vw;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 25/@vw;
  margin-bottom: 15/@vw;
  border-radius: 4/@vw;
  font-size: 12/@vw;
  color: #666666;
}
.choice_box .Montmorillonite .search_filter .more_number ul li {
  width: 68/@vw;
}

.choice_box .Montmorillonite .search_filter .price ul li span,
.choice_box .Montmorillonite .search_filter .charge span {
  position: absolute;
  left: 10/@vw;
  top: 0;
}
.choice_box .Montmorillonite .search_filter .price ul li input,
.choice_box .Montmorillonite .search_filter .charge ul li input {
  border: none;
  outline: none;
  background: none;
  text-indent: 30/@vw;
  width: 100%;
  height: 100%;
}
.choice_box .Montmorillonite .search_filter .price ul li:last-child:hover {
  color: #666666;
  background-color: #f8f8f8;
}
.choice_box .Montmorillonite .search_filter .price ul li:last-child,
.choice_box .Montmorillonite .search_filter .charge ul li:last-child {
  width: 85/@vw;
  margin-left: 8/@vw;
}
.choice_box .Montmorillonite .search_filter .price ul li:nth-of-type(11),
.choice_box .Montmorillonite .search_filter .charge ul li:nth-of-type(11) {
  width: 85/@vw;
}
.choice_box .Montmorillonite .search_filter .price ul li:nth-of-type(11):hover {
  color: #666666;
  background-color: #f8f8f8;
}

.choice_box .Montmorillonite .search_filter .charge {
  width: 286/@vw;
  height: 160/@vw;
  margin: 0 22/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  position: relative;
}
.choice_box .Montmorillonite .search_filter .charge p {
  font-size: 12/@vw;
  color: #666666;
  position: absolute;
  left: 186/@vw;
  top: 117/@vw;
}
.choice_box .Montmorillonite .search_filter .contract {
  width: 286/@vw;
  height: 195/@vw;
  margin: 0 22/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  position: relative;
}
.choice_box .Montmorillonite .search_filter .contract .linings {
  width: 1/@vw;
  height: 104/@vw;
  background-color: #f2f2f2;
  position: absolute;
  left: 50%;
  top: 74/@vw;
}
.choice_box .Montmorillonite .search_filter .contract .december {
  width: 100%;
  height: 25/@vw;
  display: flex;
  justify-content: space-around;
}
.choice_box .Montmorillonite .search_filter .contract .december li {
  width: 89/@vw;
  height: 25/@vw;
  background-color: #f8f8f8;
  text-align: center;
  border-radius: 4/@vw;
  font-size: 12/@vw;
  line-height: 25/@vw;
  color: #666666;
}
.choice_box .Montmorillonite .search_filter .contract .change {
  width: 100%;
  height: 100/@vw;
  margin-top: 15/@vw;
}
.choice_box .Montmorillonite .search_filter .contract .change li {
  width: 100%;
  height: 25/@vw;
  display: flex;
  border-bottom: 1/@vw solid #f2f2f2;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.choice_box .Montmorillonite .search_filter .contract .change li:first-child {
  border-top: 1/@vw solid #f2f2f2;
}
.choice_box .Montmorillonite .search_filter .contract .change li h3 {
  font-weight: 500;
  font-size: 14/@vw;
  color: #666666;
  flex: 1;
}
.choice_box .Montmorillonite .search_filter .contract .change li p {
  font-size: 12/@vw;
  color: #666666;
  flex: 1;
}
.choice_box .Montmorillonite .search_filter .more_number {
  width: 286/@vw;
  height: 160/@vw;
  margin: 0 22/@vw;
}
.choice_box .Montmorillonite .search_filter .more_number ul li:last-child {
  margin-right: 142/@vw;
}
.choice_box .Montmorillonite .search_filter .none ul li:last-child {
  margin-right: 214/@vw;
}
.choice_box .Montmorillonite .search_filter .sure {
  width: 100%;
  height: 44/@vw;
  display: flex;
}
.choice_box .Montmorillonite .search_filter .sure p {
  width: 50%;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 44/@vw;
  font-size: 16/@vw;
  color: #666666;
  border-bottom: 1/@vw solid #f2f2f2;
  border-top: 1/@vw solid #f2f2f2;
}
.choice_box .Montmorillonite .search_filter .sure span {
  width: 50%;
  background-color: #fe5858;
  text-align: center;
  line-height: 44/@vw;
  font-size: 16/@vw;
  color: #ffffff;
}

.choice_box .mocha {
  width: 345/@vw;
  height: 555/@vw;
  margin: 0 auto;
}
.choice_box .mocha .Characteristics {
  width: 100%;
  height: 103/@vw;
  background-color: #fff;
  margin-top: 10/@vw;
  border-radius: 4/@vw;
  display: flex;
}
.choice_box .mocha .Characteristics .tao {
  width: 80/@vw;
  height: 80/@vw;
  margin: 12/@vw 0 0 10/@vw;
}
.choice_box .mocha .Characteristics .movement {
  width: 240/@vw;
  display: flex;
  height: 20/@vw;
  margin: 10/@vw 4/@vw 0 16/@vw;
  justify-content: space-between;
}
.choice_box .mocha .Characteristics .movement h6 {
  color: #333333;
  font-size: 13/@vw;
}
.choice_box .mocha .Characteristics .movement .tea {
  display: flex;
}
.choice_box .mocha .Characteristics .movement .tea p,
.choice_box .mocha .Characteristics .movement .tea span {
  font-size: 13/@vw;
  color: #666666;
  margin-right: 6/@vw;
}
.choice_box .mocha .Characteristics .voice {
  font-size: 12/@vw;
  color: #666666;
  margin: 2/@vw 0 0 16/@vw;
}
.choice_box .mocha .Characteristics .amount {
  width: 202/@vw;
  display: flex;
  margin-left: 16/@vw;
  justify-content: flex-start;
  margin-top: 6/@vw;
}
.choice_box .mocha .Characteristics .amount li {
  display: flex;
  align-items: center;
  margin-right: 32/@vw;
}
.choice_box .mocha .Characteristics .amount li:last-child {
  margin: 0;
}
.choice_box .mocha .Characteristics .amount li img {
  width: 8/@vw;
  height: 8/@vw;
  margin-right: 4/@vw;
}
.choice_box .mocha .Characteristics .amount li p {
  font-size: 12/@vw;
  color: #666666;
}
.choice_box .mocha .Characteristics .champion {
  width: 232/@vw;
  display: flex;
  margin-left: 16/@vw;
  margin-top: 4/@vw;
  justify-content: space-between;
}
.choice_box .mocha .Characteristics .champion p {
  font-size: 12/@vw;
  color: #666666;
}
.choice_box .mocha .Characteristics .champion span {
  font-size: 12/@vw;
  color: #ea5656;
}
</style>