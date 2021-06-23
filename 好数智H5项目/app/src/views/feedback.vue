<template>
    <div class="hui">
        <div class="header">
            <img src="../assets/left.png" alt="" class="back" @click="$router.go(-1)">
            <p class="Feedback">意见反馈</p>
        </div>
        <div class="one">
            <input type="text" placeholder="请输入反馈内容，我们将更好的为您服务" class="borders">
            <p class="number">0/300</p>
            <img src="../assets/jia.png" alt="" class="jia">
        </div>
        <div class="ti">
            提交反馈
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    mounted(){
        axios.get('/app/api/home_page/getNav').then(res =>{
            console.log(res);
        })
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.hui{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.header{
    width: 100%;
    height: 64/@vw;
    background-color: #fe5858;
}
.back{
    width: 16/@vw;
    height: 16/@vw;
    margin: 26/@vw 12/@vw;
}
.Feedback{
    font-size: 16/@vw;
    color: white;
    margin: -50/@vw 154/@vw;
}
.one{
    width: 340/@vw;
    height: 180/@vw;
    background-color: white;
    border-radius: 5/@vw;
    margin: 15/@vw 17/@vw;
}
.borders{
        width: 336/@vw;
    height: 77/@vw;
    border: none;
    outline: none;
    text-indent: 5/@vw;
}
.number{
        float: right;
    margin-right: 10/@vw;
    color: #666666;
    font-size: 14/@vw;
}
.jia{
    width: 70/@vw;
    height: 70/@vw;
    margin: 19/@vw 17/@vw;
}
.ti {
    width: 345/@vw;
    height: 44/@vw;
    margin: 88/@vw auto 0; 
    background-color: #ea5656;
    border-radius: 25/@vw;
    color: #ffffff;
    font-size: 15/@vw;
    text-align: center;
    line-height: 44/@vw;
}
</style>