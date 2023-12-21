import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationsScreen from "../../Component/HomePage/NotificationsScreen";


const Stack = createStackNavigator();

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      {/* <Stack.Screen
        name="NotificationDetails"
        component={NotificationDeatails}
        listeners={{
          focus: () => setIsInDetailPage(true),
          beforeRemove: () => setIsInDetailPage(false),
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default NotificationStackNavigator;
