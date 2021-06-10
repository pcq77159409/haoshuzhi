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
<style lang="scss" scoped>
.subsudiary {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 74px;
  overflow: auto;
}
.subsudiary .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.subsudiary .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.subsudiary .jumplabel h4 {
  font-size: 16px;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.subsudiary h4 {
    font-size: 14px;
    color: #999999;
    margin: 0 0 10px 15px;
    font-weight: 500;
}
.subsudiary .date {
    width: 345px;
    height: 400px;
    background-color: #fff;
    margin: 0 15px 10px;
}
.subsudiary .dateing {
    height: 273px;
}

.subsudiary .date .under{
    width: 325px;
    height: 40px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #f2f2f2;
}
.subsudiary .date .under p{
    font-size: 12px;
    color: #333333;
}
.subsudiary .date ul {
    width: 325px;
    height: 363px;
    margin: 0 10px;
}
.subsudiary .date ul li {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
}
.subsudiary .date ul li:first-child{
    margin-top: 10px;
}
.subsudiary .date ul li .people {
    display: flex;
    align-items: center;
}
.subsudiary .date ul li .people img {
    width: 35px;
    height: 35px;
}
.subsudiary .date ul li .people p {
    font-size: 12px;
    color: #666666;
    margin-left: 8px;
}
.subsudiary .date ul li span {
    font-size: 12px;
    color: #ea5656;
    margin-left: 76px;
}
.subsudiary .date ul li i {
    font-size: 12px;
    color: #666666;
    margin-left: 68px;
}
</style>