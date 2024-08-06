import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function OptionCard({option,selectedTraveler}) {
  return (
    <View style={[{
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(211, 211, 211,0.3)',

        borderRadius: 20,
    },selectedTraveler==option?.title && {
        borderWidth: 2,
        borderColor: "gray",
        boxShadow: '0 5px 10px rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(211, 211, 211,0.8)',


    }]}>
        <View>
            <Text style={{
                fontSize: 20,
                fontFamily: 'robotoSlab-bold'
            }}>{option?.title}</Text>
            <Text style={{
                fontSize: 18,
                fontFamily: 'robotoSlab-medium',
                color: 'gray'
            }}>{option?.desc}</Text>
        </View>

            <Text style={{
                fontSize: 45,
            }}>{option?.icon}</Text>
    </View>
  )
}