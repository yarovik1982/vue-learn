<script setup>
	import { inject, reactive, ref } from "vue";
	import AudioConponent from "../components/AudioConponent.vue";
	import ButtonSample from "../components/ButtonSample.vue";
	import MyEditor from "../components/MyEditor.vue";
	const menu = reactive([
		{id:'player',text:'Player'},
		{id:'editor',text:'Editor'},
	])
	const height = inject("headerHeight");
	const showMenu = ref(false)
	const currentComponent = ref(null)
	const handleClick = (id) => {
		switch(id){
			case 'player':
				currentComponent.value = AudioConponent
				break
			case 'editor':
				currentComponent.value = MyEditor
				break
			}
			showMenu.value = false
	}
</script>
<template>
	<div class="page" :style="{ paddingTop: `${height}px` }">
		<ButtonSample
			width="30px"
			height="30px"
			@click="showMenu = !showMenu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="#fff"
				class="bi bi-three-dots-vertical"
				viewBox="0 0 16 16">
				<path
					d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
				/>
			</svg>
		</ButtonSample>
		<div :class="['menu',{activeMenu:showMenu}]">
			<ul>
				<li 
					v-for="item in menu" 
					:key="item.id" 
					:id="item.id"
					@click="handleClick(item.id)"
				>{{item.text}}</li>
				
			</ul>
		</div>
		<div class="conatiner">
			<component :is="currentComponent"></component>
		</div>
	</div>
</template>
<style scoped>
	.page {
		width: 100%;
		height: 100vh;
		background-color: #4b4b79;
		overflow: hidden auto;
		position: relative;
	}
	.audio-player {
		display: flex;
	}
	.conatiner {
		max-width: 1470px;
		padding: 0 15px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu {
		position: absolute;
		width: 300px;
		height: fit-content;
		background-color: #ccc;
		padding-top: 50px;
		padding-bottom: 50px;
		padding-left: 1rem;
		color: #000;
		transform: translateX(-100%);
		transition: .3s linear;
		z-index: 2;
	}
	.menu.activeMenu {
		transform: translateX(0%);
	}
	.menu ul {
		margin: 0;
		padding: 0;
	}
	.menu ul,li {	
		list-style: none;
	}
	.menu li {
		cursor: pointer;
		margin-bottom: .5rem;
	}
	/* .bar {
		width: 15px;
		height: 20px;
		background-color: #42b983;
		transition: transform 0.05s ease;
		will-change: transform;
		transform-origin: center bottom;
	}

	.bar:nth-child(1) {
		background-color: #ff4081;
	}
	.bar:nth-child(2) { background-color: #ba68c8 }
	.bar:nth-child(2) {
		background-color: transparent;
	}
	.bar:nth-child(3) {
		background-color: #4dd0e1;
	}
	.bar:nth-child(4) { background-color: #64ffda }
	.bar:nth-child(4) {
		background-color: transparent;
	}
	.bar:nth-child(5) {
		background-color: #ffd54f;
	}
	.bar:nth-child(6) { background-color: #ff8a65 }
	.bar:nth-child(6) {
		background-color: transparent;
	}
	.bar:nth-child(7) {
		background-color: #a1887f;
	}
	.bar:nth-child(8) { background-color: #90a4ae }
	.bar:nth-child(8) {
		background-color: transparent;
	} */
</style>
