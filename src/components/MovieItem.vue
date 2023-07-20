<script setup>
import { ref } from 'vue'

defineProps({
  movie: {
    type: Object,
  }
})

const getImgURL = (imageName)=>{
  const imgUrl = new URL(`/src/assets/images/${imageName}`, import.meta.url).href
  console.log(imgUrl)
  return imgUrl

}

const count = ref(0)
</script>

<template>
  
    <div class="bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full" >
        <img :src="getImgURL(movie.image)" :alt=" movie.name" class="w-full h-[85%] rounded-lg shadow-lg">
        <p>{{movie.name }}</p>
    </div>
  
</template>

<style scoped>

</style>
