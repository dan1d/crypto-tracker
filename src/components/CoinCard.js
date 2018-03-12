import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from "../utils/CoinIcons";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 10,
    borderBottomColor: "#323234",
    // borderBottomColor: "#ff6d00",
    borderBottomWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 0,
    marginTop: 0
  },
  midRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
    color: "gold"
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    color: "white"
  },
  image: {
    width: 40,
    height: 40
  },
  bold: {
    fontWeight: "bold"
  },
  separator: {
    marginTop: 10
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
    color: "white"
  },
  staticContainer: {
    display: "flex",
    borderTopColor: "#323234",
    borderTopWidth: 2,
    paddingBottom: 10,
    padding: 20,
    paddingRight: 10,
    flexDirection: "row",
    // justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    paddingRight: 0
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    paddingRight: 0
  },
  topRow: {
    display: "flex",
    paddingTop: 0,
    flexDirection: "row",
    marginLeft: "auto",
    paddingRight: 15,
    paddingLeft: 10,
    paddingBottom: 0
  },
  staticContainerLeft: {
    color: "white",
    paddingLeft: 45
  },
  staticContainerRight: {
    color: "white",
    marginLeft: "auto"
  }
});

const {
  container,
  image,
  bold,
  midRow,
  coinSymbol,
  coinName,
  separator,
  coinPrice,
  staticContainer,
  percentChangePlus,
  percentChangeMinus,
  topRow,
  staticContainerLeft,
  staticContainerRight
} = styles;

const CoinCard = function({
  symbol,
  coin_name,
  price_usd,
  percent_change_24h,
  percent_change_7d,
  rank
}) {
  return <View style={container}>
      <View style={topRow}>
        <Text style={{ color: "gray" }}>{rank}</Text>
      </View>
      <View style={midRow}>
        <Image style={image} source={{ uri: images[symbol] }} />
        <Text style={coinSymbol}>{symbol}</Text>
        <Text style={coinName}>{coin_name}</Text>
        <Text style={separator} />
        <Text style={coinPrice}>
          <Text style={bold}>$ </Text>
          <Text
            style={
              percent_change_24h < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            {" "}
            {price_usd}{" "}
          </Text>
        </Text>
      </View>
      <View style={staticContainer}>
        <Text style={staticContainerLeft}>
          24h:
          <Text
            style={
              percent_change_24h < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            {" "}
            {percent_change_24h} %
          </Text>
        </Text>
        <Text style={separator} />
        <Text style={staticContainerRight}>
          7d:
          <Text
            style={
              percent_change_7d < 0 ? percentChangeMinus : percentChangePlus
            }
          >
            {" "}
            {percent_change_7d} %
          </Text>
        </Text>
      </View>
    </View>;
};
export default CoinCard;
