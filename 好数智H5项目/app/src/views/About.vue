<template>
  <div class="about">
    <div class="header">
      <p>类别</p>
    </div>
    <div class="move">
      <ul class="pag">
        <li
          v-for="(item, index) in arrList"
          :key="index"
          @click="onClickTab(index, item.id)"
        >
          <p :class="flag == index ? 'current' : ''">{{ item.name }}</p>
        </li>
        <!-- <li @click="onClickTab(0)">
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
        </li> -->
      </ul>
      <div class="sex">
        <div class="roughly">
          <span></span>
          <h5>号段</h5>
          <span></span>
        </div>
        <ul class="digital" v-if="arrs.length != 0">
          <li
            v-for="(val, index) in arrs"
            :key="index"
            @click="
              $router.push({ path: '/screen', query: { haoduan: val.name } })
            "
          >
            {{ val.name }}
          </li>
        </ul>
        <div class="roughly">
          <span></span>
          <h5>套餐</h5>
          <span></span>
        </div>
        <ul class="card" v-if="arrTao.length != 0">
          <li v-for="(item, index) in arrTao" :key="index" @click="ClickOnTao(item.id)">
            {{ item.name }}
          </li>
          <!-- <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li>
          <li>39元小魔卡</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      arrs: [
        {
          id: 5,
          name: "134", //三级分类名称
          link: "", //如果二级分类类型为4链接，此字段有值
        },
      ],
      arrList: [
        {
          id: 98,
          name: "移动号码",
          icon: "",
          type: 0,
          image:
            "http://www.shuzhi.com/public/uploads/20210526/f9e37418a836787f26af32bf1c516fa4.png",
        },
      ],
      arrTao: [],
    };
  },
  methods: {
    onClickTab(v, id) {
      this.flag = v;
      this.$get("/api/home_page/getChildCategory", { id: id }).then((r) => {
        if (r.code == 200) {
          if (r.data.length == 0) {
            this.arrs = r.data;
            this.arrTao = r.data;
          } else {
            this.arrs = r.data[0].child;
            this.arrTao = r.data[1].child;
          }
        } else {
          alert(r.msg);
        }
      });
    },
    ClickOnTao(id){
      this.$router.push({
        path:'/khssb',
        query:{
          id:id
        }
      })
    }
  },
  mounted() {
    this.$axios.get("/api/home_page/getCategory").then((r) => {
      if (r.code == 200) {
        this.arrList = r.data;
        this.onClickTab(0, r.data[0].id);
      } else {
        alert(r);
      }
    });
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/base.less";

.digital :hover {
  color: red;
  border: 1/@vw solid #fe5858;
}
.card :hover {
  color: red;
  border: 1/@vw solid #fe5858;
}
html,
body {
  width: 100%;
  height: 100%;
}
.current {
  border-left: 2/@vw solid #fe5858;
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
  height: 58/@vw;
  background: #fe5858;
  display: flex;
  align-items: center;
}
.header p {
  font-size: 16/@vw;
  color: white;
  line-height: 64/@vw;
  text-align: center;
  margin: 0 auto;
}
.header img {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
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
  height: 50/@vw*1.3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.move .pag li p {
  width: 100%;
  height: 25/@vw*1.3;
  color: #666666;
  font-size: 14/@vw;
  line-height: 25/@vw*1.3;
}
.roughly {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 24/@vw;
  height: 18/@vw;
}
.roughly h5 {
  color: #666;
  font-weight: 500;
}
.roughly span {
  width: 86/@vw;
  height: 1/@vw;
  background-color: #eeecec;
}
.digital {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // height: 190/@vw;
  // justify-content: space-evenly;
  margin-top: 24/@vw;
  overflow: auto;
  // padding-right: 4%;
  box-sizing: border-box;
}
.digital li {
  width: 20%;
  // height: 28/@vw;
  border: 1/@vw solid #d3d3d3;
  color: #666666;
  font-weight: 500;
  border-radius: 20/@vw;
  text-align: center;
  line-height: 26/@vw;
  margin-bottom: 20/@vw;
  font-size: 12/@vw;
  margin-left: 4%;
  box-sizing: border-box;
}
.card {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  margin-top: 24/@vw;
}
.card li {
  width: 44%;
  height: 28/@vw;
  border: 1/@vw solid #d3d3d3;
  color: #666666;
  font-weight: 500;
  border-radius: 20/@vw;
  text-align: center;
  line-height: 28/@vw;
  margin-bottom: 15/@vw*1.3;
  font-size: 12/@vw;
  margin-left: 4%;
  box-sizing: border-box;
}
</style>


