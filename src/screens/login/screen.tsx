import React from "react";
import { Link } from "expo-router";
import Footer from "./components/footer";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const SignUpPinScreen = () => {
  return (
    <>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        <Text
          style={{
            fontSize: 36,
            color: "#fff",
            marginBottom: 48,
            fontFamily: "inter-bold",
          }}
        >
          Login
        </Text>
        <Text style={styles.label}>Enter your working phone number</Text>

        <TextInput
          cursorColor="#fff"
          inputMode="numeric"
          style={styles.input}
          autoCapitalize="none"
          keyboardType="number-pad"
          autoComplete="tel-country-code"
          placeholder="Enter your active phone number"
        />

        <Text style={styles.loginText}>
          Don't have an account?{" "}
          <Link href="/signup" style={styles.link}>
            Signup
          </Link>
        </Text>

        <View
          style={{
            flex: 1,
            gap: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link asChild href="/login/pin">
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
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  link: { color: "#613EEA" },
  loginText: { color: "#fff", marginTop: 12, fontFamily: "inter-medium" },

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

export default SignUpPinScreen;
