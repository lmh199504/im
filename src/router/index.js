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
		path:'/404',
		component:() => import('../views/404/index.vue')
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
				path: '/diamondCharge',
				name: 'DiamondCharge',
				component: () => import('../views/diamondCharge/index.vue')
			},
			{
				path: '/Authentication',
				name: 'Authentication',
				component: () => import('../views/Authentication/index.vue')
			},
			{
				path: '/share',
				name: 'Share',
				component: () => import('../views/share/index.vue')
			},
			{
				path: '/myprofit',
				name: 'Myprofit',
				component: () => import('../views/myprofit/index.vue')
			},
			{
				path: '/cashout',
				name: 'Cashout',
				component: () => import('../views/cashout/index.vue')
			},
			{
				path: '/rewardDetail',
				name: 'RewardDetail',
				component: () => import('../views/rewardDetail/index.vue')
			},
			{
				path: '/inviteBoy',
				name: 'InviteBoy',
				component: () => import('../views/inviteBoy/index.vue')
			},
			{
				path: '/inviteGirl',
				name: 'InviteGirl',
				component: () => import('../views/inviteGirl/index.vue')
			},
			{
				path: '/wallet',
				name: 'Wallet',
				component: () => import('../views/wallet/index.vue')
			},
			{
				path: '/diamondDetail',
				name: 'DiamondDetail',
				component: () => import('../views/diamondDetail/index.vue')
			},
			{
				path: '/chatDetail',
				name: 'ChatDetail',
				component: () => import('../views/chatDetail/index.vue')
			},
			{
				path:'balanceDetail',
				name:'BalanceDetail',
				component:() => import('../views/balanceDetail/index.vue')
			},
			{
				path:'helpCenter',
				name:'HelpCenter',
				component:() => import('../views/helpCenter/index.vue')
			},
			{
				path:'/question1',
				component:() => import('../views/helpCenter/question1/index.vue')
			},
			{
				path:'/question2',
				component:() => import('../views/helpCenter/question2/index.vue')
			},
			{
				path:'/question3',
				component:() => import('../views/helpCenter/question3/index.vue')
			},
			{
				path:'/question4',
				component:() => import('../views/helpCenter/question4/index.vue')
			},
			{
				path:'/question5',
				component:() => import('../views/helpCenter/question5/index.vue')
			},
			{
				path:'/setting',
				name:'Setting',
				component:() => import('../views/setting/index.vue')
			},
			{
				path:'/aboutUs',
				name:'AboutUs',
				component:() => import('../views/aboutUs/index.vue')
			},
			{
				path:'/blacklist',
				name:'Blacklist',
				component:() => import('../views/blacklist/index.vue')
			},
			{
				path:'/bindPhone',
				name:'bindPhone',
				component:() => import('../views/bindPhone/index.vue')
			},
			{
				path:'/changePassWord',
				name:'changePassWord',
				component:() => import('../views/changePassWord/index.vue')
			},
			{
				path:'/personalData',
				name:'personalData',
				component:() => import('../views/personalData/index.vue')
			},
			{
				path:'/userInfo/:id',
				name:'userInfo',
				component:() => import('../views/userInfo/index.vue')
			}
		]
	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
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
