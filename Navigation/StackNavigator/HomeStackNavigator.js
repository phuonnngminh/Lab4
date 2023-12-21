import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Component/HomePage/HomeScreen";
import HomeDetails from "../../Component/HomePage/HomeDetails";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ setIsInDetailPage }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        listeners={{
          focus: () => setIsInDetailPage(true),
          beforeRemove: () => setIsInDetailPage(false),
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
