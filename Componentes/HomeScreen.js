
//Pantalla de acceso después del login

import React, { Component } from 'react';
import SpeechAndroid from 'react-native-android-voice';
import {
    Platform,
    Button,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Container, Header, Left, Right, Icon, Input , Footer} from 'native-base';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Tts from 'react-native-tts';
import Permisos from './Permisos';
import ContactsWrapper from 'react-native-contacts-wrapper';
import Navbar from './Navbar';
import Notificaciones from './Notificaciones';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = { texto: "", telefono: "" };    
    }
   
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name='home' style={{ fontSize: 30, color: tintColor, marginRight:0 }}></Icon>
        )
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header >
                    <Permisos />
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                    </Left>
                    <Right>
                        <Icon name="home" />
                        <Text style={{ alignContent: 'center', color: 'white', fontSize: 22, marginLeft: 15 }}>
                            HOME
                        </Text>
                    </Right>
                </Header>
                <View style={styles.fondo}>
                    <ImageBackground source={require('../img/fondo.jpg')}
                        style={styles.imagen}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="  introduce el texto "
                            onChangeText={(texto => this.setState({ texto }))}
                            value={this.state.texto}
                            multiline={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="  introduce el telefono "
                            onChangeText={(telefono => this.setState({ telefono }))}
                            value={this.state.telefono}                          
                            />
                     
                        <Text></Text>
                        <Button style={{ margin: 25, padding: 20 }} onPress={this._speek.bind(this)} title={"Hablar"} />
                        <Text></Text>
                        <Button style={{ margin: 25 }} onPress={this._call.bind(this)} title={"Llamar"} />
                        <Text></Text>
                        <Button style={{ margin: 25 }} onPress={this._buttonClick.bind(this)} title={"Hablar"} />
                        <TouchableOpacity onPress={this.onButtonPressed.bind(this)}>
                        <View style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>Seleccionar contacto</Text>
                        </View>            
                        </TouchableOpacity> 
                        <Text />                  
                            <Notificaciones />                      
                    </ImageBackground>
                    <Navbar/>
                </View>              
                </Container>
            </TouchableWithoutFeedback>
        );
    }
    _speek() {
        Tts.speak(this.state.texto); 
    }
    _call() {
        RNImmediatePhoneCall.immediatePhoneCall(this.state.telefono)
      
    }

    onButtonPressed() {
        ContactsWrapper.getContact()
            .then((contact) => {
                // Replace this code
                console.log(contact.phone);
                this.setState({telefono: contact.phone });

            })
            .catch((error) => {
                console.log("ERROR CODE: ", error.code);
                console.log("ERROR MESSAGE: ", error.message);
            });
    }
    async _buttonClick() {
        try {
            //More Locales will be available upon release.
            var spokenText = await SpeechAndroid.startSpeech("Di tu texto", SpeechAndroid.DEFAULT + 'xx'); 
            const dialogflowResponse = await this.getDialogFlow('bb' + spokenText);
            ToastAndroid.show('cc'+dialogflowResponse.result.fulfillment.speech, ToastAndroid.LONG);
            ToastAndroid.show('aa' + spokenText, ToastAndroid.LONG);       
         
            this.setState({ texto: startSpeech(prompt, ialogflowResponse.result.fulfillment.speech
) });
            this.setState({ texto: ialogflowResponse.result.fulfillment.speech});
            alert( ialogflowResponse.result.fulfillment.speech )
      

        } catch (error) {
            switch (error) {
                case SpeechAndroid.E_VOICE_CANCELLED:
                    ToastAndroid.show("Voice Recognizer cancelled", ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_NO_MATCH:
                    ToastAndroid.show("No match for what you said", ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_SERVER_ERROR:
                    ToastAndroid.show("Google Server Error", ToastAndroid.LONG);
                    break;
                /*And more errors that will be documented on Docs upon release*/
            }
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        color: 'red',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40
    },
    imagen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: 0
    },
    fondo: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
    },
    input: {
        height: 45,
        width: "95%",
        fontSize: 19,
        borderColor: "white",
        borderWidth: 2,
        color: 'white',
        margin: 5,
        borderRadius: 25

    },
    buttonWrapper: {
        marginTop: 20,
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