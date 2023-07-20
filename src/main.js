import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import movieData from './assets/movies.json'
localStorage.setItem("data",JSON.stringify(movieData) )
const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.mount('#app')
