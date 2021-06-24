import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem } from 'vant';
import axios from "axios";
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
            uuid: localStorage.getItem('uuidstatus')
        }
    }).then((r) => {
        // console.log(r);
        if (r.code == 700 || r.code == 600) {
            Vue.$router.push('/login');
        } else if (r.code == 601) {
            // console.log(601);

            axios.post('api/user/uuidlogin', '', {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuidstatus')
                }
            }).then((r) => {
                // console.log(r);
                if (r.code == 200) {
                    localStorage.setItem('user-id', r.data.id);
                    localStorage.setItem('token', r.data.token);
                    Vue.$store.commit('onToken', localStorage.getItem('token'));
                    Vue.$store.commit('onUesrId', localStorage.getItem('user-id'));
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
            uuid: localStorage.getItem('uuidstatus')
        }
    }).then((r) => {
        // console.log(r);
        if (r.code == 700 || r.code == 600) {
            Vue.$router.push('/login');
        } else if (r.code == 601) {
            // console.log(601);
            axios.post('api/user/uuidlogin', {}, {
                headers: {
                    token: localStorage.getItem('token'),
                    user_id: localStorage.getItem('user-id'),
                    uuid: localStorage.getItem('uuidstatus')
                }
            }).then((r) => {
                // console.log(r);
                if (r.code == 200) {
                    localStorage.setItem('user-id', r.data.id);
                    localStorage.setItem('token', r.data.token);
                    Vue.$store.commit('onToken', localStorage.getItem('token'));
                    Vue.$store.commit('onUesrId', localStorage.getItem('user-id'));
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

const uuid = require('uuid')
if (localStorage.getItem('uuidstatus') == null) {
    localStorage.setItem('uuidstatus', uuid.v1());
}
// console.log(localStorage.getItem('user-id'));
// console.log(localStorage.getItem('token'));
// console.log(localStorage.getItem('uuidstatus'));