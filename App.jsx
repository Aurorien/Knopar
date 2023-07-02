import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import AllKnotsScreen from "./screens/AllKnotsScreen";
import DataContext from "./DataContext";
import HomeScreen from "./screens/HomeScreen";
import KnotScreen from "./screens/KnotScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [knots, setKnots] = useState([]);

  useEffect(() => {
    async function initializeApp() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Aurorien/KnotsJson/main/knots.json"
        );
        // ref: https://stackoverflow.com/questions/54163952/async-await-in-fetch-how-to-handle-errors -->
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        const result = await response.json();
        setKnots(result.knot);

        // -->
        setTimeout(() => {
          setAppInitialized(true);
        }, 3000);
        // <-- comment the above and de-comment the below to make the SplashScreen to show during the time it takes to initialize app -->
        // setAppInitialized(true);
      } catch (error) {
        console.log(error);
      }
    }

    initializeApp();
  }, []);

  return !appInitialized ? (
    <SplashScreen />
  ) : (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(14, 35, 55)" }}>
      <DataContext.Provider value={knots}>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "rgb(14, 35, 55)",
              },
              headerTintColor: "rgb(255, 255, 255)",
            }}
          >
            <Stack.Screen name="Start" component={HomeScreen} />
            <Stack.Screen name="Alla knopar" component={AllKnotsScreen} />
            <Stack.Screen
              name="Knop"
              component={KnotScreen}
              options={{ title: "" }}
              // options={({ route }) => ({ title: route.params.name })}
            />
          </Stack.Navigator>
          <StatusBar barStyle="light-content" />
        </NavigationContainer>
      </DataContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(14, 35, 55)",
    alignItems: "center",
    justifyContent: "center",
  },
});
