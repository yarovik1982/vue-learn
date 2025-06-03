<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
import { data } from '../utils/data';
import { inject, onMounted, onUnmounted, ref } from 'vue';

const collapse = ref(true);
const pageRef = ref(null);
const togglerSidebarRef = ref(null);
const sidebarRef = ref(null);
const height = inject('headerHeight')
const handleClick = () => {
   collapse.value = !collapse.value;
};

const handleMouseMove = (e) => {
   const sidebar = sidebarRef.value?.$el; 
   const togglerSidebar = togglerSidebarRef.value;

   if (!sidebar || !togglerSidebar) return;

   const sidebarRect = sidebar.getBoundingClientRect();
   const sidebarWidth = sidebarRect.width;
   const sidebarLeft = sidebarRect.left;

   if (e.clientY <= 85 || 
      (e.clientX <= sidebarLeft + sidebarWidth + 40 && 
      e.clientX >= sidebarLeft + sidebarWidth)) {
      togglerSidebar.style.opacity = '1';
   } else {
      togglerSidebar.style.opacity = '0';
   }
};

onMounted(() => {
   document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
   document.removeEventListener('mousemove', handleMouseMove);
});
</script>
<template>
   <div class="wrapper__page" ref="pageRef" :style="{ height: `calc(100vh - ${height}px)`, marginTop:`${height}px` }">
      <!-- <Sidebar :class="['sidebar', collapse ? '' : 'collapse']" :list="data.profileSidebarData"
         :style="{ height: `calc(100vh - ${height}px)` }"
         @handleClick="handleClick" ref="sidebarRef">
      </Sidebar> -->

      <div class="page__content"
         :style="{ height: `calc(100vh - ${height}px)` }"
      >
         <!-- <button class="toggler" @click="handleClick" ref="togglerSidebarRef">
            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-eye" viewBox="0 0 16 16" v-if="collapse">
               <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
               <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-eye-slash" viewBox="0 0 16 16" v-else>
               <path
                  d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
               <path
                  d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
               <path
                  d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
            </svg>
         </button> -->

         <router-view></router-view>
      </div>
   </div>
</template>
<style scoped>
.wrapper__page {
   /* height: calc(100vh - 42px); */
   display: flex;
   width: 100vw;
   overflow: hidden;
   position: relative;
}

.sidebar {
   width: 20%;
   min-width: 300px;
   padding: 1rem 5px;
   border-right: 2px solid #ccc;
   transition: all .3s linear;
   overflow-y: auto;
}

.sidebar.collapse {
   width: 0;
   min-width: 0;
   border: 0;
   overflow: hidden;
   padding: 0;
}

.page__content {
   position: relative;
   flex: 1 auto;
   background-color: red;
   transition: all .3s linear;
   overflow-y: auto;
}

.bi {
   width: 24px;
   height: 24px;
   fill: #ccc;
}

.toggler {
   width: 40px;
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   border: 0;
   cursor: pointer;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 10;
   opacity: 0;
   transition: opacity .2s linear;
}
</style>