import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNavigation from "./navigation/ButtonNavigation";
import Cart from "./screens/Cart";
import { ProductDetail } from "./screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NewArrival from "./components/products/NewArrival";
import Login from "./screens/Login";
import Register from "./screens/Register";

import { Order, Favouriate } from "./screens/index";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Light: require("./assets/fonts/Poppins-Light.ttf"),
    Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    Extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    Semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Button Navigation"
            component={ButtonNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductList"
            component={NewArrival}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Order"
            component={Order}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Favouriate"
            component={Favouriate}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 12,
  },
});
