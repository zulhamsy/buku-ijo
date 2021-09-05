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
          Nota Dinas (ND)
        </option>
        <option value="S">
          Surat (S)
        </option>
      </select>
      <!-- Tujuan -->
      <label
        for="tujuan"
        class="form-label"
      >Tujuan Surat</label>
      <input
        id="tujuan"
        type="text"
        name="tujuan"
        class="form-control mb-3"
      >
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
        Buat Surat
      </button>
    </form>
    <!-- Tabel History -->
    <p class="lead">
      Recent History
    </p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Tanggal
          </th>
          <th scope="col">
            Nomor
          </th>
          <th scope="col">
            Perihal
          </th>
          <th scope="col">
            Perekam
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/08/2021</td>
          <td>ND-182</td>
          <td>Pengiriman Pos ke Umum</td>
          <td>Zulham Syafrawi</td>
        </tr>
        <tr>
          <td>31/07/2021</td>
          <td>ND-181</td>
          <td>Pengiriman Pos ke Umum</td>
          <td>Krisna Erlangga</td>
        </tr>
        <tr>
          <td>31/07/2021</td>
          <td>S-50</td>
          <td>Surat Peringatan Pertama PT. Astrazeneca</td>
          <td>Indra Hidayat</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    TheNavbar
  },
  mounted() {
    this.fetchSurat()
  },
  methods: { ...mapActions(['fetchSurat']) }
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

form {
  margin-bottom: 3rem;
}

table {
  font-size: 0.8rem;
  max-width: 100%;
}
</style>