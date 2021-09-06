import { createStore } from 'vuex'
import { suratDB } from '../firebase'
import { getDocs, query, orderBy, limit, where } from 'firebase/firestore/lite'

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
      }
    }
  },
  mutations: {
    addRecentSurat(state, payload) {
      state.recentSurat.push(payload)
    },
    removeAllRecentSurat(state) {
      state.recentSurat = []
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
      Promise.all([getDocs(NDQuery), getDocs(SQuery)]).then((querySnapshot) => {
        querySnapshot.forEach((docs) => {
          docs.forEach((doc) => {
            // console.log(doc.data())
            state.suratTerakhir.nomor[doc.get('jenis_surat')] =
              doc.get('nomor_surat')
            state.suratTerakhir.tanggal[doc.get('jenis_surat')] = doc
              .get('tanggal_surat')
              .toDate()
          })
        })
      })
    }
  }
})

export default store
