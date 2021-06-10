<template>
  <div id="app">
    <div id="nav">
      <router-link to="/commons/home">
        <dl>
          <dt><i class="el-icon-house"></i></dt>
          <dd><span>首页</span></dd>
        </dl>
      </router-link>
      <router-link to="/commons/about">
        <dl>
          <dt><i class="el-icon-menu"></i></dt>
          <dd><span>类别</span></dd>
        </dl>
      </router-link>
      <router-link to="/commons/user">
        <dl>
          <dt><i class="el-icon-chat-dot-round"></i></dt>
          <dd><span>咨询</span></dd>
        </dl>
      </router-link>
      <router-link to="/commons/service">
        <dl>
          <dt><i class="el-icon-star-off"></i></dt>
          <dd><span>收藏</span></dd>
        </dl>
      </router-link>
      <router-link to="/commons/my">
        <dl>
          <dt><i class="el-icon-user"></i></dt>
          <dd><span>我的</span></dd>
        </dl>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
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
  :hover {
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

      
       
       
       
