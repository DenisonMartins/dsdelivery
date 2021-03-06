import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Orders from "./Orders/orders";
import Home from "./Home/home";
import OrderDetails from "./OrderDetails/orderdetails";

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
