import React from "react";
import { View, Button, StyleSheet } from "react-native";

const AlertPopup = ({handleAddToListQuestions, handleALertNotification}) => {


  return (
    <View style={styles.sendFeedbackButton}>
      <Button title="Send Feedback" onPress={() => {
        handleAddToListQuestions();
        handleALertNotification();
      }} />
    </View>
  );
};

//Lê Phương Minh - 20521602
const styles = StyleSheet.create({
  sendFeedbackButton:{
    backgroundColor: "#BA826A",
    borderRadius: 10,
    color: "#fff"
  }
});
export default AlertPopup;1