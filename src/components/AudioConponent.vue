<script setup>
	import { ref, reactive, onBeforeUnmount } from "vue";
const audio = ref(null);
	const analyser = ref(null);
	const source = ref(null);
	const animationId = ref(null);

	// Количество "брусков"
	const barCount = 2;
	const bars = reactive([1, 1]);

	function animateBars() {
		if (!analyser.value) return;

		const dataArray = new Uint8Array(analyser.value.frequencyBinCount);

		function draw() {
			analyser.value.getByteFrequencyData(dataArray);

			// Диапазоны частот
			const lowFreq = dataArray.slice(0, 50);
			const highFreq = dataArray.slice(50, 100);

			// Вычисляем среднюю громкость по каждому диапазону
			const avgLow = average(lowFreq);
			const avgHigh = average(highFreq);

			// Обновляем значения баров
			bars[0] = 1 + avgLow / 100;
			bars[1] = 1 + avgHigh / 100;

			animationId.value = requestAnimationFrame(draw);
		}

		draw();
	}

	function average(arr) {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total += arr[i];
		}
		return total / arr.length;
	}

	function startAnimation() {
		if (!analyser.value) {
			const AudioContext = window.AudioContext || window.webkitAudioContext;
			const context = new AudioContext();
			source.value = context.createMediaElementSource(audio.value);
			analyser.value = context.createAnalyser();

			source.value.connect(analyser.value);
			analyser.value.connect(context.destination);

			animateBars();
		}
	}

	function stopAnimation() {
		if (animationId.value) cancelAnimationFrame(animationId.value);
	}

	onBeforeUnmount(() => {
		stopAnimation();
	});
</script>
<template>
    <div class="audio-player">
				<audio ref="audio" @play="startAnimation" @pause="stopAnimation" controls>
					<source
						:src="'/audio/Orkestr_Polya_Moria_-_Popkorn_(SkySound.cc).mp3'"
						type="audio/mpeg" />
					Ваш браузер не поддерживает аудио.
				</audio>

				<div class="equalizer">
					<div class="bar" :style="{ transform: `scaleY(${bars[0]})` }"></div>
					<div class="bar high" :style="{ transform: `scaleY(${bars[1]})` }"></div>
					<!-- <div
						v-for="(_, index) in bars"
						:key="index"
						class="bar"
						:style="{ transform: `scaleY(${-(bars[index])*3})` }"></div> -->
				</div>
			</div>
</template>
<style scoped >
.equalizer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 200px;
		height: 100px;
		margin-top: 20px;
	}
	.bar {
		width: 20px;
		height: 20px;
		background-color: #42b983;
		will-change: transform;
		transform-origin: bottom;
		transition: transform 0.05s ease-in-out;
	}

	.bar.high {
		background-color: #ba68c8;
	}
</style>