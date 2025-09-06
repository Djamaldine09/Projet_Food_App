import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Votre Panier</Text>
            {/* Ajoutez ici la liste des articles du panier */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default CartScreen;