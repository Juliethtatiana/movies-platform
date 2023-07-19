<script>
export default {
 
  data() {
    return {
      // Use require() in the script to get the image URL
      image: require('@/assets/images/dark.jpg').default,
    };
  },
};
</script>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import movieData from '../assets/movies.json'


const route = useRoute()
const id=route.params.id

const movie=movieData.find((movie) => movie.id == id);
</script>

<template>
  <div class="w-full h-full flex justify-center">
    <div class="bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full  w-[80%]" >
        <img :src="image"  :alt=" movie.name" class="w-full h-[85%] rounded-lg shadow-lg">
        <p>{{movie.name}}</p>
  </div>
  </div>
  
   
</template>

<style scoped>



</style>
