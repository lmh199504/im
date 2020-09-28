import axios from 'axios'
import {
	Message
} from 'element-ui'

// 创建axios实例
const service = axios.create({
	baseURL: '/api',
	timeout: 10000 // 请求超时时间
})

// 添加一个请求拦截器
service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		// 处理请求错误
		//Promise.reject(reason)方法返回一个带有拒绝原因reason参数的Promise对象。
		return Promise.reject(error)
	}
)

// 添加一个响应拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
		// 如果返回自定义请求状态不是0，则判断为错误。
		if (res.status !== 0) {
			Message({
				message: res.msg || '请求错误',
				type: 'error',
				duration: 5 * 1000
			})
			return Promise.reject(new Error(res.msg || 'Error'))
		} else {
			return res
		}
	},
	error => {
		Message({
			message: error.response.data.msg,
			type: 'error',
			offset: 300
		})
		return Promise.reject(error)
	}
)

export default service
