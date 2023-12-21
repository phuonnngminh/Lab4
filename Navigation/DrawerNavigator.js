import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import NotificationStackNavigator from "./StackNavigator/NotificationStackNavigator";
import HelpStackNavigator from "./StackNavigator/HelpStackNavigator";
import { Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
//Lê Phương Minh - 20521602
const Drawer = createDrawerNavigator();

const DrawerNavigator = ({setPassword, setUsername}) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const opt = {
    headerTitle: headerTitle,
  };


  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" options={opt}>
        {() => (
          <BottomTabNavigator
            setHeaderTitle={setHeaderTitle}
            setPassword={setPassword}
            setUsername={setUsername}
            
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Notification" options={{opt, title:"Notifications"}}>
        {() => (
          <NotificationStackNavigator
            setHeaderTitle={setHeaderTitle}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="HelpStackNotification"
        component={HelpStackNavigator}
        options={{
          title: "Help",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  // Styles here
});

export default DrawerNavigator;
