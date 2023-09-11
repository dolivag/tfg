import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <View>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.radioButton}
                    onPress={() => onSelect(option)}
                >
                    <View
                        style={[
                            styles.radioCircle,
                            {
                                backgroundColor:
                                    selectedOption === option ? '#009688' : 'white',
                            },
                        ]}
                    >
                        {selectedOption === option && (
                            <View style={styles.selectedRb} />
                        )}
                    </View>
                    <Text style={styles.radioText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#009688',
    },
    radioText: {
        fontSize: 16,
        color: 'black',
    },
});

export default RadioButton;