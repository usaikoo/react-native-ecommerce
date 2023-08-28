import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../constants/index'

const styles = StyleSheet.create({
    container:{
        width:162,
        height:240,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
    },
    imageContainer:{
        width:150,
        marginLeft:SIZES.small/2,
        marginTop : SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:'hidden',
        flex:1,
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        padding:SIZES.small
    },
    title:{
        fontFamily:'Bold',
        fontSize:SIZES.large,
        marginBottom:2
    },
    sublier:{
        fontFamily:'Regular',
        fontSize:SIZES.small,
        color:COLORS.gray
    },
    price:{
        fontFamily:'Bold',
        fontSize:SIZES.medium,
        
    },
    addBtn:{
        position:'absolute',
        bottom:SIZES.xSmall,
        right:SIZES.xSmall
    }
});
export default styles;
