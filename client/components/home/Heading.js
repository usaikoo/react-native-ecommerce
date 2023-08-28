import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./heading.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Heading = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.headingContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrival</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('ProductList')}}>
        <Ionicons name="ios-grid" size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
