<template>
  <div id="app">
    <ul id="nav">
      <li
        :class="{ current: hover == 1 }"
        @click="onclickTo('/commons/home/m', 1)"
      >
        <dl>
          <dt><i class="el-icon-house"></i></dt>
          <dd><span>首页</span></dd>
        </dl>
      </li>
      <li :class="{ current: hover == 2 }" @click="onClickCnmmb">
        <dl>
          <dt><img :src="src" alt="" /></dt>
          <dd><span ref="lei">类别</span></dd>
        </dl>
      </li>
      <li
        :class="{ current: hover == 3 }"
        @click="onclickTo('/commons/user', 3)"
      >
        <dl>
          <dt><i class="el-icon-chat-dot-round"></i></dt>
          <dd><span>咨询</span></dd>
        </dl>
      </li>
      <li
        :class="{ current: hover == 4 }"
        @click="onclickTo('/commons/service', 4)"
      >
        <dl>
          <dt><i class="el-icon-star-off"></i></dt>
          <dd><span>收藏</span></dd>
        </dl>
      </li>
      <li :class="{ current: hover == 5 }" @click="onclickTo('/commons/my', 5)">
        <dl>
          <dt><i class="el-icon-user"></i></dt>
          <dd><span>我的</span></dd>
        </dl>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: 1,
      src: require("../assets/lei1.png.png"),
    };
  },
  methods: {
    onclickTo(val, index) {
      if (this.$route.fullPath != val) {
        this.hover = index;
        this.$router.push(val);
        this.src = require("../assets/lei1.png.png");
        this.$refs.lei.style = "color:#666;";
      }
    },
    onClickCnmmb() {
      this.src = require("../assets/分类@2x.png");
      this.$refs.lei.style = "color:#fe5858;";
      this.hover = 2;
      this.$router.push('/commons/about')
    },
  },
  mounted() {
    console.log(this.$route.fullPath);
    if (this.$route.fullPath == "/commons/home/m") {
      this.hover = 1;
    } else if (this.$route.fullPath == "/commons/about") {
      this.hover = 2;
    } else if (this.$route.fullPath == "/commons/user") {
      this.hover = 3;
    } else if (this.$route.fullPath == "/commons/service") {
      this.hover = 4;
    } else if (this.$route.fullPath == "/commons/my") {
      this.hover = 5;
    }
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

* {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}
body,
html {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}
#nav {
  width: 100%;
  height: 50 / @vw;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  bottom: 0;

  z-index: 100;
  position: fixed;
  box-shadow: 2 / @vw 2 / @vw 8 / @vw #ccc;
  .current dt {
    color: red;
  }
  .current dd {
    color: red;
  }
  dl dt {
    font-size: 18 / @vw;
    margin-left: 2 / @vw;
    margin-top: 5 / @vw;
  }

  dl dd {
    font-size: 12 / @vw;
    color: #666666;
    text-align: center;
  }

  a {
    color: #666666;
  }
}
#nav li:nth-of-type(2) img {
  width: 16 / @vw;
  height: 16 / @vw;
  margin-left: 2 / @vw;
}
#nav li:nth-of-type(2) dt {
  width: 16 / @vw;
  height: 16 / @vw;
  margin-bottom: 7 / @vw;
}
#nav li {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

      
       
       
       
