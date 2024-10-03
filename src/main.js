import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue';
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'





const app = createApp(App);

app.use(Toast,{
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
})

app.mount('#app');
