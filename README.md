# initial proyect cmd
npx create-expo-app@latest Desafio-RicknMorty-JDTT --template blank

# initiate
npx expo start

# Dependencies
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-dom react-native-web @expo/metro-runtime react-native-screens react-native-screens react-native-safe-area-context

### Coments:
- Inicié el proyecto como React en lugar de React-Native y deshice el repositorio y lo volví a hacer por esa confusión.
- El API devuelve {info: {}, results: Array(20)} lo que facilitó la paginación.
- LA dependencia @react-navigation/native primero se instala por npm y luego dependencias peer en npx