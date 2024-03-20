import Back from "@/components/back";
import Input from "@/components/input";
import Paginator from "@/components/paginator";
import PoweredBy from "@/components/poweredby";
import MethodView from "@/components/method/view";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const EnterWalletAddressScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <Back>Enter BNB Wallet address</Back>

        <Paginator total={3} current={1} />

        <View style={styles.method}>
          <MethodView
            label="Network"
            title="Binancepay"
            icon="https://nigerialogos.com/logos/guaranty_trust_bank/guaranty_trust_bank.png"
          />

          <Input
            label="Binance Email/Phone/Id"
            placeholder="Enter Binance Email/phone/Id"
          />
        </View>

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

        <PoweredBy />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: { gap: 24, flex: 1 },
  method: { gap: 32, flex: 1 },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
});

export default EnterWalletAddressScreen;
