//Modulo para la Cabecera de los avisos
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { withNavigation } from 'react-navigation';
import { Icon, Left, Right } from 'native-base';
class Recordatorio extends Component {
    render(){
        return (
            <View style={styles.content}>
                <Left>
                    <Icon onPress={this.props.openModal} name="md-add-circle" size={50} style={styles.containerButton} />
                </Left>
                <Text style={styles.textCenter}>AVISOS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#81C04d',
        flexDirection: 'row'
    },
    containerButton: {
        color: 'white',
        marginLeft: 25
    },
    textCenter: {
        flex: 1,
        flexDirection:'row',
        textAlign: 'left',
        fontWeight: 'bold'
    }
})
export default withNavigation(Recordatorio);