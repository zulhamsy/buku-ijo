<script>
export default {
  data() {
    return {
      nip: '',
      password: ''
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
          class="w-10"
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
              type="password"
              class="input input-bordered w-full shadow-inner"
            >
            <img
              src="../assets/visibility-off.svg"
              alt="pass-off"
              class="absolute right-1 top-1 p-2 opacity-50 cursor-pointer"
            >
          </div>
        </div>
      </form>
      <button
        class="btn btn-block btn-primary"
        :class="{'shadow-md': nip && password}"
        :disabled="!nip || !password"
      >
        check in
      </button>
    </div>
  </div>
  <div
    id="background"
    class="w-full bg-cover absolute top-0 w-full h-full md:bg-gradient-to-tr md:from-blue-300 md:to-green-500"
  />
</template>

<style scoped>
input {
  @apply focus:shadow-md;
}

#background {
  z-index: -1;
}
</style>