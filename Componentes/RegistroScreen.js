//Pantalla de registro del usuario

import React from 'react';
import {
  StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground, ScrollView,
  TouchableWithoutFeedback,
  Keyboard} from 'react-native';

export  const USERINFO =
  { name: 'Pedro', subname: 'Pérez', addres: 'C/ la pava, nº 5', email: 'pedro@hotmail.com', username: 'Pedro', password: '12345' };
var textoVer = 'Mostrar Contraseña';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', subname: '', addres: '', email: '', username: '', password: '', status :true};
   // this.state = { status: true }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../img/fondo.jpg')}
          style={styles.imagen}
      >
        <ScrollView style={styles.fondo} >
          <Text style={styles.welcome}>REGISTRO</Text>
          <TextInput
     
            />
            <TextInput
              style={styles.input}
              placeholder="   Nombre"
              onChangeText={(name => this.setState({ name }))}
              value={this.state.name}
            />
          <TextInput
            style={styles.input}
            placeholder="   Apellidos"
            onChangeText={(subname => this.setState({ subname }))}
            value={this.state.subname}
          />
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="   Dirección"
            onChangeText={(addres => this.setState({ addres }))}
            value={this.state.addres}
          />
          <TextInput
            style={styles.input}
            placeholder="   Email"
            onChangeText={(email => this.setState({ email }))}
            value={this.state.email}
          />
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
            value={this.state.password}            
            secureTextEntry={this.state.status}
          />
          <TouchableOpacity
            style={styles.btnEnter}
            onPress={this.clicked.bind(this)}
          >
            <Text style={styles.btnEnterText}>{textoVer}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnEnter}
            onPress={this._registro}
          
          >
            <Text style={styles.btnEnterText}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnEnter}
            onPress={this._back}
          >
            <Text style={styles.btnEnterText}>Volver</Text>
          </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
   </TouchableWithoutFeedback >
    );
  }

  _registro = async () => {
    if (this.state.username && this.state.password && this.state.name && this.state.subname && this.state.addres && this.state.email) {
      this.props.navigation.navigate('Login');
      alert('Se ha registrado con exito el usuario ' + this.state.username);
     

    } else {   
      alert( 'No puede quedar vacio ningún campo')
    }

  }
  clicked() {
    this.setState({
      status: !this.state.status 
    })
    if (this.state.status === true) {  
      textoVer = 'Ocultar Contraseña';
    } else {
      textoVer = 'Mostrar Contraseña';

    }
    return textoVer
  }
  _back = async () => {
    this.props.navigation.navigate('Login');
  }

}


const styles = StyleSheet.create({
  welcome: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20
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