<template>
  <div class="liji">
    <div class="service">
      <img src="../assets/left.png" alt="" @click="onBack" />
      <p>购买号码</p>
    </div>
    <div class="total">
      <div class="totals">
        <div class="address">
          <ul>
            <li class="number">{{ detailsList.number }}</li>
            <li class="citys">
              <p class="city">{{ detailsList.location }} <span>移动</span></p>
              <p>￥{{ detailsList.sale_price }}</p>
            </li>
          </ul>
        </div>
        <div class="nums">
          <p><span>提示:</span>{{ detailsList.describe }}</p>
        </div>
      </div>
    </div>
    <div
      class="phone"
      @click="onClickBack(detailsList.numberpackage[0].storepackage.id)"
    >
      <p>
        号码套餐
        <span>{{ taocan }}</span>
      </p>
    </div>
    <div class="box">
      <ul>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          预存话费<span style="margin-left: 30px"
            >￥{{ detailsList.contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          话费(含)<span style="margin-left: 35px; color: #666666"
            >￥{{ detailsList.contain_charge }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #ff5757">
          卡费<span style="margin-left: 55px"
            >￥{{ detailsList.sale_price }}</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          登记方式<span style="margin-left: 30px; color: #666666"
            >线上实名制办理</span
          >
        </li>
        <li style="border-bottom: 1px solid #f8f8f8; color: #999999">
          号码合约<span style="margin-left: 30px; color: #666666"
            >{{ detailsList.contract }}/月</span
          >
        </li>
        <li style="color: #999999">
          温馨提示<span style="margin-left: 30px; color: #666666"
            >收到号码后请尽快修改密码</span
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
      <p>合计:</p>
      <span>￥{{ detailsList.sale_price }}</span>
      <!-- <router-link to="/form_orders_path"> -->
      <div class="now" @click="onclickPurchase">立即购买</div>
      <!-- </router-link> -->
    </div>
    <div class="black" v-show="back">
      <div class="consumption">
        <div class="chargetion">
          <img src="../assets/back.png" alt="" @click="onClickTo" />
          <p>套餐资费</p>
        </div>
        <div class="already">
          <img :src="packagDetail.head_image" alt="" />
          <div class="treasure">
            <span>已选:</span>
            <p>{{ packagDetail.package_name }}</p>
          </div>
        </div>
        <div class="traffic">
          <h5>套餐</h5>
          <ul>
            <li
              v-for="(item, index) in detailsList.numberpackage"
              :key="index"
              :class="{ current: taocanXZ == item.storepackage.id }"
              @click="
                onclickTaocanZX(
                  item.storepackage.id,
                  item.storepackage.package_name
                )
              "
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
              <span>￥{{ packagDetail.month_charge }}</span>
            </li>
            <li>
              <p>通话时长</p>
              <span>{{ packagDetail.talk_time }}分钟</span>
            </li>
            <!-- <li>
              <p>通话超出部分</p>
              <span>0.1元/分钟</span>
            </li> -->
            <li>
              <p>套餐流量</p>
              <span>{{ packagDetail.general_flow }}G/月</span>
            </li>
            <!-- <li>
              <p>流量超出部分</p>
              <span>1元/1G</span>
            </li> -->
          </ul>
        </div>
        <div class="instructions">
          <h5>套餐说明</h5>
          <p>{{ packagDetail.package_describe }}</p>
        </div>
        <div class="cancel">
          <p @click="onClickTo">取消</p>
          <span @click="onClickTo">确定</span>
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
      taocan: "",
      taocanXZ: -1,
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
      detailsList: {
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
      packagDetail: {
        id: 1,
        store_id: 1,
        type: 1,
        package_id: "YD00001",
        package_name: "19元小魔卡", //套餐名称
        operator: "中国移动", //运营商
        month_charge: "20", //月消费
        general_flow: "10", //通用流量
        directional_flow: "15", //定向流量
        talk_time: "100", //通话时间
        network_service: "5G套餐", //网络服务
        package_describe: "123和耨哈USVB", //套餐描述
        head_image: "../assets/card.png", //主图
        main_image: "../assets/card.png", //主图list
        detail_image: "../assets/card.png", //详情
        location: "上海市",
        status: 0,
        from: "上海移动", //归属地
      },
    };
  },
  methods: {
    onBack() {
      this.$router.go(-1);
    },
    onClickTo() {
      this.back = false;
    },
    onClickBack(id) {
      console.log(id);
      if (this.back == false) {
        this.$get("/api/order/packageDetail", { id: id }).then((r) => {
          if (r.code == 200) {
            this.packagDetail = r.data;
            console.log(r.data);
          } else if (r.code == 700) {
            this.$router.push("/login");
          } else {
            alert(r.msg);
          }
        });

        this.back = true;
      } else {
        this.back = false;
      }
    },
    onclickTaocanZX(id, name) {
      this.taocanXZ = id;
      this.taocan = name;
      console.log(id);
      //获取套餐详情
      this.$get("/api/order/packageDetail", { id: id }).then((r) => {
        if (r.code == 200) {
          this.packagDetail = r.data;
          console.log(r.data);
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
          goods_id: this.detailsList.id,
          package_id: this.taocanXZ,
          handle_type: 1,
        },
      ];
      this.$store.commit("onCreateTheOrder", obj);
    },
    onclickPurchase() {
      if (this.shdzShow) {
        this.onCreateTheOrders();
        this.$router.push({
          path: "/form_orders_path",
          query: { money: this.detailsList.sale_price },
        });
      } else {
        alert("请填写收货地址");
      }
    },
  },
  created() {
    // 获取手机号信息
    this.$get("/api/number/getNumberInfo", this.$route.query).then((r) => {
      console.log(r);
      if (r.code == 200) {
        this.detailsList = r.data[0][0];
        let numberpackage = r.data[0][0].numberpackage[0];

        this.taocanXZ = numberpackage.storepackage.id;
        this.taocan = numberpackage.storepackage.package_name;
        console.log(this.detailsList);
      } else if (r.code == 700) {
        this.$router.push("/login");
      } else {
        alert(r.msg);
      }
    });

    //获取收货地址
    this.$get("/api/address/getlist", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      console.log(r);
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
  mounted() {},
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
  background-color: #f8f8f8;
  margin: 0;
}
li {
  list-style: none;
}
.liji {
  width: 100%;
  /* height: 100%; */
  padding: 65px 0 60px;
  background-color: #f8f8f8;
}
.liji .current {
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
  position: fixed;
  top: 0;
  left: 0;
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
  height: 140pt;
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
.number {
  font-size: 18px;
  font-weight: 600;
  margin: 21px 0 0 10px;
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
  color: #ff5858;
  font-weight: 600;
}
.nums {
  width: 312px;
  height: 65px;
  background: url("../assets/plpur.png");
  background-size: 312px 65px;
  margin: 0 10px;
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 38px;
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
  position: absolute;
  right: 0;
  top: 0;
  width: 105px;
  height: 44px;
  background-color: #ea5656;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
}
.black {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.black .consumption {
  position: relative;
  width: 330px;
  height: 100%;
  background-color: #fff;
  margin-left: 45px;
  overflow-x: hidden;
  overflow-y: auto;
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
  /* height: 214px; */
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
/* .black .consumption .unlimited ul li:last-child p {
  margin-right: 20px;
} */
/* .black .consumption .unlimited ul li:nth-of-type(3) p {
  margin-right: 20px;
} */
.black .consumption .unlimited ul li:last-child {
  border-bottom: none;
}
.black .consumption .instructions p {
  width: 310px;
  /* height: 63px; */
  background-color: #f5f5f5;
  margin: 15px 10px 0;
  font-size: 13px;
  color: #666666;
  padding: 8px 15px 8px 10px;
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

.endcsname {
  width: 345px;
  height: 68px;
  background-color: #fff;
  margin: 10px 15px 0px;
  display: flex;
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