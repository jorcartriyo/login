//Pantalla en la que convergen todos los mÃ³dulos de la notificaciÃ³n y

import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ListView,
    ScrollView,
    Alert
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Input from './Input'
import Items from './Items'
import PushNotification from 'react-native-push-notification'
import moment from 'moment'
import RecordatorioHeader from './RecordatorioHeader';




PushNotification.configure({
    onRegister: function (token) {
        console.log('Token:', token)
        alert(21)
    },
    onNotification: function (notification) {
        console.log('Notification', notification)
        alert(22)
    },
    permissions: { alert: true, badge: true, sound: true },
    popInitialNotification: true,
    requestPermissions: true,


})

export default class Index extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            items: [],
            title: '',
            date: '',
            isVisible: false,
            texto: '',
            fechaAct: ''
        }
        this.handleToggleNotifications = this.handleToggleNotifications.bind(this)
        this.handleRemoveNotifications = this.handleRemoveNotifications.bind(this)
        this.handleNotifications = this.handleNotifications.bind(this)
        this.handleModalShow = this.handleModalShow.bind(this)
        this.handleModalHide = this.handleModalHide.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleAddItems = this.handleAddItems.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeTexto = this.onChangeTexto.bind(this)
        this.comprueba = this.comprueba.bind(this)

    }

    componentWillMount() {

        AsyncStorage.getItem('items').then((json) => {
            try {
                const items = JSON.parse(json)
                this.handleState(items, items)
            } catch (err) {
                console.log(err)
                alert(1)
            }
        })
    }
    //al eliminar un item
    handleToggleNotifications(key, notification) {
        const newItems = this.state.items.map((item) => {
            if (item.key !== key) return item
            return {
                ...item,
                notification

            }
            
        })
        alert(2)
        this.handleState(newItems, newItems)
    }
    //Elimina notificacion
    handleRemoveNotifications(key) {
        PushNotification.cancelLocalNotifications({ id: key })
        this.handleToggleNotifications(key, false)
        alert(3)
    }
    //Retorna la fecha actual para compararla con la del aviso
    fechaActual() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        fechaAct = (date + '-' + month + '-' + year + ' ' + hour + ':' + minute);
        return fechaAct

    }
    //Crea notificación
    handleNotifications(value, key) {
        PushNotification.localNotificationSchedule({
            userInfo: { id: key },
            message: value.title,
            date: moment(value.date, "DD-MM-YYYY HH:mm").toDate()
        })
        this.handleToggleNotifications(key, true)
        alert(4)
    }
    //Crea un objeto con la norificación para mostrarlo en la lista
    handleState(items, dataSource, obj = {}) {
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(dataSource),
            ...obj
        })
        AsyncStorage.setItem('items', JSON.stringify(items));
    }
    //Al agregar un item
    handleAddItems() {
        if (!this.state.title || !this.state.date || !this.state.texto)
            return alert('Campos vacios')
        if (!this.state.title || !this.state.date || !this.state.texto)
            return
        alert('Aviso creado con Exito')
        const newItems = [
            ... this.state.items,
            {
                key: Date.now(),
                title: this.state.title,
                date: this.state.date,
                notification: false,
                texto: this.state.texto
            }
        ]
        this.handleState(newItems, newItems, { title: '', date: '', texto: '' })
        this.handleModalHide();

    }
    //Eliminas un item
    handleRemoveItem(key) {
        const newItems = this.state.items.filter((item) => {
            return item.key !== key
        })
        Alert.alert(
            'Eliminar',
            '¿Quiere Eliminar este aviso?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.handleRemoveNotifications(key)
                        this.handleToggleNotifications(key, false)
                        this.handleState(newItems, newItems, newItems)
                    }
                },
            ],
            { cancelable: false },
        );

    }

    onChangeTitle(title) {
        this.setState({ title })
    }
    onChangeDate(date) {
        this.setState({ date })
    }
    onChangeTexto(texto) {
        this.setState({ texto })
    }
    handleModalShow() {
        this.setState({ isVisible: true })
    }
    handleModalHide() {
        this.setState({ isVisible: false })
    }
    comprueba(key, value) {
        const newItems = this.state.items.filter((item) => {
            return item.key !== key

        })
        Alert.alert(
            'Aviso',
            '¿Quiere comprobar el aviso?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.fechaActual();
                        var fecha1 = moment(fechaAct, "DD-MM-YYYY HH:mm").toString()
                        var fecha2 = moment(value.date, "DD-MM-YYYY HH:mm").toString()
                        if (fecha1 == fecha2) {
                            alert('Aviso' + key)
                        }
                        else if (fecha1 < fecha2) {
                            alert('Aun no ha llegado la hora del aviso' + key)
                        } else {
                            alert('Ya ha pasado la hora del aviso' + key)
                        }
                    }

                },
            ],
            { cancelable: false },
        );
   }

    render() {
        return (

            <View style={styles.container}>

                <RecordatorioHeader onPress={this.comprueba.bind}
                    openModal={this.handleModalShow}
                />
                <ScrollView>
                    <Input Style={styles.lista}
                        onChangeTitle={this.onChangeTitle}
                        onChangeDate={this.onChangeDate}
                        onHandleItems={this.handleAddItems}
                        onChangeTexto={this.onChangeTexto}
                        date={this.state.date}
                        title={this.state.title}
                        isVisible={this.state.isVisible}
                        texto={this.state.texto}
                        onCloseModal={this.handleModalHide} />

                    <Items
                        dataSource={this.state.dataSource}
                        onRemoveItems={this.handleRemoveItem}
                        handleRemoveNotifications={this.handleRemoveNotifications}
                        handleNotifications={this.handleNotifications}
                        comprueba={this.comprueba}
                    />
                </ScrollView>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F1ED'
    },
    lista: {
        flex: 4,
        flexDirection: 'row',
    }

})