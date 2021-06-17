<template>
  <div class="liji">
    <div class="service">
      <img src="../assets/left.png" alt="" @click="onBack" />
      <p>号码详情</p>
    </div>
    <div class="total">
      <div class="totals">
        <div class="address">
          <ul>
            <li class="number">
              {{ copules[0][0].number }}
              <!-- <img src="../assets/222.png" alt="" @click="onClickNickname" /> -->
            </li>
            <li class="citys">
              <p class="city">
                {{ copules[0][0].location }}
                <span>{{ copules[0][0].operator | operators() }}</span>
              </p>
              <p>￥{{ copules[0][0].sale_price }}</p>
            </li>
          </ul>
        </div>
        <div class="nums">
          <p><span>提示:</span>{{ copules[0][0].describe }}</p>
        </div>
      </div>
    </div>
    <div class="phone" @click="onClickBack">
      <p>
        号码套餐
        <span>{{
          copules[0][0].numberpackage[0].storepackage.package_name
        }}</span>
      </p>
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          预存话费<span style="margin-left: 30px"
            >￥{{ copules[0][0].prepaid_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          话费(含)<span style="margin-left: 35px; color: #666666"
            >￥{{ copules[0][0].contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 55px"
            >￥{{ copules[0][0].sale_price }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 30px; color: #666666"
            >线上实名制办理</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码合约<span style="margin-left: 30px; color: #666666"
            >{{ copules[0][0].contract }}元/月</span
          >
        </li>
        <li style="color: #999999">
          温馨提示<span style="margin-left: 30px; color: #666666"
            >收到号码后请尽快修改号码</span
          >
        </li>
      </ul>
    </div>
    <div class="total facingcouples">
      <div class="totals">
        <div class="address">
          <ul>
            <li class="number">
              {{ copules[1][0].number }}
              <!-- <img src="../assets/222.png" alt="" @click="onClickNickname" /> -->
            </li>
            <li class="citys">
              <p class="city">
                {{ copules[1][0].location }}
                <span>{{ copules[1][0].operator | operators() }}</span>
              </p>
              <p>￥{{ copules[1][0].sale_price }}</p>
            </li>
          </ul>
        </div>
        <div class="nums">
          <p><span>提示:</span>{{ copules[1][0].describe }}</p>
        </div>
      </div>
    </div>
    <div class="phone" @click="onClickBack">
      <p>号码套餐 <span>移动花卡宝藏版29元套餐</span></p>
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          预存话费<span style="margin-left: 30px"
            >￥{{ copules[1][0].prepaid_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          花费(含)<span style="margin-left: 35px; color: #666666"
            >￥{{ copules[1][0].contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 55px"
            >￥{{ copules[1][0].sale_price }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 30px; color: #666666"
            >线上实名制办理</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码合约<span style="margin-left: 30px; color: #666666"
            >{{ copules[1][0].contract }}元/月</span
          >
        </li>
        <li style="color: #999999">
          温馨提示<span style="margin-left: 30px; color: #666666"
            >收到号码后请尽快修改号码</span
          >
        </li>
      </ul>
    </div>
    <!-- 没有收货地址 -->
    <div
      class="endcsname endcsname_sh"
      v-show="shdzShow == false"
      @click="$router.push('/goAddress')"
    >
      <img src="../assets/tjshdz.png" alt="" />
      <p>添加收货地址</p>
      <img src="../assets/跳转箭头@2x.png" alt="" />
    </div>
    <!-- 有默认的收货地址 -->
    <div
      class="endcsname"
      v-show="shdzShow == true"
      @click="$router.push('/goAddress')"
    >
      <img src="../assets/ding.png" alt="" />
      <div class="mercifully">
        <div class="parameter">
          <h3>{{ shdz.name }}</h3>
          <p>{{ shdz.mobile }}</p>
        </div>
        <div class="reklameadvice">
          <p>
            收货地址:
            <span
              >{{ shdz.province }} {{ shdz.city }} {{ shdz.area }}
              <span v-show="shdz.address != null || shdz.address != 'null'">{{
                shdz.address
              }}</span></span
            >
          </p>
        </div>
      </div>
      <img src="../assets/跳转箭头@2x.png" alt="" />
    </div>
    <div class="bottom">
      <div class="tan">
        <p>合计:</p>
        <span>￥{{ copules[0][0].sale_price }}</span>
      </div>
      <div class="now" @click="onClickFarm()">提交订单</div>
    </div>
    <div class="black" v-show="back">
      <div class="consumption">
        <div class="chargetion">
          <img src="../assets/back.png" alt="" @click="onClickTo" />
          <p>套餐资费</p>
        </div>
        <div class="already">
          <img src="../assets/cards.png" alt="" />
          <div class="treasure">
            <span>已选:</span>
            <p>
              {{ copules[0][0].numberpackage[0].storepackage.package_name }}
            </p>
          </div>
        </div>
        <div class="traffic">
          <h5>套餐</h5>
          <ul>
            <li
              v-for="(item, index) in copules[0][0].numberpackage"
              :key="index"
              @click="
                onclickTaocanZX(
                  item.storepackage.id,
                  item.storepackage.package_name
                )
              "
              :class="{ current: taocanXZ == item.storepackage.id }"
            >
              {{ item.storepackage.package_name }}
            </li>
            <!-- <li>19元移动花卡宝藏版</li>
            <li>19元移动花卡宝藏版</li>
            <li>18元小魔卡</li>
            <li>58元流量+语音畅享套餐</li> -->
          </ul>
        </div>
        <div class="unlimited">
          <h5>套餐内容</h5>
          <ul>
            <li>
              <p>套餐月费</p>
              <span
                >￥{{
                  copules[0][0].numberpackage[0].storepackage.month_charge
                }}</span
              >
            </li>
            <li>
              <p>通话时长</p>
              <span
                >{{
                  copules[0][0].numberpackage[0].storepackage.talk_time
                }}分钟</span
              >
            </li>
            <!-- <li>
              <p>通话超出部分</p>
              <span>0.1元/分钟</span>
            </li> -->
            <li>
              <p>套餐流量</p>
              <span
                >{{
                  copules[0][0].numberpackage[0].storepackage.general_flow
                }}G/月</span
              >
            </li>
            <!-- <li>
              <p>流量超出部分</p>
              <span>1元/1G</span>
            </li> -->
          </ul>
        </div>
        <div class="instructions">
          <h5>套餐说明</h5>
          <p>
            {{ copules[0][0].numberpackage[0].storepackage.package_describe }}
          </p>
        </div>
        <div class="cancel">
          <p @click="onClickTo">取消</p>
          <span @click="onClickTo">确定</span>
        </div>
      </div>
    </div>
    <div class="layered" v-show="metric">
      <div class="art_publ_time">
        <h4>请问您是否确认删除此号码?</h4>
        <div class="measurements">
          <p @click="onClickNickname">取消</p>
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      back: false,
      metric: false,
      shdzShow: false,
      shdzId: null,
      copules: [],
      taocanXZ: -1,
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onClickTo() {
      this.back = false;
    },
    onClickBack() {
      if (this.back == false) {
        this.back = true;
      } else {
        this.back = false;
      }
    },
    onClickNickname() {
      if (this.metric == false) {
        this.metric = true;
      } else {
        this.metric = false;
      }
    },
    onclickTaocanZX(id, name) {
      this.taocanXZ = id;
      this.taocan = name;
      //获取套餐详情
      this.$get("/api/order/packageDetail", { id: id }).then((r) => {
        if (r.code == 200) {
          console.log(this.copules[0][0].numberpackage.stroepackage);
          this.copules[0][0].numberpackage.stroepackage = r.data;
          console.log(this.copules[0][0].numberpackage.stroepackage);
        } else if (r.code == 700) {
          this.$router.push("/login");
        } else {
          alert(r.msg);
        }
      });
    },
    onClickFarm() {
      console.log(this.copules);
      // this.$router.push('/details_couplesfor')
      this.$router.push({
        path: "/form_orders_path_couples",
        query: this.$route.query,
      });
    },
  },
  created() {
    //获取收货地址
    this.$get("/api/address/getlist", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      if (r.code == 200) {
        if (r.data.length != 0) {
          this.shdzShow = true;
          r.data.forEach((val) => {
            if (val.is_default == 1) {
              this.shdz = val;
            } else {
              this.shdz = r.data[0];
            }
          });
          this.shdzId = this.shdz.id;
        } else {
          this.shdzShow = false;
        }
      } else {
        alert(r.msg);
      }
    });
  },
  mounted() {
    this.$get("/api/number/getNumberInfo", this.$route.query).then((val) => {
      this.copules = val.data;
    });
  },
  filters: {
    operators(val) {
      let str = "";
      if (val == 1) {
        str = "移动号码";
      } else if (val == 2) {
        str = "联通号码";
      } else if (val == 3) {
        str = "电信号码";
      } else if (val == 4) {
        str = "虚拟号码";
      }
      return str;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
}
li {
  list-style: none;
}
.liji {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.current {
  color: #fff !important;
  background-color: #ea5656 !important;
}
.box {
  width: 250pt;
  height: 180pt;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin: 10px auto;
}
.box ul li {
  line-height: 40px;
  font-size: 13px;
  margin: auto 15px;
}
.endcsname {
  width: 334px;
  height: 68px;
  background-color: #fff;
  margin: 10px auto;
  display: flex;
  border-radius: 4px;
}

.endcsname img:first-child {
  width: 20px;
  height: 29px;
  margin: 20px 0 0 20px;
}
.endcsname img:last-child {
  width: 8px;
  height: 14px;
  margin: 29px 0 0 10px;
}
.endcsname .mercifully {
  width: 80%;
}
.endcsname .mercifully .parameter {
  display: flex;
}
.endcsname .mercifully .parameter h3 {
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 15px 0 0 12px;
}
.endcsname .mercifully .parameter p {
  color: #666666;
  font-size: 12px;
  margin: 17px 0 0 14px;
}
.endcsname .mercifully .reklameadvice {
  display: flex;
}
.endcsname .mercifully .reklameadvice p {
  font-size: 12px;
  color: #333333;
  margin: 4px 0 0 12px;
}
.phone {
  width: 250pt;
  height: 40pt;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin: 10px auto;
  line-height: 40pt;
}
.phone p {
  margin: auto 15px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
}
.phone p span {
  margin-left: 15px;
}
.service {
  width: 100%;
  height: 65px;
  background: #ea5656;
  display: flex;
  align-items: center;
}
.service p {
  font-size: 16px;
  color: white;
  font-family: PingFang-SC-Medium;
  font-weight: Medium;
  line-height: 65px;
  text-align: center;
  margin-left: 132px;
}
.service img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}

.totals {
  width: 250pt;
  height: 172px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
}
.total {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-evenly;
}
.facingcouples {
  margin-top: 30px;
}
.number {
  font-size: 18px;
  font-weight: 600;
  margin: 21px 0 0 10px;
  display: flex;
  justify-content: space-between;
}
.number img {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.city {
  font-size: 13px;
  margin-left: 10px;
}
.city span {
  margin-left: 10px;
}
.citys {
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
}
.citys p:last-child {
  margin-right: 10px;
  font-size: 16px;
  color: #ff5757;
  font-weight: 600;
}
.nums {
  width: 312px;
  height: 65px;
  background: url("../assets/plpur.png");
  background-size: 312px 65px;
  margin: 10px 10px 0;
}
.nums p {
  font-size: 12px;
  margin: 10px 10px;
  padding-top: 10px;
  color: #666666;
}
.nums span {
  margin-right: 10px;
  font-weight: 600;
  color: #ff0000;
}
.bottom {
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 38px;
  justify-content: space-between;
}
.bottom p {
  font-size: 14px;
  color: #2c2c2c;
  margin: 0 8px 0 14px;
}
.bottom span {
  font-size: 14px;
  color: #dc0101;
}
.bottom .now {
  width: 105px;
  height: 44px;
  background-color: #ea5656;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
}
.bottom .tan {
  display: flex;
  align-items: center;
}
.black {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.black .consumption {
  width: 330px;
  height: 100%;
  background-color: #fff;
  margin-left: 45px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}
.black .consumption .chargetion {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
}
.black .consumption .chargetion img {
  width: 7px;
  height: 13px;
  margin: 0 10px;
}
.black .consumption .chargetion p {
  color: #333333;
  font-size: 12px;
}
.black .consumption .already {
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
}
.black .consumption .already img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
}
.black .consumption .already .treasure span {
  font-size: 12px;
  color: #666666;
  margin-bottom: 6px;
  display: inline-block;
}
.black .consumption .already .treasure p {
  color: #333333;
  font-size: 13px;
  margin-bottom: 4px;
}
.black .consumption .traffic {
  width: 100%;
}
.black .consumption .traffic h5,
.black .consumption .unlimited h5,
.black .consumption .instructions h5 {
  color: #666666;
  font-size: 12px;
  margin: 16px 0 0 10px;
}
.black .consumption .traffic ul {
  width: 253px;
  margin: 15px 0 0 8px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
}
.black .consumption .traffic ul li {
  background-color: #f7f7f7;
  padding: 8px 15px;
  box-sizing: border-box;
  font-size: 12px;
  color: #666666;
  margin: 0 10px 10px 0;
  border-radius: 4px;
}
.black .consumption .unlimited {
  width: 100%;
}
.black .consumption .unlimited ul {
  width: 310px;
  background-color: #f8f8f8;
  margin: 15px 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
}
.black .consumption .unlimited ul li {
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  height: 42px;
  align-items: center;
}
.black .consumption .unlimited ul li p {
  color: #666666;
  font-size: 13px;
  margin-right: 44px;
}
.black .consumption .unlimited ul li:first-child span {
  color: #ff0000;
}
.black .consumption .unlimited ul li span {
  color: #666666;
  font-size: 13px;
}
.black .consumption .unlimited ul li:last-child {
  border-bottom: none;
}
.black .consumption .instructions p {
  width: 310px;
  background-color: #f5f5f5;
  margin: 15px 10px 0;
  font-size: 13px;
  color: #666666;
  padding: 8px 15px 15px 10px;
  box-sizing: border-box;
  line-height: 24px;
}
.black .consumption .cancel {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 45px;
  display: flex;
  text-align: center;
  line-height: 45px;
  margin-top: 21px;
}
.black .consumption .cancel p {
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 14px;
  color: #666666;
}
.black .consumption .cancel span {
  width: 50%;
  height: 100%;
  background-color: #ea5656;
  font-size: 14px;
  color: #fff;
}
.layered {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layered .art_publ_time {
  width: 267px;
  height: 124px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
}
.layered .art_publ_time h4 {
  font-size: 12px;
  color: #333333;
  font-weight: 500;
  margin-top: 34px;
}
.layered .art_publ_time .measurements {
  width: 100%;
  height: 44px;
  border-top: 1px solid #d2d2d2;
  display: flex;
  margin-top: 29px;
  justify-content: center;
  line-height: 44px;
}
.layered .art_publ_time .measurements p {
  width: 50%;
  height: 100%;
  border-right: 1px solid #d2d2d2;
  color: #0443d1;
  font-size: 14px;
}
.layered .art_publ_time .measurements span {
  width: 50%;
  height: 100%;
  color: #0443d1;
  font-size: 14px;
}
.endcsname.endcsname_sh img:nth-of-type(1) {
  width: 20px;
  height: 29px;
  margin: 20px 15px 0 20px;
}
.endcsname.endcsname_sh img:nth-of-type(2) {
  margin: 25px 15px 0 20px;
}
.endcsname.endcsname_sh p {
  flex: 1;
  line-height: 68px;
  font-size: 14px;
}
</style>