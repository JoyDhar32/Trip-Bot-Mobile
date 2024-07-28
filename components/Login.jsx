import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/operaHouse.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>AI Travel Planner</Text>
        <Text style={styles.paragraph}>
          TripBot Mobile provides personalized hotel recommendations and local
          attractions based on your trip details. With city maps, saved
          favorites, and sharing options, it enhances travel planning on iOS and
          Android.
        </Text>
        <TouchableOpacity onPress={()=>router.push('auth/sign-in')}>
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  heading: {
    fontSize: 28,
    fontFamily: "roboto-bold",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "robotoSlab",
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    textAlign: "center",
    borderRadius: 99,
    fontFamily: 'robotoSlab-medium',
    backgroundColor: Colors.black,
    color: Colors.white,
    marginTop: 30,
    fontSize: 18,
  },
});
