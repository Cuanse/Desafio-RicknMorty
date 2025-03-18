import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function CharacterItem({ route }) {
    const { item } = route.params;
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.characterImage}
                />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Status:</Text>
                    <Text style={styles.infoValue}>{item.status}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Species:</Text>
                    <Text style={styles.infoValue}>{item.species}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Gender:</Text>
                    <Text style={styles.infoValue}>{item.gender}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Origin:</Text>
                    <Text style={styles.infoValue}>{item.origin?.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Location:</Text>
                    <Text style={styles.infoValue}>{item.location?.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Episodes:</Text>
                    <Text style={styles.infoValue}>{item.episode?.length} episodes</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    infoTitle: {
        fontWeight: 'bold',
        width: '30%',
    },
    infoValue: {
        width: '70%',
    },
});