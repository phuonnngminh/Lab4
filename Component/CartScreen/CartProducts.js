import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UpDownButton from "./UpDownButton";
import MaterialIconsButton from "../MaterialIconsButton";

const CartProducts = ({
  product,
  setCount,
  listProductCart,
  removeProduct,
  calculateTotalPrice,
}) => {
  const navigation = useNavigation();

  
  const calculateProductPrice = (item) => {
    let total = 0;
      total =  item.quantity * item.price;
    return total;
  }


  return (
      <View key={product.id} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {product.title}
          </Text>
          <View style={styles.column}>
            <Image src={product.image} style={styles.image} />
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${product.price}</Text>
              <UpDownButton count={product.quantity} setCount={setCount} />
            </View>
            <Text style={styles.priceTotal}>
              Total: ${calculateProductPrice(product)}
            </Text>
            <MaterialIconsButton
              onPress={() => removeProduct(product)}
              large={true}
              name={"delete"}
              size={20}
              backgroundColor={"#BA826A"}
              width={25}
              height={25}
              style={styles.deleteButton}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: 240,
    marginEnd: 22,
    marginBottom: 10,
    backgroundColor: "white",
    marginTop: 10,
    width: 700,
    marginLeft: 10,
    marginRight: 10,
  },
  contentContainer: {
    marginLeft: 10,
    height: 50,
    marginLeft: 50,
  },
  priceContainer: {
    marginLeft: 70,
    marginTop: 40,
  },
  column: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: 150,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
  },
  name: {
    marginVertical: 5,
    fontSize: 18,
    marginTop: 15,
  },
  price: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 30,
  },
  priceTotal: {
    marginLeft: 30,
    marginTop: 60,
    fontWeight: "bold",
  },
  deleteButton: {
    marginLeft: 50,
    marginTop: 57,
  },
  
  
});
export default CartProducts;
