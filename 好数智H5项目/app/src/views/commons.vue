<template>
  <div id="app">
    <ul id="nav">
      <li
        :class="{ current: hover == 1 }"
        @click="onclickTo('/commons/home', 1)"
      >
        <dl>
          <dt><i class="el-icon-house"></i></dt>
          <dd><span>首页</span></dd>
        </dl>
      </li>
      <li
        :class="{ current: hover == 2 }"
        @click="onclickTo('/commons/about', 2)"
      >
        <dl>
          <dt><i class="el-icon-menu"></i></dt>
          <dd><span>类别</span></dd>
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
    };
  },
  methods: {
    onclickTo(val, index) {
      if (this.$route.fullPath != val) {
        this.hover = index;
        this.$router.push(val);
      }
    },
  },
  mounted() {
    console.log(this.$route.fullPath);
    if (this.$route.fullPath == '/commons/home') {
      this.hover=1;
    }else if (this.$route.fullPath == '/commons/about') {
      this.hover=2;
    }else if (this.$route.fullPath == '/commons/user') {
      this.hover=3;
    }else if (this.$route.fullPath == '/commons/service') {
      this.hover=4;
    }else if (this.$route.fullPath == '/commons/my') {
      this.hover=5;
    }
  },
};
</script>
<style lang="scss" scoped>
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
  height: 50px;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  bottom: 0;

  z-index: 100;
  position: fixed;
  box-shadow: 2px 2px 8px #ccc;
  .current dt {
    color: red;
  }
  .current dd {
    color: red;
  }
  dl dt {
    font-size: 18px;
    margin-left: 2px;
    margin-top: 5px;
  }

  dl dd {
    font-size: 12px;
    color: #666666;
  }

  a {
    color: #666666;
  }
}
</style>

      
       
       
       
