import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // token: localStorage.getItem("token"),
        // user_id: localStorage.getItem("user-id"),
        // uuid: localStorage.getItem('uuidstatus'),
        createTheOrder: {
            user_id: '',
            delivery: '',
            delivery_time: '',
            address_id: '',
            buyer: []
        }
    },
    mutations: {
        // onToken(state, val) {
        //     state.token = val;
        // },
        // onUesrId(state, val) {
        //     state.user_id = val;
        // },
        onCreateTheOrder(state, val) {
            state.createTheOrder = val;
        }
    },
    actions: {},
    modules: {}
})