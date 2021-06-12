<template>
    <div class="hui">
              <div class="header">
                  <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)">
                  <p class="close">取消订单</p>
              </div>
              <div class="banner">
                  <img src="../assets/close.png" alt="">
                 <div class="banners">
                     <img src="../assets/111.png" alt="">
                     <p class="closes">成功取消</p>
                     <p class="wen">订单已取消，看看其他的吧</p>
                     <div class="A">
                         <p>返回首页</p>
                     </div>
                     <div class="B">
                         <p>查看订单</p>
                     </div>
                 </div>
              </div>
              <div>
                  <p class="jing">精品推荐</p>
                    <div class="cap">
      <router-link to="/screen">
      <div class="shit">
        <img src="../assets/te.png" alt="" />
        <div class="number">13133393741</div>
        <div class="money">
          <p class="one">上海移动</p>
         
        </div>
        <div class="money">
          <p class="han">含话费￥260</p>
          <p class="twietion">￥260</p>
        </div>
      </div>
      </router-link>
      <router-link to="/screen">
      <div class="shit">
        <img src="../assets/te.png" alt="" />
        <div class="number">13133393741</div>
        <div class="money">
          <p class="one">上海移动</p>
       
        </div>
        <div class="money">
          <p class="han">含话费￥260</p>
          <p class="twietion">￥260</p>
        </div>
      </div>
      </router-link>
      <router-link to="/screen">
      <div class="shit">
        <img src="../assets/te.png" alt="" />
        <div class="number">13133393741</div>
        <div class="money">
          <p class="one">上海移动</p>
         
        </div>
        <div class="money">
          <p class="han">含话费￥260</p>
          <p class="twietion">￥260</p>
        </div>
      </div>
      </router-link>
      <router-link to="/screen">
      <div class="shit">
        <img src="../assets/te.png" alt="" />
        <div class="number">13133393741</div>
        <div class="money">
          <p class="one">上海移动</p>
        
        </div>
        <div class="money">
          <p class="han">含话费￥260</p>
          <p class="twietion">￥260</p>
        </div>
      </div>
      </router-link>
    </div>
                  
              </div>
    </div>
</template>

<style scoped>
.hui{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}
.header{
    width: 100%;
    height: 64px;
    background-color: #fe5858;
    display: flex;
    align-items: center;
    }

    .back{
        width: 10px;
        height: 16px;
        margin: 0 15px;
    }
    .close{
        color: #ffffff;
        font-size: 16px;
        margin: 0 120px;
    }
    .banner{
        width: 345px;
        height: 180px;
    position: relative;
        margin: 15px 15px;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .jing{
        color: #333333;
        font-size: 13px;
        font-weight: bold;
        margin: 0 15px;
    }
a {
  text-decoration: none;
  color: #333333;

}
.number {
  color: #333333;
  font-size: 19px;
  margin-top: 15px;
  margin-left: 10px;
}
.money {
  margin-top: 8px;
  width: 95%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-left: 10px;
}

.banners img{
    position: absolute;
    margin: -154px 124px;
    width: 20px;
    height: 20px;
}
.banners .closes{
margin: -155px 150px;
    position: absolute;
    width: 100px;
    font-size: 16px;
    color: #ffffff;
    font-family: PingFang-SC-Heavy;
}
.banners .wen{
      margin: -120px 92px;
    position: absolute;
    width: 157px;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 1px;
}
.A{
        margin: -81px 70px;
    position: absolute;
    width: 157px;
    font-size: 12px;
    color: #FE5858;
    letter-spacing: 1px;
    width: 80px;
    height: 30px;
    background: #ffffff;
    line-height: 30px;
    text-align: center;
    border-radius: 20px;

}
.B{
        margin: -81px 197px;
    position: absolute;
    width: 157px;
    font-size: 12px;
    color: #fe5858;
    letter-spacing: 1px;
    width: 80px;
    height: 30px;
    background: #ffffff;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
}





.cap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-evenly;
  background: #f5f5f5;
}

.cap .shit {
  width: 125pt;
  height: 75pt;
  border: 0.5pt solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
}
.cap .shit img {
  float: right;
  width: 30px;
  height: 18px;
}
.cap .shit .dolor {
  margin-right: 10px;
  color: #dd1414;
}
.cap .shit .han {
  font-size: 8px;
  color: #dd1414;
  margin-top: 4px;
}
.cap .shit .twietion {
  font-size: 17px;
  font-weight: bold;
  color: #dc0101;
  margin-right: 10px;
}


</style>