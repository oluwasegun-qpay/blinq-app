import React from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const LoginPinScreen = () => {
  return (
    <>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        <Text style={styles.label}>Set a 4 Digit Pin</Text>

        <TextInput
          cursorColor="#fff"
          inputMode="numeric"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="number-pad"
          autoComplete="tel-country-code"
          placeholder="Enter your active phone number"
        />

        <View
          style={{
            flex: 1,
            gap: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link asChild href="/buy">
            <Pressable
              style={{
                borderRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 48,
                backgroundColor: "#613EEA",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontFamily: "inter-medium",
                }}
              >
                Proceed
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  link: { color: "#613EEA" },

  resendText: {
    opacity: 0.65,
    color: "#fff",
    marginTop: 12,
    textAlign: "center",
    fontFamily: "inter-medium",
  },

  terms: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
    paddingLeft: 16,
    paddingRight: 32,
    fontFamily: "inter-medium",
  },

  label: {
    color: "#fff",
    opacity: 0.65,
    marginBottom: 12,
    fontFamily: "inter-medium",
  },

  input: {
    height: 52,
    fontSize: 18,
    color: "#fff",
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 12,
    borderColor: "#454545",
    fontFamily: "inter-medium",
  },
});

export default LoginPinScreen;
