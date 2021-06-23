<template>
  <div>
    <div class="citys ">
      <img src="../assets/left.png" alt=""  @click="onBack" />
      <p>选择城市</p>
    </div>
    <!-- 搜索框 -->
    <div style="inputs">
      <img src="../assets/搜索@2x.png" alt="" class="search" />
      <input type="text" placeholder="城市名/拼音" class="inputCity" />
    </div>
    <!-- 定位城市 -->
    <div class="headers">
      <p>定位城市</p>
      <div class="city">上海</div>
    </div>
    <!-- 热门城市 -->
    <div style="hot">
      <p class="hotCitys">热门城市</p>
      <div class="hotcity">
        <div class="hots">
          <div class="AA">北京</div>
        </div>
        <div class="hots">
          <div class="AA">北京</div>
        </div>
        <div class="hots">
          <div class="AA">北京</div>
        </div>
      </div>

      <div style="num">
        <ul class="nums">
          <li class="numss">A</li>
          <li class="numss">B</li>
          <li class="numss">C</li>
          <li class="numss">D</li>
          <li class="numss">E</li>
          <li class="numss">F</li>
          <li class="numss">G</li>
          <li class="numss">H</li>
          <li class="numss">J</li>
          <li class="numss">K</li>
          <li class="numss">L</li>
          <li class="numss">M</li>
          <li class="numss">N</li>
          <li class="numss">P</li>
          <li class="numss">Q</li>
          <li class="numss">R</li>
          <li class="numss">S</li>
          <li class="numss">T</li>
          <li class="numss">W</li>
          <li class="numss">Y</li>
          <li class="numss">Z</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      onBack (){
          this.$router.go(-1)
      }
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
}
.inputCity {
  width: 331px;
  border-radius: 25px;
  height: 40px;
  margin: 10px 20px;
  background: #ededed;
  border: 1px solid #ededed;
  text-indent: 135px;
  font-size: 13px;
}
.hotCitys {
  font-size: 11px;
  font-weight: bold;
  margin: 10px 15px;
}
.hotcity {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 10px;
}
.num {
  width: 100%;
}

.nums {
  width: 20px;
  position: fixed;
  right: 0;
  top: 170px;
}
.nums :hover {
  color: #fe5858;
}
.numss {
  font-size: 12px;
  margin-top: 5px;
}

.citys {
  width: 100%;
  height: 65px;
  background: #fe5858;
  display: flex;
  align-items: center;
}
.citys p {
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 64px;
  margin-left: 132px;
}
.citys img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.headers p {
  font-size: 11px;
  font-weight: bold;
  margin: 10px 15px;
}

.city {
  width: 100px;
  height: 32px;
  border: 1px solid #fe5858;
  text-align: center;
  line-height: 32px;
  border-radius: 5px;
  margin-left: 15px;
}
.search {
  position: absolute;
  left: 135px;
  top: 89px;
  width: 10pt;
  height: 10pt;
}
.hots {
  width: 100px;
  height: 32px;
  border-radius: 5px;
  border: 0.1px solid #999999;
}
.hots :hover {
  border: 1px solid #fe5858;
  color: #fe5858;
  margin-top: -1px;
}
.AA {
  text-align: center;
  line-height: 32px;
  border-radius: 5px;
}
.money {
  margin-top: 8px;
  width: 95%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-left: 10px;
}
</style>