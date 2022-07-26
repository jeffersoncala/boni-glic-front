<template>
  <section id="login-layout">
		<!-- <img src="@/assets/img/bg-black.jpg" alt="" class="background"> -->
		<div class="content">
			<div class="logo">
				<h1>Controle de Glicose Boni</h1>
				<img src="@/assets/img/pet1.png" alt="" />
    			<!-- <p>Sistema para armazenamento de informações de glicemia para cães com diabetes.</p> -->
			</div>
			<div>
				<router-view></router-view>
			</div>
		</div>
  </section>
</template>

<script>
export default {
	name: 'LoginLayout'
}
</script>

<style lang="scss">
#login-layout {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	background:
    linear-gradient(to top, rgba(100,56, 111, 0.4), rgba(10, 31, 26, 0.4)),
    url("@/assets/img/bg-black.jpg") no-repeat;

	.background {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
	}

	.content {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		background-image: linear-gradient(to top, rgba(17,56,161, 0.4), rgba(0,131,126, 0.4));
		width: 448px;
		padding: 20px 40px;

		.logo {
			width: 100%;
			text-align: center;

			h1{
				font-family: 'Open Sans';
				font-weight: 600;
				font-size: 1.25rem;
				margin-bottom: 30px;
				color: white;
			}

			img {
				margin-bottom: 40px;
				width: 200px;
				position: relative;
				left: -10px;
			}

			p{
				font-size: 1rem;
				color: white;
			}
		}

		form {
			.field {
				display: grid;
				grid-template-columns: 60px auto;
				grid-gap: 0 16px;

				align-items: center;
				background-color: #fff;
				height: 50px;
				padding: 10px;
				border-radius: 5px;

				&:not(:last-of-type) {
					margin-bottom: 5px;
				}

				label {
					color: #06162b;
				}
				input {
					width: 100%;
					height: 100%;
					border: none;
					outline: none;
					font-size: 1em;
					padding-left: 6px;
				}

				.sub-field {
					display: flex;
					height: 100%;

					.see-password {
						border: none;
						cursor: pointer;
						background: transparent;
						outline: none;

						i {
							transition: 200ms ease;
						}
					}
				}
			}

			.controls {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 14px;

				button {
					background: #e2e41a;
					width: 100%;
					border: none;
					outline: none;
					font-size: 1.2em;
					border-radius: 8px;
					padding: 16px 0;
					cursor: pointer;
				}

				a {
					color: #fff;
					margin-top: 10px;
				}
			}
		}
	}
}
</style>
