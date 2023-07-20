

<script setup>
import { useRoute } from 'vue-router'
import movies from '../assets/movies.json'
import MovieItem from '../components/MovieItem.vue';

const currentDate= new Date()
const threeWeeksAgo = new Date(currentDate.getTime());
threeWeeksAgo.setDate(currentDate.getDate() - 21);

const dateStr = "2023-07-15";
const jsonDate = new Date(dateStr);

const premiere=movies.filter((movie)=>new Date(movie.date)>threeWeeksAgo)

</script>

<template>
  <div class="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 self-auto ">
    <MovieItem v-for="movie in premiere" :movie="movie"></MovieItem>
  </div>
  
   
</template>

<style scoped>

</style>
