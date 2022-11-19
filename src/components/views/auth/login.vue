<template>
  <section id="login">
    <form @submit.prevent="login">
			<div class="field">
				<input type="usuario" name="usuario" id="usuario" v-model.lazy="form.usuario" placeholder="Usuario"  />
			</div>
			<div class="field">
				<div class="sub-field">
					<input :type="seePassword ? 'text' : 'password'" name="senha" id="senha" v-model.lazy="form.senha" placeholder="Senha" />
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
				usuario: '',
				senha: ''
			}
		}
	},
	methods: {
		login () {
			this.$auth.options.loginData = { url: '/api/usuarios/login/admin', method: 'POST', fetchUser: true }
			this.$auth.login({
				data: this.form,
				redirect: { name: 'home' },
				error: function (erro) {
					alert(erro)
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
