//Este componente rellena la notificación y la devuelve en un listView
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ListView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { Card, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Items extends Component {
    render(){
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>         
                <View >
                    <ListView                 
                        enableEmptySections
                        dataSource={this.props.dataSource}
                        renderRow={({key, ...value}) => {
                            const activate = (
                                <TouchableOpacity onPress={() => this.props.handleNotifications(value, key)}>
                                    <Icon 
                                        name="bell-o"
                                        size={40}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            )
                            const desactivate = (
                                <TouchableOpacity onPress={() => this.props.handleRemoveNotifications(key)}>
                                    <Icon                                   
                                        name="bell-slash-o"
                                        size={40}
                                        color="#000"
                                    />
                                </TouchableOpacity>
                            )
                            const deleteRow = (
                                    <Icon 
                                        name="times"
                                        size={40}
                                        color="red"
                                    />
                            )
                            const comprueba = (
                                <Icon
                                    name="edit"
                                    size={40}
                                    color="blue"
                                />
                            )
                            return (                                                             
                                <Card>
                                    <CardItem style={styles.row}>                                      
                                        <Text>{value.title}</Text>                      
                                        <Text>{value.date}</Text>                                       
                                        <Text>{value.texto}</Text>
                                        <TouchableOpacity onPress={() => this.props.onRemoveItems(key)}>
                                            {deleteRow}
                                        </TouchableOpacity>
                                            {value.notification ? desactivate : activate}
                                        <TouchableOpacity onPress={() => this.props.comprueba(key, value)}>                                            
                                            {comprueba}
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>                                             
                            )
                        }}
                    />
                    </View>            
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 2,
        backgroundColor: '#BEA471',
        marginBottom: 2,
        marginHorizontal: 2,
        paddingHorizontal: 2,
        borderRadius: 4,
    },
    list: {
     
        marginTop: 5,
        flexDirection: 'column',
    }
})