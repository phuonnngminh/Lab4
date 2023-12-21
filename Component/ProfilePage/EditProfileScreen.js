import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditProfileScreen = ({userData, setUserData}) => {
  console.log("Edit Profile Screen:"+JSON.stringify(userData));
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: "row", marginBottom: 16 }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            value={userData.name?.firstname}
            onChangeText={(text) => {
              const newUserData = JSON.parse(JSON.stringify(userData));
              newUserData.name.firstname = text;
              setUserData(newUserData);
            }}
            style={styles.TextInput}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            value={userData.name?.lastname}
            onChangeText={(text) => {
              const newUserData = JSON.parse(JSON.stringify(userData));
              newUserData.name.lastname = text;
              setUserData(newUserData);
            }}
            style={styles.TextInput}
          />
        </View>
      </View>

      <Text style={styles.label}>Username:</Text>
      <TextInput
        value={userData.username}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.username = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={userData.email}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.email = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        value={userData.phone}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.phone = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />

      <Text style={styles.label}>House Number:</Text>
      <TextInput
        value={userData.address?.number.toString()}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.address.number = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />

      <Text style={styles.label}>Street:</Text>
      <TextInput
        value={userData.address?.street}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.address.street = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />

      <Text style={styles.label}>City:</Text>
      <TextInput
        value={userData.address?.city}
        onChangeText={(text) => {
          const newUserData = JSON.parse(JSON.stringify(userData));
          newUserData.address.city = text;
          setUserData(newUserData);
        }}
        style={styles.TextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: "#fff",
    borderColor: "#BA826A",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default EditProfileScreen;
