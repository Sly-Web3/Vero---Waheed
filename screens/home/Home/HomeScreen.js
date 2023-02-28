import React, { useState, useRef, useEffect, useContext } from 'react';
import { Image, FlatList, Alert, Modal, Button, Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Switch, Flatlist, ScrollView, useColorScheme, Appearance, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';

import BottomScreen from '../../../components/BottomScreen/BottomScreen';
import NetworkSelect from '../../../components/NetworkSelect/NetworkSelect';
import themeContext from '../../../theme/themeContext';
import theme from '../../../theme/Theme';

import ButtonGroup from '../../../components/ButtonComponents/ButtonGroupTGA';
import { TimeFrameButtons } from '../../../components/ButtonComponents/TimeFrameButtons';

Feather.loadFont(); //sometimes it glitches with the menu so this fixes it.

function HomeScreen({navigation}) {
   const theme = useContext(themeContext)
   const [darkMode, setDarkMode] = useState(false)

   const [Tokens, setTokens]= useState(false);
   const [NFT, setNFT]= useState(false);
   const [Activity, setActivity]= useState(false);

   const printButtonLabel = (item) => {
   console.log(item)
   }

   const [fontsLoaded] = useFonts({
    'SFm': require('../../../assets/fonts/SFproMedium.otf')
   });

    return (     
        
        <SafeAreaView>
            <StatusBar style='dark' />
            <ScrollView>
                <View >
                    <SafeAreaView>
                        <View style={styles.topBox} >
                            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ borderRadius: 30, marginLeft: 10, }}>
                                <Image source={require('../../../assets/png/hamburger.png')} style={{ height: 25, width: 25}} />
                            </TouchableOpacity>
                            <NetworkSelect/>
                            <TouchableOpacity style={{ marginRight: 10 }} >
                                <Image source={require('../../../assets/png/qrscan.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                            

                        </View>
                    </SafeAreaView>

                    <View style={[styles.firstContainer, { backgroundColor: theme.backgroundColor }]}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <View style={{flexDirection:'row'}}>
                                <View style={styles.avatar}></View>
                                <View style={{ justifyContent: 'space-between' }}>
                                    <Text style={[styles.balanceText, { color: theme.color }]}>$1,100.00</Text>
                                    <Text style={{ fontFamily: 'SFm', fontSize: 15, color: 'red' }}>-12.19% ($1,529.12)</Text>
                                </View>
                                </View>
                                <TouchableOpacity style={{ padding: 5 }}>
                                        <Image source={require('../../../assets/png/3dots.png')} style={{ width: 20, height: 15, marginRight: 6 }} />
                                    </TouchableOpacity>
                            </View>

                        </View>
                        <Image source={require('../../../assets/png/cryptochart.png')} style={{ width: 360, marginTop: 40 }} />
                        <TimeFrameButtons buttons={['1H', '1D', '1W', '1M', '1Y', 'Max']} doSomethingAfterClick={printButtonLabel} />
                    </View>



                    <ButtonGroup/>



                    
                </View>
            </ScrollView>
        </SafeAreaView> 
        
        
    )
}

const styles = StyleSheet.create({
    topBox:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: "center", 
        margin:10,  
        padding: 10,
        height:50,
    },
    firstContainer:{
        zIndex:1, 
        marginTop: 5, 
        height: 320, 
        marginLeft: 15, 
        marginRight: 15, 
        padding: 15, 
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width:3, height:2},
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },
    walletText:{
        fontSize: 20,
        color:'black'
    },
    balanceText:{
        fontSize: 30, 
        fontWeight: 'bold',
        color:'black',
        fontFamily:'SFm'
    },

    timeframeSelected:{
        backgroundColor: '#F0F0F0', 
        justifyContent: 'center', 
        height: 30, 
        width: 45, 
        paddingLeft: 7, 
        paddingRight: 7, 
        borderRadius: 8, 
        alignItems: 'center', 
        borderColor: 'white', 
        borderWidth: 2
    },
    timeframeUnselected:{
        textAlign:'center',
        justifyContent: 'center', 
        height: 30, 
        width: 45, 
        paddingLeft: 7, 
        paddingRight: 7, 
        borderRadius: 5, 
        alignItems: 'center', 
        borderColor: 'white', 
        borderWidth: 2
    },
    timeframeText:{
        fontSize: 14, 
        color: 'black',  
    },
    /////
    tokenBox:{
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        borderRadius:10,
        shadowColor: '#171717',
        shadowOffset: {width:3, height:2},
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },

    avatar:{
        width:50,
        height:50,
        backgroundColor:'#f8f8f8',
        marginRight:10,
        borderRadius:10,
    }
})
export default HomeScreen; 