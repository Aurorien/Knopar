import * as Animatable from "react-native-animatable";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function HomeScreen({ navigation }) {
  const bgImage = require("../assets/bgImg.jpg"),
    [name, setName] = useState("");

  return (
    <View style={styles.viewContainer}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <Animatable.Text animation="fadeInUp" style={styles.animationText}>
          Knopar
        </Animatable.Text>
        <View style={styles.welcomeContainer}>
          <Text style={{ color: "rgb(255, 255, 255)", textAlign: "center" }}>
            Vad heter du?
          </Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              alert(`Välkommen ${name}`);
              setName("");
            }}
            style={styles.input}
            value={name}
          />
        </View>
      </ImageBackground>
      <Button
        color="rgb(189, 240, 255)"
        title="Gå till Alla knopar"
        onPress={() => navigation.navigate("Alla knopar")}
      />
    </View>
  );
}
HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  animationText: {
    color: "rgb(255, 255, 255)",
    fontSize: 50,
    fontWeight: 700,
    marginTop: "60%",
  },
  backgroundImage: {
    alignItems: "center",
    height: "95%",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 7,
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
    width: 150,
  },
  welcomeContainer: {
    backgroundColor: "rgba(50, 49, 49, 0.7)",
    borderRadius: 3,
    marginTop: "40%",
  },
  viewContainer: {
    alignItems: "center",
    backgroundColor: "rgb(14, 35, 55)",
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
