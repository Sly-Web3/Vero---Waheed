import {useRef} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TimeFrameButtons } from '../../components/ButtonComponents/TimeFrameButtons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import BottomScreen from '../../components/BottomScreen/BottomScreen';

import {useState} from 'react';

export default function CardScreen({ navigation }) {
    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["75%"];

    function handlePresentModal(){
        bottomSheetModalRef.current?.present();
    }

    const printButtonLabel = (item) => {
        console.log(item)
    }

    return(
        <SafeAreaView>
            <View style={{ margin: 15, alignSelf: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 22, marginBottom: 30, marginTop:50 }}>Join the Vero Card waitlist</Text>
                    <Image source={require('../../assets/png/card.png')} style={{ width: 200, height: 150, borderRadius:10, shadowColor: '#171717',shadowOffset: {width: 2, height: 2}, shadowOpacity: 0.1, shadowRadius: 2}} />
                </View>
                <View style={{ width:360, alignSelf: 'center', borderRadius: 12, marginTop: 30, alignItems:'center', backgroundColor:'white', height:150, marginTop:-40, zIndex:-1, shadowColor: '#171717',shadowOffset: {width: 2, height: 2}, shadowOpacity: 0.1, shadowRadius: 2 }}>
                    <TouchableOpacity style={{ backgroundColor: '#F0F0F0', width:320, borderRadius:5, padding:10, height:50, marginTop:80, flexDirection:'row', justifyContent:'space-between',  }}>
                        <TextInput placeholder="Email Address"></TextInput>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{borderRadius:10, backgroundColor:'#101115', justifyContent:'center', height:50, alignItems:'center', marginTop:270, }}>
                    <Text style={{fontSize:20, color:'white'}}> Sign Up</Text>
                </TouchableOpacity>

                <BottomSheetModalProvider>
                    <Button title='.' onPress={handlePresentModal} style={{position:'sticky', alignSelf:'center', zIndex:3 }} />
                    <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{borderRadius:10, backgroundColor:'white',}}>

            
                        <View style={{padding:10,}}>

                        <TouchableOpacity>
                        <Image source={require('../../assets/png/close.png')} style={{width:20, height:20, marginLeft:310, marginTop:-10 }}></Image>

                        </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Buy')}>
                            <View style={styles.accentModalBox}>
                               <Image source={require('../../assets/png/plus.png')} style={styles.modalImage}></Image>
                            </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Buy</Text>
                                    <Text style={{ color: 'grey' }}>Buy crypto with bank account / card</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Send')}>
                            <View style={styles.accentModalBox}>
                               <Image source={require('../../assets/png/send.png')} style={styles.modalImage}></Image>
                            </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Send</Text>
                                    <Text style={{ color: 'grey' }}>Send crypto to other wallets</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Receive')}>
                                <View style={styles.accentModalBox}>
                               <Image source={require('../../assets/png/qr-icon.png')} style={styles.modalImage}></Image>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Receive</Text>
                                    <Text style={{ color: 'grey' }}>Receive crypto into your wallet</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Swap')}>
                                <View style={styles.accentModalBox}>
                               <Image source={require('../../assets/png/swap.png')} style={styles.modalImage}></Image>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Swap</Text>
                                    <Text style={{ color: 'grey' }}>Swap any crypto over any blockchain</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Bridge')}>
                                <View style={styles.accentModalBox}>
                                <Image source={require('../../assets/png/send.png')} style={styles.modalImage}></Image>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Bridge</Text>
                                    <Text style={{ color: 'grey' }}>Bridge your assets across chains</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Earn')}>
                            <View style={styles.accentModalBox}>
                                <Image source={require('../../assets/png/percentage.png')} style={styles.modalImage}></Image>
                               </View>
                                <View style={styles.modalText}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>Earn</Text>
                                    <Text style={{ color: 'grey' }}>Earn passive income on your assets</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>

                    </BottomSheetModal>
                </BottomSheetModalProvider>

                
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    modalBox:{
        flexDirection: 'row', 
        padding:10, 
        borderRadius:10, 
        alignItems:'center', 
        marginBottom:5,
        borderBottomColor:'grey',
        borderBottomWidth:1,
    },
    accentModalBox:{
        backgroundColor:'#D3F2FD',
        width:50,
        height:50,
        justifyContent:'center',
        borderRadius:10,
    },
    modalImage:{
        width: 25, 
        height: 25, 
        alignSelf:'center',
    },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
    },

})