import { Image, FlatList, Button, Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Flatlist, ScrollView } from 'react-native';

import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';
import CoinItem from '../../../components/CoinItem';


function TokenState () {









<FlatList data={cryptocurrencies} renderItem={({ item }) => <CoinItem marketCoin={item} />} />

}


export default TokenState;