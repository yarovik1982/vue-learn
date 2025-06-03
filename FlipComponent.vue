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
      <div class="flip-card-inner">
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
    </div>
</template>
<style scoped>
.flip-card {
   position: relative;
   transform-style: preserve-3d;
}

.flip-card-inner {
   position: relative;
   width: 100%;
   height: 100%;
   transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
   transform-style: preserve-3d;
}

.flip-card.rotated .flip-card-inner {
   transform: rotateY(180deg);
}

.front,
.back {
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   backface-visibility: hidden;
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   overflow: hidden;
}

.back {
   transform: rotateY(180deg);
}
</style> 