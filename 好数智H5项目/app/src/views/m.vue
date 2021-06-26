<template>
  <div class="m-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
          <img :src="item.image" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      mySwiper: null,
      bannerList: [],
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });

    this.$axios.get("/api/home_page/getBanner", { type: 2 }).then((r) => {
      console.log(r);
      this.bannerList = r.data;
    });
  },
  methods: {
    initSwiper() {
      setTimeout(() => {
        this.mySwiper = new Swiper(".swiper-container", {
          loopAdditionalSlides: 3,
          loop: true,
          speed: 500,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          pagination: ".swiper-pagination",
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        });
      }, 300);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.m-box,
.swiper-container {
  width: 100%;
  height: 100%;
  border-radius: 6 / @vw;
}
.m-box img {
  width: 100%;
  height: 100%;
  border-radius: 6 / @vw;
}
.swiper-slide {
  text-align: center;
  font-size: 18 / @vw;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-container {
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30 / @vw; /* 设置按钮大小 */
}
.m-box /deep/ .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.m-box /deep/ .swiper-pagination-bullet {
  background: transparent;
  border: 1 / @vw solid #fff;
  box-sizing: border-box;
  opacity: 1;
}
.mybox {
  margin: -20 / @vw 0;
}
</style>