<template>
  <div class="about">
    <div class="header">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)">
      <p>类别</p>
    </div>
    <div class="move">
      <ul class="pag">
        <li @click="onClickTab(0)">
          <p :class="flag == 0 ? 'current' : ''">中国移动</p>
        </li>
        <li @click="onClickTab(1)">
          <p :class="flag == 1 ? 'current' : ''">中国联通</p>
        </li>
        <li @click="onClickTab(2)">
          <p :class="flag == 2 ? 'current' : ''">中国电信</p>
        </li>
        <li @click="onClickTab(3)">
          <p :class="flag == 3 ? 'current' : ''">虚拟号码</p>
        </li>
      </ul>
      <div class="sex" v-show="active == 0">
        <div class="roughly">
          <span></span>
          <h5>号段</h5>
          <span></span>
        </div>
        <ul class="digital">
          <li>134</li>
          <li>136</li>
          <li>137</li>
          <li>138</li>
          <li>139</li>
          <li>147</li>
          <li>150</li>
          <li>151</li>
          <li>159</li>
          <li>178</li>
          <li>182</li>
          <li>183</li>
          <li>184</li>
          <li>187</li>
          <li>188</li>
          <li>198</li>
        </ul>
        <div class="roughly">
          <span></span>
          <h5>套餐</h5>
          <span></span>
        </div>
        <ul class="card">
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
        </ul>
      </div>
      <div class="sex" v-show="active == 1">
        <div class="roughly">
          <span></span>
          <h5>号段</h5>
          <span></span>
        </div>
        <ul class="digital">
          <li>134</li>
          <li>136</li>
          <li>137</li>
          <li>138</li>
          <li>139</li>
          <li>147</li>
          <li>150</li>
          <li>151</li>
          <li>159</li>
          <li>178</li>
          <li>182</li>
          <li>183</li>
          <li>184</li>
          <li>187</li>
          <li>188</li>
          <li>198</li>
        </ul>
        <div class="roughly">
          <span></span>
          <h5>套餐</h5>
          <span></span>
        </div>
        <ul class="card">
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
        </ul>
      </div>
      <div class="sex" v-show="active == 2">
        <div class="roughly">
          <span></span>
          <h5>号段</h5>
          <span></span>
        </div>
        <ul class="digital" >
          <li>134</li>
          <li>136</li>
          <li>137</li>
          <li>138</li>
          <li>139</li>
          <li>147</li>
          <li>150</li>
          <li>151</li>
          <li>159</li>
          <li>178</li>
          <li>182</li>
          <li>183</li>
          <li>184</li>
          <li>187</li>
          <li>188</li>
          <li>198</li>
        </ul>
        <div class="roughly">
          <span></span>
          <h5>套餐</h5>
          <span></span>
        </div>
        <ul class="card">
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
        </ul>
      </div>
      <div class="sex" v-show="active == 3">
        <div class="roughly">
          <span></span>
          <h5>号段</h5>
          <span></span>
        </div>
        <ul class="digital">
          <li>134</li>
          <li>136</li>
          <li>137</li>
          <li>138</li>
          <li>139</li>
          <li>147</li>
          <li>150</li>
          <li>151</li>
          <li>159</li>
          <li>178</li>
          <li>182</li>
          <li>183</li>
          <li>184</li>
          <li>187</li>
          <li>188</li>
          <li>198</li>
        </ul>
        <div class="roughly">
          <span></span>
          <h5>套餐</h5>
          <span></span>
        </div>
        <ul class="card">
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.digital :hover{
  color:red;
  border:1px solid #fe5858;
}
.card :hover{
  color:red;
   border:1px solid #fe5858;
}
html,
body {
  width: 100%;
  height: 100%;
}
.current {
  border-left: 2px solid #fe5858;
  color: #fe5858 !important;
}
.about {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 64px;
  background: #fe5858;
  display: flex;
  align-items: center;
}
.header p {
  font-size: 16px;
  color: white;
  line-height: 64px;
  text-align: center;
  margin: 0 auto;
}
.header img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.move {
  width: 100%;
  height: 100%;
  display: flex;
}
.sex {
  width: 78%;
  height: 100%;
}
.move .pag {
  width: 32%;
  height: 100%;
  background-color: #f8f8f8;
  text-align: center;
}
.move .pag li {
  width: 100%;
  height: 50pt;
  display: flex;
  align-items: center;
  justify-content: center;
}
.move .pag li p {
  width: 100%;
  height: 25pt;
  color: #666666;
  font-size: 12pt;
  line-height: 25pt;
}
.roughly {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 24px;
  height: 18px;
}
.roughly h5 {
  color: #666;
  font-weight: 500;
}
.roughly span {
  width: 86px;
  height: 1px;
  background-color: #eeecec;
}
.digital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 24px;
}
.digital li {
  width: 52px;
  height: 28px;
  border: 1px solid #999999;
  color: #666666;
  font-weight: 500;
  border-radius: 20px;
  text-align: center;
  line-height: 28px;
  margin-bottom: 20px;
  font-size: 11pt;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 24px;
}
.card li {
  width: 118px;
  height: 28px;
  border: 1px solid #999999;
  color: #666666;
  font-weight: 500;
  border-radius: 20px;
  text-align: center;
  line-height: 28px;
  margin-bottom: 15pt;
  font-size: 11pt;
}
</style>

<script>
export default {
  data() {
    return {
      flag: 0,
      active: 0,
    };
  },
  methods: {
    onClickTab(v) {
      this.flag = v;
      this.active = v;
    },
  },
};
</script>
