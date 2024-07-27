import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
        <Image source={require('../assets/images/operaHouse.jpg')}
        style={{width:'100%', height:500, }}/>
        <View style={styles.container}>
        <Text style={styles.heading}>AI Travel Planner</Text>
        <Text style={styles.paragraph}>
        TripBot Mobile provides personalized hotel recommendations and local attractions based on your trip details. With city maps, saved favorites, and sharing options, it enhances travel planning on iOS and Android.
        </Text>
        <View>
            <Text style={styles.button}>Sign In With Google</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:Colors.white,
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:15,
    },
    heading:{
        fontSize:28,
        fontFamily:'roboto-bold',
        textAlign:'center',
    },
    paragraph:{
        fontSize:16,
        fontFamily:'robotoSlab',
        textAlign:'center',
        marginTop:10, 
    },
    button:{
        padding:15,
        textAlign:'center',
        borderRadius:99,
        fontFamily:'robotoSlab-medium',
        backgroundColor:Colors.black,
        color:Colors.white,
        marginTop:30,
        fontSize:18,
    }
})