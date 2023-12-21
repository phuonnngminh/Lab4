import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
//Lê Phương Minh - 20521602
const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.center} >
      <Text>Notification screen!</Text>
      <Button
        title="Go to Notification Details"
        onPress={() => navigation.navigate("NotificationDetails")} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default NotificationsScreen;