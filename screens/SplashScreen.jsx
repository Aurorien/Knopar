import React from "react";
import { Pulse } from "react-native-animated-spinkit";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";

function SplashScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/vidfamne.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Pulse size={48} color="#FFF" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});

export default SplashScreen;