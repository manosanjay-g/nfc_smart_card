import { defineStore } from 'pinia'
import axios from 'axios';
import router from '../router'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        users: [],
        branches: []
    }),
    getters: {
        getManagers(state) {
            return state.users.filter((e) => {
                return e.registeredAs == 'Doctor';
            })
        },
        getPatients(state) {
            return state.users.filter((e) => {
                return e.registeredAs == 'Patient';
            })
        }
    },
    actions: {
        async getUsers() {
            try {
                const token = localStorage.getItem("token")
                let response = await axios.get("https://nfc-smart-card.herokuapp.com" + '/admin/read/users/')
                    .then((res) => {
                        console.log(res);
                        this.users = res.data.users
                    })
            } catch (err) {
                console.log(err);
            }
        },
        async getBranches() {
            try {
                const token = localStorage.getItem("token")
                let response = await axios.get("https://nfc-smart-card.herokuapp.com" + '/admin/read/branches/')
                    .then((res) => {
                        console.log(res);
                        this.branches = res.data.branches

                    })
            } catch (err) {
                console.log(err);
            }
        }
    }
})