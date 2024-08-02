import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/myTrips/StartNewTripCard";
import { useRouter } from "expo-router";
export default function mytrip() {
  const [userTrip, setUserTrip] = useState([]);
  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: "white",
        height: "100%",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "roboto-bold", fontSize: 35 }}>
          My Trips
        </Text>
        
          <TouchableOpacity
            onPress={() => router.push("/create-trip/searchPlace")}
          >
           
            <Ionicons name="add-circle" size={52} color="black" />
          </TouchableOpacity>
        
      </View>
      {userTrip?.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
