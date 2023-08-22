import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
const Carousal = () => {
  const slides = [
    "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg",
    "https://www.vmcdn.ca/f/files/via/images/city-images/downtown-vancouver-sunny-day-shore.jpg;w=960;h=586;mode=crop",
    "https://www.tripsavvy.com/thmb/V7IaKSVX3nz0VNryjcOQTddMb3Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Toronto-Skyline-59de6bd6aad52b00108be566.jpg",
  ];
  return (
    <View style={styles.carousalContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoPlay
        circleLoop
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  carousalContainer: {
    flex: 1,
    alignItems: "center",
  },
});
