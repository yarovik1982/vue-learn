<script setup>
const props = defineProps({
isFlipped: {type: Boolean, required: true},
frontSlot: { type: [Object, String], required: false},
backSlot: { type: [Object, String], required: false},
width: { type: String, required: false, default: '300px'},
maxWidth: { type: String, required: false, default: 'none'},
height: { type: String, required: false, default: '300px'},
maxHeight: { type: String, required: false, default: 'none'},
perspective: { type: String, required: false, default: '1000px'},
marginTop: { type: String, required: false, default: '0px'},
backgroundColor: { type: String, required: false, default: 'none'},
})
</script>
<template>
    <div :class="['flip-card',{'rotated': isFlipped}]"
      :style="{
         width: width, 
         maxWidth: maxWidth, 
         height: height, 
         maxHeight: maxHeight, 
         marginTop: marginTop,
         perspective: perspective
      }"
    >
    <div class="front">
         <slot>
            <component :is="frontSlot" v-if="typeof frontSlot === 'object'"></component>
            <span v-else>{{frontSlot}}</span>
         </slot>
      </div>
		<div class="back">
			<slot name="backSlot">
				<component :is="backSlot" v-if="typeof backSlot === 'object'"></component>
            <span v-else>{{backSlot}}</span>
			</slot>
		</div>
    </div>
</template>
<style scoped >

.front,
	.back {
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		transition: 1s;
		backface-visibility: hidden;
		/* background: linear-gradient(
			0deg,
			rgba(0, 172, 238, 1) 0%,
			rgba(2, 126, 251, 1) 100%
		); */
      border-radius: 1rem;
	}
	.front img {
		max-width: 100%;
		min-width: 100%;
		height: auto;
	}
	.back {
		transform: rotateY(180deg);
	}
	.flip-card.rotated .front {
		transform: rotateY(180deg);
	}
	.flip-card.rotated .back {
		transform: rotateY(360deg);
	}
</style>