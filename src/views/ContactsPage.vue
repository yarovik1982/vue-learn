<script setup>
import { inject } from 'vue';
import TypedLine from '../components/TypedLine.vue';

const paddingTop = inject('headerHeight');
</script>
<template>
    <div class="page" :style="{paddingTop:`${paddingTop}px`}">
        <div class="container">
            <TypedLine :text="'Welcome this tutorial'"/>
            <TypedLine :text="'Welcome this tutorial Welcome this tutorial'"/>
            <TypedLine :text="'Welcome this tutorial'"/>
        </div>
    </div>
    
</template>
<style scoped >
.page{
    height:100vh;
    background-color: #01c4ff;
}
.container{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height: 100%;
}
</style>