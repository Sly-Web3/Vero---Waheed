import { View, TouchableOpacity, Text, Image, styles } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';



import BottomScreen from './BottomScreen/BottomScreen';


//Screens
import DiscoverScreen from '../screens/home/DiscoverScreen';
import BrowserScreen from '../screens/home/Browser/BrowserScreen';
import CardScreen from '../screens/home/CardScreen';
import HomeScreen from '../screens/home/Home/HomeScreen';

import BuyScreen from '../screens/modal/BuyScreen';

const CustomHeaderButton = (props) => (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color="black" />
  );

  const AddScreenComponent = () => {
    return null;
  }
  
const Tab = createBottomTabNavigator();

function MainTabBar() {
    return (
        
            <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size, }) => {
                        let iconName;

                        if (route.name === 'Wallet') {
                            iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                        } else if (route.name === 'Discover') {
                            iconName = focused ? 'ios-search' : 'ios-search-outline';
                        } else if (route.name === 'Browser') {
                            iconName = focused ? 'ios-globe' : 'ios-globe-outline';
                        } else if (route.name === 'Card') {
                            iconName = focused ? 'ios-card' : 'ios-card-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    
                })}
            >
                <Tab.Screen name='Wallet' component={HomeScreen} options={{ headerShown: false }}/>
                <Tab.Screen name='Discover' component={DiscoverScreen} options={{ headerShown: false }} />
                <Tab.Screen name='Vero' component={AddScreenComponent} options={{tabBarButton: () => <BottomScreen/>}} />
                <Tab.Screen name='Browser' component={BrowserScreen} options={{ headerShown: false }} />
                <Tab.Screen name='Card' component={CardScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
    

    
    )
}


export default MainTabBar;