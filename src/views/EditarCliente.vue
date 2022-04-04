<template>
  <div class="container-fluid">
    <div class="row">

      <navbar/>

      <div class="col-10">
        <div class="container mt-5">
          <div class="row">
            <div class="col-6 offset-3 formulario">
              <!-- Formulario -->
              <h2 class="text-center mb-5">Editar Cliente</h2>
              <form id="formulario" @submit.prevent="editaCliente">
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="nombre"
                    name="nombre"
                    v-model="nombrecliente"
                    >
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Correo</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email"
                    name="email"
                    v-model="emailcliente"
                   >
                </div>

                <div class="mb-3">
                  <label for="telefono" class="form-label">Teléfono</label>
                  <input 
                    type="tel" 
                    class="form-control" 
                    id="telefono"
                    name="telefono"
                    v-model="telefonocliente"
                   >
                </div>

                <div class="mb-3">
                  <label for="empresa" class="form-label">Empresa</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="empresa"
                    name="empresa"
                    v-model="empresacliente"
                   >
                </div>

                <input type="hidden" name="id" id="id" value="">

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-dark">Editar Cliente</button>
                </div>

                <div class="form-text"></div>
                
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
  name: 'EditarCliente',
  components: {
    Navbar
  },     
  data() {
      return {
        nombrecliente: null,
        emailcliente: null,
        telefonocliente: null,
        empresacliente: null,
      }
    },
    methods: {
      async traeClientes() {
        try {
          const data = await fetch(`https://vuecrud-aeb37-default-rtdb.firebaseio.com/clientes/${this.$route.params.id}.json`);
          const getCliente = await data.json();
          this.nombrecliente = getCliente.nombre;
          this.emailcliente = getCliente.email;
          this.telefonocliente = getCliente.telefono;
          this.empresacliente = getCliente.empresa;
          //console.log(getCliente) 
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
      async editaCliente() {
        let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
          "email": this.emailcliente,
          "empresa": this.empresacliente,
          "nombre": this.nombrecliente,
          "telefono": this.telefonocliente
        });

        console.log(bodyContent)  

        fetch("https://vuecrud-aeb37-default-rtdb.firebaseio.com/clientes/-MzMjHWXcdkMirNBAU46.json", { 
          method: "PUT",
          body: bodyContent,
          headers: headersList
        }).then(function(response) {
          return response.text();
        }).then(function(data) {
          console.log(data);
        })
      }
    },
    created() {
      this.traeClientes();
    }

}
</script>