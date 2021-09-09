<script>
export default {
  props: {
    type: {
      type: String,
      default: 'error'
    }
  }
}
</script>

<template>
  <div
    class="alert rounded-none justify-center gap-x-2"
    :type="type"
  >
    <p class="font-semibold">
      <slot name="title" />
    </p>
    <p>
      <slot name="message" />
    </p>
  </div>
</template>

<style scoped>
.alert[type='error'] {
  @apply bg-red-200 text-red-600;
}

.alert[type='warning'] {
  @apply bg-yellow-200 text-yellow-600;
}

.alert[type='success'] {
  @apply bg-green-200 text-green-600;
}
</style>