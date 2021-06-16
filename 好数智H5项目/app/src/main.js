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
            token: this.$store.state.token,
            user_id: this.$store.state.user_id,
        }
    }).then((r) => {
        if (r.code == 700 || r.code == 600) {
            this.$router.push('/login');
        } else {
            return r;
        }
    });
}
Vue.prototype.$post = function(url, val) {
    return axios.post(url, val, {
        headers: {
            token: this.$store.state.token,
            user_id: this.$store.state.user_id,
        }
    }).then((r) => {
        if (r.code == 700 || r.code == 600) {
            this.$router.push('/login');
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