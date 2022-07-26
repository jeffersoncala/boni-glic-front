import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Auth from '@websanova/vue-auth'
import VueAuthHttp from '@websanova/vue-auth/drivers/http/axios.1.x'
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x'

import router from '@/router'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
Vue.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'



//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

Vue.router = router

Vue.use(Auth, {
	auth: {
		request: function (req, token) {
			this.options.http._setHeaders.call(this, req, { 'boni-glic-token': token })
		},
		response: function (res) {
			const headers = res.data
			return headers.token
		}
	},
	fetchData: { url: '/usuarios/minha_conta', method: 'GET' },
	http: VueAuthHttp,
	router: VueAuthRouter,
	tokenDefaultKey: 'boni-glic-token',
	rolesVar: 'perfil',
	authRedirect: { path: '/login' },
	forbiddenRedirect: { path: '/login' },
	parseUserData: function (data) {
		return data
	},
	refreshData: {
		enabled: false
	},
	tokenExpired: function () {
		return false
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
