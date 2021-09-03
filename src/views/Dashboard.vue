<template>
  <TheNavbar class="mb-3" />
  <main class="container">
    <!-- Title -->
    <p class="lead">
      Buat Surat Baru
    </p>
    <!-- Form -->
    <form>
      <!-- Jenis Surat -->
      <label
        class="form-label"
        for="jenissurat"
      >Jenis Surat</label>
      <select
        id="jenissurat"
        class="form-select mb-3"
        aria-label="Default select example"
      >
        <option value="ND">
          Nota Dinas
        </option>
        <option value="S">
          Surat
        </option>
      </select>
      <!-- Perihal -->
      <label
        for="perihal"
        class="form-label"
      >Perihal</label>
      <input
        id="perihal"
        type="text"
        name="perihal"
        class="form-control mb-3"
      >
      <div class="d-flex justify-content-between mb-4">
        <!-- DIV / Tanggal dan Tanggal Terakhir -->
        <div>
          <label
            for="tanggal"
            class="form-label"
          >Tanggal</label>
          <input
            id="tanggal"
            type="date"
            name="tanggal"
            class="form-control"
            min="2021-09-01"
          >
        </div>
        <!-- Info Tanggal Surat Terakhir -->
        <div>
          <label class="form-label">Tanggal Surat Terakhir</label>
          <p class="mb-0 py-1">
            28 Agustus 2021
          </p>
        </div>
      </div>
      <!-- CTA -->
      <button class="btn btn-success w-100">
        Ambil Nomor
      </button>
    </form>
  </main>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: {
    TheNavbar
  }
}
</script>

<style scoped>
.lead {
  font-weight: 600;
}

label {
  opacity: 55%;
  font-weight: 600;
}

button {
  font-weight: 600;
}
</style>