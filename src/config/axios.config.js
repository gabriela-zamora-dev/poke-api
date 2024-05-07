import axios from 'axios'; // Importa la librería axios.

const apibase = axios.create({ // Crea una nueva instancia de axios con configuraciones específicas.
	baseURL: import.meta.env.VITE_API_URL, // Establece la URL base para las solicitudes HTTP.
	// import.meta.env.VITE_API_URL es una variable de entorno que contiene la URL base.
	
});

export { apibase }; // Exporta la instancia para que pueda ser utilizada en otras partes del proyecto.
