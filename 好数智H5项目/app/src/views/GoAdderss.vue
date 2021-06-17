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
            <input
              type="radio"
              style="margintop: 2px"
              name="default"
              @click="onclickDefault(item)"
              :checked="item.is_default == 1"
            />
            <p style="fontsize: 8px; color: #333333; margin-left: 6px">
              默认地址
            </p>
          </div>
          <p style="fontsize: 8px; color: #333333; marginright: 20px">
            <img src="../assets/111.png" style="margin-right: 6px" />
            <span style="margin-right: 20px" @click="onClickEditGoods(item.id)"
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
    onclickDefault(item) {
      console.log(item);
      this.$post("/api/address/edit", {
        user_id: this.$store.state.user_id,
        id: item.id,
        mobile: item.mobile,
        name: item.name,
        province: item.province,
        city: item.city,
        area: item.area,
        address: item.address,
        is_default: 1,
      }).then((r) => {
        console.log(r);
        if (r.code == 200) {
          this.$get("/api/address/getlist", {
            user_id: this.$store.state.user_id,
          }).then((val) => {
            this.editor = val.data;
            console.log(this.editor);
            val.data.forEach((val) => {
              this.id = val.id;
            });
          });
        } else {
          alert(r.msg);
        }
      });
    },
    onClickIntroPara() {
      this.$router.go(-1);
    },
    onClickDelete() {
      let user_id=this.$store.state.user_id;
      this.$post("/api/address/del", {
        user_id: user_id,
        id: this.id,
      }).then((val) => {
        console.log(val);
        this.$get("/api/address/getlist", {
          user_id: user_id,
        }).then((val) => {
          this.editor = val.data;
          val.data.forEach((val) => {
            this.id = val.id;
          });
        });
      });
    },
    onClickEditGoods(id) {
      this.$router.push({path:'/newadd',query:{id:id}});
    },
  },
  created() {
    this.$get("/api/address/getlist", {
      user_id: this.$store.state.user_id,
    }).then((val) => {
      this.editor = val.data;
      console.log(this.editor);
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
  max-height: 500px;
  overflow-y: auto;
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
  margin: 50px auto 20px;
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

