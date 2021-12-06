<script>
import SweetNavbar from '../components/SweetNavbar.vue'
import DashboardForm from '../components/DashboardForm.vue'
import DashboardRecentSurat from '../components/DashboardRecentSurat.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    SweetNavbar
  },
  data() {
    return {
      tabs: ['Buat Surat Baru', 'Recent Surat'],
      currentTab: 'Buat Surat Baru'
    }
  },
  computed: {
    currentTabComponent() {
      switch (this.currentTab) {
        case 'Buat Surat Baru':
          return DashboardForm
        case 'Recent Surat':
          return DashboardRecentSurat
        default:
          return DashboardForm
      }
    }
  },
  mounted() {
    this.fetchUsername()
  },
  methods: { ...mapActions(['fetchUsername']) }
}
</script>

<template>
  <sweet-navbar />
  <div class="container max-w-screen-md mx-auto py-2 px-5">
    <div class="tabs mb-5">
      <a
        v-for="tab in tabs"
        :key="tab"
        :class="{'tab-active': tab === currentTab}"
        class="tab tab-bordered font-semibold"
        @click="currentTab = tab"
      >
        {{ tab }}
      </a>
    </div>
    <keep-alive>
      <component :is="currentTabComponent" />
    </keep-alive>
  </div>
</template>