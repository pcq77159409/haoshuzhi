import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/commons/home/m'
    },
    {
        path: '/comcmons',
        name: 'Commons',
        component: () =>
            import ('../views/commons.vue'),
        meta: {
            keepAlive: true // 需要缓存
        },
        children: [{
            path: '/commons',
        }, {
            path: '/commons/about',
            name: 'About',
            component: () =>
                import ('../views/About.vue'),
            meta: {
                keepAlive: true // 需要缓存
            }
        }, {
            path: '/commons/my',
            name: 'My',
            component: () =>
                import ('../views/My.vue'),
            meta: {
                keepAlive: true // 需要缓存
            }
        }, {
            path: '/commons/home',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue'),
            meta: {
                keepAlive: true // 需要缓存
            },
            children: [{
                path: '/commons/home/m',
                name: 'm',
                component: () =>
                    import ('../views/m.vue'),
                meta: {
                    keepAlive: true // 需要缓存
                }
            }]
        }, {
            path: '/commons/service',
            name: 'Service',
            component: () =>
                import ('../views/Service.vue'),
            meta: {
                keepAlive: true // 需要缓存
            }
        }, {
            path: '/commons/user',
            name: 'User',
            component: () =>
                import ('../views/user.vue'),
            meta: {
                keepAlive: true // 需要缓存
            }
        }]
    },
    {
        path: '/citys',
        name: 'Citys',
        component: () =>
            import ('../views/Citys.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/goAddress',
        name: 'GoAdderss',

        component: () =>
            import ('../views/GoAdderss.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/screen',
        name: 'screen',
        component: () =>
            import ('../views/screening.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    },
    {
        path: '/couples',
        name: 'couples',
        component: () =>
            import ('../views/couples.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/details',
        name: 'details',
        component: () =>
            import ('../views/details.vue'),
        meta: {
            keepAlive: true
        }
    }, {
        path: '/order',
        name: 'order',
        component: () =>
            import ('../views/order.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/choice',
        name: 'choice',
        component: () =>
            import ('../views/choice.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/khssb',
        name: 'khssb',
        component: () =>
            import ('../views/khssb.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/details_couplesfor',
        name: 'details_couplesfor',
        component: () =>
            import ('../views/details_couplesfor.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/form_orders_path',
        name: 'form_orders_path',
        component: () =>
            import ('../views/form_orders_path.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/form_orders_path_couples',
        name: 'form_orders_path_couples',
        component: () =>
            import ('../views/form_orders_path_couples.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/commerce_payment',
        name: 'commerce_payment',
        component: () =>
            import ('../views/commerce_payment.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/Payload',
        name: 'Payload',
        component: () =>
            import ('../views/Payload.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/confirm',
        name: 'confirm',
        component: () =>
            import ('../views/confirm.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/integral',
        name: 'integral',
        component: () =>
            import ('../views/integral.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/Integral_subsidiary',
        name: 'Integral_subsidiary',
        component: () =>
            import ('../views/Integral_subsidiary.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/Purchase',
        name: 'Purchase',
        component: () =>
            import ('../views/Purchase.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/apply_for',
        name: 'apply_for',
        component: () =>
            import ('../views/apply_for.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/through',
        name: 'through',
        component: () =>
            import ('../views/through.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/payment',
        name: 'payment',
        component: () =>
            import ('../views/payment.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/money_road',
        name: 'money_road',
        component: () =>
            import ('../views/money_road.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/my_commission',
        name: 'my_commission',
        component: () =>
            import ('../views/my_commission.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/commission_subsidiary',
        name: 'commission_subsidiary',
        component: () =>
            import ('../views/commission_subsidiary.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/walletmodel',
        name: 'walletmodel',
        component: () =>
            import ('../views/walletmodel.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/newOrderPayment',
        name: 'newOrderPayment',
        component: () =>
            import ('../views/newOrderPayment.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/Deposit',
        name: 'Deposit',
        component: () =>
            import ('../views/Deposit.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/setting',
        name: 'setting',
        component: () =>
            import ('../views/setting.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/success',
        name: 'success',
        component: () =>
            import ('../views/success.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/sales',
        name: 'sales',
        component: () =>
            import ('../views/sales.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/refuse',
        name: 'refuse',
        component: () =>
            import ('../views/refuse.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/refunds',
        name: 'refunds',
        component: () =>
            import ('../views/refunds.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/refundDetalis',
        name: 'refundDetalis',
        component: () =>
            import ('../views/refundDetalis.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/refund',
        name: 'refund',
        component: () =>
            import ('../views/refund.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/receipt',
        name: 'receipt',
        component: () =>
            import ('../views/receipt.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/paid',
        name: 'paid',
        component: () =>
            import ('../views/paid.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/feedback',
        name: 'feedback',
        component: () =>
            import ('../views/feedback.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/deta',
        name: 'deta',
        component: () =>
            import ('../views/deta.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/completed',
        name: 'completed',
        component: () =>
            import ('../views/completed.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/close',
        name: 'close',
        component: () =>
            import ('../views/close.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/aftersale',
        name: 'aftersale',
        component: () =>
            import ('../views/aftersale.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/cancel',
        name: 'cancel',
        component: () =>
            import ('../views/cancel.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/withdrala',
        name: 'withdrala',
        component: () =>
            import ('../views/withdrala.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/withdrawal_success',
        name: 'withdrawal_success',
        component: () =>
            import ('../views/withdrawal_success.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/newadd',
        name: 'newadd',
        component: () =>
            import ('../views/newadd.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/confirm_couples',
        name: 'confirm_couples',
        component: () =>
            import ('../views/confirm_couples.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/personmsg',
        name: 'personmsg',
        component: () =>
            import ('../views/personmsg.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/authentication',
        name: 'authentication',
        component: () =>
            import ('../views/authentication.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }, {
        path: '/fenye',
        name: 'fenye',
        component: () =>
            import ('../views/fenye.vue'),
        meta: {
            keepAlive: true // 需要缓存
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router