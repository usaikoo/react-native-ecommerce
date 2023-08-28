import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:SIZES.small,
        flexDirection:'row',
        padding:SIZES.small,
        backgroundColor:'#FFF',
        ...SHADOWS.medium,
        shadowColor:COLORS.lightWhite

    },
    image:{
        width:70,
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignContent:'center',
    },
    productImage:{
        width:'100%',
        height:65,
        borderRadius:SIZES.small,
        resizeMode:'cover'
    },
   
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium,
    },
    productSuplier:{
        fontSize:SIZES.small,
        fontFamily:'Regular',
        color:COLORS.primary
    },
    productPrice:{
        fontSize:SIZES.small,
        fontFamily:'Regular',
        color:COLORS.primary
    },
    productTitle:{
        fontSize:SIZES.small,
        fontFamily:'Regular',
        color:COLORS.primary
    },
})

export default styles;