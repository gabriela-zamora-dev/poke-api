<script setup>
import {useRoute} from 'vue-router'
import {reactive, toRefs, computed} from 'vue'

const state = reactive({
    pokemon:null,
    types:computed(()=>filterTypes())
})

function filterTypes(){
    if(state.pokemon){
        return state.pokemon.types.map((type)=> type.type.name)
    }
}
const {pokemon, stats, types} = toRefs(state)
const route = useRoute()
fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
.then((res)=>res.json())
.then((data)=>{
    state.pokemon = data
    console.log(data)
})


//console.log(route.params.id)
</script>
<template>
    <div>
        <h1>Descripción</h1>
        <div v-if="pokemon">
            <h1>{{pokemon.name}}</h1>
            {{stats}}
            {{types}}
            <img :src="pokemon.sprites.front_default" alt="`nombre de ${pokemon.name}`">
        </div>
        <div v-else>
            <h5>No hay datos disponibles</h5>
        </div>
        <router-link to="/">Inicio</router-link>
    </div>
</template>