<template>
  <div>
    <!--<router-view/>-->
    <!--页面返回不刷新-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>