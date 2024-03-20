import {
  Text,
  View,
  TextInput,
  StyleSheet,
  InputModeOptions,
} from "react-native";
import React from "react";

type Props = {
  placeholder?: string;
  label?: React.ReactNode;
  inputMode?: InputModeOptions;
};

const Input = ({ label, placeholder, inputMode = "text" }: Props) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        cursorColor="#fff"
        style={styles.input}
        inputMode={inputMode}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType="number-pad"
        placeholderTextColor="#858585"
        autoComplete="tel-country-code"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    opacity: 0.8,
    color: "#fff",
    marginBottom: 6,
    fontFamily: "inter-medium",
  },

  input: {
    height: 52,
    fontSize: 16,
    color: "#fff",
    borderWidth: 2,
    borderRadius: 4,
    fontFamily: "inter",
    paddingHorizontal: 12,
    borderColor: "#454545",
  },
});

export default Input;
