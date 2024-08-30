const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StyleHardBoiledAdjustEggSize from "./screens/StyleHardBoiledAdjustEggSize";
import StylePoached1 from "./screens/StylePoached1";
import StyleTimer2 from "./screens/StyleTimer2";
import StyleHardBoiled from "./screens/StyleHardBoiled";
import EggTimerHome from "./screens/EggTimerHome";
import Newsletter from "./screens/Newsletter";
import StyleTimer from "./screens/StyleTimer";
import CustomTimer from "./screens/CustomTimer";
import StyleSoftBoiledSteps from "./screens/StyleSoftBoiledSteps";
import StylePoachedSuccess from "./screens/StylePoachedSuccess";
import EggTimerVideoPlayer from "./screens/EggTimerVideoPlayer";
import Recipes from "./screens/Recipes";
import StylePoachedSteps from "./screens/StylePoachedSteps";
import StyleCustomTimer2 from "./screens/StyleCustomTimer2";
import StylePoached from "./screens/StylePoached";
import StyleCustomTimer from "./screens/StyleCustomTimer";
import StyleSoftBoiled from "./screens/StyleSoftBoiled";
import StyleCustomTimer1 from "./screens/StyleCustomTimer1";
import StyleHardBoiledSteps from "./screens/StyleHardBoiledSteps";
import HowTos from "./screens/HowTos";
import StyleTimer1 from "./screens/StyleTimer1";
import Cover1 from "./components/Cover1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StyleHardBoiledAdjustEggSize"
              component={StyleHardBoiledAdjustEggSize}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StylePoached1"
              component={StylePoached1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleTimer2"
              component={StyleTimer2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleHardBoiled"
              component={StyleHardBoiled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EggTimerHome"
              component={EggTimerHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter"
              component={Newsletter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleTimer"
              component={StyleTimer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomTimer"
              component={CustomTimer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleSoftBoiledSteps"
              component={StyleSoftBoiledSteps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StylePoachedSuccess"
              component={StylePoachedSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EggTimerVideoPlayer"
              component={EggTimerVideoPlayer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recipes"
              component={Recipes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StylePoachedSteps"
              component={StylePoachedSteps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleCustomTimer2"
              component={StyleCustomTimer2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StylePoached"
              component={StylePoached}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleCustomTimer"
              component={StyleCustomTimer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleSoftBoiled"
              component={StyleSoftBoiled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleCustomTimer1"
              component={StyleCustomTimer1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleHardBoiledSteps"
              component={StyleHardBoiledSteps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HowTos"
              component={HowTos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StyleTimer1"
              component={StyleTimer1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
