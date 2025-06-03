<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';
defineProps({
   list: { type: Array, required: true }
})
const emit = defineEmits(['handleClick'])
const collapse = ref(true)
const route = useRoute()
const router = useRouter()
const handleClick = () => {
   emit('handleClick', collapse.value = !collapse.value)
}
const navigateTo = (path) => {
   router.push(path)
}
</script>
<template>
   <div :class="['sidebar', collapse ? '':'collapse' ]">
      
      <ul class="sidebar__menu">
         <li :class="['sidebar__menu-item', {active_item: route.path === `${item.to}${ind}`}]" v-for="(item, ind) in list" :key="item.to + ind"
         @click.self="navigateTo(`${item.to}${ind}`)"
      >
            <router-link :to="`${item.to}${ind}`"
               :class="['sidebar__menu-link', { active_link: route.path === `${item.to}${ind}` }]"
               
               >
               <span v-if="ind === 0">{{ item.label }}</span>
               <span v-else>{{ item.label }} {{ ind  }}</span>
                
            </router-link>
         </li>
      </ul>
   </div>
</template>
<style scoped>



.sidebar__menu {
   padding-top: 1rem;
}

.sidebar__menu-item {
   padding: 0.5rem;
   border: 1px solid #ccc;
   margin-bottom: 5px;
   border-radius: 5px;
   cursor: pointer;
}
.sidebar__menu-item.active_item{
   background-color: #ccc;
}

.sidebar__menu-link {
   color: #ccc;
   font-variant-numeric: tabular-nums;
}

.sidebar__menu-link.active_link {
   color: #333;
}
</style>