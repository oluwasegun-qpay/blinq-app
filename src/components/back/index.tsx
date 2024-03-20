import React from "react";
import Heading from "../heading";
import { Image } from "expo-image";
import { StyleSheet, Text } from "react-native";

type Props = { children: React.ReactNode };

const Back = ({ children }: Props) => (
  <Heading style={styles.container}>
    <Image
      style={styles.icon}
      contentFit="contain"
      source={require("../icons/chevron-left.png")}
    />
    <Text style={styles.text}>{children}</Text>
  </Heading>
);

const styles = StyleSheet.create({
  icon: { width: 16, height: 16 },
  container: { flexDirection: "row", gap: 36 },
  text: { color: "#fff", fontFamily: "inter-medium", fontSize: 18 },
});

export default Back;
