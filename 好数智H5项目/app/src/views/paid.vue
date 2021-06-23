<template>
  <div class="A">
    <div class="imgs">
      <img
        src="../assets/left.png"
        alt=""
        class="back"
        @click="$router.go(-1)"
      />
      <p class="detalis">订单详情</p>
    </div>
    <div class="total">
      <div class="delivered">
        <p class="one">待付款</p>
        <!-- <p class="two">交易将在25分钟30秒后自动关闭</p> -->
      </div>
      <div class="right">
        <img src="../assets/qq.png" alt="" />
      </div>
    </div>
    <div class="address">
      <img src="../assets/ding.png" alt="" />
      <div>
        <p class="name">
          {{ dataInfo.name }} <span class="number">{{ dataInfo.mobile }}</span>
        </p>
        <p class="add">
          收货地址:{{ dataInfo.province }}{{ dataInfo.city }}{{ dataInfo.area
          }}<span
            v-show="dataInfo.address != null || dataInfo.address != 'null'"
            >{{ dataInfo.address }}</span
          >
        </p>
      </div>
    </div>
    <div>
      <div class="orders">
        <div class="times">
          <p class="shoping">
            <img
              src="../assets/shop.png"
              alt=""
              class="shops"
            />数智时代专营店<span class="this">></span>
          </p>
        </div>
        <div class="xian"></div>
        <div class="names">
          <div class="heng">
            <p class="phonenumber">{{ orderdetail.phonenumber }}</p>
            <p class="redmoney">￥{{ dataInfo.price }}</p>
          </div>
          <p class="yidong">上海移动</p>
          <div class="hhf">
            <p class="spend">
              含话费￥{{ orderdetail.numberinfo.contain_charge }}
            </p>
            <p class="ordertime">
              需付<span class="pays">￥{{ dataInfo.price }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="yes">
      <p>
        <img src="../assets/v@2x.png" alt="" class="v" />
        获得<span>160</span>点积分
      </p>
    </div> -->
    <div class="no">
      <p class="information">订单信息</p>
      <ul class="table">
        <li>
          订单编号:
          <p class="rights">{{ dataInfo.number }}</p>
        </li>
        <!-- <li>
          支付方式:
          <p class="rights">微信支付</p>
        </li> -->
        <li>
          下单时间:
          <p class="rights">{{ dataInfo.updated_at }}</p>
        </li>
        <!-- <li>
          发货时间:
          <p class="rights">2021.03.16 16:23:27</p>
        </li>
        <li>
          快递方式:
          <p class="rights">顺丰速运</p>
        </li>
        <li>
          运单编号:
          <p class="rights">92929292</p>
        </li> -->
      </ul>
    </div>
    <div class="make">
      <div class="bo">
        <img src="../assets/dianhua.png" alt="" />
        <p @click="centerDialogVisible = true">拨打电话</p>
      </div>
      <div class="borders"></div>
      <div class="bo">
        <img src="../assets/kefu.png" alt="" />
        <p>咨询客服</p>
      </div>
    </div>

    <el-dialog :visible.sync="centerDialogVisible" width="78.6666vw" center>
      <span class="phones">拨打电话</span>
      <p class="phonel">030—79772486</p>
      <div class="xia"></div>
      <span slot="footer" class="dialog-footer">
        <div class="buttom">
          <div class="cancal" @click="centerDialogVisible = false">取消</div>
          <div class="rightss"></div>
          <div class="que">确定</div>
        </div>
      </span>
    </el-dialog>
    <div class="delivery">
      <p @click="onclickCenel = true">取消订单</p>
      <p @click="onclickFK(dataInfo.id, dataInfo.price, dataInfo.number)">
        去支付
      </p>
    </div>
    <div class="chuan">
      <el-dialog :visible.sync="onclickCenel" width="78.6666vw" center>
        <span class="cencl"> </span>
        <p class="phonels">请问您是否确认取消此订单？</p>

        <div class="xia"></div>
        <span slot="footer" class="dialog-footer">
          <div class="buttom">
            <div class="cancal" @click="onclickCenel = false">取消</div>
            <div class="rightss"></div>
            <div class="que" @click="$router.push('/cancel')">确定</div>
          </div>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      centerDialogVisible: false,
      onclickCenel: false,
      orderdetail: {
        id: 5,
        order_id: 11,
        goods_id: 1,
        store_id: 1,
        name: "",
        phonenumber: 1,
        card_back: "1112",
        card_front: "1112",
        card_face: "11112",
        package_id: null,
        package_name: null,
        created_at: 1616849212,
        updated_at: 1616849212,
        cardnumber: null,
        user_id: 0,
        numberinfo: {
          contain_charge: 0,
          contract: "0",
          create_time: 1618325669,
          describe: "测试数据7",
          handle_type: 1,
          id: 7,
          initial_charge: 150,
          location: "上海市",
          min_charge: 38,
          number: "13554888999",
          operator: "1",
          owner: "cecil",
          owner_phone: "18876548765",
          package_group: "YD00002",
          prepaid_charge: 50,
          purchase_price: "20.00",
          recommend: 1,
          sale_price: "100.00",
          status: 1,
          store_id: 1,
          store_phone: 2147483647,
          tag: null,
          update_time: null,
        },
      },
      dataInfo: [
        {
          id: 2,
          number: "SJ20210327202033070753171",
          user_id: 6,
          name: "Address",
          mobile: "18895358662",
          province: "浙江省",
          city: "杭州市",
          area: "滨江区",
          address: "浦沿街道哈哈哈哈哈",
          created_at: 1616847633,
          updated_at: 1616847633,
          delivery: "线上配送",
          delivery_time: "就是现在",
          price: "3.00",
          finishtime: null,
          pay_money: null,
          status: 1,
          pay_time: null,
          orderdetail: [
            {
              id: 5,
              order_id: 11,
              goods_id: 1,
              store_id: 1,
              name: "",
              phonenumber: 1,
              card_back: "1112",
              card_front: "1112",
              card_face: "11112",
              package_id: null,
              package_name: null,
              created_at: 1616849212,
              updated_at: 1616849212,
              cardnumber: null,
              user_id: 0,
            },
          ],
        },
      ],
    };
  },
  methods: {
    onclickFK(id, price, number) {
      //去付款
      sessionStorage.setItem("time", +new Date());
      this.$router.push({
        path: "/commerce_payment",
        query: {
          order_id: id,
          price: price,
          number: number,
        },
      });
    },
  },
  mounted() {
    this.$get("/api/order/info", {
      user_id: this.$store.state.user_id,
      order_id: this.$route.query.id,
    }).then((r) => {
      console.log(r);
      this.dataInfo = r.data;
      this.orderdetail = r.data.orderdetail[0];
    });
  },
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
.phonels {
  margin-left: 42/@vw;
  margin-bottom: 41/@vw;
  margin-top: -29/@vw;
}
.A /deep/ .el-dialog {
  border-radius: 6/@vw;
}
.A /deep/ .el-dialog--center .el-dialog__body {
  padding: 30/@vw 25/@vw 0;
}
.A /deep/ .el-dialog__header {
  padding: 0;
}
.A /deep/ .el-dialog--center .el-dialog__footer {
  padding-bottom: 0;
}
.A /deep/ .el-icon-close:before {
  content: none;
}
.A /deep/ .el-dialog__headerbtn {
  background-color: white;
}
.phonel {
  margin-left: 65/@vw;
  margin-bottom: 15/@vw;
  margin-top: 10/@vw;
}
.el-dialog__wrapper {
  position: fixed;
  top: 132/@vw;
  right: 0/@vw;
  bottom: -1/@vw;
  left: 0;
  overflow: auto;
  margin: 0;
}
.cencl {
  margin-left: 43/@vw;
  color: #333333;
  font-weight: bold;
}
.phones {
  margin-left: 95/@vw;
  color: #333333;
  font-weight: bold;
}
.el-dialog--center .el-dialog__footer {
  height: 51/@vw;
  margin-top: -30/@vw;
}
.xia {
  width: 295/@vw;
  height: 1/@vw;
  background-color: #f5f5f5;
  margin-top: 10/@vw;
  margin-left: -25/@vw;
}
.que {
  font-size: 15/@vw;
  margin-top: 9/@vw;
  color: #0443d1;
}
.cancal {
  font-size: 15/@vw;
  margin-top: 9/@vw;
  color: #0443d1;
}
.el-dialog--center {
  text-align: center;
  border-radius: 10/@vw;
}
.rightss {
  width: 1/@vw;
  height: 51/@vw;
  background-color: #f5f5f5;
  margin-top: -10/@vw;
}
.buttom {
  display: flex;
  justify-content: space-around;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1/@vw solid white;
  color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12/@vw 20/@vw;
  font-size: 14/@vw;
  border-radius: 4/@vw;
}
.el-button--primary:hover {
  background: white;
  border-color: white;
  color: white;
}
.el-button--primary {
  color: #409eff;
  background-color: white;
  border-color: white;
}

.el-button + .el-button {
  margin-left: 42/@vw;
}
.cancel {
  width: 100/@vw;
  height: 40/@vw;
}

.delivery {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60/@vw;
  background-color: white;
  display: flex;
  align-items: center;
}
.delivery p:first-child {
  margin: 0 25/@vw 0 152/@vw;
  border: 1/@vw solid #f5f5f5;
  text-align: center;
  border-radius: 15/@vw;
  color: #999999;
  font-size: 12/@vw;
  width: 112/@vw;
  height: 26/@vw;
  line-height: 26/@vw;
}
.delivery p {
  border: 1/@vw solid #fe5858;
  text-align: center;
  border-radius: 15/@vw;
  color: #fe5858;
  font-size: 12/@vw;
  width: 112/@vw;
  height: 26/@vw;
  line-height: 26/@vw;
  margin-right: 15/@vw;
}
.v {
  width: 20/@vw;
  height: 20/@vw;
  margin: 0 14/@vw;
}
.borders {
  border-right: 1/@vw solid #ccc;
  width: 1/@vw;
  height: 22/@vw;
}
.make {
  width: 350/@vw;
  height: 46/@vw;
  background-color: white;
  margin: -52/@vw 13/@vw;
  border-radius: 5/@vw;
  display: flex;
  color: #666666;
  justify-content: space-evenly;
  line-height: 46/@vw;
  margin-bottom: 15/@vw;
  align-items: center;
}
.make .bo {
  display: flex;
  align-items: center;
}
.make p {
  font-size: 15/@vw;
}
.make img {
  width: 15/@vw;
  height: 15/@vw;
  margin-right: 10/@vw;
}
.rights {
  margin-left: 25/@vw;
}
.information {
  font-size: 14/@vw;
  font-weight: bold;
  margin-left: 20/@vw;
  margin-top: 20/@vw;
  width: 200/@vw;
  height: 30/@vw;
  line-height: 40/@vw;
}
.table {
  font-size: 12/@vw;
  line-height: 40/@vw;
}
.table li {
  display: flex;
  /* width: 200/@vw; */
  height: 30/@vw;
  margin-left: 20/@vw;
  margin-top: 9/@vw;
}
.no {
  width: 350/@vw;
  height: 125/@vw;
  background-color: white;
  margin: 65/@vw 13/@vw;
  border-radius: 5/@vw;
  font-size: 13/@vw;
}
/* .yes p {
  line-height: 40/@vw;
  display: flex;
  align-items: center;
}
.yes span {
  color: #fe5858;
}
.yes {
  width: 350/@vw;
  height: 40/@vw;
  background-color: white;
  margin: -52/@vw 13/@vw;
  border-radius: 5/@vw;
  font-size: 13/@vw;
} */
.redmoney {
  color: #fe5858;
  font-size: 13/@vw;
}
.heng {
  display: flex;
  justify-content: space-between;
}
.this {
  margin-left: 5/@vw;
}
.moneys {
  position: absolute;
  right: 11/@vw;
  bottom: 47/@vw;
  border: 1/@vw solid #666666;
  text-align: center;
  border-radius: 15/@vw;
  color: #666666;
  font-weight: 600;
  padding: 0 18/@vw;
  font-size: 12/@vw;
}
.pays {
  font-size: 16/@vw;
  color: #fe5858;
}
.need {
  display: block;
  font-size: 14/@vw;
  color: #333333;
  margin-top: 10/@vw;
  margin-left: 231/@vw;
}
.ordertime {
  font-size: 12/@vw;
  display: flex;
  color: #333333;
  font-weight: 600;
}
.hhf {
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.spend {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}
.yidong {
  font-size: 12/@vw;
  margin-top: 5/@vw;
}
.phonenumber {
  font-size: 16/@vw;
  font-weight: bold;
  color: #333333;
}
.xian {
  width: 330/@vw;
  height: 1/@vw;
  background-color: #f2f2f2;
  margin: 10/@vw auto;
}
.names {
  margin: 0 10/@vw;
  line-height: 25/@vw;
  color: #666666;
}

.shoping {
  font-size: 15/@vw;
  font-weight: bold;
  margin-top: 10/@vw;
  display: flex;
  align-items: center;
}
.shops {
  width: 15/@vw;
  height: 15/@vw;
  padding: 0/@vw 2/@vw;
  margin-right: 8/@vw;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10/@vw 10/@vw;
}
.orders {
  width: 350/@vw;
  height: 148/@vw;
  background-color: white;
  margin: 35/@vw auto -54/@vw;
  border-radius: 5/@vw;
  position: relative;
}

.name {
  font-size: 15/@vw;
  font-weight: bold;
  color: #333333;
  width: 200/@vw;
  margin: 6/@vw 15/@vw;
}
.number {
  font-size: 13/@vw;
  font-weight: 500;
  color: #333333;
}
.add {
  font-size: 13/@vw;
  color: #333333;
  /* width: 200/@vw; */
  margin: 0 15/@vw;
}
.A {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
  padding-bottom:50/@vw ;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.imgs {
  width: 100%;
  height: 85/@vw;
  background-color: #fe5858;
  display: flex;
  position: relative;
  align-items: center;
}

.back {
  width: 10/@vw;
  height: 16/@vw;
  margin-left: 15/@vw;
}
.detalis {
  width: 100/@vw;
  height: 30/@vw;
  margin: 0 auto;
  color: white;
  font-size: 18/@vw;
  font-weight: Medium;
  font-family: PingFang-SC-Medium;
}
.total {
  display: flex;
}
.delivered {
  width: 255/@vw;
  height: 95/@vw;
  background-color: #fe5858;
}
.right {
  width: 120/@vw;
  height: 95/@vw;
  background-color: #fe5858;
}
.right img {
  width: 43/@vw;
  height: 45/@vw;
  margin: 0 29/@vw;
}
.address {
  position: relative;
  margin: -27/@vw 13/@vw;
  width: 350/@vw;
  height: 80/@vw;
  background-color: white;
  border-radius: 5/@vw;
  display: flex;
  align-items: center;
}
.address img {
  width: 20/@vw;
  height: 30/@vw;
  margin-left: 20/@vw;
  margin-top: 8/@vw;
}
.one {
  width: 100/@vw;
  height: 35/@vw;
  font-size: 20/@vw;
  font-weight: bold;
  color: white;
  margin-left: 40/@vw;
}
.two {
  width: 220/@vw;
  height: 30/@vw;
  font-size: 14/@vw;
  color: white;
  margin-left: 42/@vw;
}
</style>