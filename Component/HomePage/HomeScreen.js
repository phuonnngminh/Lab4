import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import Product from "./Product/Product";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../Carousel";
import Ionicons from "react-native-vector-icons/Ionicons";

const gap = 0;

const HomeScreen = ({ handleAddToCart, products }) => {
  const navigation = useNavigation();

  const hotDealProduct = products.filter((product) =>{
    return (product.rating.rate >= 4.0)
  });

  const newArrivalsProduct = products.filter((product) =>{
    return (product.rating.rate < 4.0)
  });


  const renderColumnItem = ({ item }) => {
    const handleProductPress = () => {
      navigation.navigate("ProductDetailScreen", { product: item });
    };

    return (
      <View style={styles.itemsWrap}>
        <Product
          product={item}
          handleAddToCart={handleAddToCart}
          handleProductPress={handleProductPress}
        />
      </View>
    );
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sologanContainer}>
          <Text style={styles.slogan}>Lê Phương Minh - 20521602</Text>
        </View>
        <Carousel />
        <View style={styles.productList}>
          <View style={styles.titleContainer}>
            <Text style={styles.categoryTitle}>Hot Deals</Text>
            <Ionicons
                name="flame"
                size={16}
                color="red"
                style={styles.flameIcon}
              />
          </View>
          <View style={styles.column}>
            <FlatList
              data={hotDealProduct}
              renderItem={renderColumnItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
              columnWrapperStyle={styles.itemsWrap}
            />
          </View>
          <Text style={styles.categoryTitle}>New Arrivals</Text>
          <View style={styles.column}>
            <FlatList
              data={newArrivalsProduct}
              renderItem={renderColumnItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
              columnWrapperStyle={styles.itemsWrap}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sologanContainer:{
    alignItems: 'center',
  },
  slogan: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16,
    color: "#BA826A",
  },
  column:{
    alignItems: "center",
    marginLeft: 10,
  },
  productList: {
    flex: 1,
    marginTop: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "red",
    marginLeft: 25,
    marginRight:  10,
  },
  titleContainer:{
    display: "flex",
    flexDirection: "row",
  },
  itemsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
});

export default HomeScreen;
