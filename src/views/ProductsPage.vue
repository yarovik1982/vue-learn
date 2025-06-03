<script setup>
import { products } from '../utils/products';
import ProductItem from '../components/ProductItem.vue';
import { ref } from 'vue';

// Создаем реактивную копию массива products
const productItems = ref([...products]);

// Обработчик клика
const handleClick = (id) => {
  console.log('Clicked ID:', id);
  
  // Находим элемент по ID и очищаем его label
  productItems.value = productItems.value.map(item => 
    item.id === id ? { ...item, label: '' } : item
  );
};
</script>

<template>
  <div class="container">
    <div class="products">
      <!-- Передаем событие @click и текущий элемент -->
      <product-item 
        v-for="item in productItems" 
        :key="item.id" 
        :item="item"
        @click="handleClick(item.id)"
      ></product-item>
    </div>
  </div>
</template>
<style scoped>
.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding-top: 2rem;
}
</style>