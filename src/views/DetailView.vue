

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import movieData from '../assets/movies.json'



const route = useRoute()
const id=route.params.id

const movie=movieData.find((movie) => movie.id == id);

const getImgURL = (imageName)=>{
  const imgUrl = new URL(`/src/assets/images/${imageName}`, import.meta.url).href
  console.log(imgUrl)
  return imgUrl

}
</script>

<template>
  <div class="w-full h-full flex justify-center my-6">
    <div class="bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full  w-[80%] grid lg:grid-cols-3 gap-4" >
        <img  :src="getImgURL(movie.image)" :alt=" movie.name" class="w-full rounded-lg shadow-lg">
        <div class="p-4 lg:col-span-2">
          <h2 class="text-lg font-bold ">{{movie.name}}</h2>
          
          <div class="flex items-center">
              <svg v-for="star in Math.floor(movie.rating)" class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              
              <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{{ movie.rating }} out of 5</p>
          </div>

          <p>{{ movie.sinopsis}}</p>
        </div>
        <div class="lg:col-span-3">
          <h2 class="text-xl font-bold"> Trailer</h2>
          <div class="w-full flex justify-center mt-6">
            <iframe class="w-[80%] min-h-[400px] rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
          </div>
        
        </div>
       
  </div>
  </div>
  
   
</template>

<style scoped>



</style>
