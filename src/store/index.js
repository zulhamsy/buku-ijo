import { createStore } from 'vuex'
import { suratDB } from '../firebase'
import { getDocs } from 'firebase/firestore/lite'

const store = createStore({
  state() {
    return {
      recentSurat: []
    }
  },
  mutations: {
    addSurat(state, payload) {
      state.recentSurat = payload
    }
  },
  actions: {
    async fetchSurat() {
      const querySnapshot = await getDocs(suratDB)
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      })
    }
  }
})

export default store
