<script>
import { useStore } from 'vuex'
import { computed, onActivated } from 'vue'
import { fetchSurat } from '../composable/useFetchSurat'
import extractDate from '../composable/useExtractDate'
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

    // Date Formatting
    function dateDisplay(tanggal) {
      const { date, month, year } = extractDate(tanggal)
      return `${month} ${date}, ${year}`
    }

    return {
      fetchSuratOnComponent,
      dateDisplay,
      recentSurat
    }
  }
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
        <td>{{ dateDisplay(surat.tanggal_surat.toDate()) }}</td> 
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