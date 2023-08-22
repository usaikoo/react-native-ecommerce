import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistUser();
  }, []);

  const checkExistUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser !== null) {
        const paraseData = JSON.parse(currentUser);
        setUserData(paraseData);
        // console.log(userData !== null)
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([userId, "id"]);
      navigation.replace("Button Navigation")
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    Alert.alert("Logout", "Are you sure to logout ?", [
      {
        text: "Cancle",
        onPress: () => console.log("Cancle presse"),
      },
      {
        text: "Continue",
        onPress: () => userLogout(),
      },
    ]);
  };

  const clearCache = () => {
    Alert.alert("Clear Cache", "Are you sure to clear cache ?", [
      {
        text: "Cancle",
        onPress: () => console.log("Cancle presse"),
      },
      {
        text: "Continue",
        onPress: () => console.log("hi"),
      },
    ]);
  };

  const deleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure to delete account ?", [
      {
        text: "Cancle",
        onPress: () => console.log("Cancle presse"),
      },
      {
        text: "Continue",
        onPress: () => console.log("hi"),
      },
    ]);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container}>
          <StatusBar backgroundColor={COLORS.backgroundColor}></StatusBar>
          <View style={{ width: "100%" }}>
            <Image
              source={require("../assets/images/space.jpg")}
              style={styles.cover}
            ></Image>
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require("../assets/images/profile.jpeg")}
              style={styles.profile}
            ></Image>
            <Text style={styles.name}>
              {userData !== null ? userData.username : "please login"}
            </Text>
            {userLogin === false ? (
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={styles.loginBtn}>
                  <Text style={styles.menuTxt}>L O G I N</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View style={styles.text}>
                <Text style={styles.menuTxt}>{userData.email}</Text>
              </View>
            )}

            {userLogin === false ? (
              <View></View>
            ) : (
              <View style={styles.menuWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Favouriate")}
                >
                  <View style={styles.menuItem(0.4)}>
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuTxt}>Favouriates</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Order")}>
                  <View style={styles.menuItem(0.4)}>
                    <MaterialCommunityIcons
                      name="truck-delivery-outline"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuTxt}>Orders</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                  <View style={styles.menuItem(0.4)}>
                    <SimpleLineIcons
                      name="bag"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuTxt}>Cart</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => clearCache()}>
                  <View style={styles.menuItem(0.4)}>
                    <MaterialCommunityIcons
                      name="cached"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuTxt}>Clear Cache</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteAccount()}>
                  <View style={styles.menuItem(0.4)}>
                    <AntDesign
                      name="deleteuser"
                      size={24}
                      color={COLORS.primary}
                    />
                    <Text style={styles.menuTxt}>Delete User</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => logout()}>
                  <View style={styles.menuItem(0.4)}>
                    <AntDesign name="logout" size={24} color={COLORS.primary} />
                    <Text style={styles.menuTxt}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
