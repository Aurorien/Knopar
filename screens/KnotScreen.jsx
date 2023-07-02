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
    <View style={styles.knotContainer}>
      <Text style={styles.knotTitle}>{name}</Text>
      {!imageLoaded && <ShimmerPlaceHolder style={styles.image} />}
      <Image
        source={{ uri: knotData.img }}
        style={imageStyle}
        onLoad={handleImageLoad}
      />
      <Text style={styles.knotText}>{knotData.use}</Text>
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
  );
}

KnotScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  footerNav: {
    marginTop: "10%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 350,
  },
  loadingimage: {
    width: "100%",
    height: 1,
  },
  knotContainer: {
    backgroundColor: "rgb(14, 35, 55)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  knotText: {
    color: "rgb(255, 255, 255)",
    height: 200,
    padding: 16,
  },
  knotTitle: {
    color: "rgb(255, 255, 255)",
    fontSize: 20,
    fontWeight: 500,
    paddingBottom: 10,
  },
});

export default KnotScreen;
