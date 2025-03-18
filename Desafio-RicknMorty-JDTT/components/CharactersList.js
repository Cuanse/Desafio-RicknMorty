import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { getCharacter } from '../connection/Conection';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

export default function Characters() {
    const [characters, setCharacters] = useState(null);
    const [info, setInfo] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async (page) => {
            let query = `?page=${page}`;
            if (searchQuery) {
                query += `&name=${searchQuery}`;
            }
            
            try {
                const result = await getCharacter(query);
                setCharacters(result?.results || []);
                setInfo(result?.info || []);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setCharacters([]);
                setInfo(null);
            }
        };

        fetchData(currentPage);
    }, [currentPage, searchQuery]);

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
    
    const onSearch = (text) => {
        setSearchQuery(text);
        setCurrentPage(1);
    };
    
    return (
        <View style={styles.container}>
            <SearchBar onSearch={onSearch}/>
            <Text style={styles.title}>RICK Y MORTY</Text>
            {characters ? (
                characters.length > 0 ? (
                    <FlatList
                        data={characters}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        numColumns={4}
                        contentContainerStyle={styles.listContainer}
                    />
                ) : (
                    <Text style={styles.noResults}>No characters found</Text>
                )
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
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    listContainer: {
        paddingBottom: 20,
    },
    characterBox: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: 170,
        alignItems: 'center',
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
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
    },
    noResults: {
        fontSize: 16,
        margin: 20,
    },
});