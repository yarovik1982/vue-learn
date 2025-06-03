<script setup>
	const props = defineProps({
		frontText: {
			type: String,
			required: true,
		},
		backText: {
			type: String,
			required: true,
		},
		isFlipped: {
			type: Boolean,
			required: true,
		},
	});
</script>
<template>
	<button class="btn-flip" :class="{ rotated: isFlipped }">
		<span class="front">{{ frontText }} </span>
		<span class="back">{{ backText }}</span>
	</button>
</template>
<style scoped>
	.btn-flip {
		position: relative;
		bottom: 20px;
		border: none;
		box-shadow: none;
		width: 130px;
		height: 40px;
		line-height: 42px;
		-webkit-perspective: 230px;
		perspective: 230px;
		background: transparent;
		cursor: pointer;
	}
	.btn-flip span {
		background: rgb(0, 172, 238);
		background: linear-gradient(
			0deg,
			rgba(0, 172, 238, 1) 0%,
			rgba(2, 126, 251, 1) 100%
		);
		display: block;
		position: absolute;
		width: 130px;
		height: 40px;
		border-radius: 5px;
		margin: 0;
		text-align: center;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}
	.btn-flip .front {
		-webkit-transform: rotateX(90deg);
		-moz-transform: rotateX(90deg);
		transform: rotateX(90deg);
		-webkit-transform-origin: 50% 50% -20px;
		-moz-transform-origin: 50% 50% -20px;
		transform-origin: 50% 50% -20px;
	}
	.btn-flip .back {
		-webkit-transform: rotateX(0deg);
		-moz-transform: rotateX(0deg);
		transform: rotateX(0deg);
		-webkit-transform-origin: 50% 50% -20px;
		-moz-transform-origin: 50% 50% -20px;
		transform-origin: 50% 50% -20px;
	}
	.btn-flip.rotated .front {
		-webkit-transform: rotateX(0deg);
		-moz-transform: rotateX(0deg);
		transform: rotateX(0deg);
	}
	.btn-flip.rotated .back {
		color: transparent;
		-webkit-transform: rotateX(-90deg);
		-moz-transform: rotateX(-90deg);
		transform: rotateX(-90deg);
	}
</style>
