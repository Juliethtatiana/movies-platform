<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import movieData from './assets/movies.json'


localStorage.setItem("data",JSON.stringify(movieData) )
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catalogo', href: '/catalog' },
  { name: 'Crear Pelicula', href: '/create' },
]

const mobileMenuOpen = ref(false)
</script>
<template>
    <header class="py-2 shadow-lg inset-x-0 top-0 z-50 bg-gray-300 dark:bg-slate-800">
      <nav class="flex justify-between lg:block lg:py-6 px-6 lg:px-8" aria-label="Global">
        <div class="lg:absolute lg:flex lg:flex-1">
          <a href="" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Logo</span>
            <img class="h-8 w-auto" src="/src/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" @click="mobileMenuOpen = true">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:justify-center lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6">{{ item.name }}</a>
        </div>
        
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gray-300 dark:bg-slate-800">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/src/assets/images/logo.png" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 " @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ">{{ item.name }}</RouterLink>
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="">
    
     <RouterView/>
      
    </div>
    <footer class="bg-gray-300 dark:bg-slate-900 px-2 py-6 mt-6">
    <p>Made by WiinterDev </p>
  </footer>
</template>

