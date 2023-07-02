import DataContext from "../DataContext";
import { useContext } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

function AllKnotsScreen({ navigation }) {
  const knots = useContext(DataContext);

  const handleKnotPress = (knot) => {
    navigation.navigate("Knop", { name: knot.name, knotData: knot });
  };
  return (
    knots && (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Alla knopar</Text>
          <FlatList
            data={knots}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleKnotPress(item)}>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <Button title="Tillbaka" onPress={() => navigation.goBack()} />
          <Button
            title="Gå till Start"
            onPress={() => navigation.navigate("Start")}
          />
        </View>
      </SafeAreaView>
    )
  );
}

AllKnotsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default AllKnotsScreen;
