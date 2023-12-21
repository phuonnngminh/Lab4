import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import CategoriesScreen from "../Component/HomePage/CatogoriesScreen/CategoriesScreen";
import CartScreen from "../Component/CartScreen/CartScreen";
import HomeScreen from "../Component/HomePage/HomeScreen";
import ProfileScreen from "../Component/ProfilePage/ProfileScreen";
import { Alert } from "react-native";
import { fetchProducts, fetchUserLogin } from "../API/Api";
import Product from "../Component/HomePage/Product/Product";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ setHeaderTitle, setPassword, setUsername }) => {
  const [listProductCart, setListProductCart] = useState([]);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const productCount = listProductCart.length;


  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  }, []);


  const handleAddToCart = (product) => {
    const productError = checkExists(product);
    if (!productError.exists) {
      product.quantity = 1;
      setListProductCart([...listProductCart, product]);
      console.log("Add to cart");
    }
  };

  const renderColumnItem = ({ item }) => {
    const navigation = useNavigation();
    const handleProductPress = () => {
      console.log("Product");
      navigation.navigate("ProductDetailScreen", { product: item });
    };

    return (
      <Product
        product={item}
        handleAddToCart={handleAddToCart}
        handleProductPress={handleProductPress}
      />
    );
  };

  const checkExists = (product) => {
    const error = {};
    const productExists = listProductCart.some((item) => item === product);
    if (productExists) {
      Alert.alert("This product is already in your cart");
      return { exists: true };
    }
    return error;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#BA826A",
        inactiveTintColor: "gray",
      }}
      screenListeners={{
        state: (e) => {
          const stateName = e.data.state.routeNames[e.data.state.index];
          setHeaderTitle(stateName);
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "ios-apps" : "ios-apps-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home">
        {() => (
          <HomeScreen
            handleAddToCart={handleAddToCart}
            renderColumnItem={renderColumnItem}
            products={products}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Categories">
        {() => (
          <CategoriesScreen
            handleAddToCart={handleAddToCart}
            products={products}
            renderColumnItem={renderColumnItem}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        options={{ tabBarBadge: productCount > 0 ? productCount : null }}
      >
        {() => (
          <CartScreen
            listProductCart={listProductCart}
            products={products}
            setListProductCart={setListProductCart}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
      >
        {() => (
          <ProfileScreen
            setPassword={setPassword}
            setUsername={setUsername}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
