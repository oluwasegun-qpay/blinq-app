import React from "react";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <View style={styles.slot}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  slot: { flex: 1, padding: 16 },
});

export default Layout;
