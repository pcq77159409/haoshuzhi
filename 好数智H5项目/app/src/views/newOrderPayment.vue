<template>
  <div class="new_box">
    <div class="jumplabel">
      <img src="../assets/left.png" alt="" @click="$router.go(-1)" />
      <h4>收支明细</h4>
    </div>
    <h4>2021年3月</h4>
    <div class="incomes">
      <ul>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
        <li>
          <div class="shoy yi">
            <p>消费-移动靓号136****2222</p>
            <span>-100</span>
          </div>
          <div class="danq">
            <p>2021-03-15  14:01:16</p>
            <span>当前余额160.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+50</span>
          </div>
          <div class="danq">
            <p>2021-03-15  15:44:06</p>
            <span>当前余额260.00</span>
          </div>
        </li>
        <li>
          <div class="shoy yi">
            <p>微信提现</p>
            <span>-100</span>
          </div>
          <div class="danq">
            <p>2021-03-15  14:01:16</p>
            <span>当前余额210.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+110</span>
          </div>
          <div class="danq">
            <p>2021-03-15  15:44:06</p>
            <span>当前余额310.00</span>
          </div>
        </li>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+200</span>
          </div>
          <div class="danq">
            <p>2021-03-10  14:11:16</p>
            <span>当前余额200.00</span>
          </div>
        </li>
      </ul>
    </div>
     <h4>2021年2月</h4>
    <div class="incomes">
      <ul>
        <li>
          <div class="shoy">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
        <li>
          <div class="shoy yi">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
         <li>
          <div class="shoy">
            <p>收益</p>
            <span>+320</span>
          </div>
          <div class="danq">
            <p>2021-03-15 15:44:06</p>
            <span>当前余额480.00</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.new_box {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 64px;
  overflow: hidden;
  box-sizing: border-box;
}
.new_box .jumplabel {
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
.new_box .jumplabel img {
  width: 10px;
  height: 16px;
  margin-left: 15px;
}
.new_box .jumplabel h4 {
  font-size: 16px;
  margin: 0 auto;
  color: #fff;
  font-weight: 500;
}
.new_box h4 {
  margin: 10px 0 10px 15px;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
}
.new_box .incomes {
  width: 345px;
  height: 400px;
  background-color: #fff;
  margin: 0 15px;
}
.new_box .incomes ul {
  width: 100%;
  height: 100%;
}
.new_box .incomes ul li {
  width: 325px;
  height: 66px;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.new_box .incomes ul li:last-child{
    border-bottom: none;
} 
.new_box .incomes ul li .shoy,
.new_box .incomes ul li .danq {
  display: flex;
  justify-content: space-between;
}
.new_box .incomes ul li .danq {
  margin-top: 6px;
}
.new_box .incomes ul li .shoy p {
  font-size: 14px;
  color: #333333;
}
.new_box .incomes ul li .shoy span {
  font-size: 14px;
  color: #f62c2c;
  font-weight: 600;
}
.new_box .incomes ul li .danq p,
.new_box .incomes ul li .danq span {
  font-size: 12px;
  color: #666666;
}
.new_box .incomes ul li .yi span {
  color: #333333;
}
</style>