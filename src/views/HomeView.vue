<template>
  <div class="container-fluid">
    <div class="row">

      <navbar/>

      <div class="col-10">
        <h2 class="text-center mt-5">Listado de Clientes</h2>  
        <div class="container mt-5">
          <div id="alerta" class="" role="alert">
          </div>
          <div class="row">
            <div class="">
                <!-- Tabla -->
                <table class="table">
                  <thead>
                    <tr>
                      <th>Nombre Cliente</th>
                      <th>Correo</th>
                      <th>Teléfono</th>
                      <th>Empresa</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cliente in clientes" :key="cliente.id">
                      <td>{{ cliente.nombre }}</td>
                      <td>{{ cliente.email }}</td>
                      <td>{{ cliente.telefono }}</td>
                      <td>{{ cliente.empresa }}</td>
                      <td>
                        <router-link :to="`/editarcliente/${cliente.id}`" class="btn btn-primary btn-sm"> <i class="fa-solid fa-pen"></i> Editar</router-link>&nbsp;
                        <button v-on:click="confirmarEliminar(cliente.id)" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i> Eliminar</button>                       
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: 'HomeView',
  components: {
    Navbar
  },     
  data() {
      return {
        clientes: []
      }
    },
    methods: {
      async traeClientes() {
        try {
          let arregloClientes = [];
          const data = await fetch(`https://vuecrud-aeb37-default-rtdb.firebaseio.com/clientes.json`);
          const getClientes = await data.json();
          for (const key in getClientes){
          getClientes[key].id = key;
          arregloClientes.push(getClientes[key]);
          }
          this.clientes = arregloClientes
          console.log(arregloClientes)
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
        confirmarEliminar(id) {
          if(confirm("¿Esta seguro que quiere eliminar?") == true) {
            const Url = "https://vuecrud-aeb37-default-rtdb.firebaseio.com/clientes"
            const newUrl = `${Url}/${id}.json`
            let headersList = {
            "Accept": "*/*"
            }
            fetch(`${newUrl}`, { 
              method: "DELETE",
              headers: headersList
            }).then(function(response) {
              return response.text();
            }).then(function(data) {
              console.log(data);
            });
          return {
            clientes: []
          }                
          }

        }      
    },
    created() {
      this.traeClientes();
    }

}
</script>
