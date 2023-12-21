import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./Navigation/StackNavigator/StackNavigator";
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from "./AuthContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content" />
          <StackNavigator />
        </SafeAreaView>
      </NativeBaseProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});
export default App;
