<template>
  <div class="through_box">
    <div class="head_boxs">
      <img src="../assets/left.png" alt="" @click="$router.push('/commons/home/m')" />
      <h4>实力买家</h4>
    </div>
    <div class="nav_box">
      <img src="../assets/shz.png" alt="" />
      <p>审核中...</p>
    </div>
    <div class="congratulations">
      <h4>提交成功等待后台审核</h4>
      <div class="reading">
        <!-- <img src="../assets/yes.png" alt="" /> -->
        <p>预计会在一个工作日内审完毕，请您耐心等待</p>
        <!-- <span>【实力买家申请协议】</span> -->
      </div>
    </div>
    <!-- <div class="jiaona" @click="$router.push('/payment')">
        缴纳押金并开启服务
    </div> -->
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
.through_box {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: url("../assets/形状 1@2x.png") no-repeat;
  background-size: 100% 100%;
}
.through_box .head_boxs {
    display: flex;
    padding-top: 20/@vw;
    align-items: center;
}
.through_box .head_boxs img {
    width: 10/@vw;
    height: 16/@vw;
    padding-left: 15/@vw;
}
.through_box .head_boxs h4 {
    margin: 0 auto;
    font-size: 16/@vw;
    color: #ffffff;
    font-weight: 500;
    margin-right: 153/@vw;
}
.through_box .nav_box {
    width: 78/@vw;
    height: 116/@vw;
    margin: 56/@vw auto 0;
    text-align: center;
}
.through_box .nav_box img {
    width: 78/@vw;
    height: 78/@vw;
    margin-bottom: 6/@vw;
}
.through_box .nav_box p{
    font-size: 15/@vw;
    color: #ffffff;
}
.through_box .congratulations {
    width: 254/@vw;
    height: 66/@vw;
    margin: 138/@vw auto 0;
    text-align: center;
}
.through_box .congratulations h4{
    font-size: 15/@vw;
    color: #333333;
    margin-bottom: 14/@vw;
}
.through_box .congratulations .reading {
    display: flex;
    align-items: center;
    justify-content: center;
}
.through_box .congratulations .reading img {
    width: 12/@vw;
    height: 12/@vw;
    margin-right: 8/@vw;
}
.through_box .congratulations .reading p {
    font-size: 12/@vw;
    color: #999999;
}
.through_box .congratulations .reading span {
    font-size: 12/@vw;
    color: #FE5858;
}
.through_box .jiaona {
    width: 325/@vw;
    height: 44/@vw;
    background-color: #FE5858;
    margin: 40/@vw auto 0;
    border-radius: 25/@vw;
    font-size: 14/@vw;
    color: #ffffff;
    text-align: center;
    line-height: 44/@vw;
}
</style>