import {useRef, useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, Pressable } from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Checkbox from 'expo-checkbox';

function IntroScreen({ navigation }) {

    const [isChecked, setChecked] = useState(false);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["100%"];

    function handlePresentModal(){
        bottomSheetModalRef.current?.present();
    }

    const printButtonLabel = (item) => {
        console.log(item)
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 200, backgroundColor: '#1E1E1E' }}>
            <View>
                <Image source={require('../../assets/png/logowhite.png')} style={{ borderRadius: 10, width: 100, height: 100, marginBottom: 80 }} />
            </View>
            <View>
                <Text style={styles.text}>Welcome to Vero</Text>
            </View>

            <BottomSheetModalProvider>
                <Pressable onPress={handlePresentModal} style={styles.button} >
                    <Text>Lets Go</Text>
                </Pressable>
                <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} backgroundStyle={{ borderRadius: 10, backgroundColor: 'white', }}>
                    <View style={{ padding: 10, alignItems:'center', paddingTop:30, }}>
                        <View>
                            <Text style={{fontSize:20}}>Early Version User Agreement</Text>
                        </View>
                        <View>
                            <Text style={{paddingTop:80}}>
                            At Vero, we understand the importance of protecting your personal information and privacy. 
                                This privacy policy outlines how we collect, use, disclose, and protect your personal information when you use our crypto app, Vero. By using Vero, you consent to the terms and conditions outlined in this policy.
                                Information We Collect When you use Vero, we collect information about you in the following ways: Information you provide to us: We collect personal information that you provide to us when you register for an account or use our services.
                                This information may include your name, email address, phone number, and payment information. Information we collect automatically: We automatically collect certain information about you and your device when you use Vero.
                                This information may include your device type, IP address, browser type, and operating system. Information we collect from third parties: We may also receive information about you from third-party sources, such as social media platforms, if you choose to link your Vero account to those platforms.

                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingTop:50 }}>
                            <Checkbox style={{marginRight:8}} value={isChecked} onValueChange={setChecked}  />
                            <Text>I agree with the Early Version USer Agreement</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 100, marginBottom: 30, width: '90%', padding: 10, alignSelf: 'center', borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                            <Text style={{ color: 'black', fontSize: 25 }}>Continue</Text>
                        </TouchableOpacity>

                    </View>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </View>

    )
}

export default IntroScreen;

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontSize:15,
    },
    button:{
        padding:20,
        position: 'sticky', 
        alignSelf: 'center', 
        backgroundColor:'white'
    }
})