<template>
      <div class="menu col-2">
        <h1 class="text-center mt-5">VUE - API REST FULL</h1>
        <p class="text-center mt-5">Administrador de Clientes</p>

        <nav class="d-flex flex-column">
          <router-link class="nav-link" to="/">Clientes</router-link>
          <router-link class="nav-link" to="/nuevo">Nuevo Cliente</router-link>
        </nav>
      </div>
</template>

<style>
.nav-link {
    color: white;
    text-decoration: none;
    text-align: center;
  }
.nav-link:hover {
    background-color: rgba(128,121,121, 0.596);
    color: white;
  }
</style>