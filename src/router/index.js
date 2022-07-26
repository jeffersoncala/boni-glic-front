import Vue from 'vue'
import VueRouter from 'vue-router'

//Components

//Layout
import MainLayout from '@/components/layouts/Main'

//Views
// import LoginPage from '@/components/views/login/Login'
import HomePage from '@/components/views/home/Home'

// const MainMenu = () => import('@/components/views/menu/Menu')

const AuthLayout = () => import('@/components/views/auth/index')
const Login = () => import('@/components/views/auth/login')
const ForgotPassword = () => import('@/components/views/auth/forgotPassword')
const RecoverPassword = () => import('@/components/views/auth/recoverPassword')
const FaleConosco = () => import('@/components/views/faleConosco/FaleConosco')
const PageNotFound = () => import('@/components/views/pageNotFound/PageNotFound')


const childRoutes = [
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
	{
		path: '/login',
		component: AuthLayout,
		children: [
			{ path: '', name: 'login', component: Login },
			{ path: 'forgot-password', name: 'forgotPassword', component: ForgotPassword },
			{ path: 'recover-password/:id', name: 'recoverPassword', component: RecoverPassword }
		]
	},
	{ path: '/faleconosco', name: 'faleConosco', component: FaleConosco },
	{ path: '*', component: PageNotFound }
]

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active',
	mode: 'history'
})

export default router
