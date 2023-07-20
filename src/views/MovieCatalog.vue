<script setup>
import { ref } from 'vue'
import MovieItem from '../components/MovieItem.vue';
import movieData from '../assets/movies.json'
import router from '../router'
import movieCategories from '../assets/categories.json'

import { computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

let movies = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : movieData

let selected = ref(movieCategories)
let query = ref('')

let categoryList = computed(() =>
  query.value === ''
    ? movieCategories
    : movieCategories.filter((category) =>
      category.name
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)

const empty= ref(false)

const filteredList = ref(movies)

const searchbyName = (name) => {
  const regex = new RegExp(`\\b${name.toLocaleLowerCase()}\\b`);
  if (name != "") {
    filteredList.value = movies.filter((movie) => regex.test(movie.name.toLocaleLowerCase()))
    console.log(filteredList.value.length)
    if(filteredList.value.length===0){
      empty.value=true
    }
  } else {
    filteredList.value = movies
  }

}
const text = ref("")

const detail = (idMovie) => {
  router.push({
    name: "detail",
    params: { id: idMovie }
  });
}

const getImgURL = (imageName) => {
  const imgUrl = new URL(`/src/assets/images/${imageName}`, import.meta.url).href
  return imgUrl

}



</script>


<template>
  <div class="mx-10 p-4">

    <div class="flex my-4 gap-2">
      <Combobox v-model="selected" @change="searchCategories($event)">
        <div class="relative">
          <div
            class="relative w-full h-full cursor-default overflow-hidden rounded-lg  text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <ComboboxInput class=" dark:bg-gray-700 dark:border-gray-600 w-full border-none py-2 pl-3 pr-10 text-sm leading-5  focus:ring-0"
              default-value="Categoria" :displayValue="(category) => category.name"
              @change="query = $event.target.value" />
            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </ComboboxButton>
          </div>
          <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
            @after-leave="query = ''">
            <ComboboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div v-if="categoryList.length === 0 && query !== ''"
                class="relative cursor-default select-none py-2 px-4 ">
                Nothing found.
              </div>

              <ComboboxOption v-for="category in categoryList" as="template" :key="category.code" :value="category"
                v-slot="{ selected, active }">
                <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                  'bg-blue-500 dark:bg-blue-950 text-white': active,
                  'text-gray-900': !active,
                }">
                  <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                    {{ category.name }}
                  </span>
                  <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                    :class="{ 'text-white': active, 'text-blue-500': !active }">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ComboboxOption>
            </ComboboxOptions>
          </TransitionRoot>
        </div>
      </Combobox>
      <div class="relative w-full">
        <input type="search" v-model="text" id="search-dropdown"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search by name" required>
        <button @click="searchbyName(text)"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>

    <div class=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 self-auto">

      <div v-for="item in filteredList" v-if="!empty" :key="item.id">
        <MovieItem @click="detail(item.id)" :movie=item></MovieItem>
      </div>
      <div v-if="empty" class="w-full flex flex-col justify-center items-center gap-3 mt-6">
        <img :src="getImgURL('nothing.png')" alt="nothing" class="w-full max-w-[30%] rounded-lg shadow-lg ">
        
        <p  class="text-2xl text-center font bold">No se encuentran registros :c</p>
      </div>
      

    </div>

  </div>
</template>

<style scoped></style>
