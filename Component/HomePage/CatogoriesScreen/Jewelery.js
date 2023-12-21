import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

const Jewelery = ({ products, handleAddToCart }) => {
  const jeweleryProducts = products.filter(
    (product) => product.category === "jewelery"
  );

  return <ProductCategory categoryProducts={jeweleryProducts} handleAddToCart={handleAddToCart} />;
};

export default Jewelery;