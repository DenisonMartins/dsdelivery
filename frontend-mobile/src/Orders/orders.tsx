import React, {useEffect, useState} from "react";
import {Alert, ScrollView, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";
import Header from "../Header/header";
import OrderCard from "../OrderCard/ordercard";
import {fetchOrders} from "../api";
import {Order} from "../types";

function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Header/>
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (
                    orders.map(order => (
                        <TouchableWithoutFeedback
                            key={order.id}
                        >
                            <OrderCard order={order}/>
                        </TouchableWithoutFeedback>
                    ))
                )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});

export default Orders;
