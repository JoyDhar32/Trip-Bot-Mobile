import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function index() {
  const navigation = useNavigation(); // Get the navigation object from the hook
  const router = useRouter();
  {
    /*Hide the header and set the title*/
  }
  useEffect(() => {
    navigation.setOptions({ title: "Sign Up", headerShown: false });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: "white",
        height: "100%",
        paddingTop: 50,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "roboto-bold", fontSize: 30, marginTop: 20 }}>
        Join the Community
      </Text>
      <Text
        style={{
          fontFamily: "robotoSlab-medium",
          fontSize: 28,
          color: "gray",
          marginTop: 20,
        }}
      >
        Sign up to get started
      </Text>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "robotoSlab-medium",
            fontSize: 20,
            color: Colors.black,
          }}
        >
          Full Name
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Colors.gray,
            fontSize: 20,
            marginTop: 10,
          }}
          placeholder="Enter Full Name"
        />
        <Text
          style={{
            fontFamily: "robotoSlab-medium",
            fontSize: 20,
            color: Colors.black,
            marginTop: 30,
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
        />

        {/*SignIn Button*/}
        <View
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
           <Ionicons name="create" size={24} color="white" />Create Account
          </Text>
        </View>

        {/*SignUp Button*/}
        <TouchableOpacity
          onPress={() => router.replace("auth/sign-in")}
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
             <AntDesign name="login" size={24} color="black" marginTop={20} /> SignIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
