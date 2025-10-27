import { createApp } from 'vue'
import '../src/assets/CSS/style.css'
import App from './App.vue'
import router from './routes'
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App)
    .use(router)
    .mount('#app')
