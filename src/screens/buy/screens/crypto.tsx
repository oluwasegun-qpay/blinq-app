import { banksList } from "./data";
import List from "@/components/list";
import Input from "@/components/input";
import { StyleSheet, View } from "react-native";
import HeadingText from "@/components/heading/text";

const SelectCryptoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <HeadingText>Select Crypto</HeadingText>
        <Input placeholder="Search crypto here" />
        <List data={banksList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: { gap: 24, flex: 1 },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
});

export default SelectCryptoScreen;
