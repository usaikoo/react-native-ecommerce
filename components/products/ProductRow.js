import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const { data, isLoading, error, refresh } = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size={SIZES.large}
          color={COLORS.primary}
        ></ActivityIndicator>
      ) : error ? (
        <Text>Something Went Wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCartView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        ></FlatList>
      )}
    </View>
  );
};

export default ProductRow;
