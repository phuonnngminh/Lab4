import React, { useState } from "react";
import { Switch, View, TouchableOpacity, StyleSheet } from "react-native";

const SwitchButton = ({ handleOn, handleOff }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    if (isEnabled) {
      handleOff();
    } else {
      handleOn();
    }
    setIsEnabled(!isEnabled);
  };

  const handlePress = () => {
    toggleSwitch();
  };
//Lê Phương Minh - 20521602
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={isEnabled}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwitchButton;