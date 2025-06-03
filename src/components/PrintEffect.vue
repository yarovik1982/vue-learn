<script setup>
	import { ref, onMounted, onUnmounted } from "vue";
	import { printText } from "../utils/printText";

	const props = defineProps({
		size: { type: String, default: "" },
		gradient: {
			type: String,
			default: "linear-gradient(to right, red, yellow, green)",
		},
      text: { type: String, default: "" },
	});

	const elementRef = ref(null);
	const isAnimating = ref(false);
	let observer;
	let timeouts = [];

	onMounted(() => {
		observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !isAnimating.value) {
					isAnimating.value = true;
					const letters = elementRef.value.dataset.text.trim().split("");
					elementRef.value.innerHTML = "";

					letters.forEach((letter, i) => {
						const timeout = setTimeout(() => {
							printText(elementRef.value, letter, props.size, props.gradient);
							if (i === letters.length - 1) {
								isAnimating.value = false;
							}
						}, i * 100);
						timeouts.push(timeout);
					});
				} else if (!entry.isIntersecting) {
					timeouts.forEach(timeout => clearTimeout(timeout));
					timeouts = [];
					isAnimating.value = false;
					if (elementRef.value) {
						elementRef.value.innerHTML = "";
					}
				}
			},
			{
				threshold: 0.1,
			},
		);

		if (elementRef.value) {
			observer.observe(elementRef.value);
		}
	});

	onUnmounted(() => {
		if (elementRef.value) {
			observer.unobserve(elementRef.value);
		}
		timeouts.forEach(timeout => clearTimeout(timeout));
	});
</script>
<template>
	<div class="element" ref="elementRef" :data-text="props.text">
		
	</div>
</template>
<style scoped>
	.element {
		text-align: center;
		padding: 0.5em;
	}
	.span {
		background-clip: text;
		color: transparent;
		text-transform: uppercase;
		font-weight: bold;
	}
</style>
