<template>
	<div id="menu">
        <h3>Olá, sua marcação foi feita em:</h3>
		<div class="box-buttons">
			<button-action textButton="Marcacao da Glicose" @click="this.goMarcacaoGlicose"><!-- <img src="./../../../assets/pet1.png" alt="Customer Success"> --></button-action>
			<button-action textButton="Aplicação da Insulina" @click="goAplicacaoInsulina()"><!-- <img src="./../../../assets/pet2.png" alt="Customer Success"> --></button-action>
		</div>
		<router-view />
	</div>
</template>

<script>
import ButtonAction from '@/components/shared/Button'

export default {
    name: 'MainMenu',
	components: { ButtonAction },
	methods: {
		goMarcacaoGlicose() {
			console.info('teste')
		},
		goAplicacaoInsulina() {
			console.info('teste')
		}
	}
}
</script>

<style lang="scss" scoped>
#menu{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	h3{
		font-size: 1rem;
		color: #777;
	}

	.box-buttons{
		display: flex;
		justify-content: center;
	}
}
</style>
