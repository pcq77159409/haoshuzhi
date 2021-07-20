import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem } from 'vant';
import axios from "axios";
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })
import QRCode from 'qrcode' //定义生成二维码组件
QRCode;
// import getBankcardinfo from 'bankcardinfo'
// Vue.prototype.$getBankcardinfo = getBankcardinfo
axios.defaults.baseURL = '/index.php';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

import 'swiper/dist/css/swiper.css';

import Swiper from 'swiper';
// Vue.use(Swiper)
Swiper;

Vue.use(Swipe);
Vue.use(SwipeItem);

axios.interceptors.request.use(res => {
    document.getElementById('login').style.display = 'flex';
    return res;
});
//response拦截器
axios.interceptors.response.use(res => {
    document.getElementById('login').style.display = 'none';
    return res.data;
}, error => {
    //token失效返回401处理
    if (error.response.code == 401) {
        //刷新token
    }
    return Promise.reject(error.response.data) // 返回错误信息
});

Vue.prototype.$get = function(url, val) {
    return axios.get(url, {
        params: val,
        headers: {
            token: localStorage.getItem('token'),
            user_id: localStorage.getItem('user-id'),
            uuid: localStorage.getItem('uuid')
        }
    }).then((r) => {
        if (r.code == 700 || r.code == 600) {
            Vue.$router.push('/login');
        } else if (r.code == 601) {
            axios.post('/api/user/uuidlogin', '', {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuid')
                }
            }).then((r) => {
                if (r.code == 200) {
                    localStorage.setItem('user-id', r.data.id);
                    localStorage.setItem('token', r.data.token);
                    localStorage.setItem('uuidstatus', r.data.uuidstatus);
                }
            })
        } else {
            return r;
        }
    });
}
Vue.prototype.$post = function(url, val) {
    return axios.post(url, val, {
        headers: {
            token: localStorage.getItem('token'),
            user_id: localStorage.getItem('user-id'),
            uuid: localStorage.getItem('uuid')
        }
    }).then((r) => {
        if (r.code == 700 || r.code == 600) {
            Vue.$router.push('/login');
        } else if (r.code == 601) {
            axios.post('/api/user/uuidlogin', {}, {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuid')
                }
            }).then((r) => {
                if (r.code == 200) {
                    localStorage.setItem('user-id', r.data.id);
                    localStorage.setItem('token', r.data.token);
                    localStorage.setItem('uuidstatus', r.data.uuidstatus);
                }
            })
        } else {
            return r;
        }
    });
}

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

if (localStorage.getItem('user-id') == null && localStorage.getItem('token') == null) {
    localStorage.setItem('user-id', '');
    localStorage.setItem('token', '');
}
var ua = navigator.userAgent.toLowerCase();

if (ua.match(/MicroMessenger/i) == "micromessenger") { //判断是否微信浏览器打开
    if (window.location.host != 'www.haoshuzhi.com') {
        window.location.href = 'http://www.haoshuzhi.com';
    } else {
        const getUrlParam = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        };
        // 强制关注公众号， 获取openid
        const getCode = function() {
            if (sessionStorage.getItem("code") && sessionStorage.getItem("code") != "undefined" && sessionStorage.getItem("code") != null) {
                return false;
            }
            var code = getUrlParam('code') // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
            var local = window.location.href;
            var APPID = 'wx979caaad1131e6c2';
            if (code == null || code === '') {
                let num = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=#wechat_redirect';
                // alert(num);
                // return false;
                window.location.href = num;
                // alert(window.location.href);
            } else {
                // getOpenId(code) //把code传给后台获取用户信息
                axios.get('/api/home_page/getOpenid?code=' + code).then((r) => {
                    if (r.data.openid && r.data.openid) {
                        localStorage.setItem('uuid', r.data.openid);
                        axios.post('api/user/uuidlogin', {}, {
                            headers: {
                                token: localStorage.getItem('token'),
                                user_id: localStorage.getItem('user-id'),
                                uuid: r.data.openid
                            }
                        }).then((r) => {
                            if (r.code == 200) {
                                if (r.code == 200) {
                                    localStorage.setItem('user-id', r.data.id);
                                    localStorage.setItem('token', r.data.token);
                                    localStorage.setItem('uuidstatus', r.data.uuidstatus);
                                }
                            }
                        })
                    } else {
                        // location.reload();
                    }

                });
                return false;
            }
        }
        getCode();
    }
} else {
    const uuid = require('uuid')
    if (localStorage.getItem('uuid') == null) {
        localStorage.setItem('uuid', uuid.v1());
    }
}