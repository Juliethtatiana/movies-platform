<script setup>
import { ref } from 'vue'

defineProps({
  movie: {
    type: Object,
  }
})

const count = ref(0)
</script>

<template>
  
    <div class="bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full" >
        <img :src="'src/assets/'+movie.image" :alt=" movie.name" class="w-full h-[85%] rounded-lg shadow-lg">
        <p>{{movie.name }}</p>
    </div>
  
</template>

<style scoped>

</style>
