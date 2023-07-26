import React from "react";
import { Pulse } from "react-native-animated-spinkit";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";

function SplashScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgb(14, 35, 55)",
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/rep.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Pulse size={48} color="rgb(255, 255, 253)" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgb(14, 35, 55)",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "80%",
  },
});

export default SplashScreen;
