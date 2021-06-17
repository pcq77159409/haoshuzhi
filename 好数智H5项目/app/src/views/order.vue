<template>
  <div>
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
      <el-tabs v-model="activenamed" @tab-click="handleClick">
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
                  v-if="item.status == 4"
                  @click.stop="onclickSCDD"
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
      activenamed: "second",
      getDataList: [],
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
    onclickSCDD() {
      //删除订单
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
        user_id: this.$store.state.user_id,
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
  },
  mounted() {
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
      }
      return str;
    },
  },
};
</script>

<style>
.tabr .el-tabs__nav-wrap::after {
  background-color: transparent;
}
.tabr .el-tabs__nav-scroll {
  background-color: transparent;
}
.tabr .el-tabs__nav {
  background-color: transparent;
}
body,
html {
  background-color: #f5f5f5;
}
.jian {
  display: flex;
}
.jian img {
  height: 16px;
  width: 10px;
  margin: 25px 17px;
}

.payment {
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: 1px solid #fe5858;
  text-align: center;
  border-radius: 15px;
  color: #fe5858;
  font-weight: 600;
  padding: 0 18px;
  font-size: 12px;
}
.pay {
  margin: -25px 40px;
  font-size: 14px;
  color: #ff5757;
}
.needsed {
  margin: 0 5px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}
.ordertimed {
  font-size: 12px;
  display: flex;
  margin: 5px 0;
}
.el-tabs__nav-scroll {
  background-color: white;
}
.spend {
  font-size: 12px;
  margin-top: 5px;
}
.yidong {
  font-size: 12px;
  margin-top: 5px;
}
.phonenumber {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.shops {
  width: 15px;
  height: 15px;
  padding: 0px 2px;
}
.shoping {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}
.this {
  margin-left: 5px;
}
.paid {
  font-size: 12px;
  color: #fe5858;
  margin-top: 12px;
}
.endtime {
  margin-left: 15px;
}
.xian {
  width: 330px;
  height: 1px;
  background-color: #f2f2f2;
  margin: 10px auto;
}
.moneyeds {
  position: absolute;
  right: 0px;
  bottom: 0px;
  border: 1px solid #333333;
  text-align: center;
  border-radius: 15px;
  color: #333333;
  font-weight: 600;
  padding: 0 8px;
  font-size: 12px;
}
.el-tabs__nav {
  margin: 0 10px;
}
.el-tabs__nav :hover {
  color: #ff5757;
}
.el-tabs__item.is-active {
  color: #ff5757;
}
.el-tabs__active {
  background-color: white;
}
.el-tabs__nav {
  background-color: white;
}
.el-tabs__nav-wrap::after {
  background-color: white;
}

.el-tabs__active-bar {
  background-color: #ff5757;
}
.named {
  margin: 0 10px;
  line-height: 25px;
  color: #666666;
  position: relative;
}

.order {
  width: 100%;
  height: 65px;
  background: #ff5757;
}
.order p {
  color: white;
  font-size: 16px;
  margin: 20px 103px;
}

.ordersed {
  width: 350px;
  height: 210px;
  background-color: white;
  margin: auto 11px;
  border-radius: 5px;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.tabr {
  padding-bottom: 20px;
}
</style>
