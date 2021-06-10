<template>
    <div class="hui">
        <div class="header">
            <img src="../assets/left.png" alt="" class="back">
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

<style scoped>
.hui{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.header{
    width: 100%;
    height: 64px;
    background-color: #fe5858;
}
.back{
    width: 16px;
    height: 16px;
    margin: 26px 12px;
}
.Feedback{
    font-size: 16px;
    color: white;
    margin: -50px 154px;
}
.one{
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    margin: 15px 17px;
}
.borders{
        width: 336px;
    height: 77px;
    border: none;
    outline: none;
    text-indent: 5px;
}
.number{
        float: right;
    margin-right: 10px;
    color: #666666;
    font-size: 14px;
}
.jia{
    width: 70px;
    height: 70px;
    margin: 19px 17px;
}
.ti {
    width: 345px;
    height: 44px;
    margin: 88px auto 0; 
    background-color: #ea5656;
    border-radius: 25px;
    color: #ffffff;
    font-size: 15px;
    text-align: center;
    line-height: 44px;
}
</style>