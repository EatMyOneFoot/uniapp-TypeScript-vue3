import Request from 'luch-request';
const http = new Request();

import { storeToRefs } from 'pinia'
import storeModules from "@/store"

// Request interceptors
http.interceptors.request.use((config: any) => {
	const { user, skin } = storeModules();
	let { token } = storeToRefs(user);
	let { historyId } = storeToRefs(skin);

	config.header = {
		...config.header,
		'Content-Type': 'application/json;charset=utf-8',
		// 将token 放入header
		// X-Access-Token : token.value
		// Authorization : `Bearer ${token.value}`
		// token: token.value
	};
	if (!!historyId.value) {
		config.header['historyId'] = historyId.value
	}
	return config;
});

// Request interceptors
http.interceptors.response.use(
	(response: any) => {
		const res = response.data;
		if (res.code !== 200) {
			uni.showToast({
				title: res.message || res.msg,
				duration: 2000,
				icon: 'none'
			});
			if (res.code == 401) {
				// 重新登录
				uni.showModal({
					title: '提示',
					content: '当前未登录或者登录状态失效，请重新登录',
					confirmText: '重新登入',
					// confirmColor: '#007aff',
					showCancel: false,
					success: res => {
						if (res.confirm) {
							// uni.removeStorageSync('token');
							// uni.redirectTo({
							//   url: '/pages/login/index'
							// });
						}
					}
				});
			}
			return Promise.reject(res);
		} else {
			// console.log('response=>', response);
			return res.data;
		}
	},
	(response: any) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		// console.log('response', response)
		if (response.errMsg == 'request:fail abort' || response.errMsg == 'request:fail abort statusCode:-1') {
			uni.showToast({
				title: '请求超时',
				duration: 2000,
				icon: 'none',
				position: 'top'
			});
		}
		return Promise.reject(response);
	}
);

export default http;
