import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./productCartView.style";
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
const ProductCartView = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail',{item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{uri:item.imageUrl}} style={styles.image}></Image>
        </View>
        <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}> {item.title}</Text>
        <Text style={styles.sublier}>{item.suplier}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons  name='add-circle' size={24}  />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCartView;
