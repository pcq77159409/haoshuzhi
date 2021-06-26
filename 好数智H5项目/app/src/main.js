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


axios.defaults.baseURL = '/index.php';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;

import 'swiper/dist/css/swiper.css';

import Swiper from 'swiper';
// Vue.use(Swiper)
Swiper;

Vue.use(Swipe);
Vue.use(SwipeItem);

//response拦截器
axios.interceptors.response.use(res => {
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
            axios.post('api/user/uuidlogin', '', {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuid')
                }
            }).then((r) => {
                console.log(r);
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
            axios.post('api/user/uuidlogin', {}, {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuid')
                }
            }).then((r) => {
                console.log(r);
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

if (ua.match(/MicroMessenger/i) == "micromessenger") {
    alert('true');
    axios.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx979caaad1131e6c2&redirect_uri=http%3A%2F%2Fhaoshuzhi.cn%2Findex.php%2Fapi%2Fhome_page%2FgetOpenid&response_type=code&scope=snsapi_base&state=123#wechat_redirect').then((r) => {
        console.log(r.data);
        alert(r.data.openid);
    });
} else {
    console.log(false);
    alert('false');
    const uuid = require('uuid')
    if (localStorage.getItem('uuid') == null) {
        localStorage.setItem('uuid', uuid.v1());
    }
}

// console.log(localStorage.getItem('user-id'));
// console.log(localStorage.getItem('token'));
// console.log(localStorage.getItem('uuid'));