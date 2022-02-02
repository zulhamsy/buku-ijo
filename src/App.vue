<template>
  <the-header />
  <div class="container mx-auto mt-16 py-5 px-6 md:pr-4 md:pl-8">
    <router-view />
    <!-- <page-dashboard /> -->
  </div>
</template>

<script setup>
import TheHeader from './components/v2/TheHeader.vue';
// import PageDashboard from './views/PageSuratGue.vue';
</script>