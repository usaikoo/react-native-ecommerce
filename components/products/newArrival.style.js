import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    upperRow:{
        width:SIZES.width-50,
        marginHorizontal:SIZES.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:SIZES.large,
        position:'absolute',
        backgroundColor:COLORS.primary,
        top:SIZES.large,
        zIndex:999
    },
    heading:{
        color:COLORS.lightWhite,
        fontFamily:'Semibold',
        fontSize:SIZES.medium,
        marginLeft:5,
    }
})
export default styles;