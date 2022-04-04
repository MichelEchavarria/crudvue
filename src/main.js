import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import VueSweetalert2 from 'vue-sweetalert2'

createApp(App).use(router).mount('#app')
