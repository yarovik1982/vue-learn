<script setup>
import { onMounted, ref, computed } from 'vue';

// Определяем пропсы
const props = defineProps({
  text: { type: String, default: '' }, // Текст для отображения
  fontSize: { 
    type: [String, Number, Function], // Размер шрифта (строка, число или функция)
    default: null 
  },
  classFs:{type:String,default:''}
});

// Реактивные переменные
const textBlockRef = ref(null); // Ссылка на элемент
const text = ref([]); // Массив символов

// При монтировании компонента
onMounted(() => {
  const refElem = textBlockRef.value;
  if (refElem && refElem.dataset.text) {
    text.value = refElem.dataset.text.split(''); 
  }
});

// Вычисляемое свойство для обработки fontSize
const computedFontSize = computed(() => {
  if (typeof props.fontSize === 'number') {
    return `${props.fontSize}px`; // Добавляем единицы измерения
  } else if (typeof props.fontSize === 'function') {
    return props.fontSize(); // Вызываем функцию и возвращаем результат
  } else {
    return props.fontSize; // Возвращаем строку как есть
  }
});
</script>

<template>
  <div class="text-block" ref="textBlockRef" :data-text="props.text">
    <!-- Отображаем каждый символ -->
    <span
      class="image-text"
      v-for="(char, index) in text"
      :key="index"
      :style="{ fontSize: computedFontSize }"
      :class="props.classFs"
    >
      {{ char }}
    </span>
  </div>
</template>
<style scoped>
.text-block {
   margin:  auto;
   width: fit-content;
   padding: 1rem;
   /* line-height: 100%; */
   text-align: center;
}

.image-text {
   font-weight: bold;
   background-image: linear-gradient(to right, red, yellow, green);
   background-clip: text;
   color: transparent;
   text-transform: uppercase;
}
</style>