import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, router, useNavigation, useRouter } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";

export default function selectTraveler() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search Place",
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

  //  used to update the selected traveler in the tripData context
  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedOption });
  }, [selectedOption]);
const continueForTraveler=()=>{
    if(!selectedOption){
        ToastAndroid.show("Please Select Travel", ToastAndroid.LONG);
        return;
    }
    router.push("/create-trip/selectDates");
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 15,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontFamily: "roboto-bold",
        }}
      >
        Who's Traveling
      </Text>
      <View
        style={{
          marginTop: 12,
        }}
      >
        <Text className="text-lg font-[robotoSlab] text-gray-500 mb-4">
          Select travelers for your trip
        </Text>
        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{
                marginVertical: 8,
              }}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity className="p-4 bg-black rounded-xl mt-4"
      onPress={continueForTraveler}
      >
   
        <Text className="text-center text-white text-xl font-[robotoSlab-bold]">
          Continue
        </Text>
   

      </TouchableOpacity>
    </View>
  );
}
