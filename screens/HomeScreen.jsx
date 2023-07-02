import * as Animatable from 'react-native-animatable'
import PropTypes from "prop-types";
import { Button, ImageBackground, View } from "react-native";

function HomeScreen({ navigation }) {
  const bgImage = require('../assets/bgImg.jpg')
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={bgImage} style={{height: '95%', width: '100%', alignItems: "center", justifyContent: "center"}}>
      <Animatable.Text animation="fadeInUp">Knopar</Animatable.Text>
      </ImageBackground>
      <Button
        title="Gå till Alla knopar"
        onPress={() => navigation.navigate("Alla knopar")}
      />
    </View>
  );
}
HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
