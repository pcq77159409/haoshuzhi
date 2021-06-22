<template>
  <div class="Mobile_phone">
    <!-- 头部导航 开始-->
    <div class="reds">
      <div class="moveing">
        <img src="../assets/left.png" alt="" @click="onClickGo" />
        <h3>{{ title }}</h3>
      </div>
      <div class="input_bg">
        <div class="tail" @click="onclickTyped">
          <div class="img">
            <img src="../assets/yes.png" alt="" v-show="typed == 0" />
          </div>
          <p>尾号</p>
          <span></span>
        </div>
        <div class="searchs">
          <div class="want">
            <img src="../assets/搜索@2x.png" alt="" />
            <input
              type="text"
              placeholder="搜索你想要的号码"
              v-model="searchInput"
              @keyup.enter="onSearch"
            />
          </div>
          <h4 @click="onSearch">搜索</h4>
        </div>
      </div>
    </div>
    <!-- 头部导航 结束-->

    <!-- 搜索号码 开始-->
    <div class="accurate">
      <ul class="phoneNumber">
        <li>
          <input
            type="number"
            value="1"
            @keyup="onkeyupInputSearch(0)"
            class="number"
          />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(1)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(2)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(3)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(4)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(5)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(6)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(7)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(8)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(9)" class="number" />
        </li>
        <li>
          <input type="number" @keyup="onkeyupInputSearch(10)" class="number" />
        </li>
      </ul>
      <p>* 请在指定位置上填写数字，无要求的位置可留空</p>
      <ul class="reset">
        <li @click="onclickResetInput">重置</li>
        <li @click="onclickAccurateSearch">精准搜索</li>
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
        <li @click="onClickBack">
          <p>筛选</p>
          <img src="../assets/filter.png" alt="" />
        </li>
      </ul>
    </div>
    <!-- 下拉选择 结束-->

    <!--手机号 开始-->
    <div class="class_name">
      <!--暂无搜索内容 开始-->
      <div class="available" v-show="isShow">
        <img src="../assets/sou.png" alt="" />
        <p>暂无搜索内容</p>
      </div>
      <!--暂无搜索内容 结束-->

      <router-link
        :to="{ path: '/details', query: { 'ids[]': val.id } }"
        v-for="(val, index) in list"
        :key="index"
      >
        <div class="start">
          <img src="../assets/矩形 47@2x.png" alt="" style="" />
          <h5 v-html="val.number_tag"></h5>
          <div class="commission">
            <p>{{ val.location }}</p>
            <span>佣金{{ val.returned_commission }}</span>
          </div>
          <div class="contains">
            <p>含通话费{{ val.contain_charge }}</p>
            <span>￥{{ val.sale_price }}</span>
          </div>
        </div>
      </router-link>
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
    <div class="opeateing" v-show="cut">
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
    <div class="regular" v-show="regulars">
      <ul>
        <li
          v-for="(item, index) in rule"
          :key="index"
          :class="{ currents: regList == index }"
          @click="onclickRegList(index, item.id)"
        >
          <img src="../assets/right.png" alt="" v-show="regList == index" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <!-- 规律 结束-->

    <!-- 搜索筛选 开始-->
    <div class="Montmorillonite" v-show="back">
      <div class="search_filter">
        <!-- 返回按钮 -->
        <div class="back">
          <img src="../assets/back.png" alt="" @click="back = false" />
          <p @click="back = false">筛选</p>
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
            <li><span>￥</span> <input type="number" v-model="minNumber" /></li>
            <li><span>￥</span> <input type="number" v-model="maxNumber" /></li>
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
            <!-- <li><span>￥</span> <input type="number" /></li>
            <li><span>￥</span> <input type="number" /></li> -->
          </ul>
          <!-- <p>到</p> -->
        </div>
        <!-- 话费筛选 -->

        <!-- 合约筛选 开始-->
        <div class="contract">
          <h5>合约筛选</h5>
          <ul class="december">
            <li
              :class="{ active: one == 0 }"
              @click="(one = 0), (contractListed = 0), (lowPinListed = 0)"
            >
              不限
            </li>
            <li
              :class="{ active: one == 1 }"
              @click="(one = 1), (contractListed = null), (lowPinListed = null)"
            >
              无合约
            </li>
            <li
              :class="{ active: one == 2 }"
              @click="(one = 2), (contractListed = 0), (lowPinListed = 0)"
            >
              含合约
            </li>
          </ul>
          <ul class="change">
            <li>
              <h3>选择合约时长</h3>
              <h3>选择最低消费</h3>
            </li>
            <li>
              <p
                :class="{ actives: contractListed == 0 }"
                @click="contractListed = 0"
              >
                不限
              </p>
              <p
                :class="{ actives: lowPinListed == 0 }"
                @click="lowPinListed = 0"
              >
                不限
              </p>
            </li>
            <li v-for="(item, index) in contractList" :key="index">
              <p
                :class="{ actives: contractListed == item }"
                @click="contractListed = item"
              >
                {{ item }}个月
              </p>
              <p
                :class="{ actives: lowPinListed == item }"
                @click="lowPinListed = item"
              >
                {{ lowPinList[index] }}元/月
              </p>
            </li>
            <!-- <li>
              <p>12月</p>
              <p>30元/月</p>
            </li>
            <li>
              <p>24月</p>
              <p>50元/月</p>
            </li> -->
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
              @click="onClickThree(item.num)"
              :class="{ active: three.includes(item.num) }"
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
      active: null,
      proList: [],
      cityList: [],
      chinese: [],
      rule: [
        {
          id: 37,
          name: "中间AAAA",
        },
        {
          id: 38,
          name: "中间AAAAA",
        },
        {
          id: 39,
          name: "中间AAAAAA",
        },
        {
          id: 42,
          name: "中间AAAB",
        },
        {
          id: 35,
          name: "中间AABB",
        },
        {
          id: 36,
          name: "中间ABAB",
        },
        {
          id: 40,
          name: "中间ABBA",
        },
        {
          id: 41,
          name: "中间ABBB",
        },
        {
          id: 43,
          name: "中间ABCDE",
        },
        {
          id: 33,
          name: "*ABC*ABC",
        },
        {
          id: 25,
          name: "AA",
        },
        {
          id: 1,
          name: "AAA",
        },
        {
          id: 17,
          name: "AAA*BBB*",
        },
        {
          id: 2,
          name: "AAAA",
        },
        {
          id: 3,
          name: "AAAAA",
        },
        {
          id: 4,
          name: "AAAAAA",
        },
        {
          id: 12,
          name: "AAAAAB",
        },
        {
          id: 13,
          name: "AAAAB",
        },
        {
          id: 29,
          name: "AAAABB",
        },
        {
          id: 5,
          name: "AAAABBBB",
        },
        {
          id: 14,
          name: "AAAB",
        },
        {
          id: 21,
          name: "AAABAAAB",
        },
        {
          id: 27,
          name: "AAABB",
        },
        {
          id: 6,
          name: "AAABBB",
        },
        {
          id: 9,
          name: "AABB",
        },
        {
          id: 24,
          name: "AABBB",
        },
        {
          id: 8,
          name: "AABBCC",
        },
        {
          id: 34,
          name: "AABBCC*",
        },
        {
          id: 7,
          name: "AABBCCDD",
        },
        {
          id: 16,
          name: "ABAB",
        },
        {
          id: 15,
          name: "ABABAB",
        },
        {
          id: 32,
          name: "ABABAB*",
        },
        {
          id: 20,
          name: "ABABCCDD",
        },
        {
          id: 22,
          name: "ABBA",
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
          name: "500-1000元",
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
        // {
        //   val: "含30元",
        // },
        // {
        //   val: "含50元",
        // },
        // {
        //   val: "含100元",
        // },
        // {
        //   val: "含300元",
        // },
      ],
      wrapList: [
        {
          name: "不限",
        },
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
          num: "0",
        },
        {
          name: "不含2",
          num: "2",
        },
        {
          name: "不含3",
          num: "3",
        },
        {
          name: "不含4",
          num: "4",
        },
        {
          name: "不含5",
          num: "5",
        },
        {
          name: "不含6",
          num: "6",
        },
        {
          name: "不含7",
          num: "7",
        },
        {
          name: "不含8",
          num: "8",
        },
        {
          name: "不含9",
          num: "9",
        },
      ],
      list: [],
      num: null,
      wrap: null,
      flag: false,
      cut: false,
      regulars: false,
      back: false,
      tranges: null,
      went: false,
      cont: false,
      one: false,
      two: false,
      three: [],
      nums: "",
      opList: -1,
      regList: -1,
      typed: 1,
      parameter: {},
      minNumber: "",
      maxNumber: "",
      searchInput: "",
      searchFilter: {
        handle_type: "", //办理方式 1 线上 2线下
        sort_price: "", //价格排序 1递增 2递减
        min_price: "", //	最小价格
        max_price: "", //	最大价格
        prepaid_charge: "", //预存话费 空为不限 无话费为0 有话费传1
        contract: "", //	合约期
        min_charge: "", //月低消
        include: "", //数字较多
        no_include: "", //不含数字
      },
      contractList: [],
      lowPinList: [],
      contractListed: false,
      lowPinListed: false,
      isShow: false,
      title: "移动号码",
    };
  },
  methods: {
    onClickGo() {
      this.$router.push('/commons/home/m');
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
    onClickBack() {
      if (this.back == false) {
        this.back = true;
      } else {
        this.back = false;
      }
    },
    onClickTo() {
      this.back = false;
      this.parameter = {};
      if (this.tranges === null) {
        this.searchFilter.handle_type = "";
      } else if (this.tranges === true) {
        this.searchFilter.handle_type = 1;
      } else {
        this.searchFilter.handle_type = 2;
      }

      switch (this.went) {
        case 0:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "";
          this.searchFilter.max_price = "";
          break;
        case 1:
          this.searchFilter.sort_price = 2;
          this.searchFilter.min_price = "";
          this.searchFilter.max_price = "";
          break;
        case 2:
          this.searchFilter.sort_price = 1;
          this.searchFilter.min_price = "";
          this.searchFilter.max_price = "";
          break;
        case 3:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "1";
          this.searchFilter.max_price = "500";
          break;
        case 4:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "500";
          this.searchFilter.max_price = "1000";
          break;
        case 5:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "1000";
          this.searchFilter.max_price = "2000";
          break;
        case 6:
          this.searchFilter.sort_price = 1;
          this.searchFilter.min_price = "2000";
          this.searchFilter.max_price = "5000";
          break;
        case 7:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "5000";
          this.searchFilter.max_price = "10000";
          break;
        case 8:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "10000";
          this.searchFilter.max_price = "20000";
          break;
        case 9:
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "20000";
          this.searchFilter.max_price = "1000000000";
          break;
        default:
          break;
      }

      if (this.maxNumber != "") {
        if (this.minNumber == "" || this.minNumber == 0) {
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = "1";
          this.searchFilter.max_price = this.maxNumber;
        } else {
          this.searchFilter.sort_price = "";
          this.searchFilter.min_price = this.minNumber;
          this.searchFilter.max_price = this.maxNumber;
        }
      }

      if (this.cont == 0 || this.cont == false) {
        this.searchFilter.prepaid_charge = "";
      } else if (this.cont == 1) {
        this.searchFilter.prepaid_charge = 0;
      } else {
        this.searchFilter.prepaid_charge = 1;
      }

      if (this.one == 0 || this.one == false) {
        this.searchFilter.contract = this.contractListed;
        this.searchFilter.min_charge = this.lowPinListed;
      } else if (this.one == 1) {
        this.searchFilter.contract = "";
        this.searchFilter.min_charge = "";
      } else if (this.one == 2) {
        this.searchFilter.contract = this.contractListed;
        this.searchFilter.min_charge = this.lowPinListed;
      }

      if (this.contractListed == 0 || this.contractListed == null) {
        this.searchFilter.contract = "";
      }

      if (this.lowPinListed == 0 || this.lowPinListed == null) {
        this.searchFilter.min_charge = "";
      }

      if (this.two - 1 == -1) {
        this.searchFilter.include = "";
      } else {
        this.searchFilter.include = this.two - 1;
      }

      // if (this.three - 1 == -1) {
      //   this.searchFilter.no_include = "";
      // } else {
      // this.searchFilter.no_include = this.three - 1;
      // }
      this.searchFilter.no_include = "";
      this.three.forEach((val, index) => {
        console.log(val);
        if (this.three.length - 1 == index) {
          this.searchFilter.no_include += val;
        } else {
          this.searchFilter.no_include += val + ",";
        }
      });

      console.log(this.searchFilter.no_include);

      this.searchFilter.type = 1;
      this.parameter = this.searchFilter;

      this.onclickQuery();
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
      if (this.three.includes(index)) {
        this.three = this.three.filter((val) => val != index);
      } else {
        this.three.push(index);
      }
    },
    onClickReset() {
      this.tranges = null;
      this.went = false;
      this.cont = false;
      this.one = false;
      this.two = false;
      this.three = [];
      this.minNumber = "";
      this.maxNumber = "";
      this.contractListed = false;
      this.lowPinListed = false;
    },
    onSearch() {
      this.parameter = {};
      if (this.typed) {
        this.parameter.type = 1;
      } else {
        this.parameter.type = 0;
      }
      this.parameter.search = this.searchInput;
      this.onclickQuery();
    },
    onFen(id) {
      this.$axios
        .get("/api/home_page/getChildCategory?id=" + id)
        .then((val) => {
          this.rule = val.data;
        });
    },
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
      this.onclickQuery();
    },
    onclickRegList(index, id) {
      this.parameter = {};
      this.regList = index;
      this.regulars = false;
      this.active = -1;
      this.parameter.tag = id;
      this.onclickQuery();
    },
    onclickTyped() {
      this.typed = !this.typed;
    },
    onkeyupInputSearch(index) {
      var number = document.querySelectorAll(".number");

      var words = number[index].value.replace(/\D+/g, "");
      words = words.substring(words.length - 1, words.length);
      number[index].value = words;

      if (event.code == "Backspace") {
        if (index >= 1) {
          number[index - 1].focus();
        }
      } else {
        if (index < number.length - 1) {
          number[index + 1].focus();
        }
      }
    },
    onclickAccurateSearch() {
      var number = document.querySelectorAll(".number");
      let str = "";
      number.forEach((val) => {
        if (val.value == "") {
          str += "_";
        } else {
          str += val.value;
        }
      });
      this.parameter = {};
      this.parameter.accurate = str;
      this.onclickQuery();
    },
    onclickResetInput() {
      var number = document.querySelectorAll(".number");
      let str = "";
      number.forEach((val, index) => {
        if (index != 0) {
          val.value = "";
          str += "_";
        } else {
          str += val.value;
        }
      });
      this.parameter.accurate = str;
      this.onclickQuery();
    },
    onclickQuery() {
      let flag = false;
      for (var k in this.parameter) {
        if (this.parameter[k] != this.$route.query[k]) {
          flag = true;
        }
      }

      if (flag) {
        console.log(this.parameter);
        this.$router.push({
          path: "/screen",
          query: this.parameter,
        });
        console.log(this.parameter);
        console.log(this.$route.query);
        this.$axios
          .post("/api/home_page/getNumList", this.$route.query)
          .then((val) => {
            console.log(val);
            this.list = val.data.data;
          });
      }
    },
  },
  mounted() {
    this.$axios
      .post("/api/home_page/getNumList", this.$route.query)
      .then((val) => {
        console.log(val);
        this.list = val.data.data;
      });
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
    this.$axios.get("/api/low_consumption/index").then((r) => {
      r.data.forEach((val) => {
        if (val.type == 1) {
          this.contractList.push(val.name);
        } else if (val.type == 2) {
          this.lowPinList.push(val.name);
        }
      });
    });
// console.log(this.$route.query);
    if (this.$route.query.operator_id && this.$route.query.operator_id == 1) {
      this.title = "移动号码";
    } else if (
      this.$route.query.operator_id &&
      this.$route.query.operator_id == 2
    ) {
      this.title = "联通号码";
    } else if (
      this.$route.query.operator_id &&
      this.$route.query.operator_id == 3
    ) {
      this.title = "电信号码";
    } else if (
      this.$route.query.operator_id &&
      this.$route.query.operator_id == 4
    ) {
      this.title = "虚拟号码";
    }
  },
  updated() {
    if (this.list.length == 0) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  },
  watch: {
    opList(val) {
      console.log(val);
      if (val == '中国移动') {
        this.title = "移动号码";
      } else if (val == '中国联通') {
        this.title = "联通号码";
      } else if (val == '中国电信') {
        this.title = "电信号码";
      } else if (val == '虚拟运营商') {
        this.title = "虚拟号码";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.Mobile_phone .active {
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
  background-size: 115px 25px;
  color: #fe5858;
}

.Mobile_phone {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: hidden;
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
.Mobile_phone .reds .input_bg .tail .img {
  width: 12px;
  height: 12px;
  margin: 0 10px 0 15px;
  border: #ccc solid 1px;
  // border-radius: 2px;
  overflow: hidden;
}

.Mobile_phone .reds .input_bg .tail img {
  width: 100%;
  height: 100%;
  // vertical-align: middle;
  transform: translateY(-5px);
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
  font-size: 14px;
}
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
  border-radius: 3px;
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
  height: 43px;
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
.Mobile_phone .select_change ul li:last-child img {
  width: 10px;
  height: 9px;
}
.Mobile_phone .class_name {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  padding: 0 10px;
  box-sizing: border-box;
  height: 52%;
}
.Mobile_phone .start {
  width: 167px;
  height: 102px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  position: relative;
  margin-top: 10px;
  background-color: #fff;
}

.Mobile_phone .start img {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 18px;
}
.Mobile_phone .start h5 {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  margin: 12px 0 0 10px;
}
.Mobile_phone .start .commission {
  margin: 10px 10px 0;
  display: flex;
  justify-content: space-between;
}
.Mobile_phone .start .commission p {
  color: #666666;
  font-size: 12px;
}
.Mobile_phone .start .commission span,
.Mobile_phone .start .contains p {
  color: #dd1414;
  font-size: 12px;
}
.Mobile_phone .start .contains {
  margin: 10px 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Mobile_phone .start .contains span {
  font-size: 14px;
  color: #dc0101;
  font-weight: bold;
}

.Mobile_phone .Belonging,
.Mobile_phone .regular {
  width: 100%;
  height: 365px;
  position: absolute;
  left: 0;
  top: 301px;
  display: flex;
}
.Mobile_phone .Belonging .pro {
  width: 40%;
  background-color: #fff;
}
.Mobile_phone .Belonging .pro li,
.Mobile_phone .Belonging .city li {
  width: 100%;
  height: 45px;
  border-top: 1px solid #ececec;
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
  height: 365px;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 301px;
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
  // display: none;
}
.Mobile_phone .opeateing ul li p {
  color: #333333;
  font-size: 12px;
  margin-left: 63px;
  text-align: center;
}
.Mobile_phone .regular .currents,
.Mobile_phone .opeateing .currents {
  background-color: #ececec;
}
// .Mobile_phone .opeateing ul li:hover,
// .Mobile_phone .regular ul li:hover {
//   background-color: #ececec;
// }
.Mobile_phone .opeateing ul li:hover p,
.Mobile_phone .regular ul li:hover p {
  color: #fe5858;
}
// .Mobile_phone .opeateing ul li:hover img,
// .Mobile_phone .regular ul li:hover img {
//   display: block;
// }
.Mobile_phone .regular ul {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  overflow: auto;
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
  // display: none;
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
.Mobile_phone .Montmorillonite .search_filter .more_number ul li {
  width: 68px;
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

.Mobile_phone .Montmorillonite .search_filter .charge {
  width: 286px;
  height: 80px;
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
// .Mobile_phone .Montmorillonite .search_filter .more_number ul li:last-child {
//   margin-right: 142px;
// }
.Mobile_phone .Montmorillonite .search_filter .none ul li:last-child {
  margin-right: 214px;
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
.Mobile_phone .Montmorillonite .search_filter .contract .change .actives {
  color: #ea5656;
}
.Mobile_phone .available {
  width: 137px;
  margin: 46px auto;
  text-align: center;
}
.Mobile_phone .available img {
  width: 100%;
  height: 100px;
}
.Mobile_phone .available p {
  color: #999999;
  font-size: 12px;
  margin-top: 17px;
}
</style>