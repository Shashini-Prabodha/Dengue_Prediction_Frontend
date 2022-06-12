// noinspection JSUnresolvedFunction

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = () => {
    return (
        <View style={[styles.container, styles.bg1]}>


            <Animatable.View animation="bounceIn" duration={4000}>

                <Image
                    source={require('../assets/icons/logo.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
            </Animatable.View>

            <Animatable.View animation="bounceIn"  duration={4000}>

                {/*<Image*/}
                {/*    source={require('../assets/icons/logo.png')}*/}
                {/*    resizeMode="contain"*/}
                {/*    style={styles.logo}>*/}
                {/*</Image>*/}

            </Animatable.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg1: {
        backgroundColor: '#fdfdfd',
    },
    fontColor: {
        color: '#000000',
    },
    logo: {
        width: 350,
        height: 350,
        marginTop: 0,

    },
});

export default WelcomeScreen;
