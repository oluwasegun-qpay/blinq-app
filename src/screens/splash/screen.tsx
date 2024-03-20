import React from "react";
import { Link } from "expo-router";
import Slides from "./components/slides";
import Footer from "./components/footer";
import Paginator from "./components/paginator";
import { StyleSheet, View } from "react-native";

const SplashScreen = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Link href="/signup" style={{ color: "#fff" }}>
        Go
      </Link>
      <Paginator index={index} />
      <Slides setIndex={setIndex} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default SplashScreen;
