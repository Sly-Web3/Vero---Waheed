import { View, Text, FlatList, StyleSheet, SafeAreaView, TextInput, Image, useRef, Button } from 'react-native';
import { SearchBar } from 'react-native-screens';
import React, { useState, useEffect, Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Svg, { Path } from 'react-native-svg';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Carousel, { Pagination } from 'react-native-snap-carousel'

const BrowserScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState('Enter site name or URL');
    const [showDynamicComponent, setShowDynamicComponent] = useState(false);
    
    const toggleDynamicComponent = () => {
        setShowDynamicComponent(!showDynamicComponent);
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../../assets/png/backarrow.png')} style={{width:20, height:20}}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Browser</Text>
                <View/>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#f9f9f9', height: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '80%', borderRadius: 10, marginBottom: 10, marginTop: 20 }}>
                <Ionicons name="search-outline" size="large"></Ionicons>
                <TextInput style={{ height: 30, padding: 5, width: '80%' }} onChangeText={onChangeText} value={text} placeholder='Search all of Ethereum' ></TextInput>
            </View>

            <View style={styles.dAppContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Verofied dApps</Text>
                

            </View>
            
        </SafeAreaView>
    );
  };
  

export default BrowserScreen;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15

    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:20,
    },
    dAppContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    
})