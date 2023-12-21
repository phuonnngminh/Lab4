import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";


const LoadingScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const animateProgress = Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    });

    const animation = Animated.sequence([animateProgress]);

    animation.start(() => {
      navigation.navigate("Register");
    });

    return () => {
      animation.stop();
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.loadingimg} source={require("../../assets/loading.jpg")} />
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#886B5A",
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
                extrapolate: "clamp",
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.text}>August Coffee</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFC096",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingimg: {
    width: "50%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  text: {
    color: "#3D241C",
    fontWeight: "bold",
    fontFamily: "Inter_900Black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  progressBar: {
    height: 10,
    flexDirection: "row",
    width: "50%",
    marginTop: 20,
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default LoadingScreen;