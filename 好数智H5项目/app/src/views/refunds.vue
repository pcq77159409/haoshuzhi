<template>
    <div class="hui">
        <div class="sales">
            <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)">
            <p class="aftersales">申请退款</p>
        </div>
        <div class="one">
            <p class="tui">退款商品</p>
            <div class="two">
                <p class="number">13133393741</p>
                <p class="yingye">上海移动</p>
                <div class="three">
                    <p class="money">含话费￥320</p>
                    <p class="total">总金额:<span class="moneys">￥500</span></p>
                </div>

            </div>

        </div>
        <div class="Servicetype">
            <p class="type">选择服务类型</p>
             <div class="myA">
                <p class="huowu">退款原因</p>
                 <img src="../assets/xing.png" alt="" class="h">
                <img src="../assets/形状 20@2x.png" alt="" class="right">
            </div>
            <div class="my">
                <p class="tuikuan">退款原因</p>
                 <img src="../assets/xing.png" alt="" class="m">
                <img src="../assets/形状 20@2x.png" alt="" class="right">
            </div>
            <div class="mys"> 
                <p class="tuihuo">退款金额</p>
                 <img src="../assets/xing.png" alt="" class="t">
             <p class="rights">￥500</p>
            </div>
            <p class="say">不可修改，最多￥500，含发货邮费￥0.00</p>

        </div>
        <div class="yes">
            <p>提交</p>
        </div>
    </div>
</template>

<style scoped>
.hui {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.yes p{
        text-align: center;
    line-height: 54px;
    color: white;
    font-size: 16px;

}
.yes{
   margin-top: 212px;
    width: 340px;
    height: 54px;
    background-color: #fe5858;
    border-radius: 30px;
    margin-left: 17px;
}
.huowu{
           font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
}
.say{
      font-size: 12px;
    color: #999999;
    margin-left: 10px;
}
.yingye{
        font-size: 12px;
    margin-left: 10px;
    margin-top: -6px;
}
.three{
    margin-top: 6px;
}
.tuikuan{
        font-size: 12px;
    font-weight: bold;
    margin-left: 10px;

}
.tuihuo{
        font-size: 12px;
    font-weight: bold;
     margin-left: 10px;
    
}
.m{
      width: 10px;
    height: 10px;
    margin-left: -249px;
    margin-top: 3px;
}
.h{
         width: 10px;
    height: 10px;
    margin-left: -249px;
    margin-top: 3px;
}
.t{
      width: 10px;
    height: 10px;
    margin-left: -214px;
    margin-top: 3px;
}
.right{
        width: 10px;
    height: 10px;
          margin-top: 7px;
    margin-right: 10px;
}
.rights{
        width: 10px;
    height: 10px;
 margin-top: -3px;
    margin-right: 45px;
    color: #fe5858;
}
.mys{
    display: flex;
    justify-content:space-between;
   margin-top: 20px;
}
.my{
    display: flex;
    justify-content:space-between;
         margin-top: 20px;
}
.myA{
     display: flex;
    justify-content:space-between;
        margin-top: 10px;
    
}
.sales{
    width: 100%;
    height: 64px;
    background-color: #fe5858;
}
.back{
        width: 16px;
    height: 16px;
    margin: 22px 12px;
}
.aftersales{
        margin: -45px 155px;
    color: white;
    font-size: 16px;
}
.one{
    width: 340px;
    height: 130px;
    background-color: white;
    margin: 10px 17px;
    border-radius: 5px;
}
.tui{
    font-size: 13px;
    font-weight: bold;
    margin: 0 10px;
    padding: 10px 0;
}
.two{
    width: 320px;
    height: 80px;
    background-color: #F8F8F8;
    margin: 0 10px;
    border-radius: 5px;
}
.number{
    font-size: 14px;
    font-weight: bold;
    margin: 0 10px;
    padding: 10px 0;
}
.three{
    display: flex;
    justify-content:space-between;
}
.money{
    font-size: 12px;
    margin-left: 10px;
}
.total{
    font-size: 13px;

}
.moneys{
    color: #fe5858;
    margin-right: 10px;
}
.Servicetype{
      width: 340px;
    height: 164px;
    background-color: white;
    margin: 10px 17px;
    border-radius: 5px;
}
.type{
  font-size: 13px;
    font-weight: bold;
    margin: 0 10px;
    padding: 10px 0;
}
</style>