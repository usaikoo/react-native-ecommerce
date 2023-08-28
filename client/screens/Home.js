import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";
import Carousal from "../components/home/Carousal";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    checkExistUser();
  }, []);

  const checkExistUser = async () => {
    const id = await AsyncStorage.getItem("id");
   
    const userId = `user${JSON.parse(id)}`;
    try {
      const currentUser = await AsyncStorage.getItem(userId);
      // console.log(currentUser);

      if (currentUser !== null) {
        const paraseData = JSON.parse(currentUser);
        setUserData(paraseData);
      } 
      // else {
      //   navigation.navigate("Login");
      // }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <SafeAreaView>
      <View style={styles.appBarWarpper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24}></Ionicons>
          <Text style={styles.location}>{userData ? userData.location : 'Quebec'}</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>9</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24}></Fontisto>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousal />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
