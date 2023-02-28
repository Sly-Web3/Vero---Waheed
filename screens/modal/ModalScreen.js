import React from "react";
import { DrawerActions } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";

import BuyScreen from "./BuyScreen";
import EarnScreen from "./EarnScreen"
import ReceiveScreen from "./ReceiveScreen"
import SwapScreen from "./Swap/SwapScreen"


const Drawer = createDrawerNavigator();

export default function ModalScreen({navigation}) {
const [open, setOpen] = useState(false)

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={home} />
            <Drawer.Screen name="Buy" component={BuyScreen} />
            <Drawer.Screen name="Earn" component={EarnScreen} />
            <Drawer.Screen name="Receive" component={ReceiveScreen} />
            <Drawer.Screen name="Swap" component={SwapScreen} />
        </Drawer.Navigator>
    );
}


<View>
        <TouchableOpacity onPress={() => setOpen(true)} >
            <Image source={require ('../assets/png/logoblack.png')} style={{height:60, width:60, borderRadius:30}}/>
        </TouchableOpacity>

        <Modal visible={open}>
            <View style={{height:300, backgroundColor:'green', margin:15, marginTop: 100}}>
            <Button title='X' onPress={()=>setOpen(false)}/>

                <TouchableOpacity style={{ flexDirection:'row' }} onPress={() => navigation.navigate('Send')}>
                    <Image source={require('../assets/png/plus.png')} style={{width:50, height:50, marginRight:30, backgroundColor: 'red', width: 45, height: 45, borderRadius: 100,}}></Image>
                    <View>
                        <Text style={{fontSize:25, fontWeight:'bold'}}>Buy</Text>
                        <Text style={{color:'grey'}}>Buy Crypto with Bank Account / Card</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection:'row' }} onPress={() => navigation.navigate('Bridge')}>
                    <Image source={require('../assets/png/blockchain.png')} style={{width:50, height:50, marginRight:30, backgroundColor: 'red', width: 45, height: 45, borderRadius: 100,}}></Image>
                    <View>
                        <Text style={{fontSize:25, fontWeight:'bold'}}>Bridge</Text>
                        <Text style={{color:'grey'}}>Buy Crypto with Bank Account / Card</Text>
                    </View>
                </TouchableOpacity>

                
            </View>
        </Modal>

    </View>




