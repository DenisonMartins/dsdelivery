import React from 'react';
import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {Order} from "../types";
import Header from "../Header/header";
import OrderCard from "../OrderCard/ordercard";
import {RectButton} from "react-native-gesture-handler";
import {confirmDelivery} from "../api";

type OrderDetailsProps = {
    route: {
        params: {
            order: Order
        }
    }
}

function OrderDetails({ route }: OrderDetailsProps) {
    const { order } = route.params;
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Orders');
    }

    const handleOnCancel = () => {
        navigation.navigate('Orders');
    }

    const handleStarNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
    }

    const handleConfirmDelivery = () => {
        confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
                navigation.navigate('Orders')
            })
            .catch(() => Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`))
    }

    return (
        <>
            <Header/>
            <View style={styles.container}>
                <OrderCard order={order} />
                <RectButton style={styles.button} onPress={handleStarNavigation}>
                    <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleConfirmDelivery}>
                    <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={handleOnCancel}>
                    <Text style={styles.buttonText}>CANCELAR</Text>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: '#2cc13f',
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default OrderDetails;
