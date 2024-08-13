import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../configs/AIModel";
import { useRouter } from "expo-router";
import { auth, db } from "../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import { GenerateContext } from "../../context/GenerateContext";

export default function GenerateTrip() {
  const { generateFinalTrip, setGenerateFinalTrip } =
    useContext(GenerateContext);

  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (generateFinalTrip === true) {
      GenerateAITrip();
    }
  }, []);

  const GenerateAITrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDay}", tripData.totalNoOfDays)
      .replace("{traveler}", tripData.traveler?.title)
      .replace("{budget}", tripData.budget)
      .replace("{totalDays}", tripData.totalNoOfDays);
    // console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    const responseText = await result.response.text();
    console.log("Response Text:", responseText);

    const tripResponse = JSON.parse(responseText);
    // console.log(tripResponse);
    // console.log(tripData);

    const docId = Date.now().toString();
    const saveData = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResponse,
      tripData: JSON.stringify(tripData),
      docId: docId,
    });
    setLoading(false);

    router.push("(tabs)/mytrip");
  };

  return (
    <View className="p-5 pt-[80px] bg-white h-full ">
      <Text className="font-[roboto-bold] text-3xl  text-center text-[#2A2E75]">
        {" "}
        Please Wait...{" "}
      </Text>

      <Text className="font-[roboto-bold] text-xl text-center mt-5">
        We are working to generate your drean trip
      </Text>
      <Image
        source={require("../../assets/images/loadingTrip.gif")}
        className="w-full h-1/2 object-contain mt-10"
      />
      <Text className="font-[robotoSlab-medium] text-xl text-center mt-8">
        {" "}
        This may take a few seconds{" "}
      </Text>
      <Text className="font-[robotoSlab-medium] text-xl text-center mt-1">
        {" "}
        Please don't Go Back
      </Text>
    </View>
  );
}
