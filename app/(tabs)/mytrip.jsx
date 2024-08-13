import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/myTrips/StartNewTripCard";
import { useRouter } from "expo-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../configs/FirebaseConfig";
import { set } from "date-fns";
import UserTripList from "../../components/myTrips/UserTripList";

export default function mytrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    //fetch user trips from firebase
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserTrips((prev) => [...prev, doc.data()]); // add user trip to state array of user trips
    });
    setLoading(false);
  };

  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: "white",
        height: "100%",
        paddingTop: 50,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "roboto-bold", fontSize: 35 }}>
          My Trips
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/create-trip/searchPlace")}
        >
          <Ionicons name="add-circle" size={52} color="black" />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {loading ? null : userTrips?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </View>
  );
}
