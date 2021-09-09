<script>
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import SweetAlert from '../components/SweetAlert.vue'
import eyeOn from '../assets/visibility-on.svg'
import eyeOff from '../assets/visibility-off.svg'
export default {
  components: {
    SweetAlert
  },
  data() {
    return {
      nip: '',
      password: '',
      showPassword: false,
      alert: {
        show: false,
        title: '',
        message: ''
      },
      onLoggingIn: false
    }
  },
  computed: {
    nip_process() {
      return this.nip + '@bukuijo.com'
    },
    showPasswordIcon() {
      return this.showPassword ? eyeOn : eyeOff
    }
  },
  methods: {
    async processLogin() {
      this.onLoggingIn = true
      try {
        await signInWithEmailAndPassword(auth, this.nip_process, this.password)
        // this.$router.replace({ name: 'dashboard' })
        console.log('Login Successfull')
        this.showAlert = false
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            this.alert.message = `User ${this.nip} beneran terdaftar?`
            break
          case 'auth/wrong-password':
            this.alert.message = 'Kayaknya salah password om, hehe'
            break
          default:
            this.alert.message =
              'Something wrong occured, please contact Administrator'
            break
        }
        this.alert.show = true
      }
      this.onLoggingIn = false
    }
  }
}
</script>

<template>
  <!--Login Wrapper-->
  <div class="max-w-lg min-h-screen mx-auto flex flex-col justify-center">
    <div class="px-4 py-5 md:px-6 md:pt-12 md:pb-8 rounded-lg bg-white md:shadow-lg">
      <!--Title-->
      <div class="flex items-center md:justify-center gap-x-3 mb-3">
        <img
          src="../assets/book.png"
          alt="logo brand"
          class="w-10 transform -rotate-12"
        >
        <h1 class="text-4xl">
          Buku <span class="text-primary font-semibold bg-green-100 px-3 py-1 rounded">Ijo</span>
        </h1>
      </div>
      <!--Subtitle-->
      <p class="text-md text-gray-400 opacity-80 italic md:text-center">
        Ambil nomer <span class="text-gray-500 font-medium">nggak</span> pake <span class="text-gray-500 font-medium">repot</span>
      </p>
      <!--Form SignIn-->
      <form class="mt-5 md:mt-8 mb-10 space-y-4">
        <div class="form-control">
          <label
            class="label"
            for="nip"
          >
            <span class="label-text">NIP Pendek</span>
          </label>
          <input
            id="nip"
            v-model="nip"
            type="text"
            placeholder="ex: 813300611"
            autocomplete="off"
            class="input input-bordered shadow-inner"
          >
        </div>
        <div class="form-control">
          <label
            class="label"
            for="pass"
          >
            <span class="label-text">Password</span>
          </label>
          <div class="relative">
            <input
              id="pass"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="input input-bordered w-full shadow-inner"
            >
            <img
              :src="showPasswordIcon"
              alt="pass-off"
              class="absolute right-1 top-1 p-2 opacity-50 cursor-pointer"
              @click="showPassword = !showPassword"
            > 
          </div>
        </div>
      </form>
      <button
        class="btn btn-block btn-primary transition-all duration-300 focus:shadow-none"
        :class="{'shadow-md': nip && password, 'loading': onLoggingIn}"
        :disabled="!nip || !password"
        @click.prevent="processLogin()"
      >
        check in
      </button>
    </div>
  </div>
  <!-- BG -->
  <div
    id="background"
    class="w-full bg-cover absolute top-0 w-full h-full md:bg-gradient-to-tr md:from-indigo-400 md:via-green-300 md:to-green-200"
  />
  <!-- Alert -->
  <SweetAlert v-if="alert.show">
    <template #title>
      Gagal Login
    </template>
    <template #message>
      {{ alert.message }}
    </template>
  </SweetAlert>
</template>

<style scoped>
input {
  @apply focus:shadow-md;
}

#background {
  z-index: -1;
}
</style>