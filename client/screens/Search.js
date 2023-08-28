import { View,Text, TextInput, TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import SearchTitle from "../components/products/SearchTitle";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.0.8:3000/api/products/search/${searchKey}`
      );
      // console.log('=================')
      // console.log(response.data);
      setSearchResult(response.data);
    } catch (err) {
      console.log(err);
      // localhost:3000/api/products/search/samsung http://10.0.0.8:3000/api/products
    }
  };
  console.log(searchKey);
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera"
            size={24}
            style={styles.searchIcon}
          ></Ionicons>
        </TouchableOpacity>

        <View style={styles.searchWarpper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="what are you looking for .."
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.secondary}
            ></Feather>
          </TouchableOpacity>
        </View>
      </View>
      {
      searchResult.length === 0 ? 
      <View style={{flex:1}}>
        <Image style={styles.searchImage} source={require('../assets/images/Pose23.png')}></Image>
      </View> 
      : 
     <FlatList data={searchResult}
     keyExtractor={(item)=>item._id} renderItem={({item})=>(<SearchTitle  item={item} />)} style={{marginHorizontal:12}}></FlatList>
      }
    </SafeAreaView>
  );
};

export default Search;
