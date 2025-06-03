<template>
   <div class="container">
      <div class="lesson">
         <h2 class="lesson__title">📘 {{ lesson.title }}</h2>

         <div class="lesson__content">
            <div v-for="(row, i) in rows" :key="i">
               <h2 v-if="row.includes('*')" class="lesson__header">{{ row.replace(/^[\*_]/, '') }}</h2>
               <h3 v-if="row.includes('_')" class="lesson__subheader">{{ row.replace(/^[\*_]/, '') }}</h3>
               <p v-else class="lesson__para">{{ row }}</p>
            </div>
            <!-- <p v-for="(row, i) in rows" :key="i" :class="{
               'lesson__header': row.startsWith('💡'),
               'lesson__subheader': row.startsWith('_'),
               'lesson__paragraph': !row.startsWith('💡') && !row.startsWith('_')
            }">
               {{ row.replace(/^[\*_]/, '') }}
            </p> -->
         </div>

         <!-- Код -->
         <div v-if="formattedCode" class="lesson__code">
            <pre><code>{{ formattedCode }}</code></pre>
         </div>

         <!-- Навигация -->
         <div class="lesson__navigation">
            <button @click="goToPrev" :disabled="index === 0">⬅️ Назад</button>
            <button @click="goToNext" :disabled="index >= maxIndex">➡️ Следующий</button>
         </div>
      </div>
   </div>
</template>

<script setup>
import { defineProps, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
   lesson: {
      type: Object,
      required: true
   },
   lessonsList: {
      type: Array,
      required: true
   },
   index: {
      type: Number,
      required: true
   },
   courseName: {
      type: String,
      required: true
   }
})

const router = useRouter()
const rows = ref([])
const formattedCode = ref('')
const maxIndex = props.lessonsList.length - 1

watchEffect(() => {
   if (props.lesson?.text) {
      rows.value = props.lesson.text.split('\n').filter(r => r.trim() !== '')
   } else {
      rows.value = []
   }

   if (props.lesson?.code && props.lesson.code.trim() !== '') {
      formattedCode.value = props.lesson.code
   } else {
      formattedCode.value = ''
   }
})

const goToPrev = () => {
   if (props.index > 0) {
      router.push(`/profile/lesson-${props.courseName}/${props.index - 1}`)
   }
}

const goToNext = () => {
   if (props.index < maxIndex) {
      router.push(`/profile/lesson-${props.courseName}/${props.index + 1}`)
   }
}
</script>
<style scoped>
.lesson__header {
   font-size: clamp(24px, 3vw, 36px);
}
.lesson__subheader {
   font-size: clamp(20px, 3vw, 30px);
}
.lesson__para {
   font-size: clamp(16px, 2vw, 24px);
}
/* .lesson__code {
}
.lesson {
} */

</style>