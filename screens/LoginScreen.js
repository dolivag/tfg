import React, { useState } from 'react';
import { View, ScrollView, Button, TextInput } from 'react-native'

function LoginScreen({ navigation }) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value })
    }

    return (
        <ScrollView >
            <View >
                <TextInput
                    placeholder="Email"
                    onChangeText={(value) => handleTextChange('email', value)}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Password"
                    onChangeText={(value) => handleTextChange('password', value)}
                />
            </View>
            <View>
                <Button title="Login" onPress={() => console.log(state)} />
            </View>
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
        </ScrollView>
    )
}

export default LoginScreen;