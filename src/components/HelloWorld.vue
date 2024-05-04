<script setup>
import { ref } from "vue";
import { obtenerPokemones } from "@/services/pokebola.service";

//array reactivos
const pokemones = ref([]);

//fucnion para cargar los datos de la peticion asincrona
const cargaInicial = async () => {
  try {
    pokemones.value = await obtenerPokemones('pokemon?limit=100000&offset=0');
   
    //console.log(pokemones);
  
  } catch (error) {
    console.log("Error al cargar los datos de la API");
  }
};

// cargamos la funcion
cargaInicial();

</script>

<template>
    <h1 class="m-5">Carga de datos de mi API</h1>

<div class="container">
  <div class="row gap-2">
    <div class="col-sm-2 shadow-sm flex-grow-1" v-for="(pokemon, index) in pokemones.results" :key="`item-${index}`">
      <div class="p-5">
        
        <p><b>{{ pokemon.name}}</b></p>
        <p class="text-wrap p-2 overflow-hidden">{{ pokemon.url}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
