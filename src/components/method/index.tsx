import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type Props = { icon: string; title: string; subtitle: string };

const Method = ({ icon, title, subtitle }: Props) => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image contentFit="contain" style={styles.icon} source={icon} />

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>

    <Image
      contentFit="contain"
      style={styles.chevron}
      source={require("../icons/chevron-right.png")}
    />
  </View>
);

const styles = StyleSheet.create({
  icon: { width: 36, height: 36 },
  chevron: { width: 16, height: 16 },
  subtitle: { color: "#fff", fontFamily: "inter", fontSize: 14 },
  details: { flexDirection: "row", alignItems: "center", gap: 18 },
  title: { color: "#fff", fontFamily: "inter-medium", fontSize: 18 },
  container: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#454545",
    justifyContent: "space-between",
  },
});

export default Method;
