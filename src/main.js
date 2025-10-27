import { createApp } from 'vue'
import '../src/assets/CSS/style.css'
import App from './App.vue'
import router from './routes'

createApp(App)
    .use(router)
    .mount('#app')
