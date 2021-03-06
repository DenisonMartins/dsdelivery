import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function Header() {
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Home');
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')}/>
                <Text style={styles.text}>DS DELIVERY</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2cc13f',
        height: 80,
        paddingTop: 50,
        flexDirection: "row",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#FFF',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default Header;
