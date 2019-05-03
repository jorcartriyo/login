//Pantalla creada para que recargue la aplicación, da un error y así se puede recargar de nuevo BORRAR TAMBIÉN EN EL APPCONTAINER

import React from 'react';
import { View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name='apple' style={{ fontSize: 30, color: tintColor, marginRight: 0, flexDirection:'row' }}></Icon>
        )
    }
    render() {
        return (
            <View>
                Icon name="apple" onPress={() => this.props.ddd.openDrawer()} size={35} color="#fff" />
            </View >
        );
    }
}