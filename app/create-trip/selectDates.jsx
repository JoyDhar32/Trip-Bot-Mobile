import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";

export default function SelectDates() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Select Dates",
      headerStyle: {
        backgroundColor: "#F5C70F",
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
      <Text className="font-[roboto-bold] text-3xl mt-2 text-center border border-transparent border-b-[#2A2E75] text-[#2A2E75]">
        Select Dates
      </Text>
      <View className="mt-8">
        <CalendarPicker
          onDateChange={this.onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          selectedRangeStyle={{ backgroundColor: "#2A2E75" }}
          maxRangeDuration={7}
          selectedDayTextStyle={{ color: "white" }}
        />
      </View>
   
        <Link href={"/create-trip/selectDates"} className="text-center p-4 bg-black rounded-xl mt-8">
          <Text className="text-center text-white text-lg font-[robotoSlab-bold]">
            Continue
          </Text>
        </Link>
    </View>
  );
}
