<script setup>
const props = defineProps({
   frontText: { type: String, required: true },
   backText: { type: String, required: true },
   isFlipped: { type: Boolean, required: true },
});
</script>

<template>
   <button class="btn-flip" :class="{ rotated: isFlipped }">
      <span class="front">{{ frontText }}</span>
      <span class="back">{{ backText }}</span>
   </button>
</template>

<style scoped>
.btn-flip {
   position: relative;
   border: none;
   padding: 0;
   width: 180px;
   height: 45px;
   perspective: 1000px;
   background: transparent;
   cursor: pointer;
   font-weight: 600;
   font-size: 1rem;
}

.btn-flip span {
   position: absolute;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
   backface-visibility: hidden;
   background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
   color: white;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-flip:hover span {
   background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
}

.btn-flip .front {
   transform: rotateX(90deg);
   transform-origin: bottom;
}

.btn-flip .back {
   transform: rotateX(0deg);
   transform-origin: top;
}

.btn-flip.rotated .front {
   transform: rotateX(0deg);
}

.btn-flip.rotated .back {
   transform: rotateX(-90deg);
}
</style> 