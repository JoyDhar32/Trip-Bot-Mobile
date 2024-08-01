import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View, Text, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./../assets/fonts/Roboto-Medium.ttf'),
    'roboto-boldItalic': require('./../assets/fonts/Roboto-BoldItalic.ttf'),
    'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf'),
    'robotoSlab': require('./../assets/fonts/RobotoSlab-Regular.ttf'),
    'robotoSlab-bold': require('./../assets/fonts/RobotoSlab-Bold.ttf'),
    'robotoSlab-medium': require('./../assets/fonts/RobotoSlab-Medium.ttf'),
    'robotoSlab-semiBold': require('./../assets/fonts/RobotoSlab-SemiBold.ttf'),
  });

  // Show a loading spinner until the fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    // <Stack screenOptions={{headerShown:false}}>
    //   <Stack.Screen name="index"  options={{headerShown:false}}/>
    // </Stack>

    <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
