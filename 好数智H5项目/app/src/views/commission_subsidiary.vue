<template>
  <div class="subsudiary">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>佣金明细</h4>
    </div>
    <h4>2021年3月</h4>
    <div class="date">
        <div class="under">
            <p>下线销售</p>
            <p>佣金</p>
            <p>日期</p>
        </div>
        <ul>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
        </ul>
    </div>
    <h4>2021年2月</h4>
    <div class="date dateing">
        <div class="under">
            <p>下线销售</p>
            <p>佣金</p>
            <p>日期</p>
        </div>
        <ul>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
            <li>
                <div class="people">
                    <img src="../assets/user.png" alt="">
                    <p>张珊珊</p>
                </div>
                <span>￥300</span>
                <i>03-01 15:30</i>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";
.subsudiary {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 74/@vw;
  overflow: auto;
}
.subsudiary .jumplabel {
  width: 100%;
  height: 64/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.subsudiary .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
}
.subsudiary .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.subsudiary h4 {
    font-size: 14/@vw;
    color: #999999;
    margin: 0 0 10/@vw 15/@vw;
    font-weight: 500;
}
.subsudiary .date {
    width: 345/@vw;
    height: 400/@vw;
    background-color: #fff;
    margin: 0 15/@vw 10/@vw;
}
.subsudiary .dateing {
    height: 273/@vw;
}

.subsudiary .date .under{
    width: 325/@vw;
    height: 40/@vw;
    margin: 0 10/@vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1/@vw solid #f2f2f2;
}
.subsudiary .date .under p{
    font-size: 12/@vw;
    color: #333333;
}
.subsudiary .date ul {
    width: 325/@vw;
    height: 363/@vw;
    margin: 0 10/@vw;
}
.subsudiary .date ul li {
    width: 100%;
    height: 56/@vw;
    display: flex;
    align-items: center;
}
.subsudiary .date ul li:first-child{
    margin-top: 10/@vw;
}
.subsudiary .date ul li .people {
    display: flex;
    align-items: center;
}
.subsudiary .date ul li .people img {
    width: 35/@vw;
    height: 35/@vw;
}
.subsudiary .date ul li .people p {
    font-size: 12/@vw;
    color: #666666;
    margin-left: 8/@vw;
}
.subsudiary .date ul li span {
    font-size: 12/@vw;
    color: #ea5656;
    margin-left: 76/@vw;
}
.subsudiary .date ul li i {
    font-size: 12/@vw;
    color: #666666;
    margin-left: 68/@vw;
}
</style>