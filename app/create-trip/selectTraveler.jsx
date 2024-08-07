import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function selectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search Place",
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

  //  used to update the selected traveler in the tripData context
  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler });
  }, [selectedTraveler]);

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
        <Text className="text-lg font-robotoSlab text-gray-500 mb-4">
          Select travelers for your trip
        </Text>
        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 8,
              }}
            >
              <OptionCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity className="p-4 bg-black rounded-xl mt-4">
      <Link href={"/create-trip/selectDates"} className="text-center">

        <Text className="text-center text-white text-xl font-[robotoSlab-bold]">
          Continue
        </Text>
      </Link>

      </TouchableOpacity>
    </View>
  );
}
