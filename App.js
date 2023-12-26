import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import HalamanUtama from "./screens/HalamanUtama";  // Gantilah dengan nama file dan path yang sesuai
import HalamanLogin from "./screens/HalamanLogin";  // Gantilah dengan nama file dan path yang sesuai
import Home from "./screens/Home";
import Cuci from "./screens/Cuci";
import Setrika from "./screens/Setrika";
import CuciSepatu from "./screens/CuciSepatu";

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
          <Stack.Screen name="HalamanUtama" component={HalamanUtama} />
          <Stack.Screen name="HalamanLogin" component={HalamanLogin} />
          <Stack.Screen name="Cuci" component={Cuci} />
          <Stack.Screen name="Setrika" component={Setrika} />
          <Stack.Screen name="CuciSepatu" component={CuciSepatu} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
