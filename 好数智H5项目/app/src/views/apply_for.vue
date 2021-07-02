<template>
  <div class="apply_for">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>实力买家申请</h4>
    </div>
    <div class="realty">
      <ul>
        <li>
          <p>真实姓名</p>
          <input
            type="text"
            placeholder="请输入真实姓名"
            v-model="buyersNmae"
          />
        </li>
        <li>
          <p>联系电话</p>
          <input type="text" placeholder="请输入电话号码" v-model="buyersTel" />
        </li>
        <li>
          <p>所在省份</p>
          <!-- <input type="text" placeholder="省/市/区/街道" /> -->
          <!-- <select id="province" name="province" required></select>
          <select id="city" name="city" required></select>
          <select id="area" name="area" required></select> -->
          <el-select
            v-model="prov"
            style="width: 44.5333vw; margin-right: 6.666vw"
          >
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
          <el-select
            v-model="city"
            style="width: 44.5333vw; margin-right: 6.666vw"
          >
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
          <el-select
            v-model="district"
            v-if="district"
            style="width: 44.5333vw"
          >
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
            placeholder="请输入详细地址"
            v-model="buyersDetails"
          />
        </li>
        <li>
          <p>销售渠道</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            maxlength="100"
            placeholder="简洁介绍销售渠道"
            v-model="buyersQd"
          ></textarea>
        </li>
        <li>
          <p>线上店铺</p>
          <input type="text" placeholder="(选填)" v-model="buyersDp" />
        </li>
      </ul>
      <div class="submit" @click="onclickSubmit">提交申请</div>
     
    </div>
     <div class="powers">
        <h4>实力买家权益</h4>
        <div class="Become">
          <img src="../assets/1234.png" alt="" />
          <div>
            <p>分销赚佣金</p>
            <span>成为分销商后卖出商品，您可以获得佣金</span>
          </div>
        </div>
        <div class="Become">
          <img src="../assets/1234.png" alt="" />
          <div>
            <p>分销赚佣金</p>
            <span>成为分销商后卖出商品，您可以获得佣金</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import area from "../assets/js/area.js";
export default {
  data() {
    return {
      arr: area.arrAll,
      cityArr: [],
      districtArr: [],
      prov: "省份",
      city: "城市",
      district: "区域",
      buyersNmae: "",
      buyersTel: "",
      buyersDetails: "",
      buyersQd: "",
      buyersDp: "",
      type: 0,
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
    onclickSubmit() {
      if (this.buyersNmae.trim() == "") {
        alert("姓名不能为空");
      } else if (
        this.buyersTel.trim() == "" &&
        this.buyersTel.trim().length != 11
      ) {
        alert("手机号码必须为11数");
      } else if (this.buyersDetails.trim() == "") {
        alert("详细地址不能为空");
      } else if (this.buyersQd.trim() == "") {
        alert("销售渠道不能为空");
      } else {
        this.$post("/api/user/applystrengthuser", {
          user_id: localStorage.getItem("user-id"),
          name: this.buyersNmae,
          phone: this.buyersTel,
          province: this.prov,
          city: this.city,
          area: this.district,
          address: this.buyersDetails,
          channel: this.buyersQd,
          shop_online: this.buyersDp,
        }).then((r) => {
          if (r.code == 200) {
            this.$router.push("/through");
          } else {
            alert(r.msg);
          }
        });
      }
    },
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
  },
  mounted() {
    this.$get("/api/user/getinfo", {
      user_id: localStorage.getItem("user-id"),
    }).then((r) => {
      if (r.code == 200) {
        this.type = r.data.type;
      }
    });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

input::-webkit-input-placeholder {
  color: #999999;
}
.apply_for {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  padding-top: 10/@vw;
  overflow: auto;
}
.apply_for /deep/ .el-select {
  margin-left: 15 / @vw;
}
.apply_for .jumplabel {
  width: 100%;
  height: 58 / @vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.apply_for .jumplabel img {
  width: 10 / @vw;
  height: 16 / @vw;
  position: absolute;
  left: 15 / @vw;
  pointer-events: auto;
}
.apply_for .jumplabel h4 {
  font-size: 16 / @vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.apply_for .realty {
  width: 345 / @vw;
  // height: 438 / @vw;
  background-color: #fff;
  margin: 66 / @vw auto 0;
}
.apply_for .realty ul {
  width: 325 / @vw;
  // height: 335 / @vw;
  margin: 0 10 / @vw;
}
.apply_for .realty ul li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 47 / @vw;
  border-bottom: 1 / @vw solid #f2f2f2;
}
.apply_for .realty ul li:nth-child(7) {
  height: 95 / @vw;
  align-items: flex-start;
  padding-top: 18 / @vw;
  box-sizing: border-box;
}
.apply_for .realty ul li p {
  font-size: 12 / @vw;
  color: #333333;
  font-weight: 600;
}
.apply_for .realty ul li textarea {
  outline: none;
  border: none;
  margin-left: 16 / @vw;
  margin-top: 1 / @vw;
  font-size: 12 / @vw;
}
.apply_for .realty ul li input {
  border: none;
  outline: none;
  margin: 2 / @vw 0 0 15 / @vw;
  font-size: 12 / @vw;
}
.apply_for .realty ul li img {
  width: 6 / @vw;
  height: 11 / @vw;
  margin-left: 102 / @vw;
}
.apply_for .realty .submit {
  width: 345 / @vw;
  height: 64 / @vw;
  background: url("../assets/矩形 9@2x.png") no-repeat;
  background-size: 345 / @vw 64 / @vw;
  text-align: center;
  line-height: 64 / @vw;
  margin-top: 18 / @vw;
  color: #ffffff;
}
.apply_for  .powers {
  width: 345 / @vw;
  height: 160 / @vw;
  background-color: #fff;
  margin: 10 / @vw auto;
}
.apply_for  .powers h4 {
  width: 325 / @vw;
  height: 38 / @vw;
  margin: 0 10 / @vw;
  text-align: center;
  border-bottom: 1 / @vw solid #f2f2f2;
  line-height: 38 / @vw;
  color: #333333;
  font-size: 12 / @vw;
}
.apply_for .powers .Become {
  display: flex !important;
  margin-bottom: 10 / @vw;
}
.apply_for  .powers .Become img {
  width: 15 / @vw*1.3;
  height: 15 / @vw*1.3;
  margin: 10 / @vw 0 0 10 / @vw;
}
.apply_for  .powers .Become p {
  font-size: 14 / @vw;
  color: #333333;
  margin: 10 / @vw 0 0 10 / @vw;
}
.apply_for  .powers .Become span {
  font-size: 12 / @vw;
  color: #999999;
  margin: 10 / @vw 0 0 10 / @vw;
}
</style>