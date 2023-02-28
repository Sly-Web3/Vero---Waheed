import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { useState, useEffect } from 'react';

import theme from './theme/Theme';
import themeContext from './theme/themeContext';

import IntroScreen from './screens/login/IntroScreen';
import LoginScreen from './screens/login/login/LoginScreen';
import BiometricScreen from './screens/login/BiometricScreen';
import EmailScreen from './screens/login/EmailScreen';

import magicLogin from './screens/login/login/MagicLogin';

import SettingsScreen from './screens/home/Settings/SettingsScreen';
import WalletBenefits from './screens/home/Settings/Other/WalletBenefits';
import AppearanceScreen from './screens/home/Settings/Other/AppearanceScreen';

import BuyScreen from './screens/modal/BuyScreen';
import EarnScreen from './screens/modal/EarnScreen';
import ReceiveScreen from './screens/modal/ReceiveScreen';
import SendScreen from './screens/modal/SendScreen';
import SwapScreen from './screens/modal/SwapScreen';
import BridgeScreen from './screens/modal/BridgeScreen';


import BottomScreen from './components/BottomScreen/BottomScreen';
import MainTabBar from './components/MainTabBar';




const Stack = createNativeStackNavigator();

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
    setDarkMode(data)
    console.log(data)
  })
  return ()=> {
    EventRegister.removeAllListeners(listener)
  }
}, [darkMode])


  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName='Intro' >
          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Biometric" component={BiometricScreen} options={{ headerShown: false }}/> 
          <Stack.Screen name="EmailScreen" component={EmailScreen} options={{ headerShown: false }} />

          <Stack.Screen name="magicLogin" component={magicLogin} options={{ headerShown: false }} />
     
          <Stack.Screen name="Home" component={MainTabBar} options={{ headerShown: false }} />

          <Stack.Screen name="Buy" component={BuyScreen} />
          <Stack.Screen name="Earn" component={EarnScreen} />
          <Stack.Screen name="Receive" component={ReceiveScreen} />
          <Stack.Screen name="Send" component={SendScreen} />
          <Stack.Screen name="Swap" component={SwapScreen} />
          <Stack.Screen name="Bridge" component={BridgeScreen} />

          <Stack.Screen name="BottomScreen" component={BottomScreen} />

          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="WalletBenefits" component={WalletBenefits} />
          <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>

    
  );
}
