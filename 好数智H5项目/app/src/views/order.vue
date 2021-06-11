<template>
  <div>
    <div class="order">
      <div style="display: flex" class="jian">
        <img src="../assets/left.png" alt="" />
        <p>全部订单</p>
      </div>
    </div>
    <div>
      <el-tabs v-model="activenamed" @tab-click="handleClick">
        <!-- 全部订单 -->
        <el-tab-pane label="全部" name="second">
          <div class="ordersed" @click="$router.push('/paid')">
            <!-- 店铺 -->
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">
                待付款<span class="endtime">剩余时间23:58:45</span>
              </p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">13133393741</p>
              <p class="yidong">上海移动</p>
              <p class="spend">含话费</p>
              <p class="ordertimed">
                下单时间：2021-02-13 11:20
                <span class="needsed"
                  >需付
                  <h6 class="pay">￥400</h6></span
                >
              </p>
              <div class="moneyed">
                <p class="payment">付款</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 待付款订单 -->
        <el-tab-pane label="待付款" name="first">
          <div class="ordersed" @click="$router.push('/paid')">
            <div class="times">
              <p class="shoping">
                <img
                  src="../assets/shop.png"
                  alt=""
                  class="shops"
                />数智时代专营店<span class="this">></span>
              </p>
              <p class="paid">
                待付款<span class="endtime">剩余时间23:58:45</span>
              </p>
            </div>
            <div class="xian"></div>
            <div class="named">
              <p class="phonenumber">13133393741</p>
              <p class="yidong">上海移动</p>
              <p class="spend">含话费</p>
              <p class="ordertimed">
                下单时间：2021-02-13 11:20
                <span class="needsed"
                  >需付
                  <h6 class="pay">￥400</h6></span
                >
              </p>
              <div class="moneyed">
                <p class="payment">付款</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 待发货订单 -->
        <el-tab-pane label="待发货" name="third">
          <div class="ordersed"  @click="$router.push('/deta')">
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
              <p class="phonenumber">13133393741</p>
              <p class="yidong">上海移动</p>
              <p class="spend">含话费</p>
              <p class="ordertimed">
                下单时间：2021-02-13 11:20
                <span class="needsed"
                  >需付
                  <h6 class="pay">￥400</h6></span
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
          <div class="ordersed" @click="$router.push('receipt')">
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
              <p class="phonenumber">13133393741</p>
              <p class="yidong">上海移动</p>
              <p class="spend">含话费</p>
              <p class="ordertimed">
                下单时间：2021-02-13 11:20
                <span class="needsed"
                  >需付
                  <h6 class="pay">￥400</h6></span
                >
              </p>
              <div class="moneyed">
                <p class="moneyeds">查看物流</p>
              </div>
            </div>
          </div></el-tab-pane
        >
        <!-- 已完成订单 -->
        <el-tab-pane label="已完成" name="complete">
          <div class="ordersed" @click="$router.push('/completed')">
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
              <p class="phonenumber">13133393741</p>
              <p class="yidong">上海移动</p>
              <p class="spend">含话费</p>
              <p class="ordertimed">
                下单时间：2021-02-13 11:20
                <span class="needsed"
                  >需付
                  <h6 class="pay">￥400</h6></span
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>

body,
html {
  background-color: #f5f5f5;
}
.jian {
  display: flex;
}
.jian img {
  height: 16px;
  width: 16px;
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
  margin: -25px 28px;
  font-size: 16px;
  color: #ff5757;
}
.needsed {
  margin: 0 15px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}
.ordertimed {
  font-size: 12px;
  display: flex;
  margin-top: 5px;
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
  height: 183px;
  background-color: white;
  margin: auto 11px;
  border-radius: 5px;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
</style>
