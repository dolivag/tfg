import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Alert, View, ScrollView, Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import firebase from '../database/config'
import { updateHouseId } from '../actions/user/userInfo';


function LoginScreen({ navigation }) {

    const dispatch = useDispatch();

    const getUser = async (email) => {
        firebase.db.collection('users')
            .where('email', '==', email) // La condición para buscar por email (aunque es único)
            .get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    // Solo debe haber un resultado, accede al primer documento
                    const doc = querySnapshot.docs[0];
                    const userData = doc.data();
                    const houseId = userData.houseId; // Obtener el atributo houseId del documento
                    console.log('El id de la casa es: ' + houseId);
                    dispatch(updateHouseId(houseId))
                } else {
                    // No se encontró ningún usuario con ese email
                    console.log('No se encontró ningún usuario con ese email.');
                }
            })
            .catch((error) => {
                console.error('Error al buscar el usuario:', error);
            });
    }

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const auth = getAuth(firebase.app)

    const handleSignIn = async (userCredential) => {
        try {

            signInWithEmailAndPassword(auth, state.email, state.password)
            getUser(state.email)
            navigation.navigate('Main')
        } catch (error) {
            Alert.alert(error)
        }

    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <TextInput
                    style={styles.inputGroup}
                    placeholder="Email"
                    onChangeText={(value) => handleTextChange('email', value)}
                />
            </View>
            <View>
                <TextInput
                    style={styles.inputGroup}
                    placeholder="Password"
                    onChangeText={(value) => handleTextChange('password', value)}
                />
            </View>
            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={handleSignIn}
            >
                <Text style={styles.appButtonText}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#a3a3a3',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 15
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default LoginScreen;