<template>
  <div class="hui">
    <div class="header">
      <img
        src="../assets/left.png"
        alt=""
        class="back"
        @click="$router.push('/order?name=second')"
      />
      <p class="close">取消订单</p>
    </div>
    <div class="banner">
      <img src="../assets/close.png" alt="" />
      <div class="banners">
        <img src="../assets/选择 拷贝 3@2x.png" alt="" />
        <p class="closes">成功取消</p>
        <p class="wen">订单已取消，看看其他的吧</p>
        <div class="A" @click="$router.push('/commons/home/m')">
          <p>返回首页</p>
        </div>
        <div class="B" @click="$router.push('/order?name=second')">
          <p>查看订单</p>
        </div>
      </div>
    </div>
    <div>
      <p class="jing">精品推荐</p>
      <div class="cap">
        <!-- <router-link to="/screen">
          <div class="shit">
            <img src="../assets/te.png" alt="" />
            <div class="number">13133393741</div>
            <div class="money">
              <p class="one">上海移动</p>
            </div>
            <div class="money">
              <p class="han">含话费￥260</p>
              <p class="twietion">￥260</p>
            </div>
          </div>
        </router-link> -->
        <router-link
          :to="{ path: '/details', query: { 'ids[]': item.id } }"
          v-for="(item, index) in dataTj"
          :key="index"
        >
          <div class="shit">
            <img src="../assets/te.png" alt="" />
            <div class="number" v-html="item.number_tag"></div>
            <div class="money">
              <p>{{ item.location }}</p>
              <p class="dolor" v-show="commissionShow">
                佣金￥{{ item.returned_commission }}
              </p>
            </div>
            <div class="money">
              <p class="han">含话费￥260</p>
              <p class="twietion" v-show="priceShow">
                ￥{{ item.initial_charge }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataTj: [],
      priceShow: true,
      commissionShow: false,
    };
  },
  created() {
    if (localStorage.getItem("priceShow")) {
      if (localStorage.getItem("priceShow") == "true") {
        this.priceShow = true;
      } else {
        this.priceShow = false;
      }
    }
    if (localStorage.getItem("commissionShow")) {
      if (localStorage.getItem("commissionShow") == "true") {
        this.commissionShow = true;
      } else {
        this.commissionShow = false;
      }
    }
    this.$axios
      .post("/api/home_page/getNumList", { recommend: 1, from: "上海" })
      .then((val) => {
        if (val.code == 200) {
          this.dataTj = val.data.data;
        }
      });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

.hui {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.header {
  width: 100%;
  height: 58 / @vw;
  background-color: #fe5858;
  display: flex;
  align-items: center;
}

.back {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.close {
  color: #ffffff;
  font-size: 16 / @vw;
  margin: 0 auto;
}
.banner {
  width: 345 / @vw;
  height: 180 / @vw;
  position: relative;
  margin: 15 / @vw 15 / @vw;
}
.banner img {
  width: 100%;
  height: 100%;
}
.jing {
  color: #333333;
  font-size: 13 / @vw;
  // font-weight: bold;
  margin: 0 15 / @vw;
}
a {
  text-decoration: none;
  color: #333333;
}
.number {
  color: #333333;
  font-size: 19 / @vw;
  margin-top: 15 / @vw;
  margin-left: 10 / @vw;
}
.money {
  margin-top: 8 / @vw;
  width: 95%;
  display: flex;
  font-size: 12 / @vw;
  justify-content: space-between;
  margin-left: 10 / @vw;
}

.banners img {
  position: absolute;
  margin: -154 / @vw 124 / @vw;
  width: 20 / @vw;
  height: 20 / @vw;
}
.banners .closes {
  margin: -155 / @vw 150 / @vw;
  position: absolute;
  width: 100 / @vw;
  font-size: 16 / @vw;
  color: #ffffff;
  font-family: PingFang-SC-Heavy;
}
.banners .wen {
  margin: -120 / @vw 92 / @vw;
  position: absolute;
  width: 157 / @vw;
  font-size: 12 / @vw;
  color: #ffffff;
  letter-spacing: 1 / @vw;
}
.A {
  margin: -81 / @vw 70 / @vw;
  position: absolute;
  width: 157 / @vw;
  font-size: 12 / @vw;
  color: #fe5858;
  letter-spacing: 1 / @vw;
  width: 80 / @vw;
  height: 30 / @vw;
  background: #ffffff;
  line-height: 30 / @vw;
  text-align: center;
  border-radius: 20 / @vw;
}
.B {
  margin: -81 / @vw 197 / @vw;
  position: absolute;
  width: 157 / @vw;
  font-size: 12 / @vw;
  color: #fe5858;
  letter-spacing: 1 / @vw;
  width: 80 / @vw;
  height: 30 / @vw;
  background: #ffffff;
  text-align: center;
  line-height: 30 / @vw;
  border-radius: 20 / @vw;
}

.cap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10 / @vw;
  justify-content: space-evenly;
  background: #f5f5f5;
}

.cap .shit {
  width: 125 / @vw*1.3;
  height: 75 / @vw*1.3;
  border: 0.5 / @vw*1.3 solid #e5e5e5;
  border-radius: 10 / @vw;
  margin-bottom: 10 / @vw;
  background-color: #ffffff;
}
.cap .shit img {
  float: right;
  width: 30 / @vw;
  height: 18 / @vw;
}
.cap .shit .dolor {
  margin-right: 10 / @vw;
  color: #dd1414;
}
.cap .shit .han {
  font-size: 12 / @vw;
  color: #dd1414;
  margin-top: 4 / @vw;
}
.cap .shit .twietion {
  font-size: 14 / @vw;
  // font-weight: bold;
  color: #dc0101;
  margin-right: 10 / @vw;
}
</style>