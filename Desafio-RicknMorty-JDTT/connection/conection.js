const RyM_API = 'https://rickandmortyapi.com/api/character';

//sin id son todos los personajes
//puede ser usado por querys
export const getCharacter = async (query) => {
    try {
      const endpoint = query ? `${RyM_API}/${query}` : RyM_API;
      const result = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if(result.status === 200) {
        return result.json();
      }
      return null;
  
    } catch (error) {
      console.log("Error", error);
    }
}