<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DashboardRecentSurat',
  computed: {
    ...mapState(['recentSurat'])
  },
  activated() {
    // perlu terapkan error handling
    this.fetchRecentSurat()
  },
  methods: {
    ...mapActions(['fetchRecentSurat']),
    formattedDate(someDate) {
      const dateString = someDate.toString()
      const [, month, date, year] = dateString.split(' ')
      return `${month} ${date}, ${year}`
    }
  }
}
</script>

<template>
  <button class="btn btn-outline btn-primary btn-xs float-right mb-3">
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
        <td>{{ formattedDate(surat.tanggal_surat.toDate()) }}</td> 
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