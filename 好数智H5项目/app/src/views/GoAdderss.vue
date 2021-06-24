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
              style="margintop:0.533vw"
              name="default"
              @click="onclickDefault(item)"
              :checked="item.is_default == 1"
            />
            <p style="fontsize: 2.1333vw; color: #333333; margin-left: 1.6vw">
              默认地址
            </p>
          </div>
          <p style="fontsize: 2.1333vw; color: #333333; marginright: 5.3333vw">
            <img src="../assets/111.png" style="margin-right: 1.6vw" />
            <span style="margin-right: 5.333vw" @click="onClickEditGoods(item.id)"
              >编辑</span
            ><img src="../assets/222.png" style="margin-right: 1.6vw" />
            <span style="margin-right: 2.6666vw" @click="onClickDelete(item.id)">删除</span>
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
        user_id: localStorage.getItem('user-id'),
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
            user_id: localStorage.getItem('user-id'),
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
    onClickDelete(id) {
      let user_id=localStorage.getItem('user-id');
      this.$post("/api/address/del", {
        user_id: user_id,
        id: id,
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
      user_id: localStorage.getItem('user-id'),
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


<style lang="less" scoped>
@import "../assets/css/base.less";
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.totals {
  width: 345/@vw;
  height: 100/@vw*1.3;
  margin-bottom: 10/@vw;
  border-radius: 4/@vw;
  background-color: #fff;
}
.total {
  width: 100%;
  max-height: 500/@vw;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10/@vw;
  justify-content: space-evenly;
}
.bottom {
  width: 345/@vw;
  height: 34/@vw*1.3;
  background: #ea5656;
  border-radius: 20/@vw;
  margin: 50/@vw auto 20/@vw;
}
.bottom p {
  line-height: 34/@vw*1.3;
  text-align: center;
  color: white;
  font-size: 16/@vw;
}
.boxs {
  width: 90%;
  height: 1/@vw;
  background: #f2f2f2;
  margin: 0 auto;
  margin-top: 15/@vw;
}
.number {
  display: flex;
  align-items: center;
  margin: 15/@vw 0 0 15/@vw;
}
.number p:first-child {
  font-size: 16/@vw;
}
.number p:last-child {
  font-size: 14/@vw;
  margin-left: 10/@vw;
}
.names {
  width: 100%;
  height: 65/@vw;
  background: #ea5656;
  display: flex;
  align-items: center;
}
.names img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.names p {
  font-size: 16/@vw;
  color: white;
  margin: 0 auto;
}

.money {
  width: 95%;
  display: flex;
  font-size: 12/@vw;
  justify-content: space-between;
  margin: 14/@vw 12/@vw 0;
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
  width: 15/@vw;
  height: 15/@vw;
  margin-right: 5/@vw;
}
// .money input{
//   width: 10/@vw;
//   height: 10/@vw;
// }
</style>

