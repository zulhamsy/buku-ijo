<script>
import SweetNavbar from '../components/SweetNavbar.vue'
export default {
  components: {
    SweetNavbar
  }
}
</script>

<template>
  <sweet-navbar name="Zulham S" />
  <div class="container max-w-screen-md mx-auto pt-3 px-5">
    <!-- Title -->
    <h1 class="prose prose-xl font-semibold mb-3">
      Buat Surat Baru
    </h1>
    <!-- Submission Form -->
    <form class="space-y-3">
      <!-- Select Jenis -->
      <div class="form-control">
        <label
          for="jenisnd"
          class="label"
        >Pilih Jenis Surat</label>
        <select
          id="jenisnd"
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
  </div>
</template>

<style scoped>
input {
  @apply focus:shadow-md max-w-md;
}
</style>