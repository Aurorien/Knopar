import { Button, View } from "react-native";

function FooterNav(navigation) {
  return (
    <View
      style={{
        marginTop: "10%",
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Button title="Tillbaka" onPress={() => navigation.goBack()} />
      <Button
        title="Gå till Start"
        onPress={() => navigation.navigate("Start")}
      />
    </View>
  );
}

export default FooterNav;
