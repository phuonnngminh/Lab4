import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Product from "../Product/Product";
import { useNavigation } from "@react-navigation/native";

const gap = 12;

const ProductCategory = ({ handleAddToCart, categoryProducts, products }) => {
  const navigation = useNavigation();
  const renderColumnItem = ({ item }) => {
    const handleProductPress = () => {
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
  const [data, setData] = useState(categoryProducts);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productList}>
        <View style={styles.column}>
          <FlatList
            data={data}
            renderItem={renderColumnItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4}
            columnWrapperStyle={styles.itemsWrap}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productList: {
    marginTop: 16,
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsWrap: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
});

export default ProductCategory;
