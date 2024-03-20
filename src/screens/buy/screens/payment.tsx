import Back from "@/components/back";
import Method from "@/components/method";
import Paginator from "@/components/paginator";
import PoweredBy from "@/components/poweredby";
import { StyleSheet, Text, View } from "react-native";

const SelectMethodScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <Back>Choose payment method</Back>

        <Paginator total={3} current={2} />

        <Text style={styles.heading}>How do you want to pay?</Text>

        <View style={styles.method}>
          <Method
            subtitle="Instant"
            title="Binancepay"
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
