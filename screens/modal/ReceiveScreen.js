import * as  React from 'react';
import { View, Text, SafeAreaView, Button, Image, TouchableOpacity, Linking, backgroundColor } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NetworkSelect from '../../components/NetworkSelect/NetworkSelect';


function ReceiveScreen({ navigation }) {

       return(
        <SafeAreaView>
        <View style={{margin:15,}}>

        
          <View style={{backgroundColor:'#F0F0F0', padding:10, marginLeft:20, marginRight:20, borderRadius:10}}>
            <NetworkSelect/>
          </View>

        <View style={{ alignItems:'center', backgroundColor:'white', borderRadius:10, height:80, justifyContent:'center', padding:5, shadowColor: '#171717',shadowOffset: {width: 2, height: 2}, shadowOpacity: 0.1, shadowRadius: 2}}>
            <Text style={{fontSize:13, color:'grey', textAlign:'center'}}>Use this address to send crypto from an exchange or a wallet to Vero. This address works on the following chains: Ethereum, Polygon, Binance Smart Chain, Avalanche, Fantom, Optimism, Arbitrum</Text>
        </View>

        <View style={{backgroundColor:'#F0F0F0', width: 385, height: 200, borderRadius: 10, marginTop: 80, alignItems: 'center', justifyContent:'center'}}>
          <TouchableOpacity>
            <Image source={require('../../assets/png/qr-code.png')} style={{width:200, height:200}} />
          </TouchableOpacity>
        </View>
        
        
          <View style={{ alignItems: 'center' }}>
            <View style={{flexDirection:'row', alignItems:'center', height:50}}>
              <Text style={{ fontSize: 20, marginRight:5 }}>0x00000...000</Text>
              <Ionicons name='copy-outline' size='large'/>
              <Ionicons name="git-network-outline" size='large'/>
            </View>
            <Text style={{ color: 'grey', width: 350, textAlign: 'center' }}>0x600ECeBB717CCC1307E9385374Bf9f18CBaC3ED1</Text>
          </View>

          <View style={{ backgroundColor: 'black', width: 385, height: 50, justifyContent: 'center', marginTop: 150, borderRadius: 12, }}>
            <Button title='Review' color='white' alignItems='center'></Button>
          </View>

        </View>


        </SafeAreaView>
    )
}

export default  ReceiveScreen