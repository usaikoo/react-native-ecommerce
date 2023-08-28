import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.WelcomeText(COLORS.black)}>Find the most</Text>
        <Text style={styles.WelcomeText(COLORS.primary, 0)}>Find the most</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon}></Feather>
        </TouchableOpacity>

        <View style={styles.searchWarpper}>
          <TextInput
            style={styles.searchInput}
            onPressIn={() => {}}
            placeholder="what are you looking for .."
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera"
              size={SIZES.xLarge}
              color={COLORS.secondary}
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
