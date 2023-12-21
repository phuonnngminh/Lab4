import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import All from "../Component/HomePage/CatogoriesScreen/All";
import Electronics from "../Component/HomePage/CatogoriesScreen/Electronics";
import Jewelery from "../Component/HomePage/CatogoriesScreen/Jewelery";
import MenClothing from "../Component/HomePage/CatogoriesScreen/MenClothing";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabNavigator = ({ products, handleAddToCart }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "All") {
            iconName = focused ? "ios-grid" : "ios-grid-outline";
          } else if (route.name === "Electronics") {
            iconName = focused ? "ios-desktop" : "ios-desktop-outline";
          } else if (route.name === "Jewelery") {
            iconName = focused ? "ios-flower" : "ios-flower-outline";
          } else if (route.name === "Men's clothing") {
            iconName = focused ? "ios-man" : "ios-man-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="All">{() => <All products={products} handleAddToCart={handleAddToCart} />}</Tab.Screen>
      <Tab.Screen name="Electronics">
        {() => <Electronics products={products} handleAddToCart={handleAddToCart} />}
      </Tab.Screen>
      <Tab.Screen name="Jewelery">
        {() => <Jewelery products={products} handleAddToCart={handleAddToCart}/>}
      </Tab.Screen>
      <Tab.Screen name="Men's clothing">
        {() => <MenClothing products={products} handleAddToCart={handleAddToCart} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
export default MaterialTopTabNavigator;
