<template>
  <form id="login" class="form-signin">
    <img class="img_login mb-4" src="./../../../assets/img/logo-login.png" />
    <h1>Controle de Glicose Boni</h1>
    <p>Sistema para armazenamento de informações de glicemia para cães com diabetes.</p>
    <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="user">
        <label for="inputEmail">Usuário</label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="this.login">Confirmar</button>
    <p class="mt-5 mb-3 text-muted text-center">© 2022</p>
  </form>
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
