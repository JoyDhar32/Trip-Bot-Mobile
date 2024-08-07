import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { SelectDatesHeader } from "../../components/header";

export default function SelectDates() {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Select Dates",
        headerStyle: {
          backgroundColor: "#f4511e",
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
        <Text className="font-[roboto-bold] text-3xl mt-2 ">Select Dates</Text>
    </View>
  );
}
