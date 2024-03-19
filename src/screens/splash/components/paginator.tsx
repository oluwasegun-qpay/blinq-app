import { slides } from "../data";
import { StyleSheet, View } from "react-native";

type Props = { index: number };

const Paginator = ({ index }: Props) => {
  return (
    <View style={style.container}>
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

  container: {
    height: 60,
    columnGap: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

export default Paginator;
