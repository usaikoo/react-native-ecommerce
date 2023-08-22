import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Button = ({ title, onPress, isValid, loader}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.primary)} >
      {loader === false ? <Text style={styles.title}>{title}</Text> : <ActivityIndicator></ActivityIndicator>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    title:{
        fontFamily:'Bold',
        fontSize:15,
        color:COLORS.white
        
    },
    btnStyle:(btnColor)=>({
        height:50,
        width:'100%',
        marginVertical:20,
        backgroundColor:btnColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    })
});
