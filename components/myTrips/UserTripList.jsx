import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  const [latestTrip, setLatestTrip] = useState("");
console.log(userTrips);
  useEffect(() => {
    if (userTrips.length === 0) return; // Ensure there's at least one trip

    const latest = userTrips.length - 1;

    try {
      // Parse JSON string
      const tripData = JSON.parse(userTrips[latest].tripData);

      //   const name = tripData?.locationInfo?.name || 'Unknown Location';

      setLatestTrip(tripData);
      //   console.log(latestTrip);

    } catch (error) {
      console.error("Error parsing tripData JSON:", error);
    }
  }, [userTrips]); // Dependency array to run effect when userTrips changes

  return (
    <View>
      <View>
        {latestTrip?.locationInfo?.photoRef?
          <Image
          source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+latestTrip?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
          className="w-full h-[300px] object-cover mt-4 rounded-lg"
        />
        :   
        <Image
          source={require("../../assets/images/placeholder.jpg")}
          className="w-full h-[300px] object-cover mt-4 rounded-lg"
        /> }
      </View>
      <View>
        <Text className="text-lg font-[roboto-bold] text-center my-2">
          {latestTrip?.locationInfo?.name}
        </Text>
        <View className="flex flex-row items-center justify-around ">
          <Text className="font-[robotoSlab-medium] text-md">
            {" "}
            {moment(latestTrip?.startDate).format("DD MMM yyyy")}📅
          </Text>
          <Text className="font-[robotoSlab-medium] text-md">
            {latestTrip?.traveler?.title}🚙
          </Text>
          <Text className="font-[robotoSlab-medium] text-md">
            {latestTrip?.totalNoOfDays}☀️
          </Text>
          <Text className="font-[robotoSlab-medium] text-md">
            {latestTrip?.budget}💵
          </Text>
        </View>
      </View>
      <TouchableOpacity
        className="p-4  bg-[#0b0d30] rounded-xl mt-4"
        // onPress={}
      >
        <Text className="text-center text-white text-xl font-[robotoSlab-bold]">
          View Trip
        </Text>
      </TouchableOpacity>

      {userTrips.map((trip, index) => (
        <View>
       <UserTripCard Trip={trip} key={index}/>
        </View>
      ))}
    </View>
  );
}
