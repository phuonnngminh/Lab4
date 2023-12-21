import React, { useContext } from "react";
import MaterialTopTabNavigator from "../../../Navigation/MaterialTopTabsNavigator";

//Lê Phương Minh - 20521602
const CategoriesScreen = ({products, handleAddToCart}) => {
  return (
    <>
      <MaterialTopTabNavigator
      products={products}
      handleAddToCart={handleAddToCart} />
    </>
  );
};

export default CategoriesScreen;
