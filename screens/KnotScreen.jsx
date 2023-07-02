import { useEffect, useState } from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import {
  Button,
  useWindowDimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function KnotScreen({ navigation, route }) {
  const { name, knotData } = route.params,
    [imageLoaded, setImageLoaded] = useState(false),
    [imageStyle, setImageStyle] = useState(styles.loadingimage),
    windowWidth = useWindowDimensions().width;

  useEffect(() => {
    setImageStyle({ ...imageStyle, width: windowWidth });
  }, [windowWidth]);

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
      <Text style={{fontSize: 20, fontWeight: 500}} >{name}</Text>
      {!imageLoaded && <ShimmerPlaceHolder style={styles.image} />}
      <Image
        source={{ uri: knotData.img }}
        style={imageStyle}
        onLoad={handleImageLoad}
      />
      <Text>{knotData.use}</Text>
      <View
        style={{
          marginTop: "50%",
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
    width: "100%",
    height: 350,
  },
  loadingimage: {
    width: "100%",
    height: 1,
  },
});

export default KnotScreen;
