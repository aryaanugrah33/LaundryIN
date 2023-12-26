import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Home from "./screens/Home";
import Admin from "./screens/Admin";
import History from "./screens/History";
import Profil from "./screens/Profil";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={Admin}
        options={{
          tabBarLabel: "Pesanan",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="assignment"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" type="material" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
