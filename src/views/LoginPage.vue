<template>
  <div
    id="container"
    class="relative min-h-screen py-5 flex justify-center items-center"
  >
    <!-- Alert Gagal -->
    <div
      v-if="showAlert"
      class="absolute top-3 py-4 px-5 max-w-max rounded-lg flex items-center gap-5 border-l-4 border-red-600 bg-red-100 border"
    >
      <!--Illustration-->
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 fill-red-500 animate-pulse"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!--Text Content-->
      <div class="flex-1">
        <p
          class="text-red-500 font-medium text-xs uppercase tracking-wider mb-2"
        >login failure</p>
        <p class="text-red-800 max-w-[25ch]">
          <!-- Pesan -->
          Login gagal nih, coba hubungi
          <span class="font-semibold">Administrator</span>
        </p>
      </div>
      <!--Close Icon-->
      <div class="self-stretch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 fill-red-300 cursor-pointer hover:fill-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="showAlert = false"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      class="min-w-fit rounded-lg shadow-lg shadow-indigo-800/10 border border-slate-200 bg-white"
    >
      <!--Form-->
      <div class="px-8 pt-12 pb-9 space-y-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 p-2 bg-indigo-50 rounded-full fill-indigo-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <h1
            class="mt-4 mb-1 text-2xl text-slate-600 font-bold tracking-tight"
          >Eits, login dulu</h1>
          <p class="text-slate-500 font-light text-sm">Jangan nyelonong aja bos</p>
        </div>
        <div class="space-y-5">
          <!--Username-->
          <div>
            <label
              for="nip"
              class="text-slate-500 font-semibold block mb-1 text-sm"
            >Username</label>
            <input
              id="nip"
              v-model="nip"
              type="text"
              name="nip"
              class="w-72 px-3 py-2 rounded border border-slate-300 shadow shadow-slate-800/10 caret-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 font-semibold focus:font-normal text-slate-600 placeholder:text-slate-300 placeholder:font-light peer invalid:ring-red-500 invalid:ring-1"
              placeholder="ex: 813300611"
              pattern="[0-9]{9}"
            />
            <p
              class="hidden peer-invalid:block mt-2 text-xs text-red-500"
            >Pake NIP Pendek ye, bukan nama panggilan</p>
          </div>
          <!--Password-->
          <div>
            <label
              for="pass"
              class="text-slate-500 font-semibold block mb-1 text-sm"
            >Password</label>
            <div class="relative">
              <input
                id="pass"
                v-model="pass"
                :type="isPassVisible ? 'text' : 'password'"
                name="pass"
                class="w-72 px-3 py-2 rounded border border-slate-300 shadow shadow-slate-800/10 caret-indigo-500 outline-none focus:ring-1 focus:ring-indigo-500 font-semibold focus:font-normal text-slate-600 peer"
              />
              <!--Eye Off-->
              <svg
                v-if="!isPassVisible"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute top-1/2 right-2 -translate-y-1/2 stroke-slate-500 peer-focus:stroke-indigo-500 cursor-pointer hover:stroke-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="isPassVisible = true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
              <!-- Eye On -->
              <svg
                v-if="isPassVisible"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute top-1/2 right-2 -translate-y-1/2 stroke-slate-500 peer-focus:stroke-indigo-500 cursor-pointer hover:stroke-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                @click="isPassVisible = false"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          class="flex justify-center items-center gap-2 w-full font-medium text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow hover:shadow-indigo-800/40 focus:bg-indigo-700 focus:shadow-inner pr-9 pl-8 py-3 rounded-lg group"
          @click="login"
        >
          <!-- Lock SVG -->
          <svg
            v-show="!onLogin"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 fill-indigo-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
            />
          </svg>
          <!-- Animation Login Click -->
          <svg
            v-show="onLogin"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-indigo-100 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span v-show="!onLogin">Masuk</span>
        </button>
      </div>
      <!--Illustration-->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  setup() {
    const router = useRouter()

    const nip = ref('')
    const pass = ref('')
    const nip_process = computed(() => {
      return nip.value + '@bukuijo.com'
    })

    async function login() {
      onLogin.value = true
      try {
        await signInWithEmailAndPassword(auth, nip_process.value, pass.value)
        router.replace({ name: 'dashboard' })
        showAlert.value = false
      } catch {
        // console.log('error');
        showAlert.value = true
      }
      onLogin.value = false
    }

    const isPassVisible = ref(false)
    const onLogin = ref(false)
    const showAlert = ref(false)

    return {
      nip,
      pass,
      isPassVisible,
      onLogin,
      showAlert,
      login
    }
  }
}
</script>


<style scoped>
#container {
  background-image: url(../assets/waves.svg);
  background-size: cover;
}
</style>
