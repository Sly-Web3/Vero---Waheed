import React, {Component} from 'react'
import {View,WebView, TouchableOpacity} from 'react-native';

const BackButton = ({navigation}) =>
<TouuchableOpacity onPress={() => {
    navigation.goBack()
}}>
    <Text>&lt; Back</Text>
</TouuchableOpacity>



export default class Browser extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Browser',
        headerLeft: <BackButton/>
    })
    render() {
        return (
            <View style={{ flex:1 }}>
                <WebView source={{ uri: this.props.navigation.state.params.url}} style={{Flex:1}}/>
            </View>
        )
    }
}