import wx from "weixin-js-sdk";
const jsApiList = ["onMenuShareAppMessage", "onMenuShareTimeline"];
//要用到微信API
function getJSSDK(data) {
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.noncestr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名
    jsApiList: jsApiList, // 必填，需要使用的JS接口列表
    success: () => {
      alert("success");
    },
  });
  wx.ready(function() {
    wx.onMenuShareAppMessage({
      title: "好数智--手机靓号商城",
      desc:
        "中国移动、联通、电信手机靓号、宽带在线办理业务，手机数码、数码配件、智能家居等渠道销售业务。",
      link: "www.haoshuzhi.com",
      imgUrl:
        "http://digital.haoshuzhi.cn/public/uploads/20210607/00eb7ee74d699bf0cb3e9ec90f43b543.png",
      trigger: function trigger() {},
      success: function success() {
        // alert('已分享');
      },
      cancel: function cancel() {
        // alert('已取消');
      },
      fail: function fail() {
        // alert('进来了');
      },
    });
    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
      title: "好数智--手机靓号商城",
      link: "www.haoshuzhi.com",
      imgUrl:
        "http://digital.haoshuzhi.cn/public/uploads/20210607/00eb7ee74d699bf0cb3e9ec90f43b543.png",
      trigger: function trigger() {
        // alert('用户点击分享到朋友圈');
      },
      success: function success() {
        // alert('已分享');
      },
      cancel: function cancel() {
        //alert('已取消');
      },
      fail: function fail() {
        // alert(JSON.stringify(res));
      },
    });
  });
  wx.error((res) => {
    console.log(JSON.stringify(res) + "微信验证失败");
  });
}
export default {
  // 获取JSSDK
  getJSSDK: getJSSDK,
};
