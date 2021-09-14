<script>
import { auth } from '../firebase'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    logout() {
      auth.signOut()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-1 px-2 mx-2 gap-x-2">
      <span class="text-lg font-thin">
        Halo, 
      </span>
      <span class="text-lg font-semibold">
        {{ name }}
      </span>
    </div>
    <!-- Logout hehe -->
    <div class="flex-none">
      <button
        class="btn btn-square btn-ghost focus:bg-gray-600"
        @click="logout()"
      >
        <img
          src="../assets/logout.svg"
          alt="logout"
        >
      </button>
    </div>
  </div>
</template>