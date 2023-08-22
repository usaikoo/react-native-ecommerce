import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge * 1.5,
    paddingLeft: SIZES.small / 2,
    paddingRight: SIZES.small / 2,
  },
  spreator: {
    height: 16,
  },
});

export default styles;
