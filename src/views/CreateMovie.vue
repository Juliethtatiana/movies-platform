

<script setup>
import { useRoute } from 'vue-router'
import movieData from '../assets/movies.json'
import categoryList from '../assets/categories.json'
import CheckCategory from '../components/CheckCategory.vue';

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
  <div class="w-full h-full flex justify-center my-20">
    <div class="bg-gray-300 dark:bg-slate-700 p-4 rounded-lg h-full  w-[80%]" >
  <form class="w-full lg:grid lg:grid-cols-2">
  <div class="-mx-3 mb-6 flex flex-col gap-2">
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
        Titulo
      </label>
      <input class="appearance-none block w-full  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>

    <div class="w-full flex">
      <div class="w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
        Fecha de estreno
      </label>
      <div class=" max-w-sm">
     <input  type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
  </div>
  </div>
  <div>
    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
        Duracion
      </label>
      <input class="appearance-none block w-full   border  rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-city" type="number">
  </div>
    </div>
    <div class="w-full px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
        Trailer de Youtube
      </label>
      <input class="appearance-none block w-full   border  rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-city" type="number">
  </div>
  </div>
  <div class="flex flex-wrap mx-3 mb-6">

    <div class="w-full px-3">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">sinopsis</label>
      <textarea id="message" rows="4" class="block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."></textarea>
      </div>
  </div>
  <div class="col-span-2">
    <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
       Categorias
      </label>
      <div class="w-full grid lg:grid-cols-3  ">
        <CheckCategory v-for="category in categoryList" :category="category.name"></CheckCategory>
      </div>
      
    
  </div>
<div class="col-span-2 flex justify-center m-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    Crear Pelicula
  </button>
</div>
  
 
</form>
        
  </div>
  </div>
  
   
</template>

<style scoped>

</style>
