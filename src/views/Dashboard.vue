<template>
  <TheNavbar class="mb-3" />
  <main class="container pb-4">
    <!-- Title -->
    <p class="lead">
      Buat Surat Baru
    </p>
    <!-- Form -->
    <form @submit.prevent="inputSurat">
      <!-- Jenis Surat -->
      <label
        class="form-label"
        for="jenissurat"
      >Jenis Surat</label>
      <select
        id="jenissurat"
        v-model="mode_surat"
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
        v-model="tujuan"
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
        v-model="perihal"
        type="text"
        name="perihal"
        class="form-control mb-3"
        autocomplete="off"
        required
      >
      <div
        v-if="tanggalSuratTerakhir"
        class="d-flex justify-content-between mb-4"
      >
        <!-- DIV / Tanggal dan Tanggal Terakhir -->
        <div>
          <label
            for="tanggal"
            class="form-label"
          >Tanggal</label>
          <input
            id="tanggal"
            v-model="tanggal_surat"
            type="date"
            name="tanggal"
            class="form-control"
            :min="minimum"
            :max="maximum"
            required
          >
        </div>
        <!-- Info Tanggal Surat Terakhir -->
        <div
          id="last-surat-info"
        >
          <label
            class="form-label"
          >Tanggal Surat Terakhir</label>
          <p class="mb-0 py-2">
            {{ formatTanggal(tanggalSuratTerakhir) }}
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
      <tbody v-if="recentSurat.length">
        <tr
          v-for="surat in recentSurat"
          :key="surat.nomor_surat"
        >
          <td>{{ formatTanggal(surat.tanggal_surat.toDate()) }}</td>
          <td>{{ surat.jenis_surat }}-{{ surat.nomor_surat }}</td>
          <td>{{ surat.perihal }}</td>
          <td>{{ surat.perekam }}</td>
        </tr>
      </tbody>
    </table>
  </main>
  <!-- Alert -->
  <Alert
    v-if="alert.show"
    :class="alert.class"
  >
    <template #default>
      <strong>{{ alert.title }}</strong><br>
      <span>{{ alert.msg }}</span>
    </template>
  </Alert>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import Alert from '../components/Alert.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    TheNavbar,
    Alert
  },
  data() {
    return {
      mode_surat: 'ND',
      tujuan: '',
      perihal: '',
      tanggal_surat: '',
      alert: {
        show: false,
        class: '',
        title: '',
        msg: ''
      }
    }
  },
  computed: {
    ...mapState(['recentSurat', 'suratTerakhir']),
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
    }
  },
  mounted() {
    try {
      this.fetchRecentSurat()
      this.fetchSuratTerakhirInfo()
      this.fetchUsername()
    } catch {
      // show error alert
      this.alert.title = 'Critical Error'
      this.alert.msg =
        'Something wrong, please check your connection or contact Administrator'
      this.alert.class = 'alert-danger'
      this.alert.show = true
    }
  },
  methods: {
    ...mapActions([
      'fetchRecentSurat',
      'fetchSuratTerakhirInfo',
      'addSurat',
      'fetchUsername'
    ]),
    formatTanggal(date) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
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
      try {
        await this.addSurat({
          jenis_surat: this.mode_surat,
          nomor_surat: this.suratTerakhir.nomor[this.mode_surat]
            ? this.suratTerakhir.nomor[this.mode_surat] + 1
            : 1,
          tujuan_surat: this.tujuan,
          perihal: this.perihal,
          tanggal_surat: new Date(this.tanggal_surat),
          tahun_surat: new Date().getFullYear()
        })
        // Show succcess alert
        this.alert.title = 'Sukses'
        this.alert.msg = 'Data berhasil diinput'
        this.alert.class = 'alert-success'
        this.alert.show = true
        // Blank field form
        this.tujuan = ''
        this.perihal = ''
      } catch {
        // show error alert
        this.alert.title = 'Data Submission Error'
        this.alert.msg =
          'Something wrong, please check your connection or contact Administrator'
        this.alert.class = 'alert-danger'
        this.alert.show = true
      }
    }
  }
}
</script>

<style scoped>
#last-surat-info {
  font-size: 0.8rem;
}

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