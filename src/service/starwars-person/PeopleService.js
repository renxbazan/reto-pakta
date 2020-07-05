const fetch = require("node-fetch");
const PaktaUtil = require("../../util/PaktaUtil");
const ExternalApiConstants = require("../../common/ExternalApiConstants");
class PersonService {
  static async findPersonsByName(event) {
    let apiResponse = await PaktaUtil.getRequest(
      ExternalApiConstants.STAR_WARS_SWAPI_PEOPLE_API_URL
    );

    if (
      event &&
      event.queryStringParameters &&
      event.queryStringParameters.nombre
    ) {
        //Obtener el valor del query string nombre
      const searchTerm = event.queryStringParameters.nombre;

       // Filtramos la respuesta según el filtro de busqueda
      const filteredResponse = this.buildResultByName(searchTerm, apiResponse);
       // Una vez filtrado el response, procedemos a convertirlo a nuestro objeto en espanol
      const spanishFilteredResult = this.buildSpanishPropertiesResponse(
        filteredResponse
      );

      return spanishFilteredResult;
    }

    const spanishResponse = this.buildSpanishPropertiesResponse(apiResponse);

    return spanishResponse;
  }

  static buildSpanishPropertiesResponse(arrResponse) {
    const spanishResponse = arrResponse.results.map((people) => ({
      nombre: people.name,
      talla: people.height,
      masa: people.mass,
      color_cabello: people.hair_color,
      color_piel: people.skin_color,
      color_ojos: people.eye_color,
      ano_nacimiento: people.birth_year,
      genero: people.gender,
      planeta_natal: people.homeworld,
      peliculas: people.films,
      especies: people.species,
      vehiculos: people.vehicles,
      naves_espaciales: people.starships,
      fecha_creacion: people.created,
      ultima_edicion: people.edited,
    }));

    return spanishResponse;
  }


  /*
        Este método recibe 2 parametros:
         -nameKey  es el texto a buscar en la propiedad name
         -externalApiResponse el response del api de starwars
        
         El resultado será una array con los objetos que 
         contengan como nombre el texto a buscar
  */
  static buildResultByName(nameKey, externalApiResponse) {
    let personArrayResponse = externalApiResponse.results;
    let personResultArray = [];

    for (var i = 0; i < personArrayResponse.length; i++) {
      if (
        personArrayResponse[i].name
          .toLowerCase()
          .includes(nameKey.toLowerCase())
      ) {
        personResultArray.push(personArrayResponse[i]);
      }
    }

    const responseFiltered = {
      results: personResultArray,
    };

    return responseFiltered;
  }
}

module.exports = PersonService;
