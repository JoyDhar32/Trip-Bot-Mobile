import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <MaterialIcons name="location-pin" size={40} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "robotoSlab-medium",
        }}
      >
        😞 No Trips has been planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "robotoSlab",
          color: "gray",
        }}
      >
        Looks like its time to plan a new trip 🚗
      </Text>
      <TouchableOpacity
        
      >
        <Text
          style={{
            paddingLeft: 30 ,
            paddingRight: 30 ,
            paddingTop: 15,
            paddingBottom: 15,
            textAlign: "center",
            borderRadius: 99,
            fontFamily: "robotoSlab-medium",
            backgroundColor:'black',
            color:'white',
            marginTop: 10,
            fontSize: 18,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
