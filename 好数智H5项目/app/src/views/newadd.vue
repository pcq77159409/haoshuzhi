<template>
  <div class="new_add">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>新增收货地址</h4>
    </div>
    <div class="huo">
      <ul>
        <li>
          <p>收货人</p>
          <input type="text" placeholder="收货人姓名" v-model="username" />
        </li>
        <li>
          <p>手机号码</p>
          <input
            type="tel"
            placeholder="联系方式"
            v-model="way"
            maxlength="11"
          />
        </li>
        <li>
          <p>所在省份</p>
          <!-- <input type="text" placeholder="省/市/区/街道" /> -->
          <!-- <select id="province" name="province" required></select>
          <select id="city" name="city" required></select>
          <select id="area" name="area" required></select> -->
          <el-select v-model="prov" style="width: 44.5333vw; margin-right: 6.666vw">
            <el-option
              v-for="(option, index) in arr"
              :value="option.name"
              :key="index"
            >
              {{ option.name }}
            </el-option>
          </el-select>
        </li>
        <li>
          <p>所在城市</p>
          <el-select v-model="city" style="width: 44.5333vw; margin-right: 6.666vw">
            <el-option
              v-for="(option, index) in cityArr"
              :value="option.name"
              :key="index"
            >
              {{ option.name }}
            </el-option>
          </el-select>
        </li>
        <li>
          <p>所在区域</p>
          <el-select v-model="district" v-if="district" style="width: 44.5333vw">
            <el-option
              v-for="(option, index) in districtArr"
              :value="option.name"
              :key="index"
            >
              {{ option.name }}
            </el-option>
          </el-select>
        </li>
        <li>
          <p>详细地址</p>
          <input
            type="text"
            placeholder="请填写详细地址；例：1号楼101室"
            v-model="detailed"
          />
        </li>
        <li>
          <p>设为默认地址</p>
          <el-switch
            v-model="value"
            active-color="#fe5858"
            inactive-color="#ccc"
          ></el-switch>
        </li>
      </ul>
    </div>
    <div class="save" @click="onClickCreateAddress">保存</div>
  </div>
</template>
<script>
import area from "../assets/js/area.js";
export default {
  name: "Cselect",
  data() {
    return {
      value: false,
      username: "",
      way: "",
      detailed: "",
      arr: area.arrAll,
      prov: "省份",
      city: "城市",
      district: "区域",
      cityArr: [],
      districtArr: [],
    };
  },

  beforeMount() {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function () {
      this.updateCity();
      this.updateDistrict();
    },
    city: function () {
      this.updateDistrict();
    },
  },
  methods: {
    updateCity: function () {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name) {
          if (obj.name == this.prov) {
            this.cityArr = obj.sub;
            break;
          }
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if (
        this.districtArr &&
        this.districtArr.length > 0 &&
        this.districtArr[1].name
      ) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = "";
      }
    },
    //===========================================
    onClickCreateAddress() {
      // console.log(this.prov);
      // console.log(this.city);
      // console.log(this.district);

      console.log(this.$route.query.id);
      if (this.$route.query.id) {
        //编辑
        this.$post("/api/address/edit", {
          id: this.$route.query.id,
          user_id: localStorage.getItem('user-id'),
          mobile: this.way,
          name: this.username,
          province: this.prov,
          city: this.city,
          area: this.district,
          address: this.detailed,
          is_default: this.value,
        }).then((val) => {
          console.log(val);
          this.$router.push("/goAddress");
          if (val.code != 200) {
            alert(val.msg);
          }
        });
      } else {
        //新增
        this.$post("/api/address/create", {
          user_id: localStorage.getItem('user-id'),
          mobile: this.way,
          name: this.username,
          province: this.prov,
          city: this.city,
          area: this.district,
          address: this.detailed,
          is_default: this.value,
        }).then((val) => {
          console.log(val);
          this.$router.push("/goAddress");
          if (val.code != 200) {
            alert(val.msg);
          }
        });
      }
    },
  },
  mounted() {
    console.log(this.$route.query.id);
    if (this.$route.query.id) {
      this.$get("/api/address/info", {
        user_id: localStorage.getItem('user-id'),
        id: this.$route.query.id,
      }).then((r) => {
        console.log(r);
        if (r.code == 200) {
          this.username = r.data.name;
          this.way = r.data.mobile;
          this.detailed = r.data.address;
          if (r.data.is_default == 1) {
            this.value = true;
          } else {
            this.value = false;
          }
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";

.new_add  /deep/ .el-select-dropdown__item{
  padding: 0 20/@vw;
}
.new_add {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  overflow: hidden;
}
.new_add .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.new_add .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.new_add .jumplabel h4 {
  font-size: 15/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.new_add .huo {
  width: 345/@vw;
  height: 315/@vw;
  margin: 80/@vw auto 0;
  background-color: #fff;
}
.new_add .huo ul {
  width: 100%;
  height: 100%;
}
.new_add .huo ul li {
  width: 325/@vw;
  height: 44/@vw;
  border-bottom: 1/@vw solid #eeeeee;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.new_add .huo ul li input {
  width: 246/@vw;
  color: #999;
  background-color: transparent;
}
.new_add .huo ul li p {
  font-size: 12/@vw;
  color: rgb(70, 63, 63);
  margin-right: 30/@vw;
  font-weight: 600;
}
.new_add .huo ul li:first-child p {
  margin-right: 40/@vw;
}
.new_add .huo ul li:last-child {
  justify-content: space-between;
  border: none;
}
.new_add .save {
  width: 345/@vw;
  height: 44/@vw;
  margin: 90/@vw auto;
  background-color: #ea5656;
  border-radius: 25/@vw;
  color: #fff;
  font-size: 15/@vw;
  text-align: center;
  line-height: 44/@vw;
}
</style>