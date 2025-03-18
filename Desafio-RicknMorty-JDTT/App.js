import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { getCharacter } from './connection/conection';
import { useState, useEffect } from 'react';

export default function App() {
  const [characters, setCharacters] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacter();
      setCharacters(result?.results || []); // API returns {results: [...]} for all characters
      console.log('result recibidos:', result);
    };
    
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.characterBox}>
       <Image 
      source={{ uri: item.image }}
      style={styles.characterImage}
      />
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
      <Text>{item.species}</Text>
      <Text>{item.gender}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {characters ? (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={4}
        />
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterBox: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
});