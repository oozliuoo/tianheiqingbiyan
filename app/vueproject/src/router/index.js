import Vue from 'vue'
import Router from 'vue-router'

// home module
import Home from '@/components/Home'

// game related modules
import CreateRoom from '@/components/game/CreateRoom'
import JoinRoom from '@/components/game/JoinRoom'
import Main from '@/components/game/Main'

// setting related modules
import SettingHome from '@/components/setting/SettingHome'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/create-room/',
			name: "CreateRoom",
			component: CreateRoom,
		},
		{
			path: '/join-room/',
			name: "JoinRoom",
			component: JoinRoom,
		},
		{
			path: '/main/',
			name: "Main",
			component: Main,
		},
		{
			path: '/settings/',
			name: "SettingHome",
			component: SettingHome,
		},
	]
})
