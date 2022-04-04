<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-color: rgb(240,250,250);
  }
  
  .menu {
    background-color: #120f14;
    color: white;
    height: 100vh;
  }
  
  .formulario {
    background-color: white;
    padding: 2.5rem;
    margin-top: 4rem;
  }
  
  .error {
    color: red;
  }
  
  .login {
    border: 1px solid #000;
  }
</style>
