import React, { useState, useRef } from 'react';
import { View, Animated, Easing, TextInput, StyleSheet } from 'react-native';

const FloatingTextInput = ({
    label = 'New Title',
    secureTextEntry = false,
    titleActiveSize = 12,
    titleInActiveSize = 14,
    titleActiveColor = '#009688',
    titleInactiveColor = '#c2c2c2',
    onChangeText
}) => {
    const [text, setText] = useState('');
    const animatedValue = useRef(new Animated.Value(0));
    const [isFocused, setIsFocused] = useState(false);

    const returnAnimatedTitleStyles = {
        transform: [
            {
                translateY: animatedValue?.current?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [12, 0],
                    extrapolate: 'clamp',
                }),
            },
        ],
        fontSize: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInActiveSize, titleActiveSize],
            extrapolate: 'clamp',
        }),
        color: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInactiveColor, titleActiveColor],
        }),
        fontWeight: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: ['500', '900'],
            easing: value => {
                const thousandRounded = value * 1000;
                if (thousandRounded < 300) {
                    return 0;
                }
                if (thousandRounded < 600) {
                    return 0.5;
                }
                return 1;
            }
        }),
        position: 'absolute',
        left: 7,


    };

    const onFocus = () => {
        setIsFocused(true)
        Animated.timing(animatedValue?.current, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    };

    const onBlur = () => {
        setIsFocused(false)
        if (!text) {
            Animated.timing(animatedValue?.current, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        }
    };

    const handleTextChange = (text) => {
        setText(text)
        // Llama a la función onChangeText pasada como prop para propagar los cambios al padre
        onChangeText(text);
    };

    return (
        <Animated.View style={styles.subContainer}>
            <Animated.Text style={[returnAnimatedTitleStyles]} >{label}</Animated.Text>
            <TextInput
                onChangeText={handleTextChange}

                style={[styles.textStyle, isFocused ? styles.inputFocus : styles.textStyle]}
                onBlur={onBlur}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    subContainer: {
        marginTop: 20,
    },
    textStyle: {
        paddingHorizontal: 10,
        paddingTop: 16,
        paddingBottom: 7,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#c2c2c2'
    },
    inputFocus: {
        borderColor: '#009688'
    },
    labelWrap: {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
    }

});

export default FloatingTextInput;