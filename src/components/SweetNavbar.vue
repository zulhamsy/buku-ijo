<script>
import DropdownMenu from '../components/DropdownMenu.vue'
import { fetchName } from '../composable/useFetchName'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: {
    DropdownMenu
  },
  setup() {
    const store = useStore()
    const username = computed(() => store.state.username)

    onMounted(function () {
      fetchName(store)
    })

    return {
      username
    }
  }
}
</script>

<template>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div class="flex-1 px-2 mx-2 gap-x-2">
      <span class="text-lg font-thin">Halo,</span>
      <span class="text-lg font-semibold">{{ username }}</span>
    </div>
    <!-- Logout hehe -->
    <div class="flex-none">
      <dropdown-menu />
    </div>
  </div>
</template>