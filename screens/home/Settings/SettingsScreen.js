import { useState, useContext} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Switch, Appearance, colorScheme, Stack, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'

import themeContext from '../../../theme/themeContext';
import theme from '../../../theme/Theme';
import { EventRegister } from 'react-native-event-listeners';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SettingsScreen({ navigation }) {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false)

    
    return(
        
        <SafeAreaView>
        <ScrollView>
            <View style={{ margin: 15, }}> 
                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../../assets/png/blockie.png')} style={{width:60, height:60, borderRadius:20}}></Image>
                        <View style={{marginLeft:10}}>
                            <Text style={[styles.maintext, {color:theme.color}]}>Wallet 1</Text>
                            <Text style={{color:'grey'}}>0x162.....</Text>
                        </View>
                    </View>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('Intro')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Sign Out</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>


                <TouchableOpacity  onPress={() => navigation.navigate('AddressBook')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]} >
                    <Text style={[styles.maintext, {color:theme.color}]}>Address Book</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Referral</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('WalletBenefits')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Wallet Benefits</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Currency')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Currency</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('AppearanceScreen')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Appearance</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Sign in with Face ID</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Connected Sites</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Notifications</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Reset App</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Share Vero</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity  style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Follow us on Twitter</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Join our Discord</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Rate us</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}>Feedback & FAQ</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}> Support</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.settingsbox, {backgroundColor:theme.backgroundColor}]}>
                    <Text style={[styles.maintext, {color:theme.color}]}> Logout</Text>
                    <Ionicons name='chevron-forward-outline'/>
                </TouchableOpacity>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainBox:{
        marginBottom: 15, 
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10
    },
    settingsbox:{
        marginBottom: 15, 
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    maintext:{
        fontSize:18
    },
})

