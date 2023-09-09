import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Svg, { Path } from "react-native-svg"

const TasksScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacityStyle}>
                <View style={styles.containerButton}>
                    <View>
                        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6 12H18M12 6V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </Svg>
                    </View>
                    <Text style={styles.textStyle}>Crear tarea</Text>
                </View>
            </TouchableOpacity >
        </View >
    )
}

export default TasksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        paddingHorizontal: 6,
        paddingVertical: 4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        //backgroundColor:'black'
    },
});