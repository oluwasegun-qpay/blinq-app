import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = { children: React.ReactNode };

const SafeAreaView = ({ children }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: "#030315",
        paddingBottom: insets.bottom,
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaView;
