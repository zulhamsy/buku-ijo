<script>
import SweetNavbar from '../components/SweetNavbar.vue'
import DashboardForm from '../components/DashboardForm.vue'
import DashboardRecentSurat from '../components/DashboardRecentSurat.vue'
export default {
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
  }
}
</script>

<template>
  <sweet-navbar name="Zulham S" />
  <div class="container max-w-screen-md mx-auto py-3 px-5">
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