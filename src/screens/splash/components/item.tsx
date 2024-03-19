import { TSlide } from "../data";
import { Image } from "expo-image";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

type Props = { data: TSlide };

const SplashItem = ({ data }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            contentFit="contain"
            source={data.image}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { flex: 1, width: "100%", maxWidth: 290 },
  imageContainer: {
    flex: 4,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: { flex: 3, gap: 12 },

  title: {
    fontSize: 24,
    color: "#fff",
    maxWidth: 280,
    lineHeight: 36,
    fontWeight: "600",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    fontFamily: "inter-bold",
  },

  subTitle: {
    fontSize: 18,
    color: "#5F5858",
    textAlign: "center",
    fontFamily: "inter-medium",
  },

  content: { flex: 1, gap: 16, width: "100%" },

  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashItem;
