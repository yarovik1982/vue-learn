<script setup>
import { courses } from '../utils/courses';
import ProductItem from '../components/ProductItem.vue';
import { inject, ref } from 'vue';

// Создаем реактивную копию массива products
const courseItems = ref([...courses]);
const heightHeader = inject('headerHeight')
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
    <div class="page" :style="{ height: 'calc(100vh - '+ heightHeader+'px)', paddingTop:heightHeader+'px' }">
        <div class="container h-100 overflow-auto" :style="{paddingBottom:heightHeader+'px'}">
            <div class="products">
                <!-- Передаем событие @click и текущий элемент -->
                <product-item v-for="item in courseItems" :key="item.id" :item="item"
                    @click="handleClick(item.id)"></product-item>
            </div>
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