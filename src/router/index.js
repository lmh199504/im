import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/index.vue')
		// component: () => import('../components/user/login.vue'),
	},
	{
		path: '/phoneLogin',
		name: 'PhoneLogin',
		component: () => import('../views/login/phoneLogin.vue')
	},
	{
		path: '/oneKeyLogin',
		name: 'OneKeyLogin',
		component: () => import('../views/login/oneKeyLogin.vue')
	},
	{
		path: '/passLogin',
		name: 'passLogin',
		component: () => import('../views/login/passLogin.vue')
	},
	{
		path: '/Bscroll',
		name: 'Bscroll',
		component: () => import('../views/Bscroll/index.vue')
	},
	{
		path: '/loadMore',
		name: 'LoadMore',
		component: () => import('../views/loadMore/index.vue')
	},
	{
		path: '/',
		name: 'Main',
		component: () => import('../views/main/index.vue'),
		redirect: '/makefriend',
		children: [{
				path: '/makefriend',
				name: 'Makefriend',
				component: () => import('../views/makefriend/index.vue'),
				meta: {
					show: true
				}

			},
			{
				path: '/find',
				name: 'Find',
				component: () => import('../views/find/index.vue'),
				meta: {
					show: true
				}
			},
			{
				path: '/mine',
				name: 'Mine',
				component: () => import('../views/mine/index.vue'),
				meta: {
					show: true
				}
			},
			{
				path: '/message',
				name: 'Message',
				component: () => import('../views/message/index.vue'),
				meta: {
					show: true
				}
			},
			{
				path: '/search',
				name: 'Search',
				component: () => import('../views/search/index.vue')
			},
			{
				path: '/vipcenter',
				name: 'VipCenter',
				component: () => import('../views/vipcenter/index.vue')
				
			},
			{
				path: '/chatCharge',
				name: 'ChatCharge',
				component: () => import('../views/chatCharge/index.vue')
			},
			{
				path:'/diamondCharge',
				name:'DiamondCharge',
				component:() => import('../views/diamondCharge/index.vue')
			},
			{
				path:'/Authentication',
				name:'Authentication',
				component:() => import('../views/Authentication/index.vue')
			},
			{
				path:'/share',
				name:'Share',
				component:() => import('../views/share/index.vue')
			},
			{
				path:'/myprofit',
				name:'Myprofit',
				component:() => import('../views/myprofit/index.vue')
			},
			{
				path:'/cashout',
				name:'Cashout',
				component:() => import('../views/cashout/index.vue')
			},
			{
				path:'/rewardDetail',
				name:'RewardDetail',
				component:() => import('../views/rewardDetail/index.vue')
			}
		]
	}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'myrouterlink_active'
})

// const whiteList = ['/login']


// router.beforeEach(function(to, from, next) {
// 	// to: Route: 即将要进入的目标 路由对象
// 	// from: Route: 当前导航正要离开的路由
// 	// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
// 	// window.console.log(Cookies.get('token'))
// 	let isLogin = Cookies.get('token') // 是否登录
// 	// 未登录状态；当路由到route指定页时，跳转至login
// 	//已登录
// 	if (isLogin) {
// 		next();
// 	} else {
// 		//未登录 已经在登录页面
// 		if (to.path === "/login" || whiteList.indexOf(to.path) !== -1) {
// 			next();
// 		} else {
// 			//未登录 不在登录页面  跳转到登录页面
// 			next("/login");
// 		}
// 	}

// })

export default router
