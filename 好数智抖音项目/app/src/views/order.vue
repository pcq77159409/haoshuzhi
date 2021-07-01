<template>
  <div class="yyyyy">
    <div class="order">
      <div style="display: flex" class="jian">
        <img
          src="../assets/left.png"
          alt=""
          @click="$router.push('/commons/my')"
        />
        <p>全部订单</p>
      </div>
    </div>
    <div class="tabr">
      <el-tabs v-model="activenamed" @tab-click="handleClick" :stretch="true">
        <!-- 全部订单 -->
        <el-tab-pane label="全部" name="second">
          <div
            class="ordersed"
            @click="onclickSecond(item.status, item.id)"
            v-for="(item, index) in getDataList"
            :key="index"
          >
            <!-- $router.push({ path: '/paid', query: { id: item.id } }) -->
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">
                {{ item.status | getStatus() }}
                <!-- <span class="endtime">剩余时间23:58:45</span> -->
              </p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">{{ item.orderdetail[0].phonenumber }}</p>
              <p class="yidong">
                {{ item.orderdetail[0].numberinfo.location }}
              </p>
              <p class="spend">
                含话费: {{ item.orderdetail[0].numberinfo.contain_charge }}元
              </p>
              <p class="ordertimed">下单时间 : {{ item.updated_at }}</p>
              <p>
                <span class="needsed" v-if="item.status == 1"
                  >需付:
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
                <span class="needsed" v-else
                  >实付:
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
              </p>
              <div class="moneyed">
                <p
                  class="payment"
                  v-if="item.status == 1"
                  @click.stop="onclickFK(item.id, item.price, item.number)"
                >
                  付款
                </p>
                <p
                  class="payment"
                  v-if="item.status == 2"
                  @click.stop="onclickXGDZ"
                >
                  修改地址
                </p>
                <p
                  class="payment"
                  v-if="item.status == 3"
                  @click.stop="onclickCKWL(item.express_number)"
                >
                  查看物流
                </p>
                <p
                  class="payment"
                  v-if="item.status == 4||item.status==5"
                  @click.stop="onclickSCDD(item.id)"
                >
                  删除订单
                </p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 待付款订单 -->
        <el-tab-pane label="待付款" name="first">
          <div
            class="ordersed"
            @click="$router.push({ path: '/paid', query: { id: item.id } })"
            v-for="(item, index) in getDataList"
            :key="index"
          >
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">
                待付款
                <!-- <span class="endtime">剩余时间23:58:45</span> -->
              </p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">{{ item.orderdetail[0].phonenumber }}</p>
              <p class="yidong">
                {{ item.orderdetail[0].numberinfo.location }}
              </p>
              <p class="spend">
                含话费: {{ item.orderdetail[0].numberinfo.contain_charge }}元
              </p>
              <p class="ordertimed">下单时间 : {{ item.updated_at }}</p>
              <p>
                <span class="needsed"
                  >需付:
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
              </p>
              <div class="moneyed">
                <p
                  class="payment"
                  @click.stop="onclickFK(item.id, item.price, item.number)"
                >
                  付款
                </p>
              </div>
            </div>
            <div class="inform">
              <p>支付剩余时间</p>
              <span>{{ min }} ：{{ sec }}</span>
            </div>
          </div>
        </el-tab-pane>
        <!-- 待发货订单 -->
        <el-tab-pane label="待发货" name="third">
          <div
            class="ordersed"
            @click="$router.push({ path: '/deta', query: { id: item.id } })"
            v-for="(item, index) in getDataList"
            :key="index"
          >
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">买家已付款</p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">{{ item.orderdetail[0].phonenumber }}</p>
              <p class="yidong">
                {{ item.orderdetail[0].numberinfo.location }}
              </p>
              <p class="spend">
                含话费:
                {{ item.orderdetail[0].numberinfo.contain_charge }}元
              </p>
              <p class="ordertimed">下单时间： {{ item.updated_at }}</p>
              <p>
                <span class="needsed"
                  >实付
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
              </p>
              <div class="moneyed">
                <p class="moneyeds">修改地址</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 待收货订单 -->
        <el-tab-pane label="待收货" name="fourth">
          <div
            class="ordersed"
            @click="$router.push({ path: '/receipt', query: { id: item.id } })"
            v-for="(item, index) in getDataList"
            :key="index"
          >
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">卖家已发货</p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">{{ item.orderdetail[0].phonenumber }}</p>
              <p class="yidong">
                {{ item.orderdetail[0].numberinfo.location }}
              </p>
              <p class="spend">
                含话费: {{ item.orderdetail[0].numberinfo.contain_charge }}元
              </p>
              <p class="ordertimed">下单时间：{{ item.updated_at }}</p>
              <p>
                <span class="needsed"
                  >实付
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
              </p>
              <div
                class="moneyed"
                @click.stop="onclickCKWL(item.express_number)"
              >
                <p class="moneyeds">查看物流</p>
              </div>
            </div>
          </div></el-tab-pane
        >
        <!-- 已完成订单 -->
        <el-tab-pane label="已完成" name="complete">
          <div
            class="ordersed"
            @click="
              $router.push({ path: '/completed', query: { id: item.id } })
            "
            v-for="(item, index) in getDataList"
            :key="index"
          >
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">订单已完成</p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">{{ item.orderdetail[0].phonenumber }}</p>
              <p class="yidong">
                {{ item.orderdetail[0].numberinfo.location }}
              </p>
              <p class="spend">
                含话费: {{ item.orderdetail[0].numberinfo.contain_charge }}元
              </p>
              <p class="ordertimed">下单时间：{{ item.updated_at }}</p>
              <p>
                <span class="needsed"
                  >实付
                  <h6 class="pay">￥{{ item.price }}</h6></span
                >
              </p>
              <div class="moneyed">
                <p class="moneyeds">删除订单</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      min: 0,
      sec: 0,
      activenamed: "second",
      getDataList: [],
      coco:null
    };
  },
  methods: {
    onclickFK(id, price, number) {
      //去付款
      sessionStorage.setItem("time", +new Date());
      this.$router.push({
        path: "/commerce_payment",
        query: {
          order_id: id,
          price: price,
          number: number,
        },
      });
    },
    onclickXGDZ() {
      //修改地址
    },
    onclickCKWL(id) {
      //查看物流
      window.location.href = "https://m.kuaidi100.com/result.jsp?nu=" + id;
    },
    onclickSCDD(id) {
      //删除订单
       this.$get("/api/order/orderquxiao", {
        user_id: localStorage.getItem("user-id"),
        id: id,
        status:2
      }).then((r) => {
        console.log(r);
      });

    },
    onclickSecond(status, id) {
      //判断订单状态
      if (status == 1) {
        this.$router.push({ path: "/paid", query: { id: id } });
      } else if (status == 2) {
        this.$router.push({ path: "/deta", query: { id: id } });
      } else if (status == 3) {
        this.$router.push({ path: "/receipt", query: { id: id } });
      } else if (status == 4) {
        this.$router.push({ path: "/completed", query: { id: id } });
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(this.activenamed);
      this.$router.push({ path: "order", query: { name: this.activenamed } });
      if (this.activenamed == "first") {
        this.getlist(1);
      } else if (this.activenamed == "third") {
        this.getlist(2);
      } else if (this.activenamed == "fourth") {
        this.getlist(3);
      } else if (this.activenamed == "complete") {
        this.getlist(4);
      } else {
        this.getlist();
      }
    },
    getlist(status) {
      this.$get("/api/order/getlist", {
        user_id: localStorage.getItem("user-id"),
        status: status,
      }).then((r) => {
        console.log(r);
        if (r.code == 200) {
          this.getDataList = r.data.data;
        } else {
          alert(r.msg);
        }
      });
    },
    //倒计时
    countdown() {
      const end = Date.parse(
        new Date("2021-07-01:11:25:56")
      ); /* this.getDataList.created_at */
      const now = Date.parse(new Date());
      const msec = end - now;
      if (msec < 0) return;

      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      if (min >= 0 && sec >= 0) {
        //倒计时结束关闭订单
        if (min == 0 && sec == 0) {
          return;
        }
        setTimeout(function () {
          that.countdown();
        }, 1000);
      }
    },
  },
  mounted() {
    this.countdown();
    this.activenamed = this.$route.query.name;
    if (this.activenamed == "first") {
      this.getlist(1);
    } else if (this.activenamed == "third") {
      this.getlist(2);
    } else if (this.activenamed == "fourth") {
      this.getlist(3);
    } else if (this.activenamed == "complete") {
      this.getlist(4);
    } else {
      this.getlist();
    }
  },
  filters: {
    getStatus(val) {
      let str = "";
      if (val == 1) {
        str = "待付款";
      } else if (val == 2) {
        str = "买家已付款";
      } else if (val == 3) {
        str = "卖家已发货";
      } else if (val == 4) {
        str = "订单已完成";
      }else{
        str="交易已关闭"
      }
      return str;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.inform {
  display: flex;
  margin-bottom: 20 / @vw;
  position: absolute;
  right: 0;
  top: 25%;
}
.inform span,
.inform p {
  font-size: 12 / @vw;
  color: #ea5656;
  margin-right: 6 / @vw;
}
.yyyyy {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: auto;
}
.yyyyy /deep/ .tabr .el-tabs__nav-wrap::after {
  background-color: transparent;
}
.yyyyy /deep/ .tabr .el-tabs__nav-scroll {
  background-color: transparent;
}
.yyyyy /deep/ .tabr .el-tabs__nav {
  background-color: transparent;
}
.yyyyy /deep/ .el-tabs__header {
  margin-bottom: 5 / @vw;
}
body,
html {
  background-color: #f5f5f5;
}
.jian {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}
.jian img {
  height: 16 / @vw;
  width: 10 / @vw;
  position: absolute;
  left: 15 / @vw;
}
.jian p {
  font-size: 15px;
  color: #fff;
  margin: 0 auto;
}
.payment {
  position: absolute;
  right: 0 / @vw;
  bottom: 0 / @vw;
  border: 1 / @vw solid #fe5858;
  text-align: center;
  border-radius: 15 / @vw;
  color: #fe5858;
  padding: 0 18 / @vw;
  font-size: 12 / @vw;
}
.pay {
  margin: -25 / @vw 40 / @vw;
  font-size: 14 / @vw;
  color: #ff5757;
}
.needsed {
  margin: 0 5 / @vw;
  font-size: 14 / @vw;
  color: #333333;
}
.ordertimed {
  font-size: 12 / @vw;
  display: flex;
  margin: 5 / @vw 0;
}
.spend {
  font-size: 12 / @vw;
  margin-top: 5 / @vw;
}
.yidong {
  font-size: 12 / @vw;
  margin-top: 5 / @vw;
}
.phonenumber {
  font-size: 16 / @vw;
  color: #333333;
}
.shops {
  width: 15 / @vw;
  height: 15 / @vw;
  padding: 0 / @vw 2 / @vw;
}
.shoping {
  font-size: 15 / @vw;
  margin-top: 10 / @vw;
  display: flex;
  align-items: center;
}
.this {
  margin-left: 5 / @vw;
}
.paid {
  font-size: 12 / @vw;
  color: #fe5858;
  margin-top: 12 / @vw;
}
.endtime {
  margin-left: 15 / @vw;
}
.xian {
  width: 330 / @vw;
  height: 1 / @vw;
  background-color: #f2f2f2;
  margin: 10 / @vw auto;
}
.moneyeds {
  position: absolute;
  right: 0 / @vw;
  bottom: 0 / @vw;
  border: 1 / @vw solid #333333;
  text-align: center;
  border-radius: 15 / @vw;
  color: #333333;
  padding: 0 8 / @vw;
  font-size: 12 / @vw;
}
.yyyyy /deep/ .el-tabs__nav :hover {
  color: #ff5757;
}
.yyyyy /deep/ .el-tabs__item.is-active {
  color: #ff5757;
}
.yyyyy /deep/ .el-tabs__active-bar {
  background-color: #ff5757;
}
.named {
  margin: 0 10 / @vw;
  line-height: 25 / @vw;
  color: #666666;
  position: relative;
}

.order {
  width: 100%;
  height: 64 / @vw;
  background: #ff5757;
}

.ordersed {
  width: 350 / @vw;
  height: 210 / @vw;
  background-color: white;
  margin: auto 11 / @vw;
  border-radius: 5 / @vw;
  position: relative;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10 / @vw 10 / @vw;
}
.tabr {
  padding-bottom: 20 / @vw;
}
</style>
