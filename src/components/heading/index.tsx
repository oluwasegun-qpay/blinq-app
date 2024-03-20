import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = { style?: StyleProp<ViewStyle>; children: React.ReactNode };

const Heading = ({ style, children }: Props) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: { height: 60, alignItems: "center" },
});

export default Heading;
