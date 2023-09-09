import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/config'

const RegisterScreen = (props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        house: ""
    })

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const addNewUser = async () => {
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
                    password: state.password,
                    houseId: newHouse.id
                })
                props.navigation.navigate('Main');
            } catch (error) {
                console.log(error)
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
                    onChangeText={(value) => handleTextChange('password', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Repeat password"
                    onChangeText={(value) => handleTextChange('password2', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nombre de la casa"
                    onChangeText={(value) => handleTextChange('house', value)}
                />
            </View>
            <View>
                <Button title="Register" onPress={addNewUser} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#a3a3a3',
    }
})

export default RegisterScreen;