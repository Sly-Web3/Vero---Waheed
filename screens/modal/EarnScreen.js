import { StatusBar } from 'expo-status-bar';
import * as  React from 'react';
import {useState} from 'react';
import { View, Text, Appearance, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Colors} from 'react-native/Libraries/NewAppScreen';


function EarnScreen({ navigation }) {
    const [text, onChangeText] = React.useState('Enter site name or URL');
   

    return(
        <View>
        <View style={{flexDirection:'row', backgroundColor:'white', justifyContent:'center', alignItems:'center', width:'90%', borderRadius:12, alignSelf:'center'}}>
                <Ionicons name="search-outline" style={{color:'black'}}></Ionicons>
                <TextInput style={{ height: 40, margin: 12, borderWidth: 1, padding: 10, width:'80%' }} onChangeText={onChangeText} value={text} placeholder='Enter site name or URL' ></TextInput>
                <Ionicons name="scan-outline"></Ionicons>
            </View>
           <Text style={styles.mainText}>Staking</Text>
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.mainBox}>
                    <View style={styles.firstBox}>
                        <Image source={require('../../assets/png/logoblack.png')} style={styles.iconImage}></Image>
                        <View style={styles.firstText}>
                            <Text style={styles.primaryText}>Lido Staked Ether</Text>
                            <Text style={styles.secondaryText}>stETH</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.percentageIcon}>4.78%</Text>
                        <Text style={styles.iconWrapper}>Liquid Staking</Text>
                    </View>
                </TouchableOpacity>
                 
            </View>

            <Text style={styles.mainText}>Liquid Staking</Text>
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.mainBox}>
                    <View style={styles.firstBox}>
                        <Image source={require('../../assets/png/logoblack.png')} style={styles.iconImage}></Image>
                        <View style={styles.firstText}>
                            <Text style={styles.primaryText}>Lido Staked Ether</Text>
                            <Text style={styles.secondaryText}>stETH</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.percentageIcon}>4.78%</Text>
                        <Text style={styles.iconWrapper}>Liquid Staking</Text>
                    </View>
                </TouchableOpacity>
                 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        margin:10,
        alignContent:'center'
    },
    mainBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginBottom:5,
        padding:10,
        borderRadius:10,
        
    },
    mainText:{
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold'
    },

    firstBox:{
        flexDirection:'row'

    },
    firstText:{
        marginLeft:10,
    },
    primaryText:{
        fontWeight:'bold',
        fontSize:15
    },
    secondaryText:{

    },
    percentageIcon:{
        fontSize:20,
        alignContent:'right'
    },

    iconImage:{
        width: 40, 
        height: 40, 
        borderRadius: 30,
    },
    iconWrapper:{
        padding:5,
        backgroundColor:'#F1EEFC',
        borderRadius:20,
    },

})

export default EarnScreen;