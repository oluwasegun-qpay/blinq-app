import { slides } from "../data";
import { StyleSheet, Text, View } from "react-native";

type Props = { index: number };

const Paginator = ({ index }: Props) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Step {index + 1} of 3</Text>

      {slides.map((s) => {
        const isActive = index >= s.id;

        return (
          <View
            key={s.id}
            style={[style.paginator, isActive && style.isActive]}
          />
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
  text: { color: "#C0C0C0", fontFamily: "inter-bold", fontSize: 18 },

  container: {
    height: 72,
    columnGap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Paginator;
