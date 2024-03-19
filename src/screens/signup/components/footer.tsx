import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Footer = () => (
  <View style={styles.container}>
    <Image
      contentFit="contain"
      style={styles.image}
      source={require("../images/powered-by.svg")}
    />
  </View>
);

const styles = StyleSheet.create({
  image: { flex: 1 },
  container: { height: 60 },
});

export default Footer;
