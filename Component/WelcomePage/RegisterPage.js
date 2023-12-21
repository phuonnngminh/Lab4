import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const RegisterPage = () => {
  const navigation = useNavigation();
    //Lê Phương Minh - 20521602
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Register</Text>
      <Text style={styles.welcomeText}>Create new account!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter your username" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Create</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.registerButton}>Login now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginText: {
    marginTop: 10,
    fontSize: 24,
    marginBottom: 20,
    color: "#BA826A",
  },
  welcomeText: {
    width: "100%",
    textAlign: "left",
    fontSize: 30,
    marginLeft: 70,
    marginBottom: 20,
    color: "#BA826A",
  },
    //Lê Phương Minh - 20521602
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  label: {
    marginBottom: 5,
    color: "#6A6667",
  },
  input: {
    backgroundColor: "#fff",
    borderBottomColor: "#BA826A",
    borderBottomWidth: 2,
    padding: 10,
    fontSize: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#BA826A",
    fontWeight: "bold",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#BA826A",
    padding: 12,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
      //Lê Phương Minh - 20521602
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  registerContainer: {
    flexDirection: "row",
  },
  registerText: {
    color: "#6A6667",
  },
  registerButton: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "#BA826A",
  },
});

export default RegisterPage;