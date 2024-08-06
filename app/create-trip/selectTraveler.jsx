import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function selectTraveler() {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
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
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "robotoSlab", color: "gray", marginBottom:15 }}>
          Select travelers for your trip
        </Text>
        <FlatList data={SelectTravelerList} renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item.title)}
            style={{
                marginVertical: 10,


            }}>
                <OptionCard option={item} selectedTraveler={selectedTraveler} />
                </TouchableOpacity>
        )} />
      </View>
    </View>
  );
}
