import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase, { app } from '../database/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'


const RegisterScreen = (props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        house: ""
    })

    const auth = getAuth(app)

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const handleCreateUser = async () => {
        console.log(state)
        if (state.name === "") {
            alert("Es necesario un nombre")
        } else if (state.email === "") {
            alert("Es necesario un email")
        } else if (state.password !== state.password2) {
            alert("Las contraseñas no coinciden")
        } else {
            try {
                let newHouse = await firebase.db.collection('houses').add({
                    houseName: state.house
                })
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    houseId: newHouse.id
                })
                await createUserWithEmailAndPassword(auth, state.email, state.password)
                props.navigation.navigate('Login');
            } catch (error) {
                alert(error)
            }

        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="User name"
                    onChangeText={(value) => handleTextChange('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Email"
                    onChangeText={(value) => handleTextChange('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => handleTextChange('password', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Repeat password"
                    secureTextEntry={true}
                    onChangeText={(value) => handleTextChange('password2', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nombre de la casa"
                    onChangeText={(value) => handleTextChange('house', value)}
                />
            </View>

            <TouchableOpacity onPress={handleCreateUser} style={styles.appButtonContainer}>
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

export default RegisterScreen;