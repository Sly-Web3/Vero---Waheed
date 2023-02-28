import {useRef} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomSheet } from 'react-native-btr';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {useState} from 'react';

function BottomScreen({ navigation }) {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
      };

return(

    <SafeAreaView style={{flex:1, margin:2, justifyContent:'center', alignItems:'center'}}>
        <View style={{ flex:1, margin:2, justifyContent:'center', alignItems:'center' }}>
            <Pressable onPress={toggleBottomNavigationView}>
              <Image
            source={require('../../assets/png/logoblack.png')}
            style={{ width: 55, height: 55, marginTop:-50, borderRadius:18 }}
            />
            </Pressable>
                <BottomSheet
                
                    visible={visible}
                     //setting the visibility state of the bottom sheet
                     onBackButtonPress={toggleBottomNavigationView}
                     //Toggling the visibility state
                     onBackdropPress={toggleBottomNavigationView}
                     //Toggling the visibility state
                     >
                     {/*Bottom Sheet inner View*/}
                    
                    <View style={styles.bottomNavigationView}>
                    <TouchableOpacity onPress={toggleBottomNavigationView}>
                        <Image source={require('../../assets/png/close.png')} style={{width:20, height:20, marginLeft:360, marginTop:10, }}></Image>

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

            </BottomSheet>
        </View>
    </SafeAreaView>
    )
}


export default BottomScreen;

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 500,
        paddingHorizontal:20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      modalBox:{
        flexDirection: 'row', 
        padding:10, 
        borderRadius:10, 
        alignItems:'center', 
        marginBottom:5,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    accentModalBox:{
        backgroundColor:'#f8f8f8',
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
    });

