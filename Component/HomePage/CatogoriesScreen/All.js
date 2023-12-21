import React, { useEffect, useState } from "react";
import ProductCategory from "./ProductCategory";

const All = ({ products, handleAddToCart }) => {

  return <ProductCategory categoryProducts={products} handleAddToCart={handleAddToCart}/>;
};

export default All;