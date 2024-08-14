import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

export default function UserTripCard({ Trip, key }) {
  const tripData = JSON.parse(Trip?.tripData);
  const refLocationName=tripData?.locationInfo?.name;
  const location=refLocationName.length>30?refLocationName.substring(0,30)+"...":refLocationName;
  return (
    <View className="flex flex-row gap-2 my-2">
     {
         tripData?.locationInfo?.photoRef?
         <Image
             source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+tripData?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
             className="w-[100px] h-[100px] object-cover rounded-lg"
          />
          :   
          <Image
             source={require("../../assets/images/placeholder.jpg")}
             className="w-[100px] h-[100px] object-cover rounded-lg"
          />
     }
     
      <View className="">
        <Text className="text-md text-black font-[robotoSlab-medium] mb-1">{location}</Text>
        <Text className="text-md text-gray-700 font-[robotoSlab-medium] mb-1 ">📅{moment(tripData?.startDate).format("DD MMM yyyy")}</Text>
        <Text className="text-md text-gray-700 font-[robotoSlab-medium] mb-1">🚙{tripData?.traveler?.title}</Text>
        <Text className="text-md text-gray-700 font-[robotoSlab-medium] mb-1">⌚{tripData?.totalNoOfDays}</Text>
      </View>
    </View>
  );
}
