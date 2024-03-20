import { Image } from "expo-image";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Props = { data: TData[] };
type TData = { id: number; name: string; value: string; image: string };

const List = ({ data }: Props) => {
  return (
    <FlatList
      scrollEnabled
      bounces={false}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={styles.content}
      data={data}
      renderItem={({ item }) => <Item key={item.id} data={item} />}
    />
  );
};

type ItemProps = { data: TData };

const Item = ({ data }: ItemProps) => (
  <View style={styles.container}>
    <Image source={data.image} contentFit="scale-down" style={styles.image} />
    <Text style={styles.text}>{data.name}</Text>
  </View>
);

const Separator = () => <View style={styles.separator}></View>;

const styles = StyleSheet.create({
  content: { paddingBottom: 80 },
  image: { width: 40, height: 40, borderRadius: 100 },
  text: { color: "#fff", fontFamily: "inter-medium", fontSize: 18 },
  container: { flexDirection: "row", alignItems: "center", gap: 28 },
  separator: {
    height: 1,
    opacity: 0.18,
    marginVertical: 16,
    backgroundColor: "#fff",
  },
});

export default List;
