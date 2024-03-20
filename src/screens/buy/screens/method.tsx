import Back from "@/components/back";
import Method from "@/components/method";
import PoweredBy from "@/components/poweredby";
import { StyleSheet, Text, View } from "react-native";

const SelectMethodScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <Back>Choose receiving method</Back>

        <Text style={styles.heading}>
          How do you want to receive the crypto?
        </Text>

        <View style={styles.method}>
          <Method
            subtitle="Instant"
            title="Binancepay"
            icon="https://nigerialogos.com/logos/guaranty_trust_bank/guaranty_trust_bank.png"
          />

          <Method
            subtitle="Coming Soon"
            title="Wallet Address"
            icon="https://nigerialogos.com/logos/guaranty_trust_bank/guaranty_trust_bank.png"
          />
        </View>

        <PoweredBy />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: { gap: 24, flex: 1 },
  method: { gap: 16, flex: 1 },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  heading: { color: "#fff", fontFamily: "inter-medium", fontSize: 18 },
});

export default SelectMethodScreen;
