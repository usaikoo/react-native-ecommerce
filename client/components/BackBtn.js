import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";
const BackBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
      <Ionicons
        name="chevron-back-circle"
        size={24}
        color={COLORS.primary}
      ></Ionicons>
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  // backBtn: {
  //   alignItems: "center",
  //   position: "absolute",
  //   zIndex: 999,
  //   top: SIZES.large,
  // },
});
