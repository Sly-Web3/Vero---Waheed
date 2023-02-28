import {React, useContext, useState} from "react";
import { Text, View, Image, Pressable, StyleSheet,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import themeContext from '../../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners'

const CoinItem = ({ marketCoin }) => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false)
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || 'white';

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`;
    }
    return marketCap;
  };

  return (
    <TouchableOpacity style={[styles.coinContainer, {backgroundColor:theme.backgroundColor}]}>
      <Image source={{ uri: image }} style={{ height: 45, width: 45, marginRight: 10, alignSelf: "center" }} />
      <View>
        <Text style={[styles.title, {color:theme.color}]}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems:'center', marginTop:3 }}>
          <Image source={{ uri: image }} style={{ height: 15, width: 15, marginRight: 5, alignSelf: "center" }} />
          <Text>0 </Text>
          <Text style={[styles.text, {color:theme.color}]}>{symbol.toUpperCase()}</Text>

        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={[styles.currentValue, {color:theme.color}]}>${current_price}</Text>
        <View style={{ borderRadius: 5, padding: 3, backgroundColor: percentageColor, opacity:0.1, width:55, height:20, padding:5 }}/>
        <Text style={{color: percentageColor, position:'absolute', marginTop:20}}>{price_change_percentage_24h?.toFixed(2)}%</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 16,
    fontWeight:'bold',
  },
  currentValue:{
    color: "black",
    fontSize: 16,
  },
  text: {
    color: "black",
    marginRight: 5,
    fontSize:15
  },
  coinContainer: {
    flexDirection: "row",
    paddingHorizontal:10,
    paddingVertical:15,
    marginLeft:10,
    marginRight:10,
    borderRadius:10,
    borderBottomColor:'#E5E2E2',
    borderBottomWidth:1,
  },
});

export default CoinItem;