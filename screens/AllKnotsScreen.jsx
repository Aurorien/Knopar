import DataContext from "../DataContext";
import { useContext } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
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
        <View style={styles.listContainer}>
          <FlatList
            data={knots}
            renderItem={({ item }) => (
              <Pressable onPress={() => handleKnotPress(item)}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemText}>{item.name}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginTop: 50 }}
          />
          <View style={styles.footerNav}>
            <Button
              color="rgb(189, 240, 255)"
              title="Tillbaka"
              onPress={() => navigation.goBack()}
            />
            <Button
              color="rgb(189, 240, 255)"
              title="Gå till Start"
              onPress={() => navigation.navigate("Start")}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  );
}

AllKnotsScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  footerNav: {
    marginTop: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(14, 35, 55)",
    justifyContent: "center",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "rgb(41, 129, 184)",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    paddingTop: 20,
  },
  listItemText: {
    color: "rgb(255, 255, 255)",
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 10,
  },
});

export default AllKnotsScreen;
