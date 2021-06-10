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
<style lang="scss" scoped>
.item_content {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.item_content .package_box {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
}
.item_content .package_box img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.item_content .package_box h4 {
  margin-left: 132px;
  color: #fff;
  font-weight: 500;
}
.item_content .taos {
  width: 100%;
  height: 300px;
}
.item_content .ninteen {
  width: 345px;
  height: 97px;
  background-color: #fff;
  margin: 10px 0 0 15px;
  border-radius: 4px;
}
.item_content .ninteen .movement {
  width: 325px;
  display: flex;
  height: 20px;
  margin: 0 4px 0 16px;
  padding-top: 10px;
  justify-content: space-between;
}
.item_content .movement h6 {
  color: #333333;
  font-size: 13px;
}
.item_content .movement .tea {
  display: flex;
}
.item_content .movement .tea p,
.item_content .movement .tea span {
  font-size: 13px;
  color: #666666;
  margin-right: 6px;
}
.item_content .voice {
  font-size: 12px;
  color: #666666;
  margin: 6px 0 0 16px;
}
.item_content .amount {
  width: 202px;
  display: flex;
  justify-content: flex-start;
  margin-top: 6px;
}
.item_content .amount li {
  display: flex;
  align-items: center;
  margin-right: 32px;
}
.item_content .amount li:last-child {
  margin: 0;
}
.item_content .amount li img {
  width: 8px;
  height: 8px;
  margin-right: 4px;
}
.item_content .amount li p {
  font-size: 12px;
  color: #666666;
}
.item_content .champion {
  width: 320px;
  display: flex;
  margin-left: 16px;
  margin-top: 6px;
  justify-content: space-between;
}
.item_content .champion p {
  font-size: 12px;
  color: #666666;
}
.item_content .champion span {
  font-size: 12px;
  color: #ea5656;
}
.item_content .gchoose {
  width: 345px;
  height: 40px;
  background-color: #fff;
  margin: 5px 0 0 15px;
  display: flex;
  align-items: center;
  border-radius: 4px;
}
.item_content .gchoose p {
  font-size: 12px;
  color: #333333;
  margin: 0 18px 0 10px;
}
.item_content .gchoose span {
  font-size: 12px;
  color: #333333;
}
.item_content .gchoose img {
  width: 5px;
  height: 8px;
  margin-left: 202px;
}
.item_content .havepackage {
  width: 345px;
  height: 1245px;
  background-color: #fff;
  margin: 6px 0 0 15px;
}
.item_content .havepackage p {
  width: 100%;
  height: 41px;
  font-size: 12px;
  color: #666666;
  line-height: 41px;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 10px;
}
.item_content .havepackage img {
  width: 345px;
  height: 1194px;
  margin-top: 10px;
}
.item_content .lofoot {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1px solid #e5e5e5;
}
.item_content .lofoot .sidebar-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  margin-left: 8px;
}
.item_content .lofoot .sidebar-home img {
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
}
.item_content .lofoot .sidebar-home p {
  font-size: 12px;
  color: #666666;
}
.item_content .immediately {
  width: 183px;
  height: 33px;
  border-radius: 25px;
  background-color: #ea5656;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 33px;
  margin-left: 64px;
}
</style>