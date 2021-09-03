<template>
  <div class="container d-flex flex-column justify-content-center min-vh-100">
    <!-- App Title -->
    <div class="d-flex align-items-center">
      <img
        src="..\assets\brand-logo.svg"
        alt="brand logo"
        class="logo"
      >
      <h2>
        <span>Buku</span>
        <span class="text-success"> Ijo</span>
      </h2>
    </div>
    <p class="subtitle text-secondary">
      Ambil Nomor Ga Pake Ribet
    </p>
    <!-- LoginID -->
    <label
      for="loginid"
      class="form-label"
    >NIP Pendek</label>
    <input
      id="loginid"
      v-model="nip"
      type="text"
      name="loginid"
      class="form-control mb-4"
      placeholder="ex: 813300611"
    >
    <!-- Password -->
    <label
      for="password"
      class="form-label"
    >Password</label>
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
      class="form-control mb-4"
    >
    <!-- CTA -->
    <button
      class="btn btn-success"
      :disabled="!nip || !password"
      @click="processLogin"
    >
      Masuk Gan
    </button>
    <!-- Alert -->
    <teleport to="body">
      <CustomAlert
        v-if="showAlert"
        class="alert-warning"
      >
        <template #default>
          <strong>Authentication Error</strong><br>
          <span>{{ msgAlert }}</span>
        </template>
      </CustomAlert>
    </teleport>
  </div>
</template>

<script>
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import CustomAlert from '../components/Alert.vue'
export default {
  components: {
    CustomAlert
  },
  data() {
    return {
      nip: '',
      password: null,
      showAlert: false,
      msgAlert: ''
    }
  },
  computed: {
    nip_process() {
      return this.nip + '@bukuijo.com'
    }
  },
  methods: {
    async processLogin() {
      try {
        await signInWithEmailAndPassword(auth, this.nip_process, this.password)
        this.$router.replace({ name: 'dashboard' })
        this.showAlert = false
      } catch (error) {
        // console.log(error.code)
        switch (error.code) {
          case 'auth/user-not-found':
            this.msgAlert = `User ${this.nip} beneran terdaftar?`
            break
          case 'auth/wrong-password':
            this.msgAlert = 'Kayaknya salah password om, hehe'
            break
          default:
            this.msgAlert =
              'Something wrong occured, please contact Administrator'
            break
        }
        this.showAlert = true
      }
    }
  }
}
</script>

<style scoped>
.logo {
  width: 2.25rem;
  margin-right: 0.5rem;
}

h2 {
  margin-bottom: 0;
  font-weight: bold;
}

.subtitle {
  font-size: 0.8rem;
  margin-top: 0.25rem;
  margin-bottom: 2.5rem;
}

button {
  font-weight: 600;
}

.alert {
  position: absolute;
  top: 0;
  left: 0;
}
</style>