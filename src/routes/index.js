import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import Events from "../pages/Events/Events.vue"
import Certificates from "../pages/Certificates/Certificates.vue";
const routes = [
    { path: '/', name: 'Home', component: Home },
    // { path: '/courses', name: 'Courses', component: Courses },
    { path: '/events', name: 'Events', component: Events },
    // { path: '/about', name: 'About', component: About },
    // { path: '/nowadays', name: 'Nowadays', component: Nowadays },
    { path: '/sertificate', name: 'Certificates', component: Certificates },
    // { path: '/call', name: 'Call', component: Call },
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router