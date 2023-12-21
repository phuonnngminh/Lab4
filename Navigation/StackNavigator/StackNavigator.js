import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../DrawerNavigator";
import HomeDetails from "../../Component/HomePage/HomeDetails";
import NotificationDeatails from "../../Component/HomePage/NotificationDetails";
import ProductDetailScreen from "../../Component/HomePage/Product/ProductDetailsScreen";
import LogInPage from "../../Component/WelcomePage/LogInPage";
import RegisterPage from "../../Component/WelcomePage/RegisterPage";
import EditProfileScreen from "../../Component/ProfilePage/EditProfileScreen";
import { Button } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { fetchUpdateUserData } from "../../API/Api";

const Stack = createStackNavigator();
const StackNavigator = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const [editUserData, setEditUserData] = useState(userData);

  useEffect(() => {
    setEditUserData(userData);
  }, [userData]);

  const handleSave = (navigation) => {
    setUserData(editUserData);
    fetchUpdateUserData(editUserData, editUserData.id).then((res) => {
      navigation.navigate("Profile");
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Drawer"
          options={{ headerShown: false, headerBackTitleVisible: false }}
        >
          {() => <DrawerNavigator />}
        </Stack.Screen>
        <Stack.Screen
          name="HomeDetails"
          component={HomeDetails}
          options={{ headerShown: true, headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="NotificationDetails"
          component={NotificationDeatails}
          options={{ headerShown: true, headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="LogInPage"
          component={LogInPage}
          options={{ headerShown: false, headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false, headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={({ route }) => ({
            headerShown: true,
            headerBackTitleVisible: false,
            headershow: route.params.product.title,
          })}
        />
        <Stack.Screen
          name="Edit Profile"
          options={({ navigation }) => ({
            headerShown: true,
            headerBackTitleVisible: false,
            headerRight: () => (
              <Button onPress={() => handleSave(navigation)} title="✓" />
            ),
          })}
        >
          {() => (
            <EditProfileScreen
              userData={editUserData}
              setUserData={setEditUserData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
