import { useState, useContext} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, Switch} from 'react-native';
import AccentColours from '../../../../components/ButtonComponents/AccentColours';

import themeContext from '../../../../theme/themeContext';
import { EventRegister } from 'react-native-event-listeners';

function AppearanceScreen ({ navigation }) {

   const theme = useContext(themeContext)
   const [darkMode, setDarkMode] = useState(false)

   const printButtonLabel = (item) => {
    console.log(item)
}

const [overlay, setOverlay] = useState(false);
const toggleOverlay = () => {
    setOverlay(!overlay);
  }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View onPress={() => navigation.navigate('Appearance')} style={[styles.settingsbox, { backgroundColor: theme.backgroundColor }]}>
                <Text style={[styles.maintext, { color: theme.color }]}>DarkMode</Text>
                <Switch value={darkMode} onValueChange={(value) => { setDarkMode(value); EventRegister.emit('ChangeTheme', value) }} />
            </View>

            <View onPress={() => navigation.navigate('Appearance')} style={[styles.settingsbox, { backgroundColor: theme.backgroundColor }]}>
                <Text style={[styles.maintext, { color: theme.color }]}>Accent</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <AccentColours buttons={['Blue', 'Purple', 'Pink']} doSomethingAfterClick={printButtonLabel} />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        margin:20
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
    accentText:{
        fontSize:16
    },
    parent: {
        width: 200,
        height: 150,
        backgroundColor: 'grey',
        borderRadius: 5,
      },
})

export default AppearanceScreen;