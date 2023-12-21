import React, { createContext, useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "core-js/stable/atob";
import { fetchUserData, fetchUserLogin } from "../../API/Api";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../AuthContext";

const LogInPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(AuthContext);

  const handleLogin = () => {
    fetchUserLogin({ username, password })
      .then((res) => {
        const token = res.token;
        console.log(token);
        const decoded = jwtDecode(token);
        console.log(decoded);
        fetchUserData(decoded.sub)
          .then((userData) => {
            console.log("User data:", userData);
            setUserData(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });

        navigation.navigate("Home");
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert(
          "Login failed",
          "Incorrect username or password. Please try again"
        );
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or login with</Text>
        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}>
            <Text style={styles.registerButton}>Register!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
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
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  orText: {
    marginTop: 20,
    marginBottom: 10,
    color: "#6A6667",
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "50%",
  },
  socialButton: {
    backgroundColor: "#6A6667",
    padding: 12,
    borderRadius: 20,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    marginRight: 5,
    color: "#6A6667",
  },
  registerButton: {
    color: "#BA826A",
    fontWeight: "bold",
  },
});

export default LogInPage;
