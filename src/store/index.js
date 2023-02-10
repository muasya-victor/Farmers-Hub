import { createStore } from 'vuex'
import api from "../utils/api.js";
const base_url = 'http://127.0.0.1:8000/api/'

const state= {
     farmers : [],
    errors: []
}
const getters = {
    getFarmers(state){
        return state.farmers
    },
    getErrors(state) {
        return state.errors
    }
}
const mutations= {
    setFarmers(state, payload){
        state.farmers = payload.data
    },
    setErrors(state, errors){
        state.errors = errors
    }
}
const actions= {
    async fetchFarmers ({ commit, state }, payload) {
        return await api.get(base_url+ payload)
            .then(response => {
                commit('setFarmers', response)
                }
            ).catch(err => {
                commit('setErrors', err)
            })

    },
}

export default createStore({
    state,getters,mutations,actions
})