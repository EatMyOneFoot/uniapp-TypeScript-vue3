import { defineStore, acceptHMRUpdate } from 'pinia'
import { login, logout } from '@/api/users';

// 定义类型限制接口
export interface UserState {
	userInfo: object,
	token: string
}

export const userModule: any = defineStore({
	id: 'user',
	state: (): UserState => ({
		userInfo: {},
		token: 'token'
	}),
	actions: {
		/**
		* handleLogin 登录操作
		* @param data  登录信息
		*/
		handleLogin(data: object) {
			login(data).then((res) => {
				console.log(res)
			}).catch((err) => {
				console.log(err)
			});
		},

		/**
		* getUserInfo 请求用户信息
		*/
		getUserInfo() {
			// this.userInfo = {}
		},

		/**
		* handleLogout 退出登录操作
		* @param data  用户信息
		*/
		handleLogout(data: object) {
			logout(data).then((res) => {
				console.log(res)
				this.token = ''
			}).catch((err) => {
				console.log(err)
			});
		},
	},
	// 持久化存储插件配置
	persist: {
		// 修改存储中使用的键名称，默认为当前 Store的 id
		key: 'user-key',
		// 🎉用于指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state。
		paths: undefined,
		// 当设置为 true 时，持久化/恢复Store时可能发生的任何错误都将使用 console.error 输出。
		debug: false,
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(userModule, import.meta.hot))
}
