import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HelpScreen from "../../Component/HomePage/HelpScreen";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../Component/HomePage/HomeScreen";
import ArrowBackButton from "../../Component/ArrowBackButton/ArrowBackButton";

const Stack = createStackNavigator();

const HelpStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerLeft: () => {
            <ArrowBackButton />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HelpStackNavigator;
