import { createRouter, createWebHistory } from 'vue-router'

//Routes
import HomeScreen from '../screens/HomeScreen.vue'
import LoginScreen from '../screens/LoginScreen.vue'
import AddScreen from '../screens/AddScreen.vue'
import SettingsScreen from '../screens/SettingsScreen.vue'
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
        {
            path: '/add',
            name: 'add',
            component: AddScreen
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingsScreen
        },
    ]
})

export default router