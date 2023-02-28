import * as  React from 'react';
import { View, TextInput, Feather, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Emoji from 'react-native-emoji';
import Ionicons from 'react-native-vector-icons/Ionicons'

function DiscoverScreen({ navigation }) {
    const [text, onChangeText] = React.useState('Enter site name or URL');
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>

            <View style={{flexDirection:'row', backgroundColor:'#f9f9f9', height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', width:'80%', borderRadius:10, marginBottom:10}}>
                <Ionicons name="search-outline" size="large"></Ionicons>
                <TextInput style={{ height: 30, padding: 5, width:'80%' }} onChangeText={onChangeText} value={text} placeholder='Search all of Ethereum' ></TextInput>
            </View>

                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Lists</Text>
                <ScrollView horizontal={true} scrollEventThrottle={16} style={{height:60, marginVertical:10}}>
                        <TouchableOpacity style={styles.listsBox}>
                            <Emoji name='heart' style={styles.emoji} />
                            <Text>Favourites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listsBox}>
                            <Emoji name='thumbsup' style={styles.emoji} />
                            <Text>Top Gainers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listsBox}>
                            <Emoji name='thumbsdown' style={styles.emoji} />
                            <Text>Top Losers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listsBox}>
                            <Emoji name='moneybag' style={styles.emoji} />
                            <Text>Market Cap</Text>
                        </TouchableOpacity>
                </ScrollView>

                <View style={styles.heading}>
                    <Text style={styles.headingText}>Featured</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} scrollEventThrottle={16} style={{ height: 220, marginBottom:15 }}>
                    <View>
                        <Image source={require('../../assets/placeholder/featured.png')} style={styles.featuredBanner}/>
                    </View>
                </ScrollView>

                <View style={styles.heading}>
                    <Text style={styles.headingText}>Trending Tokens</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See All</Text>
                    </TouchableOpacity>
                </View>
                    <ScrollView horizontal={true} scrollEventThrottle={16} style={{ height: 140 }}>
                        <View style={styles.trendingTokenBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                <Text style={{ fontSize: 15 }}>ETH</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, color: '#64C93B' }}>+2.75%</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>$23.5</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/png/ethlogo.png')} style={styles.trendingTokenImage} />
                                <Text>Ethereum</Text>
                            </View>
                        </View>
                        <View style={styles.trendingTokenBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                <Text style={{ fontSize: 15 }}>ETH</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, color: '#64C93B' }}>+2.75%</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>$23.5</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/png/ethlogo.png')} style={styles.trendingTokenImage} />
                                <Text>Ethereum</Text>
                            </View>
                        </View>
                        <View style={styles.trendingTokenBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                                <Text style={{ fontSize: 15 }}>ETH</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, color: '#64C93B' }}>+2.75%</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>$23.5</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/png/ethlogo.png')} style={styles.trendingTokenImage} />
                                <Text>Ethereum</Text>
                            </View>
                        </View>  
                    </ScrollView>

                    <View style={styles.heading}>
                        <Text style={styles.headingText}>Trending NFT Collections</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} scrollEventThrottle={16} style={{ height: 160 }}>
                        <View>
                            <Image source={require('../../assets/propimages/PPbackground.png')} style={{ width:250, height:130, borderRadius:10, marginRight:10 }}></Image>
                        </View>
                        <View>
                            <Image source={require('../../assets/propimages/PPbackground.png')} style={{ width:250, height:130, borderRadius:10, marginRight:10 }}></Image>
                        </View>
                        
                        
                        
                    </ScrollView>

                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5, marginTop:10, paddingLeft:10 }}>Trending NFT Collections</Text>
                    <ScrollView horizontal={true} scrollEventThrottle={16} style={{ height: 160 }}>
                        <View style={{ backgroundColor: 'white', width: 160, height: 160, borderRadius: 12, marginLeft: 10, padding: 5 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/propimages/PPbackground.png')} style={{ width: 150, height: 80, borderRadius: 10 }}></Image>
                                <Image source={require('../../assets/propimages/PPlogo.png')} style={{ width: 50, height: 50, borderRadius: 10, position: 'absolute', borderColor: 'black', borderWidth: 1, marginTop: 45 }}></Image>
                            </View>
                            <View style={{ alignItems: 'left', marginTop: 10, marginRight: 40 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pudgy Penguins</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>Volume: </Text>
                                    <Text style={{color:'green'}}>+91.2%</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 160, height: 160, borderRadius: 12, marginLeft: 10, padding: 5 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/propimages/PPbackground.png')} style={{ width: 150, height: 80, borderRadius: 10 }}></Image>
                                <Image source={require('../../assets/propimages/PPlogo.png')} style={{ width: 50, height: 50, borderRadius: 10, position: 'absolute', borderColor: 'black', borderWidth: 1, marginTop: 45 }}></Image>
                            </View>
                            <View style={{ alignItems: 'left', marginTop: 10, marginRight: 40 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pudgy Penguins</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>Volume: </Text>
                                    <Text style={{color:'green'}}>+91.2%</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 160, height: 160, borderRadius: 12, marginLeft: 10, padding: 5 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../assets/propimages/PPbackground.png')} style={{ width: 150, height: 80, borderRadius: 10 }}></Image>
                                <Image source={require('../../assets/propimages/PPlogo.png')} style={{ width: 50, height: 50, borderRadius: 10, position: 'absolute', borderColor: 'black', borderWidth: 1, marginTop: 45 }}></Image>
                            </View>
                            <View style={{ alignItems: 'left', marginTop: 10, marginRight: 40 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pudgy Penguins</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text>Volume: </Text>
                                    <Text style={{color:'green'}}>+91.2%</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DiscoverScreen;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
    },
    listsBox:{
        borderWidth: 1, 
        borderColor: '#E5E2E2', 
        height:40, 
        width:115, 
        borderRadius:5, 
        flexDirection:'row', 
        alignItems:'center', 
        marginRight:10
    },
    emoji:{
        width: 30, 
        height: 30, 
        textAlign:'center', 
        marginTop:10
    },
    featuredBanner:{
        width:385, 
        height: 220, 
        borderRadius:12, 
        padding: 10
    },
    trendingTokenBox:{
        backgroundColor: 'white', 
        width: 130, 
        height: 130, 
        borderRadius: 12, 
        padding: 10,
        marginRight:10,
        borderRadius: 15,
        shadowColor: '#171717',
        shadowOffset: {width: 3, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    trendingTokenImage:{
        width: 20, 
        height: 20, 
        marginBottom:5, 
        marginRight:5,
    },
    heading:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
    },
    seeAllText:{
        color:'#627EEA'
    },
    headingText:{
        fontSize:15,
        fontWeight:'bold',
    },
})