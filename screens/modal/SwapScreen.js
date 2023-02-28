import * as  React from 'react';
import { View, SafeAreaView, Button, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NetworkSelectLarge from '../../components/NetworkSelect/NetworkSelectLarge';



function SwapScreen({ navigation }) {
    return(
        <SafeAreaView>
            <View style={{ marginHorizontal:20}}>

            <Text>From Network</Text>
            <NetworkSelectLarge/>
                
                <View style={{ flexDirection:'row', justifyContent: 'space-between', marginBottom:5, alignItems:'center' }}>
                    <Text>You Send</Text>
                    <View style={{ flexDirection: 'row', alignItems:'center' }}>
                        <Text style={{ color: '#18A974', marginRight: 5, borderWidth:1, padding:2, borderRadius:3, borderColor:'#18A974' }}>Max</Text>
                        <Text style={{fontWeight:'bold'}}>0 ETH</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', borderRadius:10, padding:10}}>
                    <Text style={{fontSize:18,}}>0</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', borderRadius:10, padding:5}}>
                        <Image source={require('../../assets/png/logoblack.png')} style={{ width: 30, height: 30, borderRadius: 20, marginRight:5}} />
                        <Text style={{marginRight:5}}>VERO</Text>
                        <Ionicons name="chevron-down-outline"/>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12, color:'grey', marginTop:3}}>$0.000</Text>

                <TouchableOpacity style={{justifyContent:'center', flexDirection:'row', margin:10 }}>
                    <Image source={require('../../assets/png/swap.png')} style={{width:30, height:30}} />
                </TouchableOpacity>

                <NetworkSelectLarge/>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:5, }}>
                    <Text>You Receive</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'white', borderRadius:10, padding:10}}>
                    <Text style={{fontSize:18}}>0</Text>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', borderRadius:10, padding:5}}>
                        <Image source={require('../../assets/png/logoblack.png')} style={{ width: 30, height: 30, borderRadius: 20, marginRight:5}} />
                        <Text style={{marginRight:5}}>VERO</Text>
                        <Ionicons name="chevron-down-outline"/>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12, color:'grey', marginTop:3}}>=$0 (-0.00%)</Text>



                <View style={{ padding: 15, backgroundColor: 'white', borderRadius: 12, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 15 }}>Top up your gas!</Text>
                            <Text style={{ fontSize: 13, color: 'grey', marginTop: 3 }}>You need ETH to use VERO on Ethereum.</Text>
                        </View>
                        <TouchableOpacity style={{ borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 }}>
                            <Text style={{ color: '#18A974', fontSize: 15, borderWidth:1, padding:3, borderRadius:3, borderColor:'#18A974' }}>Buy ETH</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                

                <View style={{ backgroundColor: 'black', width: 385, height: 50, justifyContent: 'center', marginTop: 100, borderRadius: 12, }}>
                    <Button title='Continue' color='white' alignItems='center'></Button>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default  SwapScreen