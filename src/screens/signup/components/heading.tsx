import { StyleSheet, Text, View } from "react-native";

const Heading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Sign up in 3 easy steps</Text>
  </View>
);

const styles = StyleSheet.create({
  text: { color: "#fff", fontFamily: "inter-medium" },
  container: { height: 60, justifyContent: "center" },
});

export default Heading;
