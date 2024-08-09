import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";

export default function selectBudget() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Select Budget",
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
    selectedOption &&
      setTripData({ ...tripData, budget: selectedOption?.title });
  }, [selectedOption]);

  const continueForBudget = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select the dates", ToastAndroid.SHORT);
      return;
    }
    router.push("/create-trip/reviewTrip");
  };
  return (
    <View className="p-5 pt-2 bg-white h-full">
      <Text className="font-[roboto-bold] text-3xl mt-2 text-center border border-transparent border-b-[#2A2E75] text-[#2A2E75]">
        Choose Budget
      </Text>
      <Text className="text-lg font-[robotoSlab] text-gray-500 my-4">
        Select travelers for your trip
      </Text>
      <FlatList
        data={SelectBudgetOptions}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="my-2"
            onPress={() => setSelectedOption(item)}
          >
            <OptionCard option={item} selectedOption={selectedOption} />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        className="p-4 bg-black rounded-xl mt-4"
        onPress={continueForBudget}
      >
        <Text className="text-center text-white text-xl font-[robotoSlab-bold]">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
