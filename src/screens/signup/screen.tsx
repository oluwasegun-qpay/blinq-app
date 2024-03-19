import React from "react";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Heading from "./components/heading";
import Paginator from "./components/paginator";
import Footer from "./components/footer";

const SignUpScreen = () => {
  return (
    <>
      <Heading />
      <Paginator index={0} />
      <View style={{ paddingVertical: 16 }}>
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
          Already have an account?{" "}
          <Link href="/login" style={styles.link}>
            Login
          </Link>
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          gap: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link asChild href="/signup/otp">
          <Pressable style={styles.button}>
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

        <View style={{ width: "100%", flexDirection: "row" }}>
          <Checkbox style={{ marginTop: 4 }} />

          <Text style={styles.terms}>
            By clicking proceed you have agreed to our{" "}
            <Link href="/terms" style={styles.link}>
              Terms of service
            </Link>{" "}
            and acknowledge our{" "}
            <Link href="/privacy" style={styles.link}>
              Privacy Policy
            </Link>
          </Text>
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
    opacity: 0.8,
    marginBottom: 12,
    fontFamily: "inter-medium",
  },

  button: {
    height: 54,
    elevation: 3,
    width: "100%",
    maxWidth: 280,
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    paddingHorizontal: 32,
    justifyContent: "center",
    backgroundColor: "#613EEA",
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

export default SignUpScreen;
