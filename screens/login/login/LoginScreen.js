import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, AppScreen, StyleSheet, styles } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Magic } from '@magic-sdk/react-native-expo';
import Web3 from 'web3';
const m = new Magic('pk_live_92D29648597423D5');

function LoginScreen({ navigation }) {

    return (
        <SafeAreaProvider>
             <m.Relayer />
        <Swiper showsButtons={false}>
            
                <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#101115' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../../assets/thermal/Lock.png')} style={{ width: 350, height: 350, marginTop: 100 }} />
                        <Text style={{ fontSize: 20 }}> The ultimate crypto wallet</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('magicLogin')} style={{ marginTop: 150, width: '90%', padding: 10, alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', shadowColor: 'black' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}> MAGIC </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')} style={{ marginTop: 20, width: '90%', padding: 10, alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Create your Vero Wallet now</Text>
                    </TouchableOpacity>
                </View>
        </Swiper>
        </SafeAreaProvider>
        

);
};

export default LoginScreen; 