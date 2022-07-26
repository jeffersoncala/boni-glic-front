<template>
	<section id="message">
		<div class="content-message">
			<div class="icon"></div>
			<div class="text">
				<p><slot></slot></p>
			</div>
		</div>

		<footer>
			<slot name="footer">
				<router-link :to="{ name: 'login' }">Voltar para o login</router-link>
			</slot>
		</footer>
	</section>
</template>

<script>
export default {
	name: 'Message',
	props: ['type']
}
</script>

<style lang="scss" scoped>
	#message {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		color: blue;
		background: #fff;
		width: 100%;
		min-height: 250px;

		footer {
			margin-top: 20px;

			button {
				background: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				color: blue;
				font-size: 1em;
				text-decoration: underline;
			}
		}
	}
</style>
