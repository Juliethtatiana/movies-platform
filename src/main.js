import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import VueYtframe from "vue3-ytframe";

const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.use(VueYtframe)
app.mount('#app')
