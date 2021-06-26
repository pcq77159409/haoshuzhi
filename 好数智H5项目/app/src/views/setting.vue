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
          <div @click="onClickClose">
            <span ref="jia">{{open}}</span>
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
          <div @click="onClickClose">
            <span ref="yon">{{close}}</span>
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
      value: true,
      actives: false,
      close:'关闭',
      open:'开启',
    };
  },
  methods:{
    onClickClose(){
      console.log(111);
    if(this.value==true){
      this.$refs.jia.innerText = this.open;
    }else {
      this.$refs.jia.innerText = this.close;
    }
    if(this.actives==true){
      this.$refs.yon.innerText = this.open
    }else {
      this.$refs.yon.innerText = this.close
    }
  }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.set_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 64/@vw;
  box-sizing: border-box;
}
.set_box .jumplabel {
  width: 100%;
  height: 58/@vw;
  background-color: #ea5656;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.set_box .jumplabel img {
  width: 10/@vw;
  height: 16/@vw;
  position: absolute;
  left: 15/@vw;
  pointer-events: auto;
}
.set_box .jumplabel h4 {
  font-size: 16/@vw;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.set_box .show {
  width: 100%;
  background-color: #fff;
  margin-top: 10/@vw;
}
.set_box .show ul {
  width: 100%;
}
.set_box .show ul li {
  width: 345/@vw;
  height: 54/@vw;
  border-bottom: 1/@vw solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15/@vw;
}
.set_box .show ul li:last-child {
  border-bottom: none;
}
.set_box .show ul li p {
  font-size: 14/@vw;
  color: #333333;
}
.set_box .show ul li span {
  font-size: 12/@vw;
  color: #999999;
  margin-right: 8/@vw;
}
.set_box .show ul li img {
  width: 8/@vw;
  height: 14/@vw;
}
.set_box i {
  display: inline-block;
  margin: 10/@vw 0 20/@vw 15/@vw;
  font-size: 12/@vw;
  color: #999999;
}
.set_box .clear {
  width: 100%;
  height: 54/@vw;
  background-color: #fff;
  font-size: 12/@vw;
  color: #333333;
  margin: 10/@vw 0;
  line-height: 54/@vw;
  text-indent: 15/@vw;
}
.set_box .login {
  width: 100%;
  height: 54/@vw;
  background-color: #fff;
  font-size: 12/@vw;
  color: #ea5656;
  text-align: center;
  line-height: 54/@vw;
}
</style>