import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    StyleSheet,
    View,
} from "react-native";
import Login from "../stacks/Login";
import Home from "../stacks/Home";
import { Button } from "native-base";
import SignUp from "../stacks/Signup";

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "#6200ee",
          }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    title: 'Home',
                }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>

    );
};

export default Main;

