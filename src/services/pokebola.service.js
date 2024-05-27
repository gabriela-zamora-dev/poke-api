import { apibase } from '../config/axios.config'

/*
//función asincrona el cual nos permite realizar la petición
export const obtenerPokemones = async (path) => {
	let data = null;
	data = await apibase
	  .get(path)
	  .then(({ data }) => {
		//console.log(data);

		 //obtenerPokemonImg(data.results.name);
		return data;
	  })
	  .catch((error) => {
		console.error('Error fetching pokemon', error);
		throw error;
	  });
	return data;
};

// https://youtu.be/jg5ydNHNVJ4 video de referencia
export const obtenerPokemonImg = async(dataName) =>{
	return await apibase
	.get('/pokemon/2')
	.then(({ data }) => data)
	.catch((error) => {
		console.error('Error fetching estados clima', error)
		throw error
	})
};

/*
export const obtenerPokemones = async (path) => {
	
	return await apibase
	  .get(path)
	  .then(({ data }) => data)
	  .catch((error) => {
		console.error('Error fetching pokemon', error);
		throw error;
	});
};



// Función asíncrona para obtener los detalles de un Pokémon por su URL
export async function getPokemonDetails(url) {
	try {
		console.log(url);
	  const response = await axios.get(url);
	  return response.data; // Retorna los datos del Pokémon
	} catch (error) {
	  console.error(error); // Manejo de errores
	}
  }
  
  // Función asíncrona para obtener la lista de Pokémon y luego sus detalles
export async function getAllPokemonDetails() {
	try {

	  // Primera petición para obtener la lista de nombres y URLs
	  const listResponse = await apibase.get('pokemon/2');
	 
		//const data= await apibase.get('/pokemon-species/1/');
		//const pokemonList = listResponse.data.results;
	  // Array para guardar las promesas de las peticiones de detalles
	  //const detailsPromises = pokemonList.map(pokemon => getPokemonDetails(pokemon.url));
  
	  // Esperar a que todas las peticiones de detalles se completen
	  //const allDetails = await Promise.all(detailsPromises);
  
	  // Ahora tienes un array con todos los detalles de los Pokémon
	  //console.log(listResponse);
	} catch (error) {
	  console.error(error); // Manejo de errores
	}
  }
*/

  // Función para obtener la lista de Pokémon con nombres y URLs
async function obtenerListaPokemons() {
	try {
		const response = await apibase.get('/pokemon?limit=150&offset=0');
	  	return response.data.results; // Devuelve la lista de Pokémon con nombres y URLs
	} catch (error) {
		console.error('Error al obtener la lista de Pokémon:', error);
	}
}

async function obtenerDescripcion() {
try {
		const datos = await apibase.get('/pokemon/:id');
	} catch (error) {
		console.error('Error al obtener el pokemon deseado')
	}
}

// Función para obtener los detalles de un Pokémon, incluyendo la imagen
async function obtenerDetallesPokemon(url) {
	try {
		const response = await apibase.get(url);
	  	console.log(url);
		return {
			id: response.data.id,
			nombre: response.data.name,
			imagen: response.data.sprites.front_default, 
			tipo: response.data.types[0].type.name,
			peso: response.data.weight,
			altura: response.data.height // URL de la imagen del Pokémon

		};
	} catch (error) {
		console.error('Error al obtener los detalles del Pokémon:', error);
	}
}
// Función para obtener la lista de Pokémon con imágenes
export async function mostrarPokemonsConImagenes() {
	const listaPokemons = await obtenerListaPokemons();
	//const promesasDetalles = listaPokemons.map(pokemon => obtenerDetallesPokemon(pokemon.url));

	// Resuelve las promesas antes de retornar los detalles
	const detallesPokemons = await Promise.all(
		listaPokemons.map(pokemon => obtenerDetallesPokemon(pokemon.url))
	);
	return detallesPokemons;	
}
