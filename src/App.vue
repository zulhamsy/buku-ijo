<template>
  <div class="container">
    <test-page />
  </div>
</template>

<script>
import TestPage from './views/LoginPage.vue'
export default {
  components: {
    testPage: TestPage
  }
}
</script>

<style scoped>
.container {
  padding: 0 1.5rem;
}
</style>
