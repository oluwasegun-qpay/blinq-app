export type TSlide = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
};

export const slides: TSlide[] = [
  {
    id: 0,
    image: require("./images/splash1.svg"),
    title: "The bridge between your Fiat and your Crypto",
    subTitle:
      "Millisecond payments across different payment options, 0 fees and best rates",
  },
  {
    id: 1,
    image: require("./images/splash2.svg"),
    title:
      "Purchase over 400 Crypto Assets with your local currency in Milliseconds ",
    subTitle:
      "purchase any cryptocurrency of your choice in 3 simple steps, its cheap, easy and instant",
  },
  {
    id: 2,
    image: require("./images/splash3.svg"),
    title: "Gateway to all exchanges and wallets",
    subTitle:
      "Deposit and withdraw to all exchanges and wallets, it takes less than 10seconds.",
  },
];
