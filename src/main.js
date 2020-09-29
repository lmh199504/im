import Vue from 'vue'
import {
	MessageBox,
	Row,
	Col,
	Button,
	Input,
	Loading,
	Dialog,
	Dropdown,
	DropdownMenu,
	DropdownItem
} from 'element-ui'
import Avatar from './components/avatar.vue'
// import Index from './index.vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import tim from 'tim'
import TIM from 'tim-js-sdk'
import './utils/flexible'
import './assets/icon/iconfont.css'
import './assets/icon/tim.css'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'



window.tim = tim
window.TIM = TIM
window.store = store
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
Vue.prototype.$store = store
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Toast)
Vue.component('avatar', Avatar)
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
