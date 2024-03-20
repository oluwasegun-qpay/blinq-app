import React from "react";
import { View } from "react-native";

type Props = { flex?: number; children: React.ReactNode; padding?: number };

const Padding = ({ flex, children, padding = 16 }: Props) => (
  <View style={{ padding, flex }}>{children}</View>
);

export default Padding;
