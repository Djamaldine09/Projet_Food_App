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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CartScreen;