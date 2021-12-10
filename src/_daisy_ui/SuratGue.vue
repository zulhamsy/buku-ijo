<script>
import SweetNavbar from '../components/SweetNavbar.vue'
export default {
  components: { SweetNavbar }
}
</script>
  
<template>
  <sweet-navbar />
  <div class="container max-w-screen-md mx-auto py-2 px-5">
    <button class="btn btn-outline btn-secondary btn-xs font-thin mb-4 float-right">
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
          v-for="x in 10"
          :key="x"
        >
          <td>Dec 07, 2021</td> 
          <td>ND-12</td> 
          <td>
            Pengiriman POS kelewat anjer
          </td>
          <td>
            PT. Altama Brothers
          </td>
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