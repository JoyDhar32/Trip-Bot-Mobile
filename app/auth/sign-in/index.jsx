import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/FirebaseConfig";

export default function index() {
  const navigation = useNavigation(); // Get the navigation object from the hook
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {
    /*Hide the header and set the title*/
  }
  useEffect(() => {
    navigation.setOptions({ title: "Sign In", headerShown: false });
  }, []);

  // SignIn Function
  const onSignIn = () => {
    if (email === "" || password === "") {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.LONG);
      return;
    }
  
    console.log(`Attempting sign-in with ${email}`);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        // Navigate to another screen or update UI
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode === 'auth/user-not-found') {   
        console.error('Sign-in error code:', errorCode);
        console.error('Sign-in error message:', errorMessage);
        ToastAndroid.show(`Sign-in error: ${errorMessage}`, ToastAndroid.LONG);
        }
        if(errorCode === 'auth/invalid-credential') {
        ToastAndroid.show("Invalid Credentials",ToastAndroid.LONG)
        }
      });
  };
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.white,
        height: "100%",
        paddingTop: 40,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "roboto-bold", fontSize: 30, marginTop: 20 }}>
        Let's SignIn
      </Text>
      <Text
        style={{
          fontFamily: "robotoSlab-medium",
          fontSize: 30,
          color: Colors.gray,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "robotoSlab",
          fontSize: 30,
          color: Colors.gray,
          marginTop: 20,
        }}
      >
        You've been missed
      </Text>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "robotoSlab-medium",
            fontSize: 20,
            color: Colors.black,
          }}
        >
          Email
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Colors.gray,
            fontSize: 20,
            marginTop: 10,
          }}
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)} // Set the value of the email
        />
        <Text
          style={{
            fontFamily: "robotoSlab-medium",
            fontSize: 20,
            color: Colors.black,
            marginTop: 30,
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Colors.gray,
            fontSize: 20,
            marginTop: 10,
          }}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)} // Set the value of the password
        />

        {/*SignIn Button*/}
        <TouchableOpacity onPress={onSignIn}
          style={{
            padding: 15,
            backgroundColor: Colors.black,
            borderRadius: 20,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "robotoSlab-medium",
              fontSize: 20,
              color: Colors.white,
              textAlign: "center",
            }}
          >
            <AntDesign name="login" size={24} color="white" /> Sign In
          </Text>
        </TouchableOpacity>

        {/*SignUp Button*/}
        <TouchableOpacity
          onPress={() => router.replace("auth/sign-up")}
          style={{
            padding: 15,
            backgroundColor: Colors.lightGray,
            borderRadius: 20,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "robotoSlab-medium",
              fontSize: 20,
              color: Colors.black,
              textAlign: "center",
            }}
          >
            <Ionicons name="create" size={24} color="black" /> Create Account
          </Text>
        </TouchableOpacity>
        {/*Forgot Password*/}
      </View>
    </View>
  );
}
