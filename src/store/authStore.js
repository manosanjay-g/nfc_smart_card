import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useAuthStore = defineStore('root', {
    state: () => ({
        isLoggedIn: false,
        userData: [],
        error: null,
        isLoading: false,
    }),
    getters: {
        getLoginState: (state) => {
            return state.isLoggedIn
        },

        getLoadingState: (state) => {
            return state.isLoading
        },
        getErrorMessage: (state) => {
            return state.error;
        }
    },
    actions: {
        async login(loginInfo) {
            try {
                this.error = null;
                this.isLoading = true;
                let response = await axios.post("https://nfc-smart-card.herokuapp.com" + '/auth/login/hospital/', loginInfo)
                    .then((res) => {
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("username", res.data.username);
                        this.isLoggedIn = true;
                        this.isLoading = false;
                    })

                const token = localStorage.getItem("token")
                const username = localStorage.getItem("username")
                const config = {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
                router.replace('/');
            } catch (err) {
                console.log(err);
                this.isLoading = false;
                this.error = err.response.data ? err.response.data.error : err;
            }

        },
        async getUserInfo() {
            try {
                const token = localStorage.getItem("token")
                const username = localStorage.getItem("username")
                const config = {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
                const user = await axios.get("https://nfc-smart-card.herokuapp.com" + "/users/" + username, config).then((res) => {
                    if (res.data.user.role == "Admin") {
                        this.isAdmin = true
                    }
                    this.userData = res.data.user
                })
            } catch (err) {
                console.log(err);
                this.error = err.response.data ? err.response.data.error : err;
            }
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            router.replace('/')
        },
        checkLoginState() {
            if (localStorage.getItem('token')) {
                this.isLoggedIn = true
            }
        }
    },
})