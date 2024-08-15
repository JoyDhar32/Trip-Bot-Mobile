import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function HotelList({ hotelData }) {
  return (
    <View className="m-2">
      <Text className="font-[roboto-bold] text-xl">🏨 Recommmanded Hotels</Text>

      <View>
        <FlatList
          className="mt-2"
          data={hotelData}
          renderItem={({ item, index }) => (
            <View className="w-[190] mr-2">
              <Image
                source={require("../../assets/images/placeholder.jpg")}
                className="w-[190px] h-[120px] object-cover rounded-md "
              />

              <View>
                <Text className="font-[robotoSlab-medium] text-lg text-center">
                  {item.hotelName}
                </Text>
              </View>
              <View className="flex flex-row justify-between mx-4">
                <Text className="font-[robotoSlab-medium] text-md ">
                  ⭐ {item.rating}
                </Text>
                <Text className="font-[robotoSlab-medium] text-md ">
                  💰 {item.price}
                </Text>
              </View>
              {/*  */}
              {/* <Text className="font-[robotoSlab-medium] text-lg ">Price: {item.price}</Text>
          <Text className="font-[robotoSlab-medium] text-lg ">Rating: {item.rating}</Text>
          <Text className="font-[robotoSlab-medium] text-lg ">Address: {item.address}</Text> */}
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
