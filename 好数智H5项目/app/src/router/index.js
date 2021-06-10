import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/commons/home'
    },
    {
        path: '/comcmons',
        name: 'Commons',
        component: () =>
            import ('../views/commons.vue'),
        children: [{
            path: '/commons',
        }, {
            path: '/commons/about',
            name: 'About',
            component: () =>
                import ('../views/About.vue')
        }, {
            path: '/commons/my',
            name: 'My',
            component: () =>
                import ('../views/My.vue')
        }, {
            path: '/commons/home',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue')
        }, {
            path: '/commons/service',
            name: 'Service',
            component: () =>
                import ('../views/Service.vue')
        }, {
            path: '/commons/user',
            name: 'User',
            component: () =>
                import ('../views/user.vue')
        }]
    },
    {
        path: '/citys',
        name: 'Citys',
        component: () =>
            import ('../views/Citys.vue')
    }, {
        path: '/goAddress',
        name: 'GoAdderss',

        component: () =>
            import ('../views/GoAdderss.vue')
    }, {
        path: '/screen',
        name: 'screen',
        component: () =>
            import ('../views/screening.vue')
    },
    {
        path: '/couples',
        name: 'couples',
        component: () =>
            import ('../views/couples.vue')
    }, {
        path: '/default_page',
        name: 'default_page',
        component: () =>
            import ('../views/default_page.vue')
    }, {
        path: '/details',
        name: 'details',
        component: () =>
            import ('../views/details.vue')
    }, {
        path: '/order',
        name: 'order',
        component: () =>
            import ('../views/order.vue')
    }, {
        path: '/choice',
        name: 'choice',
        component: () =>
            import ('../views/choice.vue')
    }, {
        path: '/khssb',
        name: 'khssb',
        component: () =>
            import ('../views/khssb.vue')
    }, {
        path: '/details_couplesfor',
        name: 'details_couplesfor',
        component: () =>
            import ('../views/details_couplesfor.vue')
    }, {
        path: '/form_orders_path',
        name: 'form_orders_path',
        component: () =>
            import ('../views/form_orders_path.vue')
    }, {
        path: '/form_orders_path_couples',
        name: 'form_orders_path_couples',
        component: () =>
            import ('../views/form_orders_path_couples.vue')
    }, {
        path: '/commerce_payment',
        name: 'commerce_payment',
        component: () =>
            import ('../views/commerce_payment.vue')
    }, {
        path: '/Payload',
        name: 'Payload',
        component: () =>
            import ('../views/Payload.vue')
    }, {
        path: '/confirm',
        name: 'confirm',
        component: () =>
            import ('../views/confirm.vue')
    }, {
        path: '/integral',
        name: 'integral',
        component: () =>
            import ('../views/integral.vue')
    }, {
        path: '/Integral_subsidiary',
        name: 'Integral_subsidiary',
        component: () =>
            import ('../views/Integral_subsidiary.vue')
    }, {
        path: '/Purchase',
        name: 'Purchase',
        component: () =>
            import ('../views/Purchase.vue')
    }, {
        path: '/apply_for',
        name: 'apply_for',
        component: () =>
            import ('../views/apply_for.vue')
    }, {
        path: '/through',
        name: 'through',
        component: () =>
            import ('../views/through.vue')
    }, {
        path: '/payment',
        name: 'payment',
        component: () =>
            import ('../views/payment.vue')
    }, {
        path: '/money_road',
        name: 'money_road',
        component: () =>
            import ('../views/money_road.vue')
    }, {
        path: '/my_commission',
        name: 'my_commission',
        component: () =>
            import ('../views/my_commission.vue')
    }, {
        path: '/commission_subsidiary',
        name: 'commission_subsidiary',
        component: () =>
            import ('../views/commission_subsidiary.vue')
    }, {
        path: '/walletmodel',
        name: 'walletmodel',
        component: () =>
            import ('../views/walletmodel.vue')
    }, {
        path: '/newOrderPayment',
        name: 'newOrderPayment',
        component: () =>
            import ('../views/newOrderPayment.vue')
    }, {
        path: '/Deposit',
        name: 'Deposit',
        component: () =>
            import ('../views/Deposit.vue')
    }, {
        path: '/setting',
        name: 'setting',
        component: () =>
            import ('../views/setting.vue')
    }, {
        path: '/success',
        name: 'success',
        component: () =>
            import ('../views/success.vue')
    }, {
        path: '/sales',
        name: 'sales',
        component: () =>
            import ('../views/sales.vue')
    }, {
        path: '/refuse',
        name: 'refuse',
        component: () =>
            import ('../views/refuse.vue')
    }, {
        path: '/refunds',
        name: 'refunds',
        component: () =>
            import ('../views/refunds.vue')
    }, {
        path: '/refundDetalis',
        name: 'refundDetalis',
        component: () =>
            import ('../views/refundDetalis.vue')
    }, {
        path: '/refund',
        name: 'refund',
        component: () =>
            import ('../views/refund.vue')
    }, {
        path: '/receipt',
        name: 'receipt',
        component: () =>
            import ('../views/receipt.vue')
    }, {
        path: '/paid',
        name: 'paid',
        component: () =>
            import ('../views/paid.vue')
    }, {
        path: '/feedback',
        name: 'feedback',
        component: () =>
            import ('../views/feedback.vue')
    }, {
        path: '/deta',
        name: 'deta',
        component: () =>
            import ('../views/deta.vue')
    }, {
        path: '/completed',
        name: 'completed',
        component: () =>
            import ('../views/completed.vue')
    }, {
        path: '/close',
        name: 'close',
        component: () =>
            import ('../views/close.vue')
    }, {
        path: '/aftersale',
        name: 'aftersale',
        component: () =>
            import ('../views/aftersale.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router