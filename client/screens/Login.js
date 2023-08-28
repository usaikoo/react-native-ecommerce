import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../components/BackBtn";
import styles from "./login.style";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ValidationSchema = Yup.object().shape({
  password: Yup.string()

    .min(8, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);


  const invalidForm = () => {
    Alert.alert("Submit Data", "Submit validated data", [
      {
        text: "Cancle",
        onPress: () => console.log("Cancle presse"),
      },
      {
        text: "Continue",
        onPress: () => console.log("hi"),
      },
    ]);
  };

  const loginSubmit = async (values) => {
    setLoader(true);
    try{
      const endPoint = "http://10.0.0.8:3000/api/login";
      const data = values;

      const response =  await axios.post(endPoint,data);
      if(response.status === 200)
      {
        setLoader(false)
        setResponseData(response.data)
        if (response.data && response.data._id) {
          await AsyncStorage.setItem(`user${response.data._id}`, JSON.stringify(response.data));
          await AsyncStorage.setItem('id', JSON.stringify(response.data._id));
          navigation.replace("Button Navigation");
        } 
      
        console.log(response.data)
      }
      else{
        Alert.alert("Error ", 'Provide valid data', [
          {
            text: "Cancle",
            onPress: () => console.log("Cancle presse"),
          },
          {
            text: "Continue",
            onPress: () => console.log("hi"),
          },
          {defaultIndex:1}
        ]);
      }
  
    }catch(err){
      Alert.alert("Error ", 'opps something went wrong', [
        {
          text: "Cancle",
          onPress: () => console.log(err),
        },
        {
          text: "Continue",
          onPress: () => console.log("hi"),
        },
      ]);
    }finally{
      setLoader(false)
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()}></BackBtn>
          <Image
            style={styles.image}
            source={require("../assets/images/bk.png")}
          ></Image>

          <Text style={styles.title}> Unlimited Sai Ko Shop</Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => loginSubmit(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.primary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      style={{ marginRight: 12 }}
                    ></MaterialCommunityIcons>
                    <TextInput
                      placeholder="enter email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onChangeText={handleChange("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.lable}>password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.primary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={24}
                      style={{ marginRight: 12 }}
                    ></MaterialCommunityIcons>
                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="enter password"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                      value={values.password}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      ></MaterialCommunityIcons>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password ? (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  ) : null}
                </View>

                <Button
                loader={loader}
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : invalidForm}
                  isValid={isValid}
                ></Button>
                <Text
                  style={styles.register}
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  Register
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
