<script>
import SweetNavbar from '../components/SweetNavbar.vue'
import { fetchSurat } from '../composable/useFetchSurat'
import formatDate from '../composable/useFormatDate'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, watch, ref, onMounted } from 'vue'
export default {
  components: { SweetNavbar },
  setup() {
    const router = useRouter()
    const store = useStore()

    function backToHome() {
      router.push({
        name: 'dashboard'
      })
    }

    // fetch surat
    const surat = ref([])
    const name = computed(() => store.state.username)
    async function fetchSuratOnComponent() {
      const result = await fetchSurat({
        batas: 10,
        filter: ['perekam', '==', name.value]
      })

      result.forEach((data) => {
        surat.value.push(data.data())
      })
    }

    watch(name, fetchSuratOnComponent)

    onMounted(function () {
      if (name.value) {
        fetchSuratOnComponent()
      }
    })

    return {
      backToHome,
      formatDate,
      surat
    }
  }
}
</script>
  
<template>
  <sweet-navbar />
  <div class="container max-w-screen-md mx-auto py-2 px-5">
    <button
      class="btn btn-outline btn-secondary btn-xs font-thin mb-4 float-right"
      @click="backToHome"
    >
      kembali ke Dashboard
    </button>
    <table class="w-full table-auto table table-compact table-zebra">
      <thead>
        <tr>
          <th scope="col">
            Tanggal
          </th> 
          <th scope="col">
            Nomor
          </th> 
          <th
            scope="col"
          >
            Perihal
          </th>
          <th>
            Tujuan
          </th>
        </tr>
      </thead> 
      <tbody>
        <tr
          v-for="item in surat"
          :key="item.id"
        >
          <td>{{ formatDate(item.tanggal_surat.toDate()) }}</td> 
          <td>{{ item.jenis_surat }}-{{ item.nomor_surat }}</td> 
          <td>{{ item.perihal }}</td>
          <td>{{ item.tujuan_surat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  @apply break-all;
}

tbody tr td {
  @apply text-xs sm:text-base break-normal;
  white-space: normal;
}
</style>