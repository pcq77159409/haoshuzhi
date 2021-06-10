<template>
  <div class="set_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>设置</h4>
    </div>
    <div class="show">
      <ul>
        <li>
          <p>显示价格</p>
          <div>
            <span>开启</span>
            <el-switch
              v-model="value"
              active-color="#fe5858"
              inactive-color="#ccc"
            >
            </el-switch>
          </div>
        </li>
        <li>
          <p>显示佣金</p>
          <div>
            <span>开启</span>
            <el-switch
              v-model="actives"
              active-color="#fe5858"
              inactive-color="#ccc"
            >
            </el-switch>
          </div>
        </li>
      </ul>
    </div>
    <i>* 显示佣金默认关闭 ： 实力买家可开启佣金显示</i>
    <div class="show">
      <ul>
        <li>
          <p>意见反馈</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </li>
        <li>
          <p>关于我们</p>
          <img src="../assets/跳转箭头@2x.png" alt="" />
        </li>
        <li>
          <p>版本更新</p>
          <span>版本2.3.0</span>
        </li>
      </ul>
    </div>
    <div class="clear">清空缓存</div>
    <div class="login">退出登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false,
      actives: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.set_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 64px;
  box-sizing: border-box;
}
.set_box .jumplabel {
  width: 100%;
  height: 64px;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.set_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.set_box .jumplabel h4 {
  font-size: 16px;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.set_box .show {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
}
.set_box .show ul {
  width: 100%;
}
.set_box .show ul li {
  width: 345px;
  height: 54px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
}
.set_box .show ul li:last-child {
  border-bottom: none;
}
.set_box .show ul li p {
  font-size: 14px;
  color: #333333;
}
.set_box .show ul li span {
  font-size: 12px;
  color: #999999;
  margin-right: 8px;
}
.set_box .show ul li img {
  width: 8px;
  height: 14px;
}
.set_box i {
  display: inline-block;
  margin: 10px 0 20px 15px;
  font-size: 12px;
  color: #999999;
}
.set_box .clear {
  width: 100%;
  height: 54px;
  background-color: #fff;
  font-size: 12px;
  color: #333333;
  margin: 10px 0;
  line-height: 54px;
  text-indent: 15px;
}
.set_box .login {
  width: 100%;
  height: 54px;
  background-color: #fff;
  font-size: 12px;
  color: #ea5656;
  text-align: center;
  line-height: 54px;
}
</style>