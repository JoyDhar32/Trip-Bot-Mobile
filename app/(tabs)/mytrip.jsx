import { View, Text } from 'react-native'
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/myTrips/StartNewTripCard';
export default function mytrip() {
  const [userTrip, setUserTrip] = useState([]);
  return (
    <View
    style={{
      padding: 25,
      backgroundColor: "white",
      height: "100%",
      paddingTop: 50,
    }}
    >
     <View style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
     }}>
      <Text style={{fontFamily:'roboto-bold',fontSize:35}}>
        My Trips 
      </Text>
      <Ionicons name="add-circle" size={52} color="black" />
     </View>
     {
      userTrip?.length==0?<StartNewTripCard />:null
     }
    </View>
  )
}