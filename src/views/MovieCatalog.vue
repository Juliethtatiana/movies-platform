<script setup>
import { ref } from 'vue'
import MovieItem from '../components/MovieItem.vue';
import movieData from '../assets/movies.json'
import router from '../router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const filteredList=ref(movieData)


const searchbyName = (name)=>{
    const regex = new RegExp(`\\b${name}\\b`);
    if(name!=""){
        filteredList.value = movieData.filter((movie) => regex.test(movie.name.toLocaleLowerCase()) )
    }else{
        filteredList.value = movieData
    }

}
const text=ref("")

const detail= (idMovie) => {
    router.push({
        name: "detail",
        params: { id: idMovie }
    });
    }
</script>


<template>
<div class="mx-10 p-4">

    <div class="flex my-4">
        <Menu as="div" class="relative inline-block text-left">
    <div class="h-full">
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-m px-3 h-full text-sm font-semibold shadow-sm ring-1 ring-inset ">
        Categorias
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-300 dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 ' : '', 'block px-4 py-2 text-sm']">Account settings</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 ' : '', 'block px-4 py-2 text-sm']">Support</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'bg-gray-100 ' : '', 'block px-4 py-2 text-sm']">License</a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </transition>
  </Menu>
        <div class="relative w-full">
            <input type="search" v-model="text" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search by name" required>
            <button @click="searchbyName(text)" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>

       <div class=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 self-auto">
        
        <div v-for="item in filteredList" :key="item.id" >
          <MovieItem @click="detail(item.id)" :movie=item></MovieItem>
         </div>

       </div>
        
</div>

    
        
      
</template>

<style scoped>

</style>
