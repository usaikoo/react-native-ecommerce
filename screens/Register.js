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
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import axios from "axios";
const signInSchema = Yup.object().shape({
  password: Yup.string()

    .min(8, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  location: Yup.string()
    .min(3, "Provide a valid location address")
    .required("Required"),
    username: Yup.string()
    .min(3, "Provide a valid  name")
    .required("Required"),
});
const Register = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);
  const [input, setInput] = useState({
    email: "",
    location: "",
    password: "",
  });

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


  const registerSubmit = async (values) => {
    setLoader(true);
    try{
      const endPoint = "http://10.0.0.8:3000/api/register";
      const data = values;

      const response =  await axios.post(endPoint,data);
    //   if(response.status === 200)
    //   {
    //     setLoader(false)
    //     setResponseData(response.data)
    //     await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData))
    //     await AsyncStorage.setItem('id', JSON.stringify(responseData._id))
    //     navigation.replace("Button Navigation")
    //     // const newUser = await AsyncStorage.getItem(`user${responseData._id}`)
    //     // console.log(newUser);
    //     // console.log(response.data)
    //   }
      if(response.status === 201){
        navigation.replace("Login")
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
            initialValues={{ email: "", password: "" , location:""}}
            validationSchema={signInSchema}
            onSubmit={(values) => registerSubmit(values)}
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
                  <Text style={styles.lable}>username</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.username ? COLORS.primary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="face-man-profile"
                      size={24}
                      style={{ marginRight: 12 }}
                    ></MaterialCommunityIcons>
                    <TextInput
                      placeholder="enter username"
                      onFocus={() => {
                        setFieldTouched("username");
                      }}
                      onChangeText={handleChange("username")}
                      onBlur={() => setFieldTouched("username", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                      value={values.username}
                    />
                  </View>
                  {errors.username && touched.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>



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
                  <Text style={styles.lable}>location</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.location ? COLORS.primary : COLORS.offwhite
                    )}
                  >
                    <Ionicons
                      name="map-outline"
                      size={24}
                      style={{ marginRight: 12 }}
                    ></Ionicons>
                    <TextInput
                      placeholder="enter location"
                      onFocus={() => {
                        setFieldTouched("location");
                      }}
                      onChangeText={handleChange("location")}
                      onBlur={() => setFieldTouched("location", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                      value={values.location}
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
                  title={"S I G N U P"}
                  onPress={isValid ? handleSubmit : invalidForm}
                  isValid={isValid}
                  loader={loader}
                ></Button>
                <Text
                  style={styles.register}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  Go back to Login
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
