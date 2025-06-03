<script setup>
	import { inject, ref } from "vue";
   import ButtonFlip from "../components/ButtonFlip.vue";
   import CardFlipComponent from "../components/CardFlipComponent.vue";
   import FormLogin from "../components/FormLogin.vue";
   import FormRegister from "../components/FormRegister.vue";
	const height = inject("headerHeight");
	const isFlipped = ref(false);
	const toggleFlip = () => { 
      isFlipped.value = !isFlipped.value;
    };
</script>
<template>
	<div
		class="page"
		:style="{ height: `calc(100vh - ${height}px)`, marginTop: `${height}px` }">
		<div class="container">
			<div class="card-3d fs-sm" :style="{ marginTop: `${-height*6}px` }">
				<button-flip
					:isFlipped="isFlipped"
					front-text="Авторизация"
					back-text="Регистрация"
					@click.stop="toggleFlip"
            ></button-flip>
            <!--Here-->
            <card-flip-component
               :isFlipped="isFlipped"
               :frontSlot="FormRegister"
               :backSlot="FormLogin"
               width="100%"
               margin-top="1rem"
            ></card-flip-component>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.card-3d {
		width: 50%;
		min-width: 300px;
		/* padding: 2rem; */
		/* background-color: green; */
		display: flex;
      flex-direction: column;
		justify-content: space-between;
      align-items: center;
	}
	.card-3d__row {
		position: relative;
		width: 200px;
	}
	.reg-log {
		width: 100%;
		padding: 1rem 2rem;
		background: #333;
		transform: skewX(20deg);
		border-radius: 1rem;
		position: absolute;
		top: 0.25rem;
		backface-visibility: hidden;
	}
	.reg-log > span {
		display: inline-block;
		transform: skewX(-20deg);
	}
	.reg-log.front {
		transform: skewX(20deg);
		z-index: 10;
	}
	.reg-log.back {
		transform: skewX(20deg) rotateY(180deg);
		z-index: 5;
	}
	.reg-log.back > span {
		transform: rotateY(180deg);
	}
	.front.rotated {
		transform: rotateY(-180deg);
	}

	.back.rotated {
		transform: rotateY(0deg);
	}
	.transform {
		position: relative;
		padding: 1rem;
		max-width: 1000px;
		aspect-ratio: 1;
		perspective: 1000px;
		text-align: center;
	}
	.form__label {
		display: inline-block;
		width: 290px;
		cursor: pointer;
		text-align: center;
		position: relative;
		padding: 0.25rem;
	}
	.form__label::after {
		position: absolute;
		content: "Авторизация";
		left: 0;
	}
	.form__label::before {
		position: absolute;
		content: "Регистрация";
		left: 50%;
	}
	.face {
		margin: 20px auto;
		max-width: 600px;
		aspect-ratio: 1;
		background-color: green;
		position: absolute;
		backface-visibility: hidden;
		transition: transform 0.5s linear;
	}
	/* .back {
		transform: rotateY(180deg);
	} */
	input[type="checkbox"] {
		width: 0;
		height: 0;
		position: absolute;
		visibility: hidden;
	}
	input[type="checkbox"]:checked ~ .front {
		transform: rotateY(180deg);
		transform-origin: center;
	}
	input[type="checkbox"]:checked ~ .back {
		transform: rotateY(360deg);
		transform-origin: center;
	}
</style>
