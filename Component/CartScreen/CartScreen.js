import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CartProducts from "./CartProducts";
import { Alert } from "react-native";

const CartScreen = ({ listProductCart, setListProductCart, product }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const calculateTotalPrice = () => {
    let total = 0;
    listProductCart.forEach((item) => {
      total = total + item.quantity * item.price;
    });
    return total;
  };


  useEffect(() => {
    calculateTotalPrice();
  }, [listProductCart]);

  const onUpdateQuantity = (product, newQuantity) => {
    const updatedItems = listProductCart.map((item) => {
      if (item.id === product.id) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setListProductCart(updatedItems);
    calculateTotalPrice();
  };

  const removeProduct = (product) => {
    Alert.alert(
      "",
      "Are you sure you want to remove this product?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            const updatedItems = listProductCart.filter(
              (item) => item.id !== product.id
            );
            setListProductCart(updatedItems);
            calculateTotalPrice();
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (listProductCart.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text>You have no product in your cart!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>SHOPPING NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={listProductCart}
        renderItem={({ item }) => (
          <CartProducts
            product={item}
            setCount={(count) => onUpdateQuantity(item, count)}
            removeProduct={removeProduct}
            calculateTotalPrice={calculateTotalPrice}
          />
        )}
      />
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>
          Total Amount: ${calculateTotalPrice()}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 100,
  },
  buttonText: {
    color: "white",
  },
  totalPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalPriceText: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 100,
  },
});

export default CartScreen;
