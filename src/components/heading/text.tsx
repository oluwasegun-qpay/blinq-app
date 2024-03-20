import React from "react";
import Heading from "./index";
import { StyleSheet, Text } from "react-native";

type Props = { children: React.ReactNode };

const HeadingText = ({ children }: Props) => (
  <Heading>
    <Text style={styles.heading}>{children}</Text>
  </Heading>
);

const styles = StyleSheet.create({
  heading: { fontSize: 24, color: "#fff", fontFamily: "inter-medium" },
});

export default HeadingText;
