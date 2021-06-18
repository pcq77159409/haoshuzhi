<template>
  <div class="comfirm_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>支付订单</h4>
    </div>
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
    <div class="store">
      <div class="sizeof">
        <img src="../assets/shop.png" alt="" />
        <p>数智时代专营店</p>
        <img src="../assets/timeRight.png" alt="" />
      </div>
      <div class="number_box">
        <p>{{ arrcoup.orderdetail[0].phonenumber }}</p>
        <span>¥{{ arrcoup.orderdetail[0].sale_price }}</span>
      </div>
      <p class="move_box">
        {{ arrcoup.orderdetail[0].numberinfo.location }}
        {{ arrcoup.orderdetail[0].numberinfo.operator | operators()
        }}<span
          >含话费 ¥{{ arrcoup.orderdetail[0].numberinfo.contain_charge }}</span
        >
      </p>
      <div class="mobiles">
        <p v-if="arrcoup.orderdetail[0].storepackage != null">
          {{ arrcoup.orderdetail[0].storepackage.package_name }}
        </p>
      </div>
      <div class="number_box">
        <p>{{ arrcoup.orderdetail[1].phonenumber }}</p>
        <span>¥{{ arrcoup.orderdetail[1].sale_price }}</span>
      </div>
      <p class="move_box">
        {{ arrcoup.orderdetail[1].numberinfo.location }}
        {{ arrcoup.orderdetail[1].numberinfo.operator | operators() }}
        <span
          >含话费 ¥{{ arrcoup.orderdetail[1].numberinfo.contain_charge }}</span
        >
      </p>
      <div class="mobiles">
        <p v-if="arrcoup.orderdetail[1].storepackage != null">
          {{ arrcoup.orderdetail[1].storepackage.package_name }}
        </p>
        <span
          >需付<i>¥{{ price }}</i></span
        >
      </div>
    </div>
    <div class="rest_name">
      <div class="safeEmail">
        <p>运费</p>
        <span>包邮 <img src="../assets/跳转箭头@2x.png" alt="" /></span>
      </div>
      <div class="safeEmail">
        <p>优惠券</p>
        <span>无可用优惠券 <img src="../assets/跳转箭头@2x.png" alt="" /></span>
      </div>
      <div class="email">
        <p>使用积分</p>
        <h5>当前积分160可抵用1.60元</h5>
        <span>选择抵用</span>
        <el-switch v-model="value" active-color="#ff4949" inactive-color="#ccc">
        </el-switch>
      </div>
      <div class="im_rest">
        <p>卖家留言</p>
        <input
          type="tel"
          placeholder="选填，给卖家留言备注(0/20)"
          maxlength="20"
        />
      </div>
    </div>
    <ul class="thepreferential">
      <li>
        <p>优惠抵用</p>
        <span>￥0</span>
      </li>
      <li>
        <p>积分抵用</p>
        <span>￥0</span>
      </li>
      <li>
        <p>快递费用</p>
        <span>￥0</span>
      </li>
    </ul>
    <div class="sensorbox_init_osd">
      <p>合计:</p>
      <span>￥{{ arrcoup.price }}</span>
      <div class="commit" @click="onClickJump">待支付</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
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
      ],
      shdzShow: false,
      shdzId: null,
      arrcoup: {
        id: 2,
        number: "SJ20210327202033070753171",
        user_id: 6,
        name: "Address",
        mobile: "18895358662",
        province: "浙江省",
        city: "杭州市",
        area: "滨江区",
        address: "浦沿街道哈哈哈哈哈",
        created_at: 1616847633,
        updated_at: 1616847633,
        delivery: "线上配送",
        delivery_time: "就是现在",
        price: "3.00",
        finishtime: null,
        pay_money: null,
        status: 1,
        pay_time: null,
        orderdetail: [
          {
            id: 5,
            order_id: 11,
            goods_id: 1,
            store_id: 1,
            name: "",
            phonenumber: 1,
            card_back: "1112",
            card_front: "1112",
            card_face: "11112",
            package_id: null,
            package_name: null,
            created_at: 1616849212,
            updated_at: 1616849212,
            cardnumber: null,
            user_id: 0,
            numberinfo: {
              contain_charge: 0,
              contract: "0",
              create_time: 1623221092,
              describe: "测试数据1",
              handle_type: 1,
              id: 6239,
              initial_charge: 10000,
              location: "上海市",
              min_charge: 18,
              number: "13801641319",
              operator: "1",
              owner: "cecil",
              owner_phone: "18817744333",
              package_group: "0",
              prepaid_charge: 0,
              purchase_price: "5000.00",
              recommend: 0,
              sale_price: "10000.00",
              status: 1,
              store_id: 1,
              store_phone: 2147483647,
              tag: null,
              update_time: null,
            },
          },
          {
            id: 6,
            order_id: 11,
            goods_id: 2,
            store_id: null,
            name: "",
            phonenumber: 2,
            card_back: "2",
            card_front: "2",
            card_face: "2",
            package_id: null,
            package_name: null,
            created_at: 1616849212,
            updated_at: 1616849212,
            cardnumber: null,
            user_id: 0,
            numberinfo: {
              contain_charge: 0,
              contract: "0",
              create_time: 1623221092,
              describe: "测试数据1",
              handle_type: 1,
              id: 6239,
              initial_charge: 10000,
              location: "上海市",
              min_charge: 18,
              number: "13801641319",
              operator: "1",
              owner: "cecil",
              owner_phone: "18817744333",
              package_group: "0",
              prepaid_charge: 0,
              purchase_price: "5000.00",
              recommend: 0,
              sale_price: "10000.00",
              status: 1,
              store_id: 1,
              store_phone: 2147483647,
              tag: null,
              update_time: null,
            },
          },
        ],
      },
    };
  },
  methods: {
    onClickJump() {
      // this.$router.push("/commerce_payment");
      sessionStorage.setItem("time", +new Date());
      this.$router.push({
        path: "/commerce_payment",
        query: {
          order_id: this.arrcoup.id,
          price: this.arrcoup.price,
          number: this.arrcoup.number,
        },
      });
    },
  },
  mounted() {
    //获取收货地址
    this.$get("/api/address/getlist", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      // console.log(r);
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
    this.$get("/api/order/info", {
      order_id: this.$route.query.order_id,
      user_id: this.$store.state.user_id,
    }).then((val) => {
      console.log(val);
      this.arrcoup = val.data;
      // this.price =
      //   parseInt(this.arrcoup[0][0].sale_price) +
      //   parseInt(this.arrcoup[1][0].sale_price);
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
<style lang="scss" scoped>
.comfirm_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.comfirm_box .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.comfirm_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.comfirm_box .jumplabel h4 {
  font-size: 16px;
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.comfirm_box .endcsname {
  width: 345px;
  height: 68px;
  background-color: #fff;
  margin: 10px auto;
  display: flex;
  border-radius: 4px;
}
.comfirm_box .endcsname img:first-child {
  width: 20px;
  height: 29px;
  margin: 20px 0 0 20px;
}
.comfirm_box .endcsname img:last-child {
  width: 8px;
  height: 14px;
  margin: 29px 0 0 10px;
}
.comfirm_box .endcsname .mercifully {
  width: 80%;
}
.comfirm_box .endcsname .mercifully .parameter {
  display: flex;
}
.comfirm_box .endcsname .mercifully .parameter h3 {
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 15px 0 0 12px;
}
.comfirm_box .endcsname .mercifully .parameter p {
  color: #666666;
  font-size: 12px;
  margin: 17px 0 0 14px;
}
.comfirm_box .endcsname .mercifully .reklameadvice {
  display: flex;
}
.comfirm_box .endcsname .mercifully .reklameadvice p {
  font-size: 12px;
  color: #333333;
  margin: 4px 0 0 12px;
}
.comfirm_box .store {
  width: 345px;
  // height: 140px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 4px;
  padding-bottom: 10px;
}
.comfirm_box .store .sizeof {
  width: 325px;
  height: 35px;
  margin: 0 10px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.comfirm_box .store .sizeof img:first-child {
  width: 13px;
  height: 13px;
  margin-right: 6px;
}
.comfirm_box .store .sizeof img:last-child {
  width: 8px;
  height: 8px;
}
.comfirm_box .store .sizeof p {
  font-size: 12px;
  color: #333333;
  margin-right: 6px;
  margin-bottom: 2px;
  font-weight: 600;
}
.comfirm_box .store .number_box {
  width: 314px;
  margin: 12px 10px 0 21px;
  display: flex;
  justify-content: space-between;
}
.comfirm_box .store .number_box p {
  font-size: 15px;
  color: #333333;
  font-weight: 600;
}
.comfirm_box .store .number_box span {
  color: #ea5656;
  font-size: 14px;
}
.comfirm_box .store .move_box {
  font-size: 12px;
  color: #666666;
  margin: 8px 0 0 21px;
}
.comfirm_box .store .move_box span {
  margin-left: 6px;
}
.comfirm_box .store .mobiles {
  width: 314px;
  height: 16px;
  margin: 10px 10px 0 21px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 10px;
}
.comfirm_box .store .mobiles:last-child {
  border: none;
  padding: 0;
}
.comfirm_box .store .mobiles p {
  font-size: 12px;
  color: #666666;
}
.comfirm_box .store .mobiles span {
  font-size: 12px;
  color: #333333;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.comfirm_box .store .mobiles span i {
  color: #ea5656;
  font-weight: 500;
  margin-left: 6px;
  font-size: 14px;
}
.comfirm_box .rest_name {
  width: 345px;
  height: 178px;
  background-color: #fff;
  margin: 10px auto;
}
.comfirm_box .rest_name .safeEmail {
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
}
.comfirm_box .rest_name .safeEmail p {
  font-size: 12px;
  color: #333333;
}
.comfirm_box .rest_name .safeEmail span {
  font-size: 12px;
  color: #666666;
}
.comfirm_box .rest_name .safeEmail span img {
  width: 6px;
  height: 10px;
  margin-left: 4px;
}
.comfirm_box .rest_name .email {
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  border-radius: 4px;
}
.comfirm_box .rest_name .email p,
.comfirm_box .rest_name .email h5 {
  font-size: 12px;
  color: #333333;
  margin-right: 17px;
  font-weight: normal;
}
.comfirm_box .rest_name .email span {
  font-size: 12px;
  color: #333333;
}
.comfirm_box .rest_name .im_rest {
  width: 325px;
  height: 44px;
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.comfirm_box .rest_name .im_rest p {
  font-size: 12px;
  color: #333333;
  margin-right: 22px;
}
.comfirm_box .rest_name .im_rest input {
  width: 255px;
  color: #999999;
  font-size: 12px;
}
.comfirm_box .thepreferential {
  width: 345px;
  height: 133px;
  margin: 10px auto 15px;
  background-color: #fff;
  border-radius: 4px;
}
.comfirm_box .thepreferential li {
  width: 325px;
  height: 44px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
}
.comfirm_box .thepreferential li:last-child {
  border: none;
}
.comfirm_box .thepreferential li p,
.comfirm_box .thepreferential li span {
  font-size: 12px;
  color: #333333;
}
.comfirm_box .sensorbox_init_osd {
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}
.comfirm_box .sensorbox_init_osd p {
  font-size: 14px;
  color: #2c2c2c;
  font-weight: 600;
  margin-left: 14px;
}
.comfirm_box .sensorbox_init_osd span {
  color: #fe5858;
  font-size: 14px;
  margin-left: 4px;
  font-weight: 600;
}
.comfirm_box .sensorbox_init_osd .commit {
  width: 105px;
  height: 100%;
  background-color: #fe5858;
  color: #fff;
  text-align: center;
  line-height: 44px;
  position: absolute;
  right: 0;
  font-size: 14px;
}
</style>