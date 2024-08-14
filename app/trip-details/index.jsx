import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";

export default function index() {
  const navigation = useNavigation(); // get the navigation object from the expo-router hook
  const { trip } = useLocalSearchParams(); // get the trip data from the url params
  const [parsedTripData, setParsedTripData] = useState(null);
  const [totalTripData, setTotalTripData] = useState(null);
  // const tripData = JSON.parse(trip);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    if (trip) {
      try {
        // Parse the outer JSON
        const parsedData = JSON.parse(trip);
        setTotalTripData(parsedData);
        // Parse the inner JSON string within tripData
        const tripData = JSON.parse(parsedData.tripData);
        setParsedTripData(tripData);
      } catch (error) {
        console.error("Error parsing trip data:", error);
      }
    }
  }, [trip]);

  useEffect(() => {
    // Debug output for parsed trip data
    // console.log("Parsed trip data:", parsedTripData);
    console.log("Location info:", parsedTripData?.startDate);
    // console.log("Location name:", parsedTripData?.locationInfo?.name);
    // console.log("Location name:", parsedTripData?.locationInfo?.photoRef);
    // console.log(totalTripData);
  }, [parsedTripData]);

  if (!parsedTripData) {
    return <Text>Loading...</Text>; // Handle the case where data is being loaded
  }
  return (
    <View>
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            parsedTripData?.locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        className="w-full h-[300px] object-cover"
      />
      <View className=" bg-white h-full -mt-4 rounded-tl-4xl rounded-tr-4xl ">
        <Text className="text-center font-[roboto-bold] text-2xl mt-2">
          {parsedTripData?.locationInfo?.name}{" "}
        </Text>

{/* add startDate, traveler, totalNoOfDays */}
        <View className="p-2 flex flex-row justify-between">
          <Text className="font-[robotoSlab-medium] text-md ">
            📅Starts
            {parsedTripData?.startDate
              ? moment(parsedTripData?.startDate).format("DD MMM yyyy")
              : "No Date"}{" "}
          </Text>
          <Text className="font-[robotoSlab-medium] text-md ">
            🚙{parsedTripData?.traveler?.title} Days
          </Text>
          <Text className="font-[robotoSlab-medium] text-md ">
            ☀️{parsedTripData?.totalNoOfDays} Days
          </Text>
        </View>


      </View>
    </View>
  );
}
