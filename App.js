import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HalamanUtama from "./screens/HalamanUtama";
import HalamanLogin from "./screens/HalamanLogin";
import Home from "./screens/Home"; // Corrected import
import Cuci from "./screens/Cuci"; // Corrected import
import Admin from "./screens/Admin"; // Corrected import

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator
          initialRouteName="HalamanUtama"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="HalamanUtama"
            component={HalamanUtama}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HalamanLogin"
            component={HalamanLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Admin"
            component={Admin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cuci"
            component={Cuci}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
