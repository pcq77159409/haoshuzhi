<template>
  <div class="item_content">
    <div class="package_box">
      <img src="../assets/left.png" alt="" @click="onClickTo"/>
      <h4>套餐详情</h4>
    </div>
    <img src="../assets/taos.png" alt="" class="taos" />
    <div class="ninteen">
      <div class="movement">
        <h6>移动小魔卡</h6>
        <div class="tea">
          <p>上海</p>
          <span>移动</span>
        </div>
      </div>
      <p class="voice">套餐特征: 流量+语音畅享套餐</p>
      <div class="champion">
        <p>销量:808</p>
        <span>￥90.00</span>
      </div>
    </div>
    <div class="gchoose">
      <p>已选资费</p>
      <span>18元套餐</span>
      <img src="../assets/timeRight.png" alt="" />
    </div>
    <div class="havepackage">
      <p>套餐详情</p>
      <img src="../assets/图层 2@2x.png" alt="" />
    </div>
    <div class="lofoot">
      <div class="sidebar-home">
        <img src="../assets/shou2.png.png" alt="" />
        <p>首页</p>
      </div>
      <div class="sidebar-home">
        <img src="../assets/cang1.png.png" alt="" />
        <p>收藏</p>
      </div>
      <div class="immediately">立即选号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    onClickTo() {
      this.$router.go(-1)
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.item_content {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.item_content .package_box {
  width: 100%;
  height: 64/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.item_content .package_box img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
}
.item_content .package_box h4 {
  margin-left: 132/@vw;
  color: #fff;
  font-weight: 500;
}
.item_content .taos {
  width: 100%;
  height: 300/@vw;
}
.item_content .ninteen {
  width: 345/@vw;
  height: 97/@vw;
  background-color: #fff;
  margin: 10/@vw 0 0 15/@vw;
  border-radius: 4/@vw;
}
.item_content .ninteen .movement {
  width: 325/@vw;
  display: flex;
  height: 20/@vw;
  margin: 0 4/@vw 0 16/@vw;
  padding-top: 10/@vw;
  justify-content: space-between;
}
.item_content .movement h6 {
  color: #333333;
  font-size: 13/@vw;
}
.item_content .movement .tea {
  display: flex;
}
.item_content .movement .tea p,
.item_content .movement .tea span {
  font-size: 13/@vw;
  color: #666666;
  margin-right: 6/@vw;
}
.item_content .voice {
  font-size: 12/@vw;
  color: #666666;
  margin: 6/@vw 0 0 16/@vw;
}
.item_content .amount {
  width: 202/@vw;
  display: flex;
  justify-content: flex-start;
  margin-top: 6/@vw;
}
.item_content .amount li {
  display: flex;
  align-items: center;
  margin-right: 32/@vw;
}
.item_content .amount li:last-child {
  margin: 0;
}
.item_content .amount li img {
  width: 8/@vw;
  height: 8/@vw;
  margin-right: 4/@vw;
}
.item_content .amount li p {
  font-size: 12/@vw;
  color: #666666;
}
.item_content .champion {
  width: 320/@vw;
  display: flex;
  margin-left: 16/@vw;
  margin-top: 6/@vw;
  justify-content: space-between;
}
.item_content .champion p {
  font-size: 12/@vw;
  color: #666666;
}
.item_content .champion span {
  font-size: 12/@vw;
  color: #ea5656;
}
.item_content .gchoose {
  width: 345/@vw;
  height: 40/@vw;
  background-color: #fff;
  margin: 5/@vw 0 0 15/@vw;
  display: flex;
  align-items: center;
  border-radius: 4/@vw;
}
.item_content .gchoose p {
  font-size: 12/@vw;
  color: #333333;
  margin: 0 18/@vw 0 10/@vw;
}
.item_content .gchoose span {
  font-size: 12/@vw;
  color: #333333;
}
.item_content .gchoose img {
  width: 5/@vw;
  height: 8/@vw;
  margin-left: 202/@vw;
}
.item_content .havepackage {
  width: 345/@vw;
  height: 1245/@vw;
  background-color: #fff;
  margin: 6/@vw 0 0 15/@vw;
}
.item_content .havepackage p {
  width: 100%;
  height: 41/@vw;
  font-size: 12/@vw;
  color: #666666;
  line-height: 41/@vw;
  border-bottom: 1/@vw solid #f5f5f5;
  padding-left: 10/@vw;
}
.item_content .havepackage img {
  width: 345/@vw;
  height: 1194/@vw;
  margin-top: 10/@vw;
}
.item_content .lofoot {
  width: 100%;
  height: 50/@vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1/@vw solid #e5e5e5;
}
.item_content .lofoot .sidebar-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50/@vw;
  margin-left: 8/@vw;
}
.item_content .lofoot .sidebar-home img {
  width: 20/@vw;
  height: 20/@vw;
  margin-bottom: 6/@vw;
}
.item_content .lofoot .sidebar-home p {
  font-size: 12/@vw;
  color: #666666;
}
.item_content .immediately {
  width: 183/@vw;
  height: 33/@vw;
  border-radius: 25/@vw;
  background-color: #ea5656;
  color: #fff;
  font-size: 14/@vw;
  text-align: center;
  line-height: 33/@vw;
  margin-left: 64/@vw;
}
</style>