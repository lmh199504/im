import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
		path: '/login',
		name: 'Login',
		component: () => import('../components/user/login.vue'),
	},
	{

	}
]


export default router
