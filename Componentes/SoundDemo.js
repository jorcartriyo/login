/* import React, { Component } from 'react';

import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { Sound } from 'react-native-audios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(240,240,240,1)',
    },
    button: {
        fontSize: 20,
        backgroundColor: 'rgba(220,220,220,1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(80,80,80,0.5)',
        overflow: 'hidden',
        padding: 7,
    },
    header: {
        textAlign: 'left',
    },
    feature: {
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgb(180,180,180)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(230,230,230)',
    },
});

const Button = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
);

const Header = ({ children, style }) => <Text style={[styles.header, style]}>{children}</Text>;

const Feature = ({ title, onPress, description, buttonLabel = 'PLAY', status }) => (
    <View style={styles.feature}>
        <Header style={{ flex: 1 }}>{title}</Header>
        {status ? <Text style={{ padding: 5 }}>{resultIcons[status] || ''}</Text> : null}
        <Button title={buttonLabel} onPress={onPress} />
    </View>
);

const resultIcons = {
    '': '',
    pending: '?',
    playing: '\u25B6',
    win: '\u2713',
    fail: '\u274C',
};

const audioTests = [
    {
        title: 'mp3 via require()',
        isRequire: true,
        url: require('./advertising.mp3'),
    },
    {
        title: 'mp3 via require()  looped',
        isRequire: true,
        url: require('./advertising.mp3'),
        onPrepared: (sound, component) => {
            sound.setNumberOfLoops(-1);
            component.setState({ loopingSound: sound });
        },
    },
    {
        title: 'mp3 via require()  looped  stop',
        isRequire: true,
        buttonLabel: 'STOP',
    },
    {
        title: 'mp3 remote download',
        url: 'http://occll6tdq.bkt.clouddn.com/test.amr',
    },
    {
        title: 'mp3 remote - file doesn\'t exist',
        url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/file-not-here.mp3',
    },
    {
        title: 'aac remote download',
        url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
    },
    {
        title: 'wav remote download',
        url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    }
];

function setTestState(testInfo, component, status) {
    component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
}


function playSound(testInfo, component) {
    setTestState(testInfo, component, 'pending');

    const callback = (error, sound) => {
        if (error) {
            Alert.alert('error', error.message);
            setTestState(testInfo, component, 'fail');
            return;
        }
        setTestState(testInfo, component, 'playing');

        testInfo.onPrepared && testInfo.onPrepared(sound, component);
        sound.play(() => {

            setTestState(testInfo, component, 'win');

            sound.release();
        });
    };


    if (testInfo.isRequire) {
        const sound = new Sound(testInfo.url, error => callback(error, sound));
    } else {
        const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
    }
}

class SoundDemo extends Component {
    static navigationOptions = {
        title: 'Sound Demo'
    }

    constructor(props) {
        super(props);

        Sound.setCategory('Playback', true);


        this.stopSoundLooped = () => {
            if (!this.state.loopingSound) {
                return;
            }

            this.state.loopingSound.stop().release();
            this.setState({ loopingSound: null, tests: { ...this.state.tests, ['mp3 in bundle (looped)']: 'win' } });
        };

        this.state = {
            loopingSound: undefined,
            tests: {},
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                    {audioTests.map(testInfo => {
                        return (
                            <Feature
                                status={this.state.tests[testInfo.title]}
                                key={testInfo.title}
                                title={testInfo.title}
                                buttonLabel={testInfo.buttonLabel}
                                onPress={() => {
                                    return testInfo.buttonLabel === 'STOP' ? this.stopSoundLooped() : playSound(testInfo, this);
                                }}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default SoundDemo;  */