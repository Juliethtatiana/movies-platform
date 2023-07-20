

<script setup>
import router from '../router'
import movies from '../assets/movies.json'
import MovieItem from '../components/MovieItem.vue';

const currentDate= new Date()
const threeWeeksAgo = new Date(currentDate.getTime());
threeWeeksAgo.setDate(currentDate.getDate() - 21);

const premiere=movies.filter((movie)=>new Date(movie.date)>threeWeeksAgo)

const detail= (idMovie) => {
  console.log("si funciono")
    router.push({
        name: "detail",
        params: { id: idMovie }
    });
    }

</script>

<template>
  <div class="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 self-auto ">
    <div v-for="item in premiere" :key="item.id">
        <MovieItem @click="detail(item.id)" :movie=item></MovieItem>
      </div>
  </div>
  
   
</template>

<style scoped>

</style>
