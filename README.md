# Rick and Morty App with React Native
## By
Juan David Tique Triana
## initial proyect cmd
npx create-expo-app@latest Desafio-RicknMorty-JDTT --template blank
## Coments:
- Inicié el proyecto como React en lugar de React-Native y deshice el repositorio y lo volví a hacer por esa confusión.
- El API devuelve {info: {}, results: Array(20)} lo que facilitó la paginación. - https://rickandmortyapi.com/documentation
- Se manda un query a la API para la paginación.
- Evité hacer llamados dobles a la API al enviar los parametros a "CharacterItems" desde "CharactersList".
- El API ya incluye un query para hacer filtrado por nombres y se implementó con el cambio de texto en el SearchBar.