import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductDetailScreen = () => {
  const route = useRoute();
  const { product } = route.params;
  const [headershow, setHeaderShow] = useState("");

  useEffect(() => {
    setHeaderShow(product.title);
  }, [product.title]);

  return (
    <ScrollView style={styles.container}>
      <View key={product.id}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>Rating: {product.rating?.rate}</Text>
            <Ionicons
              name="star"
              size={16}
              color="#FFCC00"
              style={styles.starIcon}
            />
            <Text style={styles.reviewCount}>
              ({product.rating?.count} reviews)
            </Text>
          </View>
        </View>
        <View style={styles.details}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: "80%",
    overflow: "hidden",
    elevation: 5,
  },
  contentContainer: {
    marginVertical: 5,
    marginLeft: 10,
  },
  name: {
    marginVertical: 5,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  description: {
    marginVertical: 5,
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default ProductDetailScreen;
