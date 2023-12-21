import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

const Electronics = ({ products, handleAddToCart }) => {
  const electronicsProducts = products.filter(
    (product) => product.category === "electronics"
  );

  return <ProductCategory categoryProducts={electronicsProducts} handleAddToCart={handleAddToCart}/>;
};

export default Electronics;