import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

export default function UserTripList({ userTrips }) {
  const [latestTrip, setLatestTrip] = useState("");

  useEffect(() => {
    if (userTrips.length === 0) return; // Ensure there's at least one trip

    const latest = userTrips.length - 1;

    try {
      // Parse JSON string
      const tripData = JSON.parse(userTrips[latest].tripData);

      //   const name = tripData?.locationInfo?.name || 'Unknown Location';

      setLatestTrip(tripData);
      console.log(latestTrip);
    } catch (error) {
      console.error("Error parsing tripData JSON:", error);
    }
  }, [userTrips]); // Dependency array to run effect when userTrips changes

  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/placeholder.jpg")}
          className="w-full h-[300px] object-cover mt-4 rounded-lg"
        />
      </View>
      <View>
        <Text className="text-lg font-[roboto-bold] text-center my-2">{latestTrip?.locationInfo?.name}</Text>
        <View className="flex flex-row items-center justify-around ">
        <Text className="font-[robotoSlab-medium] text-md"> {moment(latestTrip?.startDate).format('DD MMM yyyy')}📅</Text>
        <Text className="font-[robotoSlab-medium] text-md">{latestTrip?.traveler?.title}🚙</Text>
        <Text className="font-[robotoSlab-medium] text-md">{latestTrip?.totalNoOfDays}☀️</Text>
        <Text className="font-[robotoSlab-medium] text-md">{latestTrip?.budget}💵</Text>
        </View>
      </View>
    </View>
  );
}
