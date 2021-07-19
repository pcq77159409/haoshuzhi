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
      <div class="city" @click="onclickCity(city)">{{city}}</div>
    </div>
    <!-- 热门城市 -->
    <div style="hot">
      <p class="hotCitys">热门城市</p>
      <div class="hotcity">
        <div class="hots" v-for="(item,index) in cityList" :key="index">
          <div class="AA" @click="onclickCity(item)">{{item}}</div>
        </div>
        <!-- <div class="hots">
          <div class="AA">北京</div>
        </div>
        <div class="hots">
          <div class="AA">北京</div>
        </div> -->
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
    return {
      city:localStorage.getItem('cityTop'),
      cityList:[]
    };
  },
  methods: {
      onBack (){
          this.$router.go(-1)
      },
      onclickCity(item){
        localStorage.setItem('cityTop',item);
        localStorage.setItem('city',item);
        localStorage.setItem('from',item);
        this.$router.push('/commons/home/m');
      }
  },
  mounted(){
    this.$get('/api/home_page/getLocation').then(r=>{
      for(var k in r.data){
        console.log(r.data[k]);
        r.data[k].forEach(val=>{
        this.cityList.push(val);
        })
      }
    })
  }
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
  width: 331/@vw;
  border-radius: 25/@vw;
  height: 40/@vw;
  margin: 10/@vw 20/@vw;
  background: #ededed;
  border: 1/@vw solid #ededed;
  text-indent: 135/@vw;
  font-size: 13/@vw;
  color: #999999;
}
.hotCitys {
  font-size: 11/@vw;
  font-weight: bold;
  margin: 10/@vw 15/@vw;
}
.hotcity {
  // width: 90%;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-evenly;
}
.num {
  width: 100%;
}

.nums {
  width: 20/@vw;
  position: fixed;
  right: 0;
  top: 170/@vw;
}
.nums :hover {
  color: #fe5858;
}
.numss {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}

.citys {
  width: 100%;
  height: 58/@vw;
  background: #fe5858;
  display: flex;
  align-items: center;
}
.citys p {
  font-size: 16/@vw;
  color: white;
  text-align: center;
  line-height: 64/@vw;
  margin: 0 auto;
}
.citys img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.headers p {
  font-size: 11/@vw;
  font-weight: bold;
  margin: 10/@vw 15/@vw;
}

.city {
  width: 100/@vw;
  height: 32/@vw;
  border: 1/@vw solid #fe5858;
  text-align: center;
  line-height: 32/@vw;
  border-radius: 5/@vw;
  margin-left: 15/@vw;
  color: #666666;
}
.search {
  position: absolute;
  left: 135/@vw;
  top: 82/@vw;
  width: 10/@vw*1.3;
  height: 10/@vw*1.3;
}
.hots {
  width: 100/@vw;
  height: 32/@vw;
  border-radius: 5/@vw;
  border: 1/@vw solid #999999;
  margin-left: 15/@vw;
}
.hots:hover {
  border-color: #fe5858;
  color: #fe5858;
}
.AA {
  text-align: center;
  line-height: 32/@vw;
  border-radius: 5/@vw;
  color: #666666;
}
.money {
  margin-top: 8/@vw;
  width: 95%;
  display: flex;
  font-size: 12/@vw;
  justify-content: space-between;
  margin-left: 10/@vw;
}
</style>