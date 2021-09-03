<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <img
        src="..\assets\brand-logo.svg"
        alt="brand logo"
        class="navbar-brand logo"
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavAltMarkup"
        class="collapse navbar-collapse"
      >
        <div class="navbar-nav">
          <router-link
            class="nav-link"
            :to="{name:
              'dashboard'}"
          >
            Dashboard
          </router-link>
          <a
            class="nav-link"
            href="#"
          >Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>