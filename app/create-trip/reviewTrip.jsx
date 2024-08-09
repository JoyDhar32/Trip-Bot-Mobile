import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";

export default function reviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Review Trip",
      headerStyle: {
        backgroundColor: Colors.navBg,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "roboto-bold",
      },
    });
  }, [navigation]);
  return (
    <View className="p-5 pt-2 bg-white h-full">
      <Text className="font-[roboto-bold] text-3xl mt-2 text-center border border-dashed border-transparent border-b-[#2A2E75] text-[#2A2E75]">
        Review Trip
      </Text>
      <View>
        <Text className="text-xl font-[robotoSlab] text-black my-2">
          Before generating your trip, please review your trip
        </Text>

        {/*  Display the selected location */}
        <View className="flex flex-row gap-5 mt-4 ">
          <Text className="text-4xl">🎫</Text>
          <View>
            <Text className="font-[roboto-medium] text-lg">Destination</Text>
            <Text className="font-[robotoSlab-bold] text-gray-900 text-xl">
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Display Destination Info */}
        <View className="flex flex-row gap-4 mt-4 ">
          <Text className="text-4xl">📅</Text>
          <View>
            <Text className="font-[roboto-medium] text-lg">Trip Date</Text>
            <Text className="font-[robotoSlab-bold] text-gray-900 text-xl">
              {moment(tripData?.startDate).format("DD MMM")} -{" "}
              {moment(tripData?.endDate).format("DD MMM")} (
              {tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* Display Traveler Info */}
        <View className="flex flex-row gap-4 mt-4 ">
          <Text className="text-4xl">⛵</Text>
          <View>
            <Text className="font-[roboto-medium] text-lg">Trip Type</Text>
            <Text className="font-[robotoSlab-bold] text-gray-900 text-xl">
              {tripData?.traveler?.title}
              {"  "}
              {tripData?.traveler?.icon}
            </Text>
          </View>
        </View>

        {/* Display Traveler Info */}
        <View className="flex flex-row gap-4 mt-4 ">
          <Text className="text-4xl">💰</Text>
          <View>
            <Text className="font-[roboto-medium] text-lg">Budget</Text>
            <Text className="font-[robotoSlab-bold] text-gray-900 text-xl">
                {tripData?.budget}
            </Text>
          </View>
        </View>

{/* Continue */}
<TouchableOpacity
        className="p-4 bg-[#0b0d30] rounded-xl mt-8"
        // onPress={continueForBudget}
      >
        <Text className="text-center text-white text-xl font-[robotoSlab-bold]">
          Create Trip
        </Text>
      </TouchableOpacity>


      </View>
    </View>
  );
}
