import { createRouter, createWebHistory } from 'vue-router'

//Routes
import HomeScreen from '../screens/HomeScreen.vue'
import LoginScreen from '../screens/LoginScreen.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeScreen
        },
        {
            path: '/login',
            name: 'login',
            component: LoginScreen
        },
    ]
})

export default router