import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type Props = { icon: string; title: string; label: string };

const MethodView = ({ icon, title, label }: Props) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.container}>
      <Image contentFit="contain" style={styles.icon} source={icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  icon: { width: 36, height: 36 },
  label: {
    opacity: 0.8,
    fontSize: 14,
    color: "#fff",
    marginBottom: 4,
    fontFamily: "inter-medium",
  },
  title: { color: "#fff", fontFamily: "inter-medium", fontSize: 18 },
  container: {
    gap: 16,
    padding: 12,
    borderWidth: 2,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#454545",
  },
});

export default MethodView;
