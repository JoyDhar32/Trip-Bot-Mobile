import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function index() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const tripData = JSON.parse(trip);
  const [tripDetails, setTripDetails] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(tripData);
  }, []);
 
  return (
    <View>
         <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                tripDetails?.travelPlan?.locationInfo?.photoRef +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            className="w-full h-[300px] object-cover mt-4 rounded-lg"
          />

        <Text> {tripDetails}</Text>
    </View>
  );
}
