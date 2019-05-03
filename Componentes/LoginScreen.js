//Primera pantalla de Login

import React from 'react';
import {
  StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, ScrollView,  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
const USERINFO = 
  { username: 'Pedro', password: '12345' }

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
      this.state = { username: 'Pedro', password: '12345' };

  } 
  
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name='power-off' style={{ fontSize: 28, color: tintColor, flexDirection:'row' }}></Icon>
    )
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ImageBackground source={require('../img/fondo.jpg')} 
           style={styles.imagen}
      > 
           <ScrollView style={styles.fondo} >
            <Text style ={styles.welcome}>LOGIN</Text>
            <TextInput
              style={styles.input}
              placeholder="   Usuario"            
              onChangeText={(username => this.setState({ username }))}
             value={this.state.username}
            
          />
            <TextInput
              style={styles.input}
              placeholder="   Contraseña"
              onChangeText={(password => this.setState({ password }))}
              //onChangeText={(title) => this.props.onChangeTitle(title)} funcion para pasaar los parametros
              value={this.state.password}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.btnEnter}
              onPress={this._signin}
            >
              <Text style={styles.btnEnterText}>Aceder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnEnter}
              onPress={this._create}
            >
              <Text style={styles.btnEnterText}>Crear Cuenta</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={styles.btnEnter}
              onPress={this._logout}
            >
              <Text style={styles.btnEnterText}>Deslogearse</Text>
            </TouchableOpacity> 
          </ScrollView>
          <Icon name="apple" onPress={() => this.props.ddd.openDrawer()} size={30} color="#fff" style={{marginRight:100}} />
        </ImageBackground>
       
        </TouchableWithoutFeedback>
    );
  }
   _signin = async () => {
    if (USERINFO.username === this.state.username && USERINFO.password === this.state.password) {
      await AsyncStorage.setItem('logged', '1');    
      this.props.navigation.navigate('Home');
    } else {
      alert('Usuario o Contraseña Incorrectos')
    }

  }
  _create = async () => {
    this.props.navigation.navigate('Registro');
  } 
  _logout = async () => {
    await AsyncStorage.clear
    alert('Usuario deslogeado');
  }
} 


 const styles = StyleSheet.create({
    welcome: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40
    },
    input: {      
        height: 45,
        width: "95%",
        fontSize: 19,
        borderColor: "white",
        borderWidth: 2,
        color: 'white',
        margin: 15,
        borderRadius: 25
        
    },
    btnEnter: {
      justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#428AF8',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 20,
        marginRight: 15,
        padding: 10,
        borderRadius: 25        
    },

    btnEnterText: {
        color: '#ffffff',
        fontWeight: '200',
        fontSize: 19,
    },
    imagen: {
        flex: 1,
        resizeMode: 'stretch',
        padding: 0
     },
      fondo: {
         flex: 1
     }
});