import { apibase } from '../config/axios.config'

//función asincrona el cual nos permite realizar la petición
export const obtenerPokemones = async (path) => {
	let data = null;
	data = await apibase
	  .get(path)
	  .then(({ data }) => {
		return data;
	  })
	  .catch((error) => {
		console.error('Error fetching pokemon', error);
		throw error;
	  });
	return data;
};