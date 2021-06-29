<template>
  <div class="user_box">
    <div class="zixun">
      <p>咨询</p>
    </div>
    <div class="user-bg">
      <div class="telphone">
        <div class="consulting">
          <img src="../assets/矩形 6@2x.png" alt="" />
          <p>电话咨询</p>
        </div>
        <div class="boda">
          <p>拨打客服电话</p>
        </div>
        <h5>*下单后半小时内客服会一对一电话沟通为您服务</h5>
      </div>
      <div class="wechat">
        <div class="wechating">
          <img src="../assets/矩形 6@2x.png" alt="" />
          <p>电话咨询</p>
        </div>
        <ul>
          <li>
            <img src="../assets/webp.webp@2x.png" alt="" />
            <p>客服娇娇</p>
          </li>
          <li>
            <img src="../assets/webp.webp (1)@2x.png" alt="" />
            <p>客服媛媛</p>
          </li>
          <li>
            <img src="../assets/webp.webp (2)@2x.png" alt="" />
            <p>客服谈谈</p>
          </li>
          <li>
            <img src="../assets/webp.webp (3)@2x.png" alt="" />
            <p>客服晗晗</p>
          </li>
        </ul>
        <h5>请选择客服，点击保存微信二维码添加</h5>
      </div>
      <div class="black_bg">
          <div class="tanc">
              <p>×</p>
              <img src="../assets/娇娇@2x.png" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/css/base.less";
.user_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .zixun {
    width: 100%;
    height: 58 / @vw;
    background-color: #fe5858;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14 / @vw;
      color: #fff;
    }
  }
  .user-bg {
    width: 100%;
    height: 100%;
    background: url("../assets/user_bg.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 20 / @vw;
    .telphone {
      width: 345 / @vw;
      height: 168 / @vw;
      background-color: #fff;
      border-radius: 15 / @vw;
      margin: 0 auto;
      .consulting {
        display: flex;
        align-items: center;
        padding: 20 / @vw 0 0 12 / @vw;
        img {
          width: 3 / @vw;
          height: 12 / @vw;
          margin-right: 5 / @vw;
        }
        p {
          font-size: 14 / @vw;
          color: #333333;
        }
      }
      .boda {
        width: 179 / @vw;
        height: 32 / @vw;
        background: url("../assets/圆角矩形 10@2x.png") no-repeat;
        background-size: 179 / @vw 32 / @vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 27 / @vw auto;
        p {
          font-size: 14 / @vw;
          color: #ffffff;
        }
      }
      h5 {
        font-weight: 500;
        font-size: 12 / @vw;
        margin: 0 auto;
        color: #fe5858;
        text-align: center;
      }
    }
    .wechat {
      width: 345 / @vw;
      height: 320 / @vw;
      background-color: #fff;
      border-radius: 15 / @vw;
      margin: 20 / @vw auto;
      .wechating {
        display: flex;
        align-items: center;
        padding: 20 / @vw 0 0 12 / @vw;
        img {
          width: 3 / @vw;
          height: 12 / @vw;
          margin-right: 5 / @vw;
        }
        p {
          font-size: 14 / @vw;
          color: #333333;
        }
      }
      ul {
        width: 205 / @vw;
        height: 216 / @vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 27 / @vw auto 0;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 55 / @vw;
            height: 55 / @vw;
            margin-bottom: 9 / @vw;
          }
          p {
            font-size: 13 / @vw;
            color: #333333;
          }
          &:first-child {
            margin-right: 95 / @vw;
          }
        }
      }
      h5 {
        font-weight: 500;
        font-size: 12 / @vw;
        margin: 0 auto;
        color: #fe5858;
        text-align: center;
      }
    }
    .black_bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        .tanc{
            width: 175/@vw*1.3;
            height: 229/@vw*1.3;
            background-color: #fff;
            img{
                width: 129/@vw*1.3;
                height: 148/@vw*1.3;
                margin-top: 34/@vw;
            }
            p{
                font-size: 20/@vw;
                text-align: right;
                padding: 10/@vw 10/@vw 0 0;
                box-sizing: border-box;
            }
        }
    }
  }
}
</style>