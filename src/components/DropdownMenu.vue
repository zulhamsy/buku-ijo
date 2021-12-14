<script>
import { auth } from '../firebase'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    function logout() {
      auth.signOut()
      router.push({ name: 'login' })
    }

    function suratGue() {
      router.push({ name: 'suratgue' })
    }

    return {
      logout,
      suratGue
    }
  }
}
</script>

<template>
  <div class="dropdown dropdown-end">
    <button
      class="btn btn-square btn-ghost focus:bg-gray-600 hover:bg-gray-500"
    >
      <img
        src="../assets/vertical_dots.svg"
        alt="options"
      >
    </button>
    <ul
      tabindex="0"
      class="p-2 shadow-lg menu dropdown-content bg-base-100 text-neutral rounded-box w-52"
    >
      <li @click="suratGue">
        <a class="space-x-3 items-center">
          <img
            src="../assets/mail.svg"
            alt="options"
          >	
          <span class="font-medium">Surat Gue</span>
        </a>
      </li> 
      <li @click="logout">
        <a class="space-x-3 items-center">
          <img
            src="../assets/logout.svg"
            alt="options"
          >	
          <span class="font-medium">Logout</span>
        </a>
      </li> 
    </ul>
  </div>
</template>