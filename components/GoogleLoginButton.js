import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar el ícono correcto

const GoogleLoginButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="google" size={24} color="white" /> {/* Cambia el nombre del ícono según la biblioteca que utilices */}
                </View>
                <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#4285F4', // Color de fondo de Google
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    iconContainer: {
        marginRight: 10,
    },
    buttonText: {
        color: 'white', // Color del texto
        fontWeight: 'bold',
    },
});

export default GoogleLoginButton;
