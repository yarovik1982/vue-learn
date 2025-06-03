<script setup>
import { onMounted, ref, watch, onUnmounted } from 'vue';

const props = defineProps({
   text:{
      type: String,
      required: true
   },
   start_trigger:{
      type: Boolean,
      default: false
   }
})

const min_typing_delay = ref(22)
const max_typing_delay = ref(37)
const text_shown = ref("")
const blinking_duration = ref(500)
const show_blinker = ref(true)

let typingInterval;
let blinkingInterval;

const startBlinker = () => {
   show_blinker.value = !show_blinker.value;
   if (props.text.length > text_shown.value.length) {
      blinkingInterval = setInterval(() => {
         show_blinker.value = !show_blinker.value;
      }, blinking_duration.value);
   } else {
      clearInterval(blinkingInterval);
      show_blinker.value = false;
   }
}

function startTypingText() {
   text_shown.value = "";
   clearInterval(typingInterval);
   clearInterval(blinkingInterval);
   
   startBlinker();
   
   typingInterval = setInterval(() => {
      if(props.text.length > text_shown.value.length) {
         text_shown.value += props.text.charAt(text_shown.value.length);
      } else {
         clearInterval(typingInterval);
      }
   }, Math.floor(Math.random() * (max_typing_delay.value - min_typing_delay.value) + min_typing_delay.value));
}

watch(() => props.start_trigger, (newVal) => {
   if (newVal) {
      startTypingText();
   }
});

onMounted(() => {
   if (props.start_trigger) {
      startTypingText();
   }
})

onUnmounted(() => {
   clearInterval(typingInterval);
   clearInterval(blinkingInterval);
})

</script>
<template>
    <div class="flex">
      <div>{{ text_shown }}</div>
      <div v-if="show_blinker" class="caret">|</div>
    </div>
</template>
<style scoped >
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    color: rgb(31, 31, 31);
}
.caret {
   background-color: rgb(31, 31, 31);
   /* padding: 0 2px; */
   margin-left: .25rem;
   /* font-size: .75rem; */
   color: rgb(31, 31, 31);
}
</style>