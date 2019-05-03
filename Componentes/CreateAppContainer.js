// Componente que crea un contenedor para enviar las páginas

import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems, NavigationAction, NavigationActions} from 'react-navigation'
//import {BackHandler} from 'react-native';
import { Container, Text, Icon } from 'native-base'; 
import { StyleSheet,  View, SafeAreaView, Image, ScrollView,Dimensions, BackHandler} from 'react-native';
import RegistroScreen from './RegistroScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import AuthLoadingScreen from './AuthoLoadingScreen';
import PerfilScreen from './PerfilScreen';
import EditPerfil from './EditPerfil';
import ReloadScreen from './ReloadScreen';
import AudioDemo from './AudioDemo';
import SoundDemo from './SoundDemo';
const { width } = Dimensions.get('window')
const CustomDrawerComponet = (props) => (
    <SafeAreaView style = {{ flex: 1}}>
        <View style={{ height: 150, backgroundColor: '#06F9E8', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../icons/persons.png')} style={{ height: 80, width: 80, borderRadius: 60 }} />
        </View>
            <ScrollView>
                  <DrawerItems {...props}/>  
            </ScrollView>      
        </SafeAreaView>
)
const MyDrawerNavigator = createDrawerNavigator({
    Home: {       
        screen: HomeScreen
    },
    AuthLoading: {
        screen: AuthLoadingScreen,
        navigationOptions: {
            drawerLabel: () => null,
        }
    },
    Login: {
        screen: LoginScreen
    }, 
    Registro: {
        screen : RegistroScreen,
        navigationOptions: {
            drawerLabel: () => null        
        }
    },
     Perfil: {
        screen: PerfilScreen

    }
     ,
    EditPerfil: {
        screen: EditPerfil,
            navigationOptions: {
            drawerLabel: () => null        
        }

    },
    Recargar: {
        screen: ReloadScreen
    }

/*     , AudioDemo: {
        screen: AudioDemo
    },
    SoundDemo: {
        screen: SoundDemo
    } */
},
    {
        initialRouteName: 'AuthLoading',
        contentComponent: CustomDrawerComponet,
        drawerBackgroundColor: '#06F9E8',
        contentOptions:{
            activeTintColor: 'orange',
               labelStyle: {
                   fontSize: 15,
             },
        },
        drawerWidth: width,
        drawerType: 'slide',
    });

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component {
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);          
    }
/*     componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);          

    } */
    onBackPress = () => {
        return true 
    }
    render() {
        return (
            <Container>
                <MyApp >
                </MyApp >
            </Container>
        );
    }
}//End of App class

export default App;