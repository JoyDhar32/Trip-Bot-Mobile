import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Select Dates",
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

  // Set the start and end date for the trip 
  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    }
    else{
      setEndDate(moment(date));
    }
  };
// Calculate the duration of the trip and navigate to the next screen
  const OnDateSelectionContinue = () => {
    if(!startDate && !endDate){
    ToastAndroid.show("Please select the dates", ToastAndroid.SHORT);
    return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    setTripData({...tripData, startDate: startDate, endDate:endDate, totalNoOfDays: totalNoOfDays+1});

    router.push("/create-trip/selectBudget");
    
  };
  return (
    <View className="p-5 pt-2 bg-white h-full">
      <Text className="font-[roboto-bold] text-3xl mt-2 text-center border border-transparent border-b-[#2A2E75] text-[#2A2E75]">
        Select Dates
      </Text>
      <View className="mt-8">
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          selectedRangeStyle={{ backgroundColor: "#2A2E75" }}
          maxRangeDuration={7}
          selectedDayTextStyle={{ color: "white" }}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        className="text-center p-4 bg-black rounded-xl mt-8"
      >
        <Text className="text-center text-white text-lg font-[robotoSlab-bold]">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
