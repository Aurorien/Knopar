import { useEffect, useState } from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function KnotScreen({ navigation, route }) {
  const { name, knotData } = route.params;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageStyle, setImageStyle] = useState(styles.loadingimage);

  useEffect(() => {
    if (imageStyle === styles.image) {
      setImageLoaded(true);
    }
  }, [imageStyle]);

  function handleImageLoad() {
    setImageStyle(styles.image);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      {!imageLoaded && <ShimmerPlaceHolder style={styles.image} />}
      <Image
        source={{ uri: knotData.img }}
        style={imageStyle}
        onLoad={handleImageLoad}
      />
      <Text>{knotData.use}</Text>
      <Button title="Tillbaka" onPress={() => navigation.goBack()} />
      <Button
        title="Gå till Start"
        onPress={() => navigation.navigate("Start")}
      />
    </View>
  );
}

KnotScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faac",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 350,
  },
  loadingimage: {
    width: Dimensions.get("window").width,
    height: 1,
  },
});

export default KnotScreen;
