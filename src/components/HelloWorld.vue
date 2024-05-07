<script setup>
import { ref } from "vue";
import { mostrarPokemonsConImagenes } from "@/services/pokebola.service";

//array reactivos
// const pokemones = ref([]);
const pokemons = ref([]);
/*
//fucnion para cargar los datos de la peticion asincrona
const cargaInicial = async () => {
  try {
    pokemones.value = await obtenerPokemones('pokemon?limit=100000&offset=0');
    
  } catch (error) {
    console.log("Error al cargar los datos de la API");
  }
};*/


 // Función para cargar los pokemons
 async function cargarPokemons() {
      // Espera a que la función mostrarPokemonsConImagenes resuelva las promesas
      const detallesPokemons = await mostrarPokemonsConImagenes();
      // Asigna los detalles resueltos a la referencia reactiva
      pokemons.value = detallesPokemons;
  }

  // Llama a cargarPokemons cuando el componente se monta
  cargarPokemons();


// cargamos la funcion
// cargaInicial();


// Llamar a la función para obtener todos los detalles
//getAllPokemonDetails();

</script>

<template>

<div class="container">
  <div class="row gap-2">
    <div class="col-sm-2 shadow-sm flex-grow-1" v-for="(pokemon, index) in pokemons" :key="`item-${index}`">
      <div class="p-5">
        
        <p><b>{{ pokemon.nombre}}</b></p>
        <img :src="pokemon.imagen" alt="Imagen de Pokémon" class="img-fluid w-100 h-100" />
      </div>
    </div>
  </div>
</div>

  <!--
  <h1>holllllllllllllllllllll</h1>

    <h1 class="m-5">Carga de datos de mi API</h1>

    <img src="" alt="rrrrr">
<div class="container">
  <div class="row gap-2">
    <div class="col-sm-2 shadow-sm flex-grow-1" v-for="(pokemon, index) in pokemones.results" :key="`item-${index}`">
      <div class="p-5">
        
        <p><b>{{pokemon.name}}</b></p>
        <a class="text-wrap p-2 overflow-hidden">{{pokemon.url}}</a>
      </div>
    </div>
  </div>
</div>
<br>-->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
