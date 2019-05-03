//Ventana emergente que aparece para crear y rellenar la notificación
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput, 
    TouchableWithoutFeedback,
    TouchableHighlight,Keyboard
} from 'react-native'
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Input extends Component {
    render(){
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Modal style={styles.modalTop} isVisible={this.props.isVisible}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                >
                    <View style={styles.modalContent}>
                        <TouchableHighlight onPress={this.props.onCloseModal}>
                            <Icon 
                                name="times"
                                size={20}
                                color="black"
                            />
                        </TouchableHighlight>
                        <TextInput 
                            value={this.props.title}
                            placeholder="Titulo"
                            style={styles.input}
                            onChangeText={(title) => this.props.onChangeTitle(title)}
                        />
                        <DatePicker 
                            date={this.props.date}
                            mode="datetime"
                            placeholder="Fecha"
                            format="DD-MM-YYYY HH:mm"
                                //format="YYYY-MM-DD HH:mm"
                            minDate="01-01-2017"
                            maxDate="01-01-2050"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => this.props.onChangeDate(date)}
                        />
                        <Textarea
                            defaultValue={this.props.texto}
                            maxLength={120}
                            containerStyle={styles.textareaContainer}
                            placeholder="Texto"
                            onChangeText={(texto) => this.props.onChangeTexto(texto)}
                            placeholderTextColor={'#c7c7c7'}
                            underlineColorAndroid={'transparent'}
                        />
                        <TouchableHighlight
                            style={styles.button}
                            onPress={this.props.onHandleItems}
                        >
                            <Text style={styles.buttonText}>Crear</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    modalTop: {
        justifyContent: 'flex-start',
        marginTop: 50
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 5
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    input: {
        marginBottom: 5,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3
    },
    button:{
        backgroundColor: 'skyblue',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5
    },
    buttonText: {
        textAlign: 'center'
    }
})