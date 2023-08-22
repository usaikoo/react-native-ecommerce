import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './searchTitle.style'
import { useNavigation } from '@react-navigation/native'
const SearchTitle = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetail',{item})}>
        <View style={styles.image}>
            <Image source={{uri: item.imageUrl}} style={styles.productImage}></Image>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productSuplier}>{item.suplier}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle

