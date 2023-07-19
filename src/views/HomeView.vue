<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="relative w-full overflow-hidden">
  <img src="src/assets/images/cine.jpg" alt="Your Image" class="w-full h-full object-cover" />
  <div class="absolute bottom-0 w-full h-full bg-gradient-to-t"></div>
</div>
  <main>
  <div class="overflow-hidden p-10">
    <div class="mx-auto px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4 flex items-center">
          <div class="lg:max-w-lg">
            <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Disfruta de tus peliculas favoritas</p>
            <p class="mt-6 text-lg leading-8 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
           
          </div>
        </div>
        <img src="src/assets/images/comida.png" alt="Product screenshot" class="  md:-ml-4 lg:-ml-0" />
      </div>
    </div>
  </div>

  <div class="py-10 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Novedades</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Descrubre las peliculas nuevas que tenemos para ti.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          
        </dl>
      </div>
    </div>
  </div>



  </main>
   
</template>

<style scoped>
.bg-gradient-to-t {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #213547 90%);
}


</style>
