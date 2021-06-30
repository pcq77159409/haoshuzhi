<template>
  <div class="a">
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
// .a{
//   width: 100%;
//   height: 100%;
// }
</style>