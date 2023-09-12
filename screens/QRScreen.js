import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';



const QRScreen = () => {
    const houseId = useSelector(state => state.user.houseId);
    return (
        <View style={styles.container}>
            <Text>QR Code</Text>
            <QRCode
                value={houseId}
                size={200}
                backgroundColor="white"
                color="black"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default QRScreen;
