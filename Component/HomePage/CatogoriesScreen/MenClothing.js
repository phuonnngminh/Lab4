import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

const MenClothing = ({ products, handleAddToCart }) => {
  const menClothingProducts = products.filter(
    (product) => product.category === "men's clothing"
  );

  return <ProductCategory categoryProducts={menClothingProducts} handleAddToCart={handleAddToCart}/>;
};

export default MenClothing;