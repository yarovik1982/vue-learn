<script setup>
const props = defineProps({
  item: { type: Object, required: true }
});

// Определяем событие click
const emit = defineEmits(['click']);

// Обработчик клика на элементе
const handleItemClick = () => {
  emit('click'); // Эмитируем событие click
};
</script>

<template>
  <div 
    class="products__item product" 
    @click="handleItemClick" 
    :data-label="props.item.label"
  >
    <h2 class="product__title">
      <span 
        v-for="(letter, index) in props.item.label.split('')" 
        :key="index"
      >
        {{ letter }}
      </span>
    </h2>
  </div>
</template>

<style scoped>
.products__item {
  width: 100%;
  min-height: 300px;
  display: grid;
  place-items: center;
  box-shadow: 0 0 10px 2px blue;
  transition: box-shadow 0.2s linear;
  cursor: pointer;
  border-radius: 1rem;
  position: relative;
}
.products__item::before{
   width: 100%;
   height: 100%;
   position: absolute;
   background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1));
   backdrop-filter: blur(5px);
   z-index: -1;
   transition: z-index .3s linear;
   content:attr(data-label);
   display: grid;
   place-items: center;
   color:gold;
   font-size: 90px;
   font-weight: 900;
   text-transform: uppercase;
   border-radius: 1rem;
}

.products__item:hover {
  box-shadow: 0 10px 20px 2px blue;
}
.products__item:hover::before{
   z-index: 2;
}

.product__title span {
  display: inline-block;
  transition: transform 0.1s ease;
  font-size: 90px;
  text-transform: uppercase;
  font-weight: 900;
  background-image: url(../assets/images/Screenshot_26.png);
  background-clip: text;
  color: transparent;
}
</style>