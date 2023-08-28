import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import styles from "./productList.style";
import ProductCartView from "./ProductCartView";
import { COLORS, SIZES } from "../../constants";
const ProductList = () => {
  const { data, isLoading, refresh, error } = useFetch();
  // console.log(data);
  if (isLoading) {
    return (
      <ActivityIndicator style={styles.loading}
        size={SIZES.large}
        color={COLORS.primary}
      ></ActivityIndicator>
    );
  }

  // if (error) {
  //   return <Text>Something Went Wrong</Text>;
  // }
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (<ProductCartView item={item}/>)}
      
      ItemSeparatorComponent={()=><View style={styles.spreator}></View>}
    ></FlatList>
    </View>
  );
};

export default ProductList;
