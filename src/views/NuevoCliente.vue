<template>
  <div class="container-fluid">
    <div class="row">

      <navbar/>
      <div class="col-10">
        <div class="container mt-5">
          <div class="row">
            <div class="col-6 offset-3 formulario">
              <!-- Formulario -->
              <h2 class="text-center mb-5">Nuevo Cliente</h2>
              <form @submit="postData" method="post">

                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="nombre"
                    name="nombre"
                    v-model="posts.nombre"
                  >
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Correo</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email"
                    name="email"
                    v-model="posts.email"
                   >
                </div>

                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="telefono"
                    name="telefono"
                    v-model="posts.telefono"
                  >
                </div>

                <div class="mb-3">
                  <label for="empresa" class="form-label">Empresa</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="empresa"
                    name="empresa"
                    v-model="posts.empresa"
                  >
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-dark">Enviar</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'NuevoCliente',
  components: {
    Navbar
  },     
  data() {
      return {
        posts:{
            nombre:null,
            email:null,
            telefono:null,
            empresa:null
        }
      }
    },
    methods: {
        postData(e){
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
                }
            let bodyContent = JSON.stringify(this.posts);

            fetch("https://vuecrud-aeb37-default-rtdb.firebaseio.com/clientes.json", { 
                method: "POST",
                body: bodyContent,
                headers: headersList
                }).then(function(response) {
                return response.text();
                }).then(function(data) {
                console.log(data);
            })  
            e.preventDefault();
            this.$router.push('/');          
        }        
    }
}
</script>