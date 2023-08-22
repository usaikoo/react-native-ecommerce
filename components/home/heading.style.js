import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
headingContainer:{
    margin:20
    
},
header:{
    flexDirection:'row',
    justifyContent:'space-between'
},
headerTitle:{
    fontFamily:'Semibold',
    fontSize:SIZES.large
}
})

export default styles;