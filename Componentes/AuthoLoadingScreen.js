//Módulop que comprueba si el usuario que accede está logeado, si lo está lo dirige a la pantalla Home, si no lo dirige a la pantalla login

import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
});
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends React.Component {
    static KEY_LOGGED_IN_USER = 'logged'

    constructor(props) {
        super(props);
        this.navigateAsync = this.navigateAsync.bind(this);
        this.navigateAsync();
    }

    async navigateAsync() {
        AuthLoadingScreen.isLoggedIn().then(() => {
            this.props.navigation.navigate('Home');
        }, () => {
            this.props.navigation.navigate('Login');
        });
    }

    static isLoggedIn() {
        return new Promise(((resolve, reject) => {
            AsyncStorage.getItem(AuthLoadingScreen.KEY_LOGGED_IN_USER, (exception, userObj) => {
                if (userObj) {
                    resolve(userObj);
                }
                reject(userObj);
            });
        }));
    }

    render() {
        
        return (
            
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}