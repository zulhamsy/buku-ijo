<script>
import { mapActions, mapState } from 'vuex'
import SweetAlert from '../components/SweetAlert.vue'
export default {
  name: 'DashboardForm',
  components: {
    SweetAlert
  },
  data() {
    return {
      mode_surat: 'ND',
      tujuan: '',
      perihal: '',
      tanggal_surat: '',
      onSubmission: false,
      alert: {
        type: '',
        show: false,
        title: '',
        message: ''
      }
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
    // perlu diterapkan error handling
    this.fetchSuratTerakhirInfo()
  },
  methods: {
    ...mapActions(['fetchSuratTerakhirInfo', 'addSurat']),
    minmax(date) {
      const year = date.getFullYear()
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      return `${year}-${month}-${day}`
    },
    async inputSurat() {
      this.onSubmission = true
      const payload = {
        jenis_surat: this.mode_surat,
        nomor_surat: this.suratTerakhir.nomor[this.mode_surat]
          ? this.suratTerakhir.nomor[this.mode_surat] + 1
          : 1,
        tujuan_surat: this.tujuan,
        perihal: this.perihal,
        tanggal_surat: new Date(this.tanggal_surat),
        tahun_surat: new Date().getFullYear()
      }
      try {
        await this.addSurat(payload)
        // Show Success ALert + Notification
        this.alert.type = 'success'
        this.alert.title = 'Buat Surat Sukses'
        this.alert.message = `Nomor Surat Anda adalah ${payload.jenis_surat}-${payload.nomor_surat}`
        this.alert.show = true
      } catch {
        this.alert.type = 'error'
        this.alert.title = 'Buat Surat Gagal'
        this.alert.message = 'Terjadi Kesalahan, silahkan refresh halaman'
        this.alert.show = true
      }
      this.onSubmission = false
    }
  }
}
</script>
<template>
  <!-- Alert -->
  <SweetAlert
    v-if="alert.show"
    :type="alert.type"
    class="mb-2"
    @click="alert.show = false"
  >
    <template #title>
      {{ alert.title }}
    </template>
    <template #message>
      {{ alert.message }}
    </template>
  </SweetAlert>
  <div class="w-full md:flex">
    <!-- Submission Form -->
    <form
      class="flex-1 space-y-3 mb-5"
      @submit.prevent="inputSurat()"
    >
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
          class="input input-bordered shadow-inner w-full"
          :min="minimum"
          :max="maximum"
          required
        >
      </div>
      <button
        ref="btnSubmit"
        class="hidden"
        type="submit"
      />
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
  <button
    class="btn shadow-md focus:shadow-none mt-7 md:mt-3 md:max-w-md w-full"
    :class="{'loading': onSubmission}"
    @click="$refs.btnSubmit.click()"
  >
    Buat Surat
  </button>
</template>

<style scoped>
input {
  @apply focus:shadow-md max-w-md;
}
</style>