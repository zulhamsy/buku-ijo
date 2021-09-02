<template>
  <div class="d-flex flex-column justify-content-center min-vh-100">
    <!-- App Title -->
    <div class="d-flex align-items-center">
      <img
        src="..\assets\brand-logo.svg"
        alt="brand logo"
        class="logo"
      >
      <h2>
        <span>Buku</span>
        <span class="text-success"> Ijo</span>
      </h2>
    </div>
    <p class="subtitle text-secondary">
      Ambil Nomor Ga Pake Ribet
    </p>
    <!-- LoginID -->
    <label
      for="loginid"
      class="form-label"
    >NIP Pendek</label>
    <input
      id="loginid"
      type="text"
      name="loginid"
      class="form-control mb-4"
    >
    <!-- Password -->
    <label
      for="password"
      class="form-label"
    >Password</label>
    <input
      id="password"
      type="password"
      name="password"
      class="form-control mb-4"
    >
    <!-- CTA -->
    <button class="btn btn-success">
      Masuk Gan
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  width: 2.25rem;
  margin-right: 0.5rem;
}

h2 {
  margin-bottom: 0;
  font-weight: bold;
}

.subtitle {
  font-size: 0.8rem;
  margin-top: 0.25rem;
  margin-bottom: 2.5rem;
}

button {
  font-weight: 600;
}
</style>