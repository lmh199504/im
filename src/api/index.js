
import request from '../utils/request'


export const getUserInfo = () => {
	return request({
		url: '/ad/user/getUserInfo',
		method: 'post'
	})
}