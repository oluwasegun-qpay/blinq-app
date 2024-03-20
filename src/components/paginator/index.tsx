import { createArray } from "@/utils";
import { Text, StyleSheet, View } from "react-native";

type Props = { total: number; current: number };

const Paginator = ({ total, current }: Props) => {
  const items = createArray(total);

  return (
    <View style={style.container}>
      <Text style={style.text}>
        Step {current} of {total}
      </Text>

      {items.map((i) => {
        const isActive = current - 1 >= i;

        return (
          <View key={i} style={[style.paginator, isActive && style.isActive]} />
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  paginator: {
    flex: 1,
    height: 4,
    backgroundColor: "#2F2E33",
  },

  isActive: { backgroundColor: "#613EEA" },
  text: { color: "#C0C0C0", fontFamily: "inter-medium", fontSize: 16 },

  container: {
    height: 60,
    columnGap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Paginator;
