<script setup>
import { onMounted, ref } from 'vue';
import { setQuote } from '../utils/setQuote';
import { useRouter } from 'vue-router';

const router = useRouter()
const quote = ref('')

onMounted(() => {
   quote.value = setQuote()
   setTimeout(() => {router.push('/')},5000)
})
</script>
<template>
    
      <div class="layout">
         <div class="message">
            <h1 class="page__title">404</h1>
            <h2 class="page__title">Try Again.</h2>
            <h4 class="page__title">или</h4>
            <h2 class="page__title">Попробуй снова.</h2>
            <h4 class="page__title">{{ quote }}</h4>
         </div>
      </div>
    
</template>
<style scoped >
.layout {
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: #333;
}
.message {
   padding: 1rem;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: fit-content;
}

</style>