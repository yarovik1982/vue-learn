<script setup>
import { inject } from 'vue';
import Image from '../assets/images/Screenshot_26.png'
import PrintEffect from '../components/PrintEffect.vue';

const height = inject('headerHeight')
const img = Image

</script>
<template>
    <div class="page" :style="{ paddingTop:`${height}px`}">
      <section class="section">
         <div class="container page-container">
            <PrintEffect 
               :size="'calc(10vw / 2)'"
               :text="'Далеко за словесными горами в стране гласных и согласных живут рыбные тексты.'"
            >
               
            </PrintEffect>
         </div>
      </section>
      <section class="section">
         <div class="container page-container">
            <PrintEffect
               :size="'calc(12vw / 2)'"
               :gradient="`url(${img})`"
               :text="'Когда я был маленьким, я не знал, что такое таблетки.'"
            >
               
            </PrintEffect>
         </div>
      </section>
   </div>
</template>
<style scoped >
.page {
   height: 100vh;
   overflow-y: auto;
   scroll-snap-type: y mandatory;
   /* scroll-behavior: smooth; */
}
.section {
   height: 100vh;
   scroll-snap-align: start;
}
.page-container {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.page-title {
   text-align: center;
   padding: .5em 0;
}
</style>