import * as Animatable from 'react-native-animatable'
import PropTypes from "prop-types";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animatable.Text animation="fadeInUp">Knopar</Animatable.Text>
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
