import {useRef} from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BottomSheet } from 'react-native-btr';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {useState} from 'react';

function NetworkSelect({ navigation }) {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
      };

return(

<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', backgroundColor: '#F8F8F8', width: '100%', height: 50, borderRadius: 5, padding: 10 }} onPress={toggleBottomNavigationView}>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Image style={{ width: 20, height: 20, marginRight:5 }} source={require('../../assets/png/ethlogo.png')} />
                <Text style={{ fontSize: 20, color: 'black' }}>Ethereum</Text>
            </View>
            <Image style={{ width: 15, height: 15 }} source={require('../../assets/png/down-arrow.png')} />
        </TouchableOpacity>

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
                    <View style={{ justifyContent: 'space-between', marginVertical: 20, flexDirection:'row' }}>
                        <View/>
                        <Text style={{ fontSize: 25, fontWeight:'bold' }}> Choose Network</Text>
                        <TouchableOpacity onPress={toggleBottomNavigationView}>
                            <Image source={require('../../assets/png/close.png')} style={{ width: 20, height: 20, }}></Image>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Buy')}>
                        <Image source={require('../../assets/png/ethlogo.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize: 15, color: 'black', fontWeight:'bold'  }}>Ethereum</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.modalBox} onPress={() => navigation.navigate('Send')}>
                        <Image source={require('../../assets/png/maticlogo.png')} style={styles.chainImage}></Image>
                        <View style={styles.modalText}>
                            <Text style={{ fontSize: 15, color: 'black', fontWeight:'bold' }}>Polygon</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
    </SafeAreaView>

     )
}

export default NetworkSelect;

const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal:20
      },
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
        width:50,
        height:50,
        justifyContent:'center',
        borderRadius:10,
    },
    chainImage:{
        width: 35, 
        height: 35, 
        alignSelf:'center',
    },
    modalText:{
        alignContent:'center', 
        marginLeft:20,
    },
    });