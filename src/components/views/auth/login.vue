<template>
  <section id="login">
    <form @submit.prevent="login">
			<div class="field">
				<input type="email" name="email" id="email" v-model.lazy="form.email" placeholder="Email"  />
			</div>
			<div class="field">
				<div class="sub-field">
					<input :type="seePassword ? 'text' : 'password'" name="password" id="password" v-model.lazy="form.senha" placeholder="Password" />
					<button type="button" @click="seePassword = !seePassword" class="see-password">
						<i class="fas fa-eye-slash" v-if="seePassword"></i>
						<i class="fas fa-eye" v-else></i>
					</button>
				</div>
			</div>
			<div class="controls">
				<button type="submit">ENTRAR</button>
				<router-link :to="{ name: 'forgotPassword' }">Esqueci minha senha</router-link>
			</div>
		</form>
  </section>
</template>

<script>
export default {
	name: 'Login',
	title: 'Login',
	data () {
		return {
			seePassword: false,
			form: {
				email: '',
				senha: ''
			}
		}
	},
	methods: {
		login () {
			this.$auth.options.loginData = { url: '/usuario/minhaConta', method: 'POST', fetchUser: true }
			this.$auth.login({
				data: this.form,
				redirect: { name: 'home' },
				error: function (erro) {
					alert(erro.response.data.erro)
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.field {
		display: block !important;
		width: 100%;
	}
</style>
