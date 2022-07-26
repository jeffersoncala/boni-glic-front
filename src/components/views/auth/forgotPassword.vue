<template>
  <section id="forgot-password">
    <form @submit.prevent="recoverPassword" v-if="!sendMessage">
			<div class="field">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" v-model.lazy="form.email"  />
			</div>

			<div class="controls">
				<button type="submit">ENVIAR</button>
				<router-link :to="{ name: 'login' }">Voltar para a tela de login</router-link>
			</div>
		</form>

		<message v-else>
			{{ message }}

			<template v-slot:footer v-if="error">
				<button type="button" @click="sendMessage = !sendMessage">voltar para recuperar senha</button>
			</template>
		</message>
  </section>
</template>

<script>
import { usuarios } from '@/services/usuarios'
import Message from './.inc/messages'

export default {
	name: 'ForgotPassword',
	title: 'Recuperar senha',
	components: { Message },
	data () {
		return {
			form: {
				email: ''
			},
			sendMessage: false,
			error: false,
			message: ''
		}
	},
	methods: {
		async recoverPassword () {
			await usuarios.recoverPassword(this.form.email)
				.then(() => {
					this.error = false
					this.message = `Olá! As informações para recuperação de senha, foram enviadas para o email ${this.form.email}`
					this.sendMessage = true
				})
				.catch(() => {
					this.message = `Olá! O email ${this.form.email}, não está cadastrado. Verifique se não houveram erros durante a digitação.`
					this.error = true
					this.sendMessage = true
				})
		}
	}
}
</script>

<style lang="scss" scoped></style>
