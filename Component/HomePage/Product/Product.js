import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsButton from "../../MaterialIconsButton";

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

const Product = ({ product, handleAddToCart, handleProductPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => handleProductPress()}>
      <View key={product.id} style={styles.container}>
        <Image src={product.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {truncate(product.title, 20)}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{product.rating?.rate}</Text>
            <Ionicons
              name="star"
              size={16}
              color="gold"
              style={styles.starIcon}
            />
            <Text style={styles.reviewCount}>({product.rating?.count})</Text>
            <TouchableOpacity style={styles.addButton}>
              <MaterialIconsButton
                onPress={() => handleAddToCart(product)}
                large={true}
                name={"add"}
                size={24}
                backgroundColor={"#BA826A"}
                width={25}
                height={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 180,
    height: 240,
    marginEnd: 22,
    marginBottom: 10,
    backgroundColor: "white",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginVertical: 5,
    fontSize: 14,
    color: "red",
  },
  ratingContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 12,
    color: "gray",
    marginRight: 50,
  },
  addButton: {
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
export default Product;
