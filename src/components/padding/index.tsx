import React from "react";
import { View } from "react-native";

type Props = { children: React.ReactNode; padding?: number };

const PaddingView = ({ children, padding = 16 }: Props) => (
  <View style={{ padding }}>{children}</View>
);

export default PaddingView;
