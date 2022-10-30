import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//Tailwind
import './styles/app.css';
//Pinia
import { createPinia } from 'pinia'
//FontsAwesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon, faLaptopCode, faArrowUp, faStar, faAdd, faGear, faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

//VueRouter
import router from './router'

const pinia = createPinia()

library.add(faMoon, faInstagram, faLinkedin, faTwitter, faLaptopCode, faGithub, faArrowUp, faStar, faAdd, faGear, faHome)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(pinia).mount('#app')
