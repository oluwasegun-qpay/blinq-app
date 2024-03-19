import SplashItem from "./item";
import { slides } from "../data";
import { FlatList } from "react-native";

type Props = { setIndex: React.Dispatch<React.SetStateAction<number>> };

const Slides = ({ setIndex }: Props) => {
  return (
    <FlatList
      horizontal
      data={slides}
      pagingEnabled
      bounces={false}
      keyExtractor={({ id }) => String(id)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <SplashItem key={item.title} data={item} />}
      onViewableItemsChanged={(x) => setIndex(x.viewableItems[0].index || 0)}
    />
  );
};

export default Slides;
