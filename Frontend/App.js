import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import LastTenTransactionsScreen from "./Screens/LastTenTransactionsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        {/* ✅ Use "LastTenTransactions" consistently */}
        <Stack.Screen
          name="LastTenTransactionsScreen"
          component={LastTenTransactionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
