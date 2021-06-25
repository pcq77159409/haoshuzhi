<template>
  <div class="box">
    <div class="service">
      <p>收藏</p>
    </div>
    <div v-show="show">
      <div class="Collection" align="center">
        <img src="../assets/收藏.png" alt="" />
        <p>您暂时还没有添加收藏呢,快去选择心仪的收藏吧~</p>
      </div>
      <div class="gos">
        <div class="go">
          <p @click="$router.push('/screen')">去收藏~</p>
        </div>
      </div>
    </div>
    <div class="content" v-show="!show">
      <ul>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="
            $router.push({
              path: '/details',
              query: { 'ids[]': item.numberinfo.id },
            })
          "
        >
          <v-touch
            v-on:swipeleft="swiperleft(index)"
            v-on:swiperight="swiperright"
            class="wrapper"
          >
            <div class="menu-container" ref="menuContainer">
              <img src="../assets/矩形 47@2x.png" alt="" />
              <p v-html="item.numberinfo.number"></p>
              <div class="b_c_div1">
                <i>{{ item.numberinfo.location }}</i>
                <span>佣金 ¥{{ item.numberinfo.returned_commission }}</span>
              </div>
              <div class="b_c_div2">
                <span>含话费 ¥{{ item.numberinfo.prepaid_charge }}</span
                ><span>¥{{ item.numberinfo.sale_price }}</span>
              </div>
              <div
                class="delete"
                :class="{ tran: tranShow == index }"
                @click.stop="onclickDel(item.numberinfo.id)"
              >
                删除
              </div>
            </div>
          </v-touch>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      dataList: [],
      tranShow: -1,
    };
  },
  methods: {
    swiperleft: function (index) {
      console.log("左划");
      this.tranShow = index;
    },
    swiperright: function () {
      console.log("右滑");
      this.tranShow = -1;
    },
    onclickDel(id) {
      this.$post("/api/number/delcollectnumber", {
        number_ids: [id],
        user_id: localStorage.getItem("user-id"),
      }).then((r) => {
        // console.log(r);
        if (r.code == 200) {
          this.tranShow = -1;
          this.$get("/api/number/collectlist", {
            user_id: localStorage.getItem("user-id"),
          }).then((r) => {
            console.log(r);
            if (r.code == 200) {
              this.dataList = r.data;
              if (r.data.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            } else {
              alert(r.msg);
            }
          });
        } else {
          alert(r.msg);
        }
      });
    },
  },
  mounted() {
    this.$get("/api/number/collectlist", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      console.log(r);
      if (r.code == 200) {
        this.dataList = r.data;
        if (r.data.length == 0) {
          this.show = true;
        } else {
          this.show = false;
        }
      } else {
        alert(r.msg);
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.service {
  width: 100%;
  height: 64 / @vw;
  background: #ea5656;
}
.service p {
  font-size: 16 / @vw;
  color: white;
  font-family: PingFang-SC-Medium;
  font-weight: Medium;
  line-height: 65 / @vw;
  text-align: center;
}
.Collection {
  width: 100%;
  height: 300 / @vw;
}
.Collection img {
  width: 180 / @vw*1.3;
  height: 115 / @vw*1.3;
  margin-top: 50 / @vw;
}
.Collection p {
  font-size: 13 / @vw;
  margin-top: 10 / @vw;
  color: #999999;
}
.gos {
  width: 100%;
  height: 30 / @vw;
}
.go {
  width: 280 / @vw;
  height: 30 / @vw;
  background: #ff5757;
  border-radius: 15 / @vw;
  text-align: center;
  line-height: 30 / @vw;
  margin: 0 auto;
  color: white;
}
.box {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  box-sizing: border-box;
  padding-bottom: 65/@vw;
  overflow: auto;
}
.content {
  padding: 0 15 / @vw;
  box-sizing: border-box;
}
.content li {
  position: relative;
  width: 690 / @vw / 2;
  height: 167 / @vw / 2;
  margin-top: 15 / @vw;
  padding: 10 / @vw 15 / @vw;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
}
.content li span {
  font-weight: 500;
  color: red;
  font-size: 12 / @vw;
}
.content li i {
  font-size: 12 / @vw;
  font-weight: 500;
  color: #666666;
}
.content li p {
  font-size: 16 / @vw;
  font-weight: 600;
}
.content li .b_c_div1 {
  display: flex;
  justify-content: space-between;
  margin: 5 / @vw 0;
}
.content li .b_c_div2 {
  display: flex;
  justify-content: space-between;
}
.content li .b_c_div2 span:nth-of-type(2) {
  font-size: 14 / @vw;
  font-weight: 600;
}
.content li img {
  position: absolute;
  right: 0;
  top: 0;
  width: 23 / @vw*1.4;
  height: 14 / @vw*1.4;
}
.delete {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16 / @vw;
  color: #fff;
  text-align: center;
  line-height: 84 / @vw;
  width: 141 / @vw / 2;
  background-color: #fe5858;
  border-radius: 0px 8px 8px 0px;
  transition: all 0.5s;
  transform: translateX(141 / @vw);
}
.content .tran {
  transform: translateX(0 / @vw);
}
</style>