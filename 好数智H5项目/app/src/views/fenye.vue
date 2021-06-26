<template>
  <div class="home">
    <div class="page-bar">
      <ul>
        <li v-if="cur > 1"><a v-on:click="cur--, pageClick()">上一页</a></li>
        <li v-if="cur == 1"><a class="banclick">上一页</a></li>
        <li
          v-for="index in indexs"
          v-bind:class="{ active: cur == index }"
          :key="index"
        >
          <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li v-if="cur != all"><a v-on:click="cur++, pageClick()">下一页</a></li>
        <li v-if="cur == all"><a class="banclick">下一页</a></li>
        <li>
          <a
            >共<i>{{ all }}</i
            >页</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      all: 100, //总页数
      cur: 1, //当前页码
      totalPage: 0, //当前条数
    };
  },
  methods: {
    //请求数据
    dataListFn: function (index) {
      this.$axios
        .get("http://127.0.0.1:8090/demand/selectListByPage", {
          params: {
            page: index,
            limit: "10",
            state: 0,
          },
        })
        .then((res) => {
          if (res.data.message == "success") {
            this.dataList = [];
            for (let i = 0; i < res.data.data.length; i++) {
              this.dataList.push(res.data.data[i]);
            }
            this.all = res.data.totalPage; //总页数
            this.cur = res.data.pageNum;
            this.totalPage = res.data.totalPage;
          }
        });
    },
    //分页
    btnClick: function (data) {
      //页码点击事件
      if (data != this.cur) {
        this.cur = data;
      }
      //根据点击页数请求数据
      this.dataListFn(this.cur.toString());
    },
    pageClick: function () {
      //根据点击页数请求数据
      this.dataListFn(this.cur.toString());
    },
  },
  computed: {
    //分页
    indexs: function () {
      // var left = 1;
      // var right = this.all;
      // var ar = [];
        const c = this.cur
      const t = this.all
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]  //第一种情况
      } else if (c >= t - 4) {
        return [1, '...', t-8, t-7, t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
      } else {
        return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t]  //第三种情况
      }
      // if (this.all >= 5) {
      //   if (this.cur > 3 && this.cur < this.all - 2) {
      //     left = this.cur - 2;
      //     right = this.cur + 2;
      //   } else {
      //     if (this.cur <= 3) {
      //       left = 1;
      //       right = 5;
      //     } else {
      //       right = this.all;
      //       left = this.all - 4;
      //     }
      //   }
      // }
      // while (left <= right) {
      //   ar.push(left);
      //   left++;
      // }
      // return ar;
    },
  },
};
</script>

<style lang="less" scoped>
.page-bar {
  margin: 40px auto;
}
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar li:first-child > a {
  margin-left: 0px;
}
.page-bar a {
  border: 1px solid #ddd;
  text-decoration: none;
  position: relative;
  float: left;
  padding: 7px 13.5px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #5d6062;
  cursor: pointer;
}
.page-bar a:hover {
  background-color: #eee;
}
.page-bar a.banclick {
  cursor: not-allowed;
}
.page-bar .active a {
  color: #fff;
  cursor: default;
  background-color: #e96463;
  border-color: #e96463;
}
.page-bar i {
  font-style: normal;
  color: #d44950;
  margin: 0px 4px;
  font-size: 12px;
}
</style>