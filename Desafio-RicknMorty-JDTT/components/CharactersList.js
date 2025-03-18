import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { getCharacter } from '../connection/Conection';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Pagination from './Pagination';

export default function Characters() {
    const [characters, setCharacters] = useState(null);
    const [info, setInfo] = useState(null);
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async (page) => {
            const result = await getCharacter(`?page=${page}`);
            setCharacters(result?.results || []);
            setInfo(result?.info || []);
        };

        fetchData(currentPage);
    }, [currentPage]);

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
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CharacterItem', { item })}>
                <Text>More</Text>
            </TouchableOpacity>
        </View>
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <View style={styles.container}>
            <Text>RICK Y MORTY</Text>
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
            {info && (
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={info.pages}
                            onPageChange={handlePageChange}
                        />
                    )}

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
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});