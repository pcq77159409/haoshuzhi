<template>
  <div class="through_box">
    <div class="head_boxs">
      <img src="../assets/left.png" alt="" />
      <h4>实力买家</h4>
    </div>
    <div class="nav_box">
      <img src="../assets/圆角矩形 10 副本 3@2x.png" alt="" />
      <p>审核通过</p>
    </div>
    <div class="congratulations">
      <h4>恭喜您审核通过</h4>
      <div class="reading">
        <img src="../assets/yes.png" alt="" />
        <p>已阅读并同意遵守</p>
        <span>【实力买家申请协议】</span>
      </div>
    </div>
    <div class="jiaona" @click="$router.push('/payment')">
        缴纳押金并开启服务
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
.through_box {
  width: 100%;
  height: 100%;
  background: url("../assets/形状 1@2x.png") no-repeat;
  background-size: 100% 100%;
}
.through_box .head_boxs {
    display: flex;
    padding-top: 20px;
    align-items: center;
}
.through_box .head_boxs img {
    width: 10px;
    height: 16px;
    padding-left: 15px;
}
.through_box .head_boxs h4 {
    margin: 0 auto;
    font-size: 16px;
    color: #ffffff;
    font-weight: 500;
    margin-right: 153px;
}
.through_box .nav_box {
    width: 78px;
    height: 116px;
    margin: 56px auto 0;
    text-align: center;
}
.through_box .nav_box img {
    width: 78px;
    height: 78px;
    margin-bottom: 6px;
}
.through_box .nav_box p{
    font-size: 15px;
    color: #ffffff;
}
.through_box .congratulations {
    width: 254px;
    height: 66px;
    margin: 138px auto 0;
    text-align: center;
}
.through_box .congratulations h4{
    font-size: 15px;
    color: #333333;
    margin-bottom: 14px;
}
.through_box .congratulations .reading {
    display: flex;
    align-items: center;
    justify-content: center;
}
.through_box .congratulations .reading img {
    width: 12px;
    height: 12px;
    margin-right: 8px;
}
.through_box .congratulations .reading p {
    font-size: 12px;
    color: #999999;
}
.through_box .congratulations .reading span {
    font-size: 12px;
    color: #FE5858;
}
.through_box .jiaona {
    width: 325px;
    height: 44px;
    background-color: #FE5858;
    margin: 40px auto 0;
    border-radius: 25px;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
}
</style>