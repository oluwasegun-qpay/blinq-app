import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={{ gap: 48 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
        <Text
          style={{ color: "#fff", fontFamily: "inter-medium", fontSize: 24 }}
        >
          Buy
        </Text>
        <Text
          style={{ color: "#fff", fontFamily: "inter-medium", fontSize: 24 }}
        >
          Sell
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        <TextInput
          cursorColor="#fff"
          inputMode="numeric"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="number-pad"
          autoComplete="tel-country-code"
          placeholder="Enter your active phone number"
        />
        <TextInput
          cursorColor="#fff"
          inputMode="numeric"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="number-pad"
          autoComplete="tel-country-code"
          placeholder="Enter your active phone number"
        />
      </View>

      <Link asChild href="/login/pin">
        <Pressable
          style={{
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 16,
            paddingHorizontal: 48,
            borderColor: "#2A2A2A",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              fontFamily: "inter-medium",
            }}
          >
            Proceed
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 86,
    fontSize: 18,
    color: "#fff",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 12,
    borderColor: "#454545",
    fontFamily: "inter-medium",
  },
});

export default DashboardScreen;
