import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productDetail.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons,Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/index";

import { useRoute } from "@react-navigation/native";
const ProductDetail = ({ navigation }) => {
  const route = useRoute();
  const {item} = route.params;
  
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={24} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          url: item.imageUrl,
        }}
      ></Image>

      <View style={styles.detail}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>

        <View style={styles.rattingRow}>
          <View style={styles.ratting}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.textRatting}> (5.0)</Text>
          </View>

          <View style={styles.ratting}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20}></SimpleLineIcons>
            </TouchableOpacity>
            <Text style={styles.textRatting}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20}></SimpleLineIcons>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description.</Text>
          <Text style={styles.description}>
           {item.description}
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small, padding:12 }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>{item.product_location} </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow} >
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCard}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.white}></Fontisto>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
