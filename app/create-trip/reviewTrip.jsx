import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { GenerateContext } from "../../context/GenerateContext";
import moment from "moment";

export default function reviewTrip() {
  const navigation = useNavigation();
  const [formattedDateRange, setFormattedDateRange] = useState("");
  const { tripData, setTripData } = useContext(CreateTripContext);
  const { generateFinalTrip, setGenerateFinalTrip } = useContext(GenerateContext);
  const router = useRouter();
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

  useEffect(() => {
    if (tripData) {
      if (tripData.totalNoOfDays === 1) {
        setFormattedDateRange(moment(tripData.startDate).format("DD MMM"));
      } else if (tripData.totalNoOfDays > 1) {
        setFormattedDateRange(
          `${moment(tripData.startDate).format("DD MMM")} - ${moment(
            tripData.endDate
          ).format("DD MMM")} (${tripData.totalNoOfDays - 1} days)`
        );
      }
    }
  }, [tripData]);

  const handlePress = () => {
    setGenerateFinalTrip(true);
    router.push("/create-trip/generateTrip");
  };


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
          </View>
        </View>
<View>
        <Text className="font-[robotoSlab-bold] text-gray-900 text-xl mr-2">
          {tripData?.locationInfo?.name}
        </Text>
        </View>
        {/* Display Destination Info */}
        <View className="flex flex-row gap-4 mt-4 ">
          <Text className="text-4xl">📅</Text>
          <View>
            <Text className="font-[roboto-medium] text-lg">Trip Date</Text>
            <Text className="font-[robotoSlab-bold] text-gray-900 text-xl">
              {formattedDateRange}
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
            onPress={handlePress}
           /* This will navigate to the next screen and  */
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
