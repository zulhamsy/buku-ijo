<template>
  <div
    class="alert alert-dismissible fade show"
    role="alert"
  >
    <slot />
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    />
  </div>
</template>

<style>
.alert {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
</style>