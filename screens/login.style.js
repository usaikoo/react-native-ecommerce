import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"
const styles = StyleSheet.create({
    image:{
        resizeMode:'contain',
        height:SIZES.height/2.4,
        width:SIZES.width-60,
        marginBottom:SIZES.xxLarge
    },
    title:{
        fontFamily:'Bold',
        fontSize:SIZES.xLarge,
        alignItems:'center',
        alignContent:'center',
        color:COLORS.primary,
        marginBottom:SIZES.xLarge,
    },
    wrapper:{
        // marginHorizontal:20,
        marginBottom:20,
    },
    lable:{
        fontFamily:'Semibold',
        fontSize:12,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right'
    },
    inputWrapper: (borderColor) =>({
        borderColor:borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:15,
        alignItems:'center'
        

    }),
    errorMessage:{
        color:COLORS.red, 
        marginTop:5, 
        marginLeft:15,
        fontFamily:'Regular'
    },
    register:{
        textAlign:'center',
        marginTop:20
    }
})
export default styles