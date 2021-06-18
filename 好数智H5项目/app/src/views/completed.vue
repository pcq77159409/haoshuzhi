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
        <p class="one">交易成功</p>
      </div>
      <div class="right">
        <img src="../assets/cars.png" alt="" />
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
          <p class="spend">
            含话费￥{{ orderdetail.numberinfo.contain_charge }}
          </p>
          <p class="ordertime">
            <span class="need"
              >实付
              <h6 class="pay">￥{{ dataInfo.price }}</h6></span
            >
          </p>
          <div class="money">
            <p class="moneys" @click="onclickTuiK(dataInfo.id)">退款</p>
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
        <li>
          支付方式:
          <p class="rights">微信支付</p>
        </li>
        <li>
          下单时间:
          <p class="rights">{{ dataInfo.pay_time }}</p>
        </li>
        <li>
          发货时间:
          <p class="rights">{{ dataInfo.delivery_time }}</p>
        </li>
        <li>
          快递方式:
          <p class="rights">{{ dataInfo.delivery }}</p>
        </li>
        <li>
          运单编号:
          <p class="rights">{{ dataInfo.express_number }}</p>
        </li>
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
    <el-dialog :visible.sync="centerDialogVisible" width="295px" center>
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
      <div class="del">
        <p
          @click="$router.push({ path: '/sales', query: { id: dataInfo.id } })"
        >
          申请售后
        </p>
      </div>
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
    onclickTuiK(id) {
      //退款
      this.$post("/api/order/orderrefund", {
        order_id: id,
        user_id: this.$store.state.user_id,
      }).then((r) => {
        console.log(r);
        if (r.code == 200) {
          alert("申请成功,等待商家退款");
        } else {
          alert(r.msg);
        }
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

<style scoped>
.phonels {
  margin-left: 42px;
  margin-bottom: 41px;
  margin-top: -29px;
}
.A /deep/ .el-dialog {
  border-radius: 6px;
}
.A /deep/ .el-dialog--center .el-dialog__body {
  padding: 30px 25px 0;
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
  margin-left: 65px;
  margin-bottom: 15px;
  margin-top: 10px;
}
.el-dialog__wrapper {
  position: fixed;
  top: 132px;
  right: 0px;
  bottom: -1px;
  left: 0;
  overflow: auto;
  margin: 0;
}
.cencl {
  margin-left: 43px;
  color: #333333;
  font-weight: bold;
}
.phones {
  margin-left: 95px;
  color: #333333;
  font-weight: bold;
}
.el-dialog--center .el-dialog__footer {
  height: 51px;
  margin-top: -30px;
}
.xia {
  width: 295px;
  height: 1px;
  background-color: #f5f5f5;
  margin-top: 10px;
  margin-left: -25px;
}
.que {
  font-size: 15px;
  margin-top: 9px;
  color: #0443d1;
}
.cancal {
  font-size: 15px;
  margin-top: 9px;
  color: #0443d1;
}
.el-dialog--center {
  text-align: center;
  border-radius: 10px;
}
.rightss {
  width: 1px;
  height: 51px;
  background-color: #f5f5f5;
  margin-top: -10px;
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
  border: 1px solid white;
  color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
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
  margin-left: 42px;
}
.cancel {
  width: 100px;
  height: 40px;
}
.cancel p {
  position: absolute;
  right: 114px;
  bottom: 13px;
  border: 1px solid #f5f5f5;
  text-align: center;
  border-radius: 15px;
  color: #999999;
  padding: 6px 17px;
  font-size: 15px;
}
.del p {
  position: absolute;
  right: 11px;
  bottom: 13px;
  border: 1px solid #fe5858;
  text-align: center;
  border-radius: 25px;
  color: #fe5858;
  font-size: 14px;
  width: 112px;
  height: 30px;
  line-height: 30px;
}
.del {
  width: 100px;
  height: 40px;
}
.delivery {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;
}
.v {
  width: 20px;
  height: 20px;
}
.borders {
  border-right: 1px solid #ccc;
  width: 1px;
  height: 22px;
}

.make {
  width: 350px;
  height: 46px;
  background-color: white;
  margin: -52px 13px;
  border-radius: 5px;
  display: flex;
  color: #666666;
  justify-content: space-evenly;
  line-height: 46px;
  margin-bottom: 15px;
  align-items: center;
}
.make .bo {
  display: flex;
  align-items: center;
}
.make p {
  font-size: 15px;
}
.make img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.rights {
  margin-left: 25px;
}
.information {
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
  line-height: 40px;
}
.table {
  font-size: 12px;
  line-height: 40px;
}
.table li {
  display: flex;
  /* width: 200px; */
  height: 30px;
  margin-left: 20px;
  margin-top: 9px;
}
.no {
  width: 350px;
  height: 290px;
  background-color: white;
  margin: -7px 13px;
  border-radius: 5px;
  font-size: 13px;
  margin-bottom: 68px;
}
.yes p {
  line-height: 40px;
  display: flex;
  align-items: center;
}
.yes span {
  color: #fe5858;
}
.yes {
  width: 350px;
  height: 40px;
  background-color: white;
  margin: 11px 13px;
  border-radius: 5px;
  font-size: 13px;
}
.v {
  width: 20px;
  height: 20px;
  margin: 0 14px;
}
.redmoney {
  color: #fe5858;
  font-size: 16px;
  margin-right: 6px;
}
.heng {
  display: flex;
  justify-content: space-between;
}
.this {
  margin-left: 5px;
}
.moneys {
  width: 54px;
  height: 17px;
  position: absolute;
  right: 11px;
  bottom: 50px;
  border: 1px solid #999999;
  text-align: center;
  border-radius: 15px;
  color: #666666;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  padding: 2px 0;
}
.pay {
  margin: -25px 0px -25px 28px;
  font-size: 16px;
  color: #fe5858;
}
.need {
  /* margin: 0 255px; */
  /* display: block; */
  font-weight: bold;
  font-size: 14px;
  color: #333333;
}
.ordertime {
  width: 100%;
  font-size: 12px;
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
}
.spend {
  font-size: 12px;
  margin-top: 5px;
}
.yidong {
  font-size: 12px;
  margin-top: 5px;
}
.phonenumber {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.xian {
  width: 330px;
  height: 1px;
  background-color: #f2f2f2;
  margin: 10px auto;
}
.names {
  margin: 0 10px;
  line-height: 25px;
  color: #666666;
}

.shoping {
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.shops {
  width: 15px;
  height: 15px;
  padding: 0px 2px;
  margin-right: 4px;
}
.times {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
}
.orders {
  width: 350px;
  height: 183px;
  background-color: white;
  margin: 8px 13px;
  border-radius: 5px;
  position: relative;
}

.name {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  width: 200px;
  margin: 10px 45px;
}
.number {
  font-size: 13px;
  font-weight: 500;
  color: #333333;
}
.add {
  font-size: 13px;
  color: #333333;
  width: 200px;
  margin: 0 45px;
}
.A {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
  overflow-x: hidden;
  overflow-y: auto;
}
.imgs {
  width: 100%;
  height: 85px;
  background-color: #fe5858;
  display: flex;
  position: relative;
  align-items: center;
}

.back {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.detalis {
  width: 100px;
  height: 30px;
  margin: 0 auto;
  color: white;
  font-size: 18px;
  font-weight: Medium;
  font-family: PingFang-SC-Medium;
}
.total {
  display: flex;
}
.delivered {
  width: 255px;
  height: 95px;
  background-color: #fe5858;
}
.right {
  width: 120px;
  height: 95px;
  background-color: #fe5858;
}
.right img {
  width: 60px;
  height: 52px;
  margin: 0 -9px;
}
.address {
  position: absolute;
  margin: -27px 13px;
  width: 350px;
  height: 80px;
  background-color: white;
  border-radius: 5px;
}

.one {
  width: 100px;
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-left: 68px;
  margin-top: 10px;
}
.two {
  width: 220px;
  height: 30px;
  font-size: 14px;
  color: white;
  margin-left: 42px;
}
</style>