//Módulo que te permite acceder a la lista de tus contactos
import React, { Component } from 'react';
import  ContactsWrapper  from 'react-native-contacts-wrapper';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export let contacto = '';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.onButtonPressed = this.onButtonPressed.bind(this);
        
    
    }

    onButtonPressed() {
        ContactsWrapper.getContact()
            .then((contact) => {
                // Replace this code
                console.log(contact.phone);
                contacto = props.contact.phone
            })
            .catch((error) => {
                console.log("ERROR CODE: ", error.code);
                console.log("ERROR MESSAGE: ", error.message);
            });
    }

    render() {
        return (
         
                <TouchableOpacity onPress={this.onButtonPressed}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>Open Contact</Text>
                    </View>
                </TouchableOpacity>
        

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999999',
    },
    buttonWrapper: {
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',
        backgroundColor: '#00CCFF',
        borderRadius: 4
    },
    buttonText: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        elevation: 1,
        color: '#FFFFFF'
    }
});