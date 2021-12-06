<script>
import DropdownMenu from '../components/DropdownMenu.vue'
import { auth } from '../firebase'
import { mapState } from 'vuex'
export default {
  components: {
    DropdownMenu
  },
  computed: {
    ...mapState(['username'])
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
      <span class="text-lg font-thin"> Halo, </span>
      <span class="text-lg font-semibold">
        {{ username }}
      </span>
    </div>
    <!-- Logout hehe -->
    <div class="flex-none">
      <dropdown-menu />
    </div>
  </div>
</template>