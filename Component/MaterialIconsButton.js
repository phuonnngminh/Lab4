import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
//Lê Phương Minh - 20521602
const MaterialIconsButton = ({
  onPress,
  name,
  size,
  backgroundColor,
  width,
  height,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, width: width, height: height },
        style,
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <MaterialIcons name={name} size={size} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MaterialIconsButton;
