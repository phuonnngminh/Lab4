import { View, NativeBaseConfigProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/564x/35/a6/b6/35a6b62ba82775aea4fb196b8b12d30c.jpg",
    "https://i.pinimg.com/564x/8c/9e/68/8c9e68eab39b0c4874998cf354cf1091.jpg",
    "https://i.pinimg.com/564x/7d/e7/b7/7de7b7210a968391faa9a5e77ec61619.jpg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={Colors.primary}
        inactiveDotColor={Colors.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Carousel;
