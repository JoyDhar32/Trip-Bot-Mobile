import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
'roboto':require('./../assets/fonts/Roboto-Regular.ttf'),
'roboto-medium':require('./../assets/fonts/Roboto-Medium.ttf'),
'roboto-boldItalic':require('./../assets/fonts/Roboto-BoldItalic.ttf'),
'roboto-bold':require('./../assets/fonts/Roboto-Bold.ttf'),
'robotoSlab':require('./../assets/fonts/RobotoSlab-Regular.ttf'),
'robotoSlab-bold':require('./../assets/fonts/RobotoSlab-Bold.ttf'),
'robotoSlab-medium':require('./../assets/fonts/RobotoSlab-Medium.ttf'),
'robotoSlab-semiBold':require('./../assets/fonts/RobotoSlab-SemiBold.ttf'),
  });
  return (
    // <Stack screenOptions={{headerShown:false}}>
    //   <Stack.Screen name="index"  options={{headerShown:false}}/>
    // </Stack>

<Stack screenOptions={{headerShown:false}}>
<Stack.Screen name="index"  options={{headerShown:false}}/>
</Stack>
  );
}
