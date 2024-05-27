<script setup>
import { useRoute } from 'vue-router'
import { mostrarPokemonsConImagenes } from "@/services/pokebola.service";


const pokemons = ref([]);

// const state = reactive({
//     pokemon:null,
//     types:computed(()=>filterTypes())
// })

// function filterTypes(){
//     if(state.pokemon){
//         return state.pokemon.types.map((type)=> type.type.name)
//     }
// }
// const {pokemon, stats, types} = toRefs(state)
// const route = useRoute()
// fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
// .then((res)=>res.json())
// .then((data)=>{
//     state.pokemon = data
//     console.log(data)
// })

//console.log(route.params.id)

async function cargarDetalles() {

    const detallesP = await mostrarPokemonsConImagenes()
    pokemons.value = detallesP;
}
console.log(cargarDetalles())

</script>
<template>
    <div class="container">
        <div class="row-gap-2">
            <div class="col shadow-sm flex-grow-1">
                <div class="p-5">
                    <p class="fw-bold">{{pokemon.nombre}}</p>
                    <img :src="pokemon.imagen" alt="Imagen pokemon" class="img-fluid w-100 h-100">
                    <h5>{{pokemon.tipo}}</h5>
                    <h5>{{pokemon.peso}}</h5>
                    <h5>{{pokemon.altura}}</h5>
                </div>
            </div>
        </div>
        <!-- <h1>Descripción</h1>
        <div v-if="pokemon">
            <h1>{{pokemon.name}}</h1>
            {{stats}}
            {{types}}
            <img :src="pokemon.sprites.front_default" alt="`nombre de ${pokemon.name}`">
        </div>
        <div v-else>
            <h5>No hay datos disponibles</h5>
        </div>
        <router-link to="/">Inicio</router-link> -->
    </div>
</template>