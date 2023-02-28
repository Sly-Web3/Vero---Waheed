import { StatusBar } from 'expo-status-bar';
import {useRef, useState} from 'react';
import { View, Button, Text, Image, TouchableOpacity, AppScreen, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function EmailScreen({ navigation }) {

    const [isChecked, setChecked] = useState(false);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["60%"];

    function handlePresentModal(){
        bottomSheetModalRef.current?.present();
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={{ paddingTop: 30, alignItems: 'center' }}>
                <Text styles={{ fontSize: 20 }}>Rarrr</Text>
                <Text style={styles.h1}>Enter Your Email</Text>
                <Text style={styles.h2}>To start the sign up process</Text>
            </View>

            <View style={{ width: 360, alignSelf: 'center', borderRadius: 10, marginTop: 30, alignItems: 'center', }}>
                <TouchableOpacity style={{ backgroundColor: '#F0F0F0', width: 320, borderRadius: 5, padding: 10, height: 50, marginTop: 80, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TextInput placeholder="Email Address"></TextInput>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 300 }}>
                <Text style={{ fontSize: 15, color: 'grey', marginRight: 10 }}>Secured by</Text>
                <Image style={{ width: 90, height: 30 }} source={require('../../assets/png/magic.png')} />
            </View>


            <BottomSheetModalProvider>
                <TouchableOpacity style={styles.button} onPress={handlePresentModal}>
                    <Text style={styles.buttonText}>Sign Up / Log In</Text>
                </TouchableOpacity>
                <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{ borderRadius: 10, backgroundColor: 'white', }}>
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:100, height:100}} source={require('../../assets/png/logowhite.png')}/>
                        <Text>Check your email</Text>
                        <Text>We have sent an email to EMAIL$ </Text>
                        <Text>Click the link to log in or sign up</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Biometric')}>
                        <Text>Open Email App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Biometric')}>
                        <Text>Entered wrong email?</Text>
                    </TouchableOpacity>



                </BottomSheetModal>
            </BottomSheetModalProvider>
        </SafeAreaView>



    )
}

export default EmailScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1E1E1E',
        flex:1,
    },

    h1:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        
    },

    h2:{
        fontSize:20,
        color:'white',
        
    },

    button:{
        position: 'sticky', 
        alignSelf: 'center', 
        marginTop: 30,  
        width: '90%', 
        padding: 10, 
        alignSelf: 'center', 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',
        
    },

    buttonText:{
        fontSize:20,
        
    }

})