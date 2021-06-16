<template>
  <div class="home">
    <div class="names">
      <img src="../assets/left.png" alt="" @click="onClickIntroPara" />
      <p>收货地址</p>
    </div>
    <div class="total">
      <div class="totals" v-for="(item, index) in editor" :key="index">
        <div class="number">
          <p>{{ item.name }}</p>
          <p>{{ item.mobile }}</p>
        </div>
        <div class="money">
          <p>
            {{ item.province }}{{ item.city }}{{ item.area }}{{ item.address }}
          </p>
        </div>
        <div class="boxs"></div>
        <div class="money">
          <div style="display: flex; align-items: center">
            <input type="radio" style="margintop: 2px" />
            <p style="fontsize: 8px; color: #333333; margin-left: 6px">
              默认地址
            </p>
          </div>
          <p style="fontsize: 8px; color: #333333; marginright: 20px">
            <img src="../assets/111.png" style="margin-right: 6px" />
            <span style="margin-right: 20px" @click="onClickEditGoods"
              >编辑</span
            ><img src="../assets/222.png" style="margin-right: 6px" />
            <span style="margin-right: 10px" @click="onClickDelete">删除</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bottom" @click="$router.push('/newadd')">
      <p>添加收货地址</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: {},
      id: null,
    };
  },
  methods: {
    onClickIntroPara() {
      this.$router.go(-1);
    },
    onClickDelete() {
      this.$post("/api/address/del", {
        user_id: this.$store.state.user_id,
        id: this.id,
      }).then((val) => {
        console.log(val);
        this.$get("/api/address/getlist", {
          user_id: this.$store.state.user_id,
        }).then((val) => {
          this.editor = val.data;
          val.data.forEach((val) => {
            this.id = val.id;
          });
        });
      });
    },
    onClickEditGoods() {
      this.$post("/api/address/edit", {
        user_id: this.$store.state.user_id,
        id:this.id,
        mobile: this.way,
        name: this.username,
        province: "湖南省",
        city: "邵阳市",
        area: "双清区",
        address: this.detailed,
        is_default: false,
      }).then((val) => {
        console.log(val);
        this.$router.push("/newadd");
      });
    },
  },
  created() {
    this.$get("/api/address/getlist", {
      user_id: this.$store.state.user_id,
    }).then((val) => {
      this.editor = val.data;
      val.data.forEach((val) => {
        this.id = val.id;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.totals {
  width: 250pt;
  height: 100pt;
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
.bottom {
  width: 345px;
  height: 34pt;
  background: #ea5656;
  border-radius: 20px;
  margin: 240px auto 20px;
}
.bottom p {
  line-height: 34pt;
  text-align: center;
  color: white;
  font-size: 16px;
}
.boxs {
  width: 90%;
  height: 1px;
  background: #f2f2f2;
  margin: 0 auto;
  margin-top: 15px;
}
.number {
  display: flex;
  align-items: center;
  margin: 15px 0 0 15px;
}
.number p:first-child {
  font-size: 16px;
}
.number p:last-child {
  font-size: 14px;
  margin-left: 10px;
}
.names {
  width: 100%;
  height: 65px;
  background: #ea5656;
  display: flex;
  align-items: center;
}
.names img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.names p {
  font-size: 18px;
  color: white;
  margin-left: 132px;
}

.money {
  width: 95%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin: 14px 12px 0;
}
.money p {
  color: #333333;
  display: flex;
  align-items: center;
}
.home {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.money img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>

