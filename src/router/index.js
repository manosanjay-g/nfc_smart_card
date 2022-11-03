import { createRouter, createWebHistory } from 'vue-router'

//Routes
import HomeScreen from '../screens/HomeScreen.vue'
import LoginScreen from '../screens/LoginScreen.vue'
import AddScreen from '../screens/AddScreen.vue'
import SettingsScreen from '../screens/SettingsScreen.vue'
import TapScreen from '../screens/GetPatientInfoScreen.vue'
import IndividualPatientPage from '../screens/IndividualPatientPage.vue'
import IndividualDoctorPage from '../screens/IndividualDoctorPage.vue'
import PatientsListScreen from '../screens/PatientsListScreen.vue'
import DoctorsListScreen from '../screens/DoctorsListScreen.vue'
import BranchesListScreen from '../screens/BranchesListScreen.vue'
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
            path: '/tap',
            name: 'tap',
            component: TapScreen
        },
        {
            path: '/patient/:id',
            name: "patient",
            component: IndividualPatientPage
        },
        {
            path: '/doctor/:id',
            name: "doctor",
            component: IndividualDoctorPage
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
        {
            path: '/patients',
            name: 'patients',
            component: PatientsListScreen
        },
        {
            path: '/doctors',
            name: 'doctors',
            component: DoctorsListScreen
        },
        {
            path: '/branches',
            name: 'branches',
            component: BranchesListScreen
        },
    ]
})

router.beforeEach(async (to, from) => {
    const token = localStorage.getItem('token')
    if (
        // make sure the user is authenticated
        token == null &&
        to.name !== 'login'
    ) {
        // redirect the user to the login page
        return { name: 'login' }
    }
})
export default router