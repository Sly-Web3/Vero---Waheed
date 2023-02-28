import React, {useState} from 'react';
import { View, Text, Image, Button, TouchableOpacity, Switch } from 'react-native';

function BiometricScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={{ backgroundColor: '#101115', padding: 30 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom:50,  }}>
                <Image source={require('../../assets/png/Lock.app.png')} style={{ width: 300, height: 300, marginTop: 90 }}></Image>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 50 }}>Protect Your Wallet</Text>
                <Text style={{ fontSize: 15, color: 'white', justifyContent: 'center', textAlign:'center' }}>Vero uses Magic to delegate key management, enabling ardware-secured, non-custodial key management</Text>
                <Image source={require('../../assets/png/magic.png')} style={{ width: 100, height: 30, marginTop: 40 }}></Image>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginTop: 100, marginBottom: 20, width: '90%', padding: 10, borderRadius: 10, justifyContent: 'center', backgroundColor: 'white', flexDirection:'row', alignItems:'center' }}>
                    <Image source={require('../../assets/png/face-id.png')} style={{width:30, height:30, marginRight:10}}/>
                    <Text style={{ color: 'black', fontSize: 20 }}>Use Face ID</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{  marginBottom: 100, width: '90%', padding: 10, borderRadius: 10, justifyContent: 'center', backgroundColor: 'black', flexDirection:'row', alignItems:'center' }}>
                    <Image source={require('../../assets/png/pincode.png')} style={{width:30, height:30, marginRight:10}}/>
                    <Text style={{ color: 'white', fontSize: 25 }}>Setup Passcode</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default BiometricScreen;