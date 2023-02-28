import * as  React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';

function SendScreen({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View>

                <View style={styles.chooseCrypto}>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require("../../assets/png/ethlogo.png")} style={{ width: 40, height: 40, borderRadius: 20 }}></Image>
                    <View style={{marginLeft:10}}>
                        <Text style={{ fontSize: 15, fontWeight:'bold' }}>Ethereum</Text>
                        <Text>0 ETH available</Text>
                    </View>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight:'bold' }}>$0.00</Text>
                </View>

                        <TouchableOpacity style={styles.sendBox}>
                            <Text style={styles.sendBoxText}>0</Text>
                            <View>
                            <Text style={styles.sendBoxText}>ETH</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.sendBox}>
                            <Text style={styles.sendBoxText}>0</Text>
                            <Text style={styles.sendBoxText}>USD</Text>
                        </TouchableOpacity>
                    
                <View style={styles.topUpgas}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Top up your gas!</Text>
                        <Text>You need ETH to use ETH on Ethereum</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>$0.00</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', marginTop:300}}>
                    <Text style={{justifyContent:'center', fontSize:15}}>Send on Ethereum</Text>
                </View>
                

                <View style={{ backgroundColor: '#101115', width: 385, height: 50, justifyContent: 'center', marginTop: 30, borderRadius: 12, }}>
                    <Button title='Continue' color='white' alignItems='center'></Button>
                </View>

            </View>
        </SafeAreaView>
    )}

export default  SendScreen

const styles = StyleSheet.create({
    container:{
        margin:15,
    },
    chooseCrypto:{
        backgroundColor: "white", 
        padding:10,
        borderRadius: 10, 
        marginBottom: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width:3, height:2},
        shadowOpacity: 0.05,
        shadowRadius: 6,
        marginTop:10,
    },
    sendBox:{
        backgroundColor:'#F8F8F8',
        borderRadius:10,
        padding:10,
        paddingVertical:15,
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical:10,
    },
    sendBoxText:{
        fontSize:20,
    },
    topUpgas:{
        backgroundColor: "white", 
        padding:10,
        borderRadius: 10, 
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width:3, height:2},
        shadowOpacity: 0.05,
        shadowRadius: 6,
        marginTop:10,
    },


})