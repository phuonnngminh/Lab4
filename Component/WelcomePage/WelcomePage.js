import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import Icon from "react-native-vector-icons/FontAwesome";

const WelcomePage = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  const { width } = Dimensions.get("window");
  const buttonTextFontSize = width < 375 ? 16 : 20;

  return (
    <View style={styles.container}>
      <Image style={styles.coffeeShop} source={require("../../assets/4.png")} />
      <Image
        style={styles.blobcolor}
        source={require("../../assets/blobcolor.png")}
      />
      <Text style={[styles.text, { fontSize: 28 }]}>
        Get the best coffee in town!
      </Text>
      <View style={styles.loginMethod}>
        <View style={styles.container1}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              { backgroundColor: "#BA826A", borderColor: "#BA826A" },
            ]}
            onPress={() => {}}
          >
            <Text
              style={[
                styles.buttonText,
                { fontSize: buttonTextFontSize, color: "#ffff" },
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, { borderColor: "#BA826A" }]}
            onPress={() => {}}
          >
            <Text
              style={[
                styles.buttonText,
                { fontSize: buttonTextFontSize, color: "#BA826A" },
              ]}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.facebookButton]}
            onPress={() => {}}
          >
            <Icon
              name="facebook"
              size={20}
              color="#92B1D8"
              style={styles.buttonIcon}
            />
            <Text
              style={[
                styles.buttonText,
                { fontSize: buttonTextFontSize, color: "#92B1D8" },
              ]}
            >
              Connect with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 0,
  },
  coffeeShop: {
    width: "75%",
    height: "50%",
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  blobcolor: {},
  text: {
    color: "#907C73",
    fontFamily: "Inter_500Medium",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    width: 270,
    marginHorizontal: "auto",
  },
  loginMethod: {
    display: "flex",
    marginTop: 50,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 10,
  },
  container1: {
    display: "flex",
    flexDirection: "row",
  },
  container2: {
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    paddingBottom: 12,
  },
  facebookButton: {
    borderColor: "#92B1D8",
  },
  buttonIcon: {
    marginRight: 8,
  },
});

export default WelcomePage;
