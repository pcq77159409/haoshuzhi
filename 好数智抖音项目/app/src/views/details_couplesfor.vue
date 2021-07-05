<template>
  <div class="liji">
    <div class="service">
      <img src="../assets/left.png" class="left" @click="onBack" />
      <p>号码详情</p>
      <div class="kf" @click="onClickNickname">
        <img src="../assets/图层 1@2x (1).png" alt="" />
        <span>联系客服</span>
      </div>
    </div>
    <div class="total">
      <div class="totals">
        <div class="address">
          <ul>
            <li class="number">
              {{ copules[0][0].number }}
              <p>情侣</p>
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
    <div class="phone">
      <p>
        号码套餐
        <em v-if="copules[1][0].numberpackage.length != 0">
          <span v-if="copules[1][0].numberpackage[0].storepackage != null">
            <span @click="onClickBack">{{ tjb.package_name }}</span>
          </span>
        </em>
      </p>
      <img src="../assets/形状 20@2x.png" alt="" />
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          话费(含)<span style="margin-left: 9.3333vw; color: #666666"
            >￥{{ copules[0][0].contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 14.666vw"
            >￥{{ copules[0][0].sale_price }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          最低消费<span style="margin-left: 8vw"
            >￥{{ copules[0][0].min_charge }}</span
          >
        </li>

        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码合约<span style="margin-left: 8vw; color: #666666"
            >{{ copules[0][0].contract }}元/月</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 8vw; color: #666666"
            >线上实名制办理</span
          >
        </li>

        <li style="color: #999999">
          温馨提示<span style="margin-left: 8vw; color: #666666"
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
              <p>情侣</p>
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
    <div class="phone">
      <p>
        号码套餐
        <em v-if="copules[0][0].numberpackage.length != 0">
          <span v-if="copules[0][0].numberpackage[0].storepackage != null">
            <span @click="onClickBack">{{ tjb.package_name }}</span>
          </span>
        </em>
      </p>
      <img src="../assets/形状 20@2x.png" alt="" />
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          话费(含)<span style="margin-left: 9.3333vw; color: #666666"
            >￥{{ copules[1][0].contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 14.666vw"
            >￥{{ copules[1][0].sale_price }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          最低消费<span style="margin-left: 8vw"
            >￥{{ copules[1][0].min_charge }}</span
          >
        </li>

        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码合约<span style="margin-left: 8vw; color: #666666"
            >{{ copules[1][0].contract }}元/月</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 8vw; color: #666666"
            >线上实名制办理</span
          >
        </li>

        <li style="color: #999999">
          温馨提示<span style="margin-left: 8vw; color: #666666"
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
        <span>￥{{ price }}</span>
      </div>
      <div class="sc" @click="onclickCollection" ref="shou">收藏</div>
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
              {{ pcq.package_name }}
            </p>
          </div>
        </div>
        <div class="traffic">
          <h5>套餐</h5>
          <ul v-if="copules[0][0].numberpackage[0].storepackage != null">
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
              <span>￥{{ pcq.month_charge }}</span>
            </li>
            <li>
              <p>通话时长</p>
              <span>{{ pcq.talk_time }}分钟</span>
            </li>
            <!-- <li>
              <p>通话超出部分</p>
              <span>0.1元/分钟</span>
            </li> -->
            <li>
              <p>套餐流量</p>
              <span>{{ pcq.general_flow }}G/月</span>
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
            {{ pcq.package_describe }}
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
        <h4>拨打电话</h4>
        <p>18817744333</p>
        <div class="measurements">
          <p @click="onClickNickname">取消</p>
          <span @click="onClickSure">确定</span>
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
      shdz: [
        {
          id: 1,
          uid: 6,
          name: "测试",
          mobile: "18895358663",
          province: "浙江省",
          city: "杭州市",
          area: "滨江区",
          address: null,
          created_at: null,
          updated_at: null,
        },
        {
          id: 2,
          uid: 6,
          name: "测试",
          mobile: "18895358662",
          province: "浙江省",
          city: "杭州市",
          area: "滨江区",
          address: "浦沿街道哈哈哈哈哈",
          created_at: null,
          updated_at: null,
        },
        {
          id: 3,
          uid: 6,
          name: "姓名",
          mobile: "18798989898",
          province: "安徽省",
          city: "合肥市",
          area: "蜀山区",
          address: "黄山路1号",
          created_at: 1614850523,
          updated_at: null,
        },
        {
          id: 5,
          uid: 6,
          name: "姓名",
          mobile: "18798989898",
          province: "安徽省",
          city: "合肥市",
          area: "蜀山区",
          address: "黄山路1号",
          created_at: 1615189184,
          updated_at: 1615189184,
        },
      ],
      shdzShow: false,
      shdzId: null,
      copules: [
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
      taocanXZ: "",
      pcq: {},
      tjb: {},
      price: null,
      order_id: null,
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
        this.$get("/api/number/getNumberInfo", this.$route.query).then(
          (val) => {
            console.log(val);
            this.copules = val.data;
            this.price =
              parseInt(this.copules[0][0].sale_price) +
              parseInt(this.copules[1][0].sale_price);
          }
        );
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
          this.pcq = this.copules[0][0].numberpackage[0].stroepackage;
          this.tjb = this.copules[1][0].numberpackage[0].stroepackage;
          this.pcq = r.data;
          this.tjb = r.data;
          console.log(this.pcq);
        } else if (r.code == 700) {
          this.$router.push("/login");
        } else {
          alert(r.msg);
        }
      });
    },
    onCreateTheOrders() {
      let obj = this.$store.state.createTheOrder;
      obj.user_id = localStorage.getItem("user-id");
      obj.delivery = "送货上门";
      obj.delivery_time = "不限时间";
      obj.address_id = this.shdzId;
      obj.buyer = [
        {
          goods_id: this.copules[0][0].id,
          package_id: this.taocanXZ,
          handle_type: 1,
        },
        {
          goods_id: this.copules[1][0].id,
          package_id: this.taocanXZ,
          handle_type: 1,
        },
      ];
      this.$post("/api/order/create", obj).then((val) => {
        this.order_id = val.data.id;
        console.log(val.data.id);
        let order = this.$route.query;
        order.order_id = this.order_id;
        order.goods_id1 = obj.buyer[0].goods_id;
        order.goods_id2 = obj.buyer[1].goods_id;

        if (this.shdzShow) {
          this.$router.push({
            path: "/form_orders_path_couples",
            query: order,
          });
        } else {
          alert("请填写收货地址");
        }
      });
      this.$store.commit("onCreateTheOrder", obj);
    },
    onClickFarm() {
      this.onCreateTheOrders();
    },
    onclickCollection() {
      //收藏
      this.copules.forEach((val) => {
        this.$get("/api/number/collectnumber", {
          user_id: localStorage.getItem("user-id"),
          number_id: val[0].id,
        }).then((r) => {
          console.log(r);
          if (r.code == 200) {
            alert("收藏成功");
          } else {
            alert(r.msg);
          }
        });
      });
      this.$refs.shou.style = "background:#b0b0b0";
      setTimeout(() => {
        this.$refs.shou.style = "background:#bdbdbd";
      }, 360);
    },
    onClickSure() {
      window.location.href = "tel:18817744333";
    },
  },
  created() {
    this.$get("/api/number/getNumberInfo", this.$route.query).then((val) => {
      console.log(val);
      this.copules = val.data;
      this.price =
        parseInt(this.copules[0][0].sale_price) +
        parseInt(this.copules[1][0].sale_price);
    });
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
  // mounted() {},
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

<style lang="less" scoped>
@import "../assets/css/base.less";
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
.sc {
  width: 104.5 / @vw;
  height: 100%;
  background-color: #bdbdbd;
  color: #fff;
  font-size: 14 / @vw;
  text-align: center;
  line-height: 44 / @vw;
}
.kf {
  position: absolute;
  right: 0;
  // top: 50%;
  display: flex;
  align-items: center;
}
.kf img {
  width: 18 / @vw;
  height: 14 / @vw;
  margin-right: 6 / @vw;
}
.kf span {
  display: block;
  font-size: 14 / @vw;
  color: #ffffff;
  margin-right: 12 / @vw;
}
li {
  list-style: none;
}
.liji {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  overflow: auto;
}
.current {
  color: #fff !important;
  background-color: #ea5656 !important;
}
.box {
  width: 345 / @vw;
  height: 186 / @vw*1.3;
  border-radius: 4 / @vw;
  background-color: #fff;
  margin: 10 / @vw auto 0;
}
.box ul li {
  line-height: 40 / @vw;
  font-size: 12 / @vw;
  margin: auto 15 / @vw;
}

.endcsname {
  width: 345 / @vw;
  height: 72 / @vw;
  background-color: #fff;
  margin: 15 / @vw 15 / @vw 0 / @vw;
  display: flex;
  align-items: center;
}
.endcsname img:first-child {
  width: 20 / @vw;
  height: 29 / @vw;
  margin: 0 / @vw 0 0 20 / @vw;
}
.endcsname img:last-child {
  width: 8 / @vw;
  height: 14 / @vw;
  margin: 0 / @vw 0 0 10 / @vw;
}
.endcsname .mercifully {
  width: 80%;
}
.endcsname .mercifully .parameter {
  display: flex;
  margin-top: 6 / @vw;
}
.endcsname .mercifully .parameter h3 {
  color: #333333;
  font-size: 14 / @vw;
  font-weight: 500;
  margin-left: 12 / @vw;
}
.endcsname .mercifully .parameter p {
  color: #666666;
  font-size: 14 / @vw;
  margin-left: 14 / @vw;
}
.endcsname .mercifully .reklameadvice {
  display: flex;
  margin-top: 6 / @vw;
}
.endcsname .mercifully .reklameadvice p {
  font-size: 12 / @vw;
  color: #333333;
  margin: 4 / @vw 0 0 12 / @vw;
}
.phone {
  width: 345 / @vw;
  height: 44 / @vw;
  margin-bottom: 10 / @vw;
  border-radius: 4 / @vw;
  background-color: #fff;
  margin: 15 / @vw auto;
  line-height: 44 / @vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.phone img {
  width: 7 / @vw;
  height: 9 / @vw;
  margin-right: 10 / @vw;
}
.phone p {
  margin: auto 15 / @vw;
  color: #333333;
  font-size: 14 / @vw;
  font-weight: bold;
}
.phone p span {
  margin-left: 15 / @vw;
}
.service {
  width: 100%;
  height: 58 / @vw;
  background: #ea5656;
  display: flex;
  align-items: center;
  position: relative;
}
.service p {
  font-size: 16 / @vw;
  color: white;
  font-family: PingFang-SC-Medium;
  font-weight: Medium;
  line-height: 65 / @vw;
  text-align: center;
  margin-left: 132 / @vw;
}
.service .left {
  width: 10 / @vw;
  height: 16 / @vw;
  margin-left: 15 / @vw;
}

.totals {
  width: 345 / @vw;
  height: 164 / @vw;
  border-radius: 4 / @vw;
  background-color: #fff;
}
.total {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10 / @vw;
  justify-content: space-evenly;
}
.facingcouples {
  margin-top: 20 / @vw;
}
.number {
  font-size: 18 / @vw;
  font-weight: 600;
  margin: 14 / @vw 0 0 10 / @vw;
  display: flex;
  align-items: center;
}
.number p {
  width: 26 / @vw * 1.3;
  height: 13 / @vw * 1.3;
  background: url("../assets/矩形 3@2x.png") no-repeat;
  background-size: 26 / @vw*1.3 13 / @vw*1.3;
  text-align: center;
  font-size: 12 / @vw;
  color: #fff;
  margin-left: 10 / @vw;
}
.city {
  font-size: 13 / @vw;
  margin-left: 10 / @vw;
  color: #999999;
}
.city span {
  margin-left: 10 / @vw;
}
.citys {
  display: flex;
  justify-content: space-between;
  margin: 10 / @vw auto;
}
.citys p:last-child {
  margin-right: 10 / @vw;
  font-size: 16 / @vw;
  color: #ff5757;
  font-weight: 600;
}
.nums {
  width: 312 / @vw;
  height: 65 / @vw;
  background: url("../assets/plpur.png");
  background-size: 312 / @vw 65 / @vw;
  margin: 10 / @vw auto 0;
}
.nums p {
  font-size: 12 / @vw;
  margin: 10 / @vw 10 / @vw;
  padding-top: 10 / @vw;
  color: #666666;
}
.nums span {
  margin-right: 10 / @vw;
  font-weight: 600;
  color: #ff0000;
}
.bottom {
  width: 100%;
  height: 44 / @vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 38 / @vw;
  justify-content: space-between;
}
.bottom p {
  font-size: 14 / @vw;
  color: #2c2c2c;
  margin: 0 8 / @vw 0 14 / @vw;
}
.bottom span {
  font-size: 14 / @vw;
  color: #dc0101;
}
.bottom .now {
  width: 105 / @vw;
  height: 44 / @vw;
  background-color: #ea5656;
  color: #fff;
  font-size: 14 / @vw;
  text-align: center;
  line-height: 44 / @vw;
}
.bottom .tan {
  display: flex;
  align-items: center;
  width: 166 / @vw;
  height: 100%;
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
  width: 330 / @vw;
  height: 100%;
  background-color: #fff;
  margin-left: 45 / @vw;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}
.black .consumption .chargetion {
  width: 100%;
  height: 34 / @vw;
  display: flex;
  align-items: center;
  border-bottom: 1 / @vw solid #d2d2d2;
}
.black .consumption .chargetion img {
  width: 7 / @vw;
  height: 13 / @vw;
  margin: 0 10 / @vw;
}
.black .consumption .chargetion p {
  color: #333333;
  font-size: 12 / @vw;
}
.black .consumption .already {
  width: 100%;
  height: 76 / @vw;
  display: flex;
  align-items: center;
  border-bottom: 1 / @vw solid #d2d2d2;
}
.black .consumption .already img {
  width: 50 / @vw;
  height: 50 / @vw;
  margin: 0 10 / @vw;
}
.black .consumption .already .treasure span {
  font-size: 12 / @vw;
  color: #666666;
  margin-bottom: 6 / @vw;
  display: inline-block;
}
.black .consumption .already .treasure p {
  color: #333333;
  font-size: 13 / @vw;
  margin-bottom: 4 / @vw;
}
.black .consumption .traffic {
  width: 100%;
}
.black .consumption .traffic h5,
.black .consumption .unlimited h5,
.black .consumption .instructions h5 {
  color: #666666;
  font-size: 12 / @vw;
  margin: 16 / @vw 0 0 10 / @vw;
}
.black .consumption .traffic ul {
  width: 253 / @vw;
  margin: 15 / @vw 0 0 8 / @vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
}
.black .consumption .traffic ul li {
  background-color: #f7f7f7;
  padding: 8 / @vw 15 / @vw;
  box-sizing: border-box;
  font-size: 12 / @vw;
  color: #666666;
  margin: 0 10 / @vw 10 / @vw 0;
  border-radius: 4 / @vw;
}
.black .consumption .unlimited {
  width: 100%;
}
.black .consumption .unlimited ul {
  width: 310 / @vw;
  background-color: #f8f8f8;
  margin: 15 / @vw 10 / @vw 0;
  padding: 0 10 / @vw;
  box-sizing: border-box;
}
.black .consumption .unlimited ul li {
  display: flex;
  border-bottom: 1 / @vw solid #d2d2d2;
  height: 42 / @vw;
  align-items: center;
}
.black .consumption .unlimited ul li p {
  color: #666666;
  font-size: 13 / @vw;
  margin-right: 44 / @vw;
}
.black .consumption .unlimited ul li:first-child span {
  color: #ff0000;
}
.black .consumption .unlimited ul li span {
  color: #666666;
  font-size: 13 / @vw;
}
.black .consumption .unlimited ul li:last-child {
  border-bottom: none;
}
.black .consumption .instructions p {
  width: 310 / @vw;
  background-color: #f5f5f5;
  margin: 15 / @vw 10 / @vw 0;
  font-size: 13 / @vw;
  color: #666666;
  padding: 8 / @vw 15 / @vw 15 / @vw 10 / @vw;
  box-sizing: border-box;
  line-height: 24 / @vw;
}
.black .consumption .cancel {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 45 / @vw;
  display: flex;
  text-align: center;
  line-height: 45 / @vw;
  margin-top: 21 / @vw;
}
.black .consumption .cancel p {
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 14 / @vw;
  color: #666666;
}
.black .consumption .cancel span {
  width: 50%;
  height: 100%;
  background-color: #ea5656;
  font-size: 14 / @vw;
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
  width: 267 / @vw;
  height: 124 / @vw;
  background-color: #fff;
  border-radius: 10 / @vw;
  text-align: center;
}
.layered .art_publ_time h4 {
  font-size: 12 / @vw;
  color: #333333;
  font-weight: 500;
  margin-top: 30 / @vw;
}
.layered .art_publ_time p {
  font-size: 12 / @vw;
  color: #333333;
  margin: 6 / @vw 0 10 / @vw 0;
}
.layered .art_publ_time .measurements {
  width: 100%;
  height: 44 / @vw;
  border-top: 1 / @vw solid #d2d2d2;
  display: flex;
  // margin-top: 29 / @vw;
  justify-content: center;
  line-height: 44 / @vw;
}
.layered .art_publ_time .measurements p {
  width: 50%;
  height: 100%;
  border-right: 1 / @vw solid #d2d2d2;
  color: #0443d1;
  font-size: 14 / @vw;
  margin: 0;
}
.layered .art_publ_time .measurements span {
  width: 50%;
  height: 100%;
  color: #0443d1;
  font-size: 14 / @vw;
}
.endcsname.endcsname_sh img:nth-of-type(1) {
  width: 20 / @vw;
  height: 29 / @vw;
  margin: 20 / @vw 15 / @vw 0 20 / @vw;
}
.endcsname.endcsname_sh img:nth-of-type(2) {
  margin: 25 / @vw 15 / @vw 0 20 / @vw;
}
.endcsname.endcsname_sh p {
  flex: 1;
  line-height: 68 / @vw;
  font-size: 14 / @vw;
}
</style>