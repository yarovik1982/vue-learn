<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
defineProps({
  list:{type:Array, required:true}
})
const route = useRoute()

</script>

<template>
  <header class="page__header">
    <div class="container">
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item"
            v-for="(item, ind) in list"
            :key="item.to"
          ><router-link :to="`${item.to}${ind + 1}`" :class="['header__menu-link','base-color', {active: route.path === `${item.to}${ind + 1}`}]">{{ item.label }}</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
ul,li{
  list-style: none;
}
.page__header {
  padding: 0.5rem 0;
  margin: 1rem auto;
  width: fit-content;
  border-radius: 20px;
  border: 2px solid #ccc;
}
.header__nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__menu {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  /* flex: 50%; */
  list-style: none;
}
  .header__menu-item {
    padding: 0 8px;
    list-style: none;
}
.header__menu-link.active{
  color: gold;
}
</style>
