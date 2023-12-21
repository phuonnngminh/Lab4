import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import AlertPopup from "./AlertPopup";
//Lê Phương Minh - 20521602
const SettingPage = () => {
  const [question, setQuestion] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [listQuestions, setListQuestions] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handleAddToListQuestions = () => {
    if (question === "") {
      return;
    } else {
      setListQuestions([question, ...listQuestions]);
      setQuestion("");
    }
  };

  const showAlert = () => {
    Alert.alert("Thank you for your feedback!", "OK", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#333" : "#fff" },
      ]}
    >
      <Image
        style={styles.logoImage}
        source={require("../../assets/loading.jpg")}
      ></Image>
      <Text style={[styles.logo, { color: darkMode ? "#fff" : "#000" }]}>
        Coffee Shop
      </Text>
 {/* //Lê Phương Minh - 20521602 */}
      <View style={[styles.switchContainer, { justifyContent: "flex-start" }]}>
        <Text
          style={[styles.switchLabel, { color: darkMode ? "#fff" : "#000" }]}
        >
          Dark Mode
        </Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={[styles.switchContainer, { justifyContent: "flex-start" }]}>
        <Text
          style={[styles.switchLabel, { color: darkMode ? "#fff" : "#000" }]}
        >
          Notifications
        </Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>
      <Text
        style={[
          styles.feedbackInputLabel,
          { color: darkMode ? "#fff" : "#000" },
        ]}
      >
        Feedback
      </Text>
      <TextInput
        placeholder="Your feedback here..."
        placeholderTextColor={darkMode ? "#fff" : "#000"}
        multiline
        numberOfLines={4}
        style={[styles.feedbackInput, { color: darkMode ? "#fff" : "#000" }]}
        onChangeText={(newQuestion) => setQuestion(newQuestion)}
        value={question}
      />

      <AlertPopup
        handleAddToListQuestions={() => {
          if (question === "") {
            return;
          } else {
            setListQuestions([question, ...listQuestions]);
            setQuestion("");
          }
        }}
        handleALertNotification={() => {
          if (notifications) {
            Alert.alert("","Thank you for your feedback!", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
          } else {
            return;
          }
        }}
      />
 {/* //Lê Phương Minh - 20521602 */}
      <Text
        style={[
          styles.listQuestionsLabel,
          { color: darkMode ? "#fff" : "#000" },
        ]}
      >
        Frequently Asked Questions
      </Text>
      <Text style={[styles.question, { color: darkMode ? "#fff" : "#000" }]}>
        {listQuestions.map((question) => "Q: " + question + "\n")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 8,
    marginBottom: 10,
    marginTop: 60,
  },
  logo: {
    fontWeight: "bold",
    marginBottom: 20,
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  switchLabel: {
    marginRight: 10,
  },
  feedbackInputLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
   /* //Lê Phương Minh - 20521602 */
  feedbackInput: {
    width: "80%",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  listQuestionsLabel: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 20,
  },
});

export default SettingPage;
