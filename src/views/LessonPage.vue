<template>
  <lesson-viewer
    :lesson="lesson"
    :lessons-list="lessons"
    :index="index"
    :course-name="courseName"
  />
</template>

<script setup>
import LessonViewer from '../components/LessonViewer.vue'
import { useRoute } from 'vue-router'
import { data } from '../utils/data'

const route = useRoute()
const courseName = route.params.courseName // Например: 'js', 'python'
const index = parseInt(route.params.ind)
const lessons = data.lessons[courseName] || []
const lesson = lessons[index] || { title: '', text: '', code: '' }
</script>