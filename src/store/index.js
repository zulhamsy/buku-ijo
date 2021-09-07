import { createStore } from 'vuex'
import { suratDB, usersDB, auth } from '../firebase'
import {
  getDocs,
  query,
  orderBy,
  limit,
  where,
  addDoc,
  doc,
  getDoc
} from 'firebase/firestore/lite'

const store = createStore({
  state() {
    return {
      recentSurat: [],
      suratTerakhir: {
        tanggal: {
          ND: null,
          S: null
        },
        nomor: {
          ND: null,
          S: null
        }
      },
      username: null
    }
  },
  mutations: {
    addRecentSurat(state, payload) {
      state.recentSurat.push(payload)
    },
    removeAllRecentSurat(state) {
      state.recentSurat = []
    },
    changeUsername(state, payload) {
      state.username = payload
    }
  },
  actions: {
    async fetchRecentSurat({ commit }) {
      const q = query(suratDB, orderBy('tanggal_surat', 'desc'), limit(5))
      const querySnapshot = await getDocs(q)
      commit('removeAllRecentSurat')
      querySnapshot.forEach((doc) => {
        commit('addRecentSurat', doc.data())
      })
    },
    fetchSuratTerakhirInfo({ state }) {
      const currentYear = new Date().getFullYear()
      const NDQuery = query(
        suratDB,
        where('tahun_surat', '==', currentYear),
        where('jenis_surat', '==', 'ND'),
        orderBy('tanggal_surat', 'desc'),
        limit(1)
      )
      const SQuery = query(
        suratDB,
        where('tahun_surat', '==', currentYear),
        where('jenis_surat', '==', 'S'),
        orderBy('tanggal_surat', 'desc'),
        limit(1)
      )
      Promise.allSettled([getDocs(NDQuery), getDocs(SQuery)]).then(
        (querySnapshot) => {
          querySnapshot.forEach((docs) => {
            if (!docs.value.empty) {
              docs.value.forEach((doc) => {
                state.suratTerakhir.nomor[doc.get('jenis_surat')] =
                  doc.get('nomor_surat')
                state.suratTerakhir.tanggal[doc.get('jenis_surat')] = doc
                  .get('tanggal_surat')
                  .toDate()
              })
            }
          })
        }
      )
    },
    async addSurat({ dispatch, state }, payload) {
      // add to backend
      await addDoc(suratDB, {
        perekam: state.username,
        ...payload
      })
      // re-fetch historical data
      dispatch('fetchRecentSurat')
      dispatch('fetchSuratTerakhirInfo')
    },
    async fetchUsername({ commit }) {
      const docRef = doc(usersDB, auth.currentUser.uid)
      const docSnapshot = await getDoc(docRef)
      commit('changeUsername', docSnapshot.get('nama'))
    }
  }
})

export default store
