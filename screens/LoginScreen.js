import React, { useState } from 'react';
import { View, ScrollView, Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../database/config'

function LoginScreen({ navigation }) {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const auth = getAuth(app)

    const handleSignIn = async (userCredential) => {
        try {

            signInWithEmailAndPassword(auth, state.email, state.password)
            console.log(userCredential.user)
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