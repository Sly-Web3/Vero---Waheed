import React, {useState, useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, FlatList} from 'react-native'
import {themeContext} from '../../theme/themeContext';
import theme from '../../theme/Theme';
import { EventRegister } from 'react-native-event-listeners'
import { ScrollView } from 'react-native-gesture-handler';
import { SimpleGrid } from 'react-native-super-grid';

import cryptocurrencies from '../../assets/data/cryptocurrencies.json';
import CoinItem from '../../components/CoinItem/index';

export const ButtonGroup = ({}) => {

    const [showTokenComponent, setShowTokenComponent] = useState(false);
    const [showGalleryComponent, setShowGalleryComponent] = useState(false);
    const [showActivityComponent, setShowActivityComponent] = useState(false);

    const toggleTokenComponent = () => {
        setShowTokenComponent(!showTokenComponent);
      };

    const toggleGalleryComponent = () => {
        setShowGalleryComponent(!showGalleryComponent);
    };

    const toggleActivityComponent = () => {
        setShowActivityComponent(!showActivityComponent);
    };

    return (
        <ScrollView>
        <View style={styles.activityBox}>
            <TouchableOpacity style={styles.buttonActive} onPress={toggleTokenComponent}>
                <Text>Tokens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonInactive} onPress={toggleGalleryComponent}>
                <Text>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonInactive} onPress={toggleActivityComponent}>
                <Text>Activity</Text>
            </TouchableOpacity>
        </View>
        {showTokenComponent && <TokenComponent />}
        {showGalleryComponent && <GalleryComponent/>}
        {showActivityComponent && <ActivityComponent/>}

        </ScrollView>
        
)}


function TokenComponent() {
    return(
        <View>
            <FlatList data={cryptocurrencies} renderItem={({ item }) => <CoinItem marketCoin={item} />} />
        </View>
)}

function GalleryComponent(){
    return(
        <View style={styles.galleryView}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/propimages/NFT1.jpg')} style={{width:190, height:190, borderRadius:10, marginRight:5}}/>
                <Image source={require('../../assets/propimages/NFT2.jpg')} style={{width:190, height:190, borderRadius:10}}/>
            </View>

            <View style={{flexDirection:'row', marginTop:5}}>
                <Image source={require('../../assets/propimages/NFT3.jpg')} style={{width:190, height:190, borderRadius:10, marginRight:5}}/>
                <Image source={require('../../assets/propimages/NFT4.jpg')} style={{width:190, height:190, borderRadius:10}}/>
            </View>

            <View style={{flexDirection:'row', marginTop:5}}>
                <Image source={require('../../assets/propimages/NFT5.jpg')} style={{width:190, height:190, borderRadius:10, marginRight:5}}/>
            </View>
        </View>
)}

function ActivityComponent(){
    return(
        <View style={styles.galleryView}>
            
        </View>

)}


const styles = StyleSheet.create({
    activityBox:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginLeft: 15, 
        marginRight: 15, 
        marginBottom: 10, 
        borderRadius: 10, 
        backgroundColor: '#F8F8F8', 
        marginTop: 10, 
        padding: 5,
        height:60,
        shadowColor: '#171717',
        shadowOffset: {width:3, height:2},
        shadowOpacity: 0.05,
        shadowRadius: 6,
    },
    buttonActive:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: 'white', 
        paddingTop: 10, 
        paddingBottom: 10, 
        borderRadius: 8, 
        width: '33%', 
        alignItems: 'center',
        height:52
    },
    buttonInactive:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#F8F8F8', 
        paddingTop: 10, 
        paddingBottom: 10, 
        borderRadius: 10, 
        width: '33%', 
        alignItems: 'center',
        height:52,
    },
    textActive:{
        color: 'black', 
        fontSize: 15,
    },
    textInactive:{
        color: '#A1A2A6', 
        fontSize: 15
    },
    activityUnselected:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop: 15, 
        paddingBottom: 15, 
        borderRadius: 12, 
        width: '33%', 
        alignItems: 'center' 
    },
    tokenBox:{
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        borderRadius:10,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    galleryView:{
        marginHorizontal:15,
        

    }
   
})

export default ButtonGroup;