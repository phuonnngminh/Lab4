import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsButton from "../MaterialIconsButton";
import { AuthContext } from "../../AuthContext";
import { fetchUpdateUserData } from "../../API/Api";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { userData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          src={
            "https://i.pinimg.com/564x/dc/16/18/dc1618c466e42be9797cc031fa64a576.jpg"
          }
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {userData?.name?.firstname} {userData?.name?.lastname}
          </Text>
        </View>
        <MaterialIconsButton
          onPress={() => navigation.navigate("Edit Profile")}
          large={true}
          name={"edit"}
          size={18}
          backgroundColor={"#BA826A"}
          width={25}
          height={25}
          style={styles.editButton}
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.infoText}>
          {userData?.name?.firstname} {userData?.name?.lastname}
        </Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.infoText}>{userData?.username}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.infoText}>{userData?.email}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.infoText}>{userData?.phone}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.infoText}>
          {userData?.address?.number},{userData?.address?.street},
          {userData?.address?.city}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("LogInPage")}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    color: "blue",
  },
  infoSection: {
    marginTop: 16,
  },
  label: {
    fontWeight: "bold",
  },
  infoText: {
    marginTop: 8,
  },
  logoutButton: {
    marginTop: "auto",
    backgroundColor: "red",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  editButton: {
    marginLeft: "60%",
  },
});

export default ProfileScreen;
