import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FlightInfo({ flightData }) {
  return (
    <View className="m-2 p-4 mt-4 border border-gray-200 rounded-xl ">
        <View className="flex flex-row justify-between item-center"> 
      <Text className="font-[roboto-bold] text-xl">✈️ Flights</Text>
      <TouchableOpacity className="bg-[#D10000] px-4 py-2 rounded-xl">
        <Text className="text-center font-[roboto-medium] text-xl text-white">
          ✈️Book Flight
        </Text>
      </TouchableOpacity>
      </View>
      <Text className="font-[robotoSlab-medium] text-lg ">Airline: {flightData.airline}</Text>
      <Text className="font-[robotoSlab-medium] text-lg ">
        Price(ap):{flightData.approximatePrice}
      </Text>
      
    </View>
  );
}
