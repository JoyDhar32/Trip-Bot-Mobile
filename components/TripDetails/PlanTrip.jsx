import { View, Text, Image } from "react-native";
import React from "react";

export default function PlanTrip({ dayWisePlan, placesToVisit }) {
  if (Array.isArray(placesToVisit)) {
    placesToVisit.forEach((item) => {
      console.log(item.placeName); // Logs the 'placeName' property of each object
    });
  } else {
    console.log("placeToVisit is not an array or is undefined");
  }
  return (
    <View className="m-2">
      {/* <Text className="font-[roboto-bold] text-xl mb-4">🔍 Place To Visit</Text> */}

      {/* {placesToVisit.map((place, index) => (
        <View
          key={index}
          className="mb-4 px-1 py-4 rounded-xl border border-gray-300"
        >
          <Image source={{ uri: place.placeImageURL }}
          
          className="w-full h-[220px] object-cover rounded-md "
          />
          <Text className="font-[robotoSlab-medium] text-xl text-center my-2">
            {place.placeName}
          </Text>
          <Text className="font-[robotoSlab-medium] text-md text-gray-700 text-center">
            {place.placeDetails}{" "}
          </Text>

          <View className="flex flex-row justify-between mx-4 mt-2">
            <Text className="font-[robotoSlab-medium] text-md text-gray-700">
              🕒 {place.timeToTravel}
            </Text>
            <Text className="font-[robotoSlab-medium] text-md text-gray-700">
              🎫 {place.ticketPricing}
            </Text>
          </View>
        </View>
      ))} */}

      <Text className="font-[roboto-bold] text-3xl">🥳 Plan For Days</Text>

      {dayWisePlan.map((dayItem, dayIndex) => (
        <View key={dayIndex} className="mb-4">
          <Text className="font-[roboto-bold] text-center text-2xl my-4">{dayItem.day}</Text>

          {dayItem.plan.map((planItem, planIndex) => (
            <View key={planIndex} className="mb-4 px-2 py-4 rounded-xl border border-gray-300">
              <Text className="font-[robotoSlab-medium] text-xl  my-2">Place: {planItem.activity}</Text>
              <Text className="font-[robotoSlab] text-lg  ">Details: {planItem.details}</Text>
              <Text className="font-[robotoSlab] text-lg  ">Time: {planItem.time}</Text>
          
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
