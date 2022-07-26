<template>
	<section id="login">
    <form @submit.prevent="recoverPassword"  v-if="!sendMessage">
			<div class="field">
				<label for="senhaAtual">Código</label>
				<div class="sub-field">
					<input type="text" name="senhaAtual" id="senhaAtual" v-model.lazy="form.senhaAtual" autocomplete="off" />
				</div>
			</div>

			<div class="field">
				<label for="novaSenha">Password</label>
				<div class="sub-field">
					<input :type="seePassword ? 'text' : 'password'" name="novaSenha" id="novaSenha" v-model.lazy="form.novaSenha" autocomplete="off" />
					<button type="button" @click="seePassword = !seePassword" class="see-password">
						<i class="fas fa-eye-slash" v-if="seePassword"></i>
						<i class="fas fa-eye" v-else></i>
					</button>
				</div>
			</div>

			<div class="controls">
				<button type="submit">ALTERAR</button>
				<router-link :to="{ name: 'login' }">Voltar para o login</router-link>
			</div>
		</form>

		<message v-else>
			{{ message }}

			<template v-slot:footer v-if="error">
				<div class="more-option">
					<button type="button" @click="sendMessage = !sendMessage">Tentar novamente</button>
					<router-link :to="{ name: 'forgotPassword' }">Enviar código novamente</router-link>
				</div>
			</template>
		</message>
  </section>
</template>

<script>
import { usuarios } from '@/services/usuarios'
import Message from './.inc/messages'

export default {
	name: 'RecoverPassword',
	title: 'Recuperar senha',
	components: { Message },
	data () {
		return {
			seePassword: false,
			form: {
				id: '',
				senhaAtual: '',
				novaSenha: ''
			},
			sendMessage: false,
			error: false,
			message: ''
		}
	},
	created () {
		this.form.id = this.$route.params.id
	},
	methods: {
		async recoverPassword () {
			await usuarios.updatePassword(this.form)
				.then(res => {
					this.error = false
					this.message = 'Senha atualizada com sucesso'
					this.sendMessage = true
				})
				.catch(() => {
					this.message = 'O código de acesso não confere com o encontrado no banco ou a password não está seguindo o padrão.'
					this.error = true
					this.sendMessage = true
				})
		}
	}
}
</script>

<style lang="scss" scoped>
	.more-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .9em;

		&:only-child {
			margin: 0 4px;
		}
	}
</style>
