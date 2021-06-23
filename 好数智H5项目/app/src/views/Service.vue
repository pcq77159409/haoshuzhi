<template>
    <div>
        <div class="service">
            <p>收藏</p>
        </div>
        <div class="Collection" align="center">
           <img src="../assets/收藏.png" alt="" >
           <p>您暂时还没有添加收藏呢,快去选择心仪的收藏吧~</p>
        </div>
       <div class="gos">
            <div class="go">
            <p>去收藏~</p>
        </div>
       
       </div>
       
    </div>
</template>


<style lang="less" scoped>
@import "../assets/css/base.less";
.service{
    width: 100%;
    height: 65/@vw;
    background: #FF5757;
}
.service p{
    font-size: 16/@vw*1.3;
    color: white;
    font-family: PingFang-SC-Medium;
    font-weight: Medium;
    line-height: 65/@vw;
    text-align: center;

}
.Collection{
    width: 100%;
    height: 300/@vw;
}
.Collection img{
    width: 180/@vw*1.3;
    height: 115/@vw*1.3;
    margin-top: 50/@vw;
}
.Collection p{
    font-size: 13/@vw;
    margin-top: 10/@vw;
    color: #999999;
}
.gos{
    width: 100%;
    height: 30/@vw;
  
}
.go {
    width:280/@vw ;
    height: 30/@vw;
    background: #FF5757;
    border-radius: 15/@vw;
    text-align: center;
    line-height: 30/@vw;
    margin: 0 auto;
    color: white;
}
</style>