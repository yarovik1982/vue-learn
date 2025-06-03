<template>
  <lesson-viewer
    :lesson="lesson"
    :lessons-list="lessons"
    :index="index"
  />
</template>

<script setup>
import LessonViewer from '../components/LessonViewer.vue'
import { data } from '../utils/data'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const index = computed(() => parseInt(route.params.ind))
const lessons = data.lessons.js
const lesson = computed(() => lessons[index.value] || {})
</script>