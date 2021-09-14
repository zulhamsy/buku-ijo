<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DashboardForm',
  data() {
    return {
      mode_surat: 'ND',
      tujuan: '',
      perihal: '',
      tanggal_surat: ''
    }
  },
  computed: {
    ...mapState(['suratTerakhir']),
    tanggalSuratTerakhir() {
      if (!this.suratTerakhir.tanggal[this.mode_surat]) {
        const date = new Date()
        date.setDate(1)
        date.setMonth(0)
        return date
      } else {
        return this.suratTerakhir.tanggal[this.mode_surat]
      }
    },
    minimum() {
      return this.minmax(this.tanggalSuratTerakhir)
    },
    maximum() {
      const today = new Date()
      return this.minmax(today)
    },
    formattedDate() {
      const dateString = this.tanggalSuratTerakhir.toString()
      const [day, month, date, year] = dateString.split(' ')
      return {
        day,
        month,
        date,
        year
      }
    }
  },
  activated() {
    this.fetchSuratTerakhirInfo()
  },
  methods: {
    ...mapActions(['fetchSuratTerakhirInfo']),
    minmax(date) {
      const year = date.getFullYear()
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      return `${year}-${month}-${day}`
    }
  }
}
</script>
<template>
  <div class="w-full md:flex">
    <!-- Submission Form -->
    <form class="flex-1 space-y-3 mb-5">
      <!-- Select Jenis -->
      <div class="form-control">
        <label
          for="jenisnd"
          class="label"
        >Pilih Jenis Surat</label>
        <select
          id="jenisnd"
          v-model="mode_surat"
          class="select select-bordered w-full max-w-md"
        >
          <option value="ND">
            Nota Dinas (ND)
          </option> 
          <option value="S">
            Surat (S)
          </option> 
        </select>
      </div>
      <!-- Tujuan Surat -->
      <div class="form-control">
        <label
          class="label"
          for="tujuan"
        >
          Tujuan Surat
        </label>
        <input
          id="tujuan"
          v-model="tujuan"
          type="text"
          placeholder="ex: Subbagian Umum"
          autocomplete="off"
          class="input input-bordered shadow-inner"
        >
      </div>
      <!-- Perihal -->
      <div class="form-control">
        <label
          class="label"
          for="perihal"
        >
          Perihal
        </label>
        <input
          id="perihal"
          v-model="perihal"
          type="text"
          autocomplete="off"
          class="input input-bordered shadow-inner"
          required
        >
      </div>
      <!-- Tanggal -->
      <div class="form-control">
        <label
          for="tanggal"
          class="label max-w-md"
        >Tanggal <span class="badge badge-info text-xs font-thin">format: MM/DD/YYYY</span></label>
        <input
          id="tanggal"
          v-model="tanggal_surat"
          type="date"
          name="tanggal"
          class="input input-bordered shadow-inner"
          :min="minimum"
          :max="maximum"
          required
        >
      </div>
    </form>
    <!-- Info Section -->
    <div class="md:space-y-3 flex align-center justify-between md:block">
      <div>
        <p class="md:font-semibold text-gray-400 md:pt-2 text-sm md:text-base">
          Nomor Surat Terakhir
        </p>
        <p class="md:text-3xl md:font-normal font-bold">
          {{ mode_surat }}-{{ suratTerakhir.nomor[mode_surat] }}
        </p>
      </div>
      <div>
        <p class="md:font-semibold text-gray-400 md:pt-2 text-sm md:text-base">
          Tanggal Surat Terakhir
        </p>
        <p class="md:text-3xl md:font-normal font-bold">
          {{ formattedDate.month }} {{ formattedDate.date }}, {{ formattedDate.year }}
        </p>
      </div>
    </div>
  </div>
  <!-- CTA Button -->
  <button class="btn shadow-md focus:shadow-none mt-7 md:mt-3 md:max-w-md w-full">
    Buat Surat
  </button>
</template>

<style scoped>
input {
  @apply focus:shadow-md max-w-md;
}
</style>