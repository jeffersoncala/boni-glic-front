import Vue from 'vue'
import VueRouter from 'vue-router'

//Components

//Layout
import MainLayout from '@/components/layouts/Main'

//Views
import LoginPage from '@/components/views/login/Login'
import HomePage from '@/components/views/home/Home'

// const MainMenu = () => import('@/components/views/menu/Menu')


const childRoutes = [
	{
		path: '/',
		name: 'login',
		component: LoginPage,
	},
	{
		path: '/',
		name: 'home',
		component: HomePage,
		// children: [
		// 	{
		// 		path: '/',
		// 		name: 'principal',
		// 		component: MainMenu,
		// 	},
		// ]
	},
]

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: childRoutes
	},
]

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	mode: 'history'
})

export default router
