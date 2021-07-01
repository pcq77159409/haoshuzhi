<template>
  <div class="new_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>收支明细</h4>
    </div>
    <!-- <h4>2021年3月</h4> -->
    <div class="incomes">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <div class="shoy">
            <p>{{ item.status }}</p>
            <span>{{ item.money }}</span>
          </div>
          <div class="danq">
            <p>{{ item.updated_at }}</p>
            <span v-if="balance != null">当前余额{{ balance }}</span>
            <span v-else>当前余额0</span>
          </div>
        </li>
        <!-- <li>
          <div class="shoy yi">
            <p>消费-移动靓号136****2222</p>
            <span>-100</span>
          </div>
          <div class="danq">
            <p>2021-03-15 14:01:16</p>
            <span>当前余额160.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+50</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额260.00</span>
          </div>
        </li>
        <li>
          <div class="shoy yi">
            <p>微信提现</p>
            <span>-100</span>
          </div>
          <div class="danq">
            <p>2021-03-15 14:01:16</p>
            <span>当前余额210.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+110</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额310.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+200</span>
          </div>
          <div class="danq">
            <p>2021-03-10 14:11:16</p>
            <span>当前余额200.00</span>
          </div>
        </li> -->
      </ul>
    </div>
    <!-- <h4>2021年2月</h4> -->
    <!-- <div class="incomes in">
      <ul>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
        <li>
          <div class="shoy yi">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      balance: 0,
      dataList: [
        {
          id: 4,
          user_id: 6,
          number: "6", //订单编号
          money: "6.00", //佣金入账
          order_id: 6,
          status: "已打款", //状态
          created_at: "1970-01-01 08:00:01",
          updated_at: "1970-01-01 08:00:01", //入账时间
          level: 0,
          head_img: "", //封面
          contain_charge: 0, //含话费
          position: "", //上海移动
          orderinfo: [
            {
              id: 6,
              number: "SJ20210327204242539068302",
              user_id: 6,
              name: "Address",
              mobile: "18895358662", //手机号
              province: "浙江省",
              city: "杭州市",
              area: "滨江区",
              address: "浦沿街道哈哈哈哈哈",
              created_at: "2021-03-27 20:42:42",
              updated_at: "2021-03-27 20:42:42",
              delivery: "线上配送",
              delivery_time: "就是现在",
              price: "3.00",
              finishtime: "1970-01-01 08:00:00",
              pay_money: null,
              status: 1,
              pay_time: "1970-01-01 08:00:00", //下单时间
              paytype: 0,
              info: null,
              code_url: "",
              express_number: null,
              remarks: null,
            },
          ],
        },
      ],
    };
  },
  created() {
    console.log(this.dataList);
    this.$post("/api/commission/commission_list", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      console.log(r);
      if (r.code == 200) {
        this.dataList = r.data.data;
      }
    });

    this.$get("/api/balance_log/balance", {
      user_id: localStorage.getItem("user-id"),
    }).then((val) => {
      // console.log(val);
      if (val.code == 200) {
        this.balance = val.data.balance;
      }
    });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.new_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f8f8f8;
  padding-top: 64 / @vw;
  box-sizing: border-box;
}
.new_box .jumplabel {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.new_box .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.new_box .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.new_box h4 {
  margin: 10 / @vw 0 10 / @vw 15 / @vw;
  font-size: 14 / @vw;
  color: #666666;
  font-weight: 500;
}
.new_box .incomes {
  width: 345 / @vw;
  background-color: #fff;
  margin: 0 auto;
}
.new_box .incomes ul {
  width: 100%;
  height: 100%;
}
.new_box .incomes ul li {
  width: 325 / @vw;
  height: 66 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
  margin: 0 10 / @vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.new_box .incomes ul li:last-child {
  border-bottom: none;
}
.new_box .incomes ul li .shoy,
.new_box .incomes ul li .danq {
  display: flex;
  justify-content: space-between;
}
.new_box .incomes ul li .danq {
  margin-top: 6 / @vw;
}
.new_box .incomes ul li .shoy p {
  font-size: 14 / @vw;
  color: #333333;
}
.new_box .incomes ul li .shoy span {
  font-size: 14 / @vw;
  color: #f62c2c;
  font-weight: 600;
}
.new_box .incomes ul li .danq p,
.new_box .incomes ul li .danq span {
  font-size: 12 / @vw;
  color: #666666;
}
.new_box .incomes ul li .yi span {
  color: #333333;
}
</style>