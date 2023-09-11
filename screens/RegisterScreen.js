import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/config'
import FloatingLabelInput from '../components/FloatingLabelInput';

import RadioButton from '../components/RadioButton'

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

    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    const options = ["Create a Home", "Join a Home"]

    const auth = getAuth(firebase.app)

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
        console.log('cambios');
    }

    const handleCreateUser = async () => {
        console.log(state)
        if (state.name === "") {
            alert("A name is mandatory to join us")
        } else if (state.email === "") {
            alert("An email is mandatory to join us")
        } else if (state.password !== state.password2) {
            alert("Passwords are not equal")
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
            <View>
                <Text style={styles.groupName}>Personal data</Text>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="User name"
                        value={state.name}
                        onChangeText={(value) => handleTextChange('password', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Email"
                        value={state.email}
                        onChangeText={(value) => handleTextChange('password', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Password"
                        secureTextEntry={true}
                        value={state.password}
                        onChangeText={(value) => handleTextChange('password', value)}
                    />
                </View>
                <View>
                    <FloatingLabelInput
                        style={styles.textInput}
                        label="Repeat password"
                        secureTextEntry={true}
                        value={state.password2}
                        onChangeText={(value) => handleTextChange('password', value)}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.groupName}>House</Text>
                <View>
                    <RadioButton
                        options={options}
                        selectedOption={selectedOption}
                        onSelect={handleSelect}
                    />
                    <View style={styles.inputGroup}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="House name"
                            onChangeText={(value) => handleTextChange('house', value)}
                        />
                    </View>
                </View>
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
        paddingHorizontal: 35,
        paddingVertical: 15
    },
    inputGroup: {
        padding: 0,
        marginBottom: 15,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#a3a3a3',
    },
    textInput: {
        fontSize: 16,
        color: 'black',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 15
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    groupName: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#009688',
        marginTop: 15,
        marginBottom: 5
    }
})

export default RegisterScreen;