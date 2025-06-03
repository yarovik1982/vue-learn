<script setup>
import { inject } from 'vue';
const top = inject('headerHeight')
const props = defineProps({
   width:{type:String,default:''},
   height:{type:String,default:''},
   color:{type:String,default:''},
   background:{type:String,default:'rgba(51,51,51,.8)'},
})
</script>
<template>
    <button class="btn"
      :style="{width,height,color,background, top:`${top + 10}px`, left:'100px'}"
    >
      <slot></slot>
    </button>
</template>
<style scoped >
.btn {
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0;
   cursor: pointer;
   transition: all .2s ease-in-out;
   opacity: 0.75;
   border-radius: 4px;
   box-shadow: 0px 0px 5px 1px rgba(0,0,0,.5);
   position: absolute;
   z-index: 10;
}
.btn:hover {
   opacity: 1;
}
.btn:focus {
   opacity: 1;
}
.btn:active {
   box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,.5);
   opacity: 1;
}
</style>