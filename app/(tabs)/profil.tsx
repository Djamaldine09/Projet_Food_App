import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            {/* Ajoutez ici le contenu de votre page de profil */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ProfilScreen;