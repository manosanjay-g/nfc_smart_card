import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useUserStore = defineStore('user', {
    state: () => ({
        error: null,
    }),
    getters: {
        getErrorMessage: (state) => {
            return state.error;
        }
    },
    actions: {
        async addUser(payload) {
            try {
                let response = await axios.post("https://nfc-smart-card.herokuapp.com" + '/admin/add/users/', payload)
                    .then((res) => {
                        console.log(res.data);
                    })
            } catch (err) {
                this.error = err.response.data ? err.response.data.error : err;
            }
        }
    },
})