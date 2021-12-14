<script>
import { useStore } from 'vuex'
import { computed, onActivated } from 'vue'
import { fetchSurat } from '../composable/useFetchSurat'
import formatDate from '../composable/useFormatDate'
export default {
  name: 'DashboardRecentSurat',
  setup() {
    const store = useStore()

    // Fetching Surat
    const recentSurat = computed(() => store.state.recentSurat)
    async function fetchSuratOnComponent() {
      const result = await fetchSurat()
      store.commit('removeAllRecentSurat')
      result.forEach((doc) => {
        store.commit('addRecentSurat', doc.data())
      })
    }
    onActivated(function () {
      if (!recentSurat.value.length) {
        fetchSuratOnComponent()
      }
    })

    return {
      fetchSuratOnComponent,
      formatDate,
      recentSurat
    }
  }
  // computed: {
  //   ...mapState(['recentSurat'])
  // },
  // activated() {
  //   if (!this.recentSurat.length) {
  //     // perlu terapkan error handling
  //     this.fetchRecentSurat()
  //   }
  // },
  // methods: {
  //   ...mapActions(['fetchRecentSurat']),
  //   formattedDate(someDate) {
  //     const dateString = someDate.toString()
  //     const [, month, date, year] = dateString.split(' ')
  //     return `${month} ${date}, ${year}`
  //   }
  // }
}
</script>

<template>
  <button
    class="btn btn-outline btn-primary btn-xs float-right mb-3"
    @click="fetchSuratOnComponent"
  >
    Refresh Data
  </button>
  <table class="table-fixed table table-compact w-full table-zebra">
    <thead>
      <tr>
        <th>Tanggal</th> 
        <th>Nomor ND</th> 
        <th>Perihal</th>
        <th class="hidden md:table-cell">
          Perekam
        </th>
      </tr>
    </thead> 
    <tbody>
      <tr
        v-for="surat in recentSurat"
        :key="surat.nomor_surat"
      >
        <td>{{ formatDate(surat.tanggal_surat.toDate()) }}</td> 
        <td>{{ surat.jenis_surat }}-{{ surat.nomor_surat }}</td> 
        <td>{{ surat.perihal }}</td>
        <td class="hidden md:table-cell">
          {{ surat.perekam }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.table td {
  white-space: unset;
}
</style>